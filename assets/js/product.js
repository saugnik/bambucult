(() => {
  const { esc } = BC;
  const root = document.getElementById('pdp');
  const crumbs = document.getElementById('crumbs');
  const p = BC.product(new URLSearchParams(location.search).get('p'));

  if (!p) {
    root.innerHTML = `
      <div class="notfound">
        <h1>We couldn’t find that product.</h1>
        <p>It may have been renamed or taken out of the catalogue. Everything we currently supply is on the catalogue page.</p>
        <a class="btn" href="catalogue.html">Go to the catalogue <span class="arrow" aria-hidden="true">→</span></a>
      </div>`;
    return;
  }

  const cat = BC.category(p.cat);
  const shelfUrl = 'catalogue.html?c=' + encodeURIComponent(cat.id);
  const unit = p.unit || 'units';
  BC.setNav(cat.id);

  document.title = `${p.name} · BambooCult`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = `${p.name} (${p.code}). ${p.desc} Prices on request for bulk orders.`;

  crumbs.insertAdjacentHTML('beforeend',
    `<span aria-hidden="true">/</span><a href="${shelfUrl}">${esc(cat.name)}</a><span aria-hidden="true">/</span><span>${esc(p.code)}</span>`);

  const rows = [
    ['Code', esc(p.code)],
    ['Category', `<a href="${shelfUrl}">${esc(cat.name)}</a>`]
  ];
  if (p.types.length) rows.push(['Type', esc(p.types.join(', '))]);
  Object.entries(p.specs || {}).forEach(([k, v]) => rows.push([esc(k), esc(v)]));
  if (p.engrave) rows.push(['Branding', 'Laser engraving of your name or logo']);
  rows.push([`${esc(cat.name)} buyers`, esc(cat.buyers)]);
  rows.push(['Price', p.engrave ? 'On request. Depends on quantity and branding' : 'On request. Depends on quantity and specification']);

  root.innerHTML = `
    <div class="pdp">
      <div class="pdp__gallery">
        ${BC.media(p, { eager: true, className: 'media--main' })}
        <div class="thumbs" id="thumbs" hidden></div>
      </div>

      <div class="pdp__info">
        <p class="eyebrow">${esc(p.code)} · ${esc(cat.name)}</p>
        <h1>${esc(p.name)}</h1>
        <p class="pdp__desc">${esc(p.desc)}</p>

        <form class="pdp__form" id="add-form" novalidate>
          <label for="qty">Quantity you need, in ${esc(unit)} <span>(optional, you can change it later)</span></label>
          <div class="pdp__row">
            <input class="input" id="qty" name="qty" type="number" min="1" step="1" inputmode="numeric" placeholder="e.g. 500">
            <button class="btn" id="add-btn" type="submit">Add to enquiry list</button>
          </div>
          <p class="pdp__status" id="status" aria-live="polite"></p>
          <p class="pdp__note">Prices are shared with your quote. Minimum order quantities vary by item, and photos are for illustration.</p>
        </form>

        <a class="pdp__wa link-under" id="wa" target="_blank" rel="noopener">Ask about this on WhatsApp <span aria-hidden="true">→</span></a>

        <dl class="specs">
          ${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}
        </dl>
      </div>
    </div>`;

  /* Gallery: BC-xxx.jpg plus any extra views BC-xxx-2.jpg … BC-xxx-6.jpg */

  const mainBox = root.querySelector('.media--main');
  const thumbs = document.getElementById('thumbs');

  const showMain = n => {
    let img = mainBox.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      img.alt = p.name;
      img.setAttribute('data-soft', '');
      mainBox.appendChild(img);
    }
    img.classList.remove('is-loaded');
    img.src = BC.imgSrc(p, n);
  };

  const probe = n => new Promise(resolve => {
    const test = new Image();
    test.onload = () => resolve(n);
    test.onerror = () => resolve(0);
    test.src = BC.imgSrc(p, n);
  });

  Promise.all([1, 2, 3, 4, 5, 6].map(probe)).then(found => {
    const views = found.filter(Boolean);
    if (views.length && views[0] !== 1) showMain(views[0]);
    if (views.length < 2) return;
    thumbs.innerHTML = views.map((n, i) => `
      <button class="thumb" type="button" data-n="${n}" aria-label="Photo ${i + 1} of ${views.length}"${i === 0 ? ' aria-current="true"' : ''}>
        <img src="${esc(BC.imgSrc(p, n))}" alt="">
      </button>`).join('');
    thumbs.hidden = false;
  });

  thumbs.addEventListener('click', e => {
    const btn = e.target.closest('.thumb');
    if (!btn) return;
    thumbs.querySelectorAll('.thumb').forEach(t => t.removeAttribute('aria-current'));
    btn.setAttribute('aria-current', 'true');
    showMain(Number(btn.dataset.n));
  });

  /* Enquiry */

  const form = document.getElementById('add-form');
  const qty = document.getElementById('qty');
  const addBtn = document.getElementById('add-btn');
  const status = document.getElementById('status');
  const wa = document.getElementById('wa');

  const cleanQty = () => {
    const n = parseInt(qty.value, 10);
    return n > 0 ? String(n) : '';
  };

  const updateWa = () => {
    const q = cleanQty();
    wa.href = BC.waLink(`Hello ${BC.config.brand}, could you share a price for ${p.code} – ${p.name}?` +
      (q ? ` We need about ${q} ${unit}.` : ''));
  };

  const syncForm = () => {
    const saved = BC.list.get(p.id);
    addBtn.textContent = saved ? 'Update quantity' : 'Add to enquiry list';
    if (saved && saved.qty && document.activeElement !== qty) qty.value = saved.qty;
    status.innerHTML = saved
      ? `In your enquiry list${saved.qty ? ` (${esc(saved.qty)} ${esc(unit)})` : ''}. <a href="enquiry.html">View list</a> · <button class="text-btn" type="button" id="remove">Remove</button>`
      : '';
    updateWa();
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    const had = BC.list.has(p.id);
    const q = cleanQty();
    // Show what was actually saved, so "12.5" or "-3" does not look accepted.
    if (qty.value.trim() && qty.value.trim() !== q) qty.value = q;
    if (had) BC.list.setQty(p.id, q);
    else BC.list.add(p.id, q);
    BC.toast(had ? 'Quantity updated' : `Added ${p.code} to your enquiry list`, { href: 'enquiry.html', label: 'View list' });
  });

  status.addEventListener('click', e => {
    if (e.target.id !== 'remove') return;
    BC.list.remove(p.id);
    qty.value = '';
    BC.toast(`Removed ${p.code} from your list`);
  });

  qty.addEventListener('input', updateWa);
  document.addEventListener('bc:list', syncForm);
  syncForm();

  /* Related */

  const related = BC.products
    .filter(x => x.id !== p.id && BC.inCategory(x, p.cat))
    .sort((a, b) => {
      const sameA = a.types.some(t => p.types.includes(t)) ? 0 : 1;
      const sameB = b.types.some(t => p.types.includes(t)) ? 0 : 1;
      return sameA - sameB;
    })
    .slice(0, 4);

  if (related.length) {
    const relGrid = document.getElementById('related-grid');
    relGrid.innerHTML = related.map(x => BC.card(x)).join('');
    BC.settleImages(relGrid);
    document.getElementById('related-link').href = shelfUrl;
    document.getElementById('related').hidden = false;
  }
})();
