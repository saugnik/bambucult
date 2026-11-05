/* BambooCult — shared helpers used on every page */

(() => {
  'use strict';

  const config = window.BC_CONFIG || {};
  // Products marked hidden have no photo yet, so they stay off the site. Remove the
  // hidden flag in products.js once a photo is added and the product comes back.
  const allProducts = window.BC_PRODUCTS || [];
  const products = allProducts.filter(p => !p.hidden);
  const categories = window.BC_CATEGORIES || [];

  products.forEach(p => { p.types = [].concat(p.type || []); });

  const productById = new Map(products.map(p => [p.id, p]));
  const categoryById = new Map(categories.map(c => [c.id, c]));

  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));

  const inCategory = (p, catId) => p.cat === catId || (p.also || []).includes(catId);

  // Line drawings used while a product has no photo yet (64 × 64 grid).
  const GLYPHS = {
    oral: '<svg viewBox="0 0 64 64"><g transform="rotate(28 32 32)"><path d="M29.5 60c-1-12-1-22 .6-31h3.8c1.6 9 1.6 19 .6 31z"/><rect x="29" y="5" width="6" height="24" rx="3"/><path d="M35 9h6M35 12.5h6M35 16h6M35 19.5h6M35 23h6"/></g></svg>',
    craft: '<svg viewBox="0 0 64 64"><path d="M20 26c0-11 24-11 24 0"/><path d="M11 26h42l-4.5 28h-33z"/><path d="M13 33h38M14.2 40h35.6M15.4 47h33.2M24 26l1.8 28M32 26v28M40 26l-1.8 28"/></svg>',
    gifts: '<svg viewBox="0 0 64 64"><rect x="12" y="27" width="40" height="27" rx="1.5"/><rect x="9" y="19" width="46" height="8" rx="1.5"/><path d="M32 19v35"/><path d="M32 19c-4-8-14-10-14-4.5 0 3 6 4.5 14 4.5zM32 19c4-8 14-10 14-4.5 0 3-6 4.5-14 4.5z"/></svg>',
    construction: '<svg viewBox="0 0 64 64"><circle cx="20" cy="45" r="6.5"/><circle cx="33" cy="45" r="6.5"/><circle cx="46" cy="45" r="6.5"/><circle cx="26.5" cy="33.7" r="6.5"/><circle cx="39.5" cy="33.7" r="6.5"/><circle cx="33" cy="22.4" r="6.5"/><circle cx="20" cy="45" r="2.3"/><circle cx="33" cy="45" r="2.3"/><circle cx="46" cy="45" r="2.3"/><circle cx="26.5" cy="33.7" r="2.3"/><circle cx="39.5" cy="33.7" r="2.3"/><circle cx="33" cy="22.4" r="2.3"/><path d="M9 52.5h46"/></svg>',
    care: '<svg viewBox="0 0 64 64"><rect x="16" y="8" width="32" height="10" rx="2"/><path d="M20 13h24"/><path d="M29.5 18h5v37a2.5 2.5 0 0 1-5 0z"/><path d="M29.5 29h5M29.5 35h5M29.5 41h5"/></svg>'
  };

  const imgSrc = (p, n) => {
    if (p.img && (!n || n === 1)) return p.img;
    return 'images/products/' + p.code + (n > 1 ? '-' + n : '') + '.jpg';
  };

  const media = (p, opts = {}) => {
    const src = esc(imgSrc(p, opts.n));
    const alt = opts.decorative ? '' : esc(p.alt || p.name);
    // Off-screen photos wait in data-src until the observer below reaches them.
    const srcAttr = opts.eager ? `src="${src}"` : `data-src="${src}"`;
    return `
    <div class="media${opts.className ? ' ' + opts.className : ''}">
      <div class="ph" aria-hidden="true">${GLYPHS[p.cat] || ''}<span class="ph__fig">Fig. ${esc(p.code.replace(/^\D+/, ''))}</span></div>
      <img ${srcAttr} alt="${alt}" decoding="async" data-soft>
    </div>`;
  };

  // Photos fade in once they arrive; a missing photo leaves the drawing showing.
  const showPhoto = img => {
    img.classList.add('is-loaded');
    // Hide the drawing, so it does not show through while the photo fades in.
    img.closest('.media')?.classList.add('has-photo');
  };
  document.addEventListener('load', e => {
    if (e.target.matches && e.target.matches('img[data-soft]')) showPhoto(e.target);
  }, true);
  document.addEventListener('error', e => {
    if (e.target.matches && e.target.matches('img[data-soft]')) e.target.remove();
  }, true);

  /* Each photo loads as it comes near the screen. We check positions ourselves on
     scroll rather than relying on loading="lazy" or IntersectionObserver, because
     some embedded browsers never fire either. */
  const waiting = new Set();
  let scheduled = false;

  const loadNearby = () => {
    scheduled = false;
    const limit = window.innerHeight + 400;
    waiting.forEach(img => {
      if (!img.isConnected) { waiting.delete(img); return; }
      const box = img.getBoundingClientRect();
      if (box.top > limit || box.bottom < -400) return;
      waiting.delete(img);
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
    if (!waiting.size) {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  };

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    setTimeout(loadNearby, 60);
  }

  const settleImages = (root = document) => {
    root.querySelectorAll('img[data-soft]').forEach(img => {
      if (img.dataset.src) { waiting.add(img); return; }
      if (!img.complete) return;
      if (img.naturalWidth > 0) showPhoto(img);
      else img.remove();
    });
    if (waiting.size) {
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);
      schedule();
    }
  };

  /* Enquiry list (kept in this browser only) */

  const KEY = 'bamboocult:enquiry';
  let items = null;

  const load = () => {
    if (items) return items;
    try { items = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { items = []; }
    if (!Array.isArray(items)) items = [];
    items = items.filter(i => i && productById.has(i.id));
    return items;
  };

  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* private mode: list lasts for this page only */ }
    refresh();
  };

  const list = {
    all: () => load().slice(),
    size: () => load().length,
    has: id => load().some(i => i.id === id),
    get: id => load().find(i => i.id === id),
    add(id, qty) {
      const found = this.get(id);
      if (found) { if (qty) found.qty = qty; }
      else load().push({ id, qty: qty || '' });
      save();
    },
    setQty(id, qty) {
      const found = this.get(id);
      if (found) { found.qty = qty; save(); }
    },
    remove(id) { items = load().filter(i => i.id !== id); save(); },
    clear() { items = []; save(); }
  };

  window.addEventListener('storage', e => {
    if (e.key === KEY) { items = null; refresh(); }
  });

  function refresh() {
    const n = list.size();
    document.querySelectorAll('[data-count]').forEach(el => {
      el.textContent = n;
      el.classList.toggle('is-empty', n === 0);
    });
    document.querySelectorAll('[data-add]').forEach(btn => {
      const on = list.has(btn.dataset.add);
      btn.setAttribute('aria-pressed', on);
      btn.textContent = on ? 'In your list' : 'Add to enquiry';
    });
    document.dispatchEvent(new CustomEvent('bc:list'));
  }

  /* Cards */

  const productUrl = p => 'product.html?p=' + encodeURIComponent(p.id);

  const card = (p, opts = {}) => {
    const cat = categoryById.get(p.cat);
    const label = opts.showType && p.types.length ? p.types.join(' + ') : (cat ? cat.name : '');
    const on = list.has(p.id);
    return `
      <article class="card">
        <a class="card__media" href="${productUrl(p)}" tabindex="-1" aria-hidden="true">${media(p, { decorative: true })}</a>
        <div class="card__body">
          <p class="card__meta"><span>${esc(p.code)}</span><span>${esc(label)}</span></p>
          <h3 class="card__name"><a href="${productUrl(p)}">${esc(p.name)}</a></h3>
          ${p.engrave ? '<p class="card__note">Engraving available</p>' : ''}
          <div class="card__foot">
            <button class="card__add" type="button" data-add="${esc(p.id)}" aria-pressed="${on}">${on ? 'In your list' : 'Add to enquiry'}</button>
          </div>
        </div>
      </article>`;
  };

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (!btn) return;
    const p = productById.get(btn.dataset.add);
    if (!p) return;
    if (list.has(p.id)) {
      list.remove(p.id);
      toast(`Removed ${p.code} from your list`);
    } else {
      list.add(p.id);
      toast(`Added ${p.code} to your enquiry list`, { href: 'enquiry.html', label: 'View list' });
    }
  });

  /* Form validation
     Required fields get a red border, an inline message and aria-invalid, so the
     problem is visible and is read out by screen readers. */

  function setFieldError(input, message) {
    const field = input.closest('.field');
    if (!field) return;
    field.classList.toggle('has-error', !!message);
    let note = field.querySelector('.field__error');
    if (!message) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      if (note) note.remove();
      return;
    }
    if (!note) {
      note = document.createElement('p');
      note.className = 'field__error';
      note.id = (input.id || 'field') + '-error';
      field.appendChild(note);
    }
    note.textContent = message;
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', note.id);
  }

  function checkRequired(form, fields) {
    let first = null;
    fields.forEach(({ name, message }) => {
      const input = form.elements[name];
      const empty = !input.value.trim();
      setFieldError(input, empty ? message : '');
      if (empty && !first) first = input;
    });
    if (first) first.focus();
    return !first;
  }

  // Clear a field's error as soon as the person types in it.
  document.addEventListener('input', e => {
    const input = e.target;
    if (input.matches && input.matches('[aria-invalid]') && input.value.trim()) setFieldError(input, '');
  });

  /* Toast */

  let toastTimer;
  function toast(message, action) {
    const el = document.querySelector('.toast');
    if (!el) return;
    el.innerHTML = `<span>${esc(message)}</span>` +
      (action ? `<a href="${esc(action.href)}">${esc(action.label)}</a>` : '');
    el.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-on'), 3400);
  }

  /* Contact links */

  const digits = s => String(s || '').replace(/\D/g, '');
  const waLink = text => 'https://wa.me/' + digits(config.whatsapp) + (text ? '?text=' + encodeURIComponent(text) : '');
  const mailLink = (subject, body) => 'mailto:' + (config.email || '') +
    '?subject=' + encodeURIComponent(subject || '') + (body ? '&body=' + encodeURIComponent(body) : '');

  function fillConfig() {
    document.querySelectorAll('[data-config]').forEach(el => {
      const key = el.dataset.config;
      const isLink = el.tagName === 'A';
      if (key === 'phone') {
        el.textContent = config.phone || '';
        if (isLink) el.href = 'tel:' + String(config.phone || '').replace(/[^\d+]/g, '');
      } else if (key === 'email') {
        el.textContent = config.email || '';
        if (isLink) el.href = 'mailto:' + (config.email || '');
      } else if (key === 'whatsapp') {
        if (isLink) el.href = waLink(`Hello ${config.brand || ''}, I have a question about a bulk order.`);
      } else if (key === 'email-link') {
        if (isLink) el.href = mailLink(`Enquiry for ${config.brand || ''}`);
      } else if (key === 'address') {
        el.innerHTML = (config.address || []).map(esc).join('<br>');
      } else if (key === 'hours') {
        el.textContent = config.hours || '';
      }
    });
    document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  }

  /* Category index (home and about pages) */

  function renderIndex(el) {
    if (!el) return;
    el.innerHTML = categories.map((c, i) => {
      const cover = c.cover && products.find(p => p.code === c.cover);
      const thumb = cover ? media(cover, { decorative: true }) : `<span class="index__glyph">${GLYPHS[c.id] || ''}</span>`;
      return `
        <li>
          <a href="catalogue.html?c=${encodeURIComponent(c.id)}">
            <span class="index__no">${String(i + 1).padStart(2, '0')}</span>
            <span class="index__thumb" aria-hidden="true">${thumb}</span>
            <span class="index__name">${esc(c.name)}</span>
            <span class="index__blurb">${esc(c.blurb)}</span>
            <span class="index__count">${products.filter(p => inCategory(p, c.id)).length} items</span>
            <span class="index__arrow" aria-hidden="true">→</span>
          </a>
        </li>`;
    }).join('');
    settleImages(el);
  }

  /* Header */

  const setNav = id => {
    document.querySelectorAll('.menu__link[aria-current]').forEach(a => a.removeAttribute('aria-current'));
    if (id) document.querySelectorAll(`.menu__link[data-nav="${id}"]`).forEach(a => a.setAttribute('aria-current', 'page'));
  };

  function initHeader() {
    const page = document.body.dataset.page;
    document.querySelectorAll(`[data-nav="${page}"]`).forEach(a => a.setAttribute('aria-current', 'page'));

    // Escape closes an open dropdown by moving focus back to its top-level link.
    document.querySelector('.menu')?.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      const item = e.target.closest('.has-sub');
      if (!item) return;
      item.classList.add('is-closed');
      const link = item.querySelector('.menu__link');
      link.setAttribute('aria-expanded', 'false');
      link.focus();
    });
    document.querySelectorAll('.has-sub').forEach(item => {
      const link = item.querySelector('.menu__link');
      // Announce whether the submenu is showing. It opens on hover and on focus,
      // so we mirror both into aria-expanded.
      const announce = open => link.setAttribute('aria-expanded', open && !item.classList.contains('is-closed'));
      link.setAttribute('aria-expanded', 'false');
      item.addEventListener('mouseenter', () => announce(true));
      item.addEventListener('focusin', () => announce(true));
      item.addEventListener('mouseleave', () => { item.classList.remove('is-closed'); announce(false); });
      item.addEventListener('focusout', e => {
        if (item.contains(e.relatedTarget)) return;
        item.classList.remove('is-closed');
        announce(false);
      });
    });

    const btn = document.querySelector('.menu-btn');
    const panel = document.getElementById('mobile-nav');
    if (!btn || !panel) return;
    const setOpen = open => {
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? 'Close' : 'Menu';
      panel.hidden = !open;
    };
    btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
    panel.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    // Escape closes the menu and puts focus back on the button, so keyboard users
    // do not land at the top of the document.
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape' || panel.hidden) return;
      const inMenu = panel.contains(document.activeElement) || document.activeElement === btn;
      setOpen(false);
      if (inMenu) btn.focus();
    });
  }

  window.BC = {
    config,
    products,
    categories,
    product: id => productById.get(id),
    category: id => categoryById.get(id),
    inCategory,
    countIn: catId => products.filter(p => inCategory(p, catId)).length,
    glyph: catId => GLYPHS[catId] || '',
    renderIndex,
    setNav,
    esc,
    imgSrc,
    media,
    card,
    productUrl,
    list,
    toast,
    checkRequired,
    setFieldError,
    waLink,
    mailLink,
    settleImages
  };

  fillConfig();
  initHeader();
  settleImages();
  refresh();
})();
