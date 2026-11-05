(() => {
  const { esc, config } = BC;
  const $ = id => document.getElementById(id);

  const listEl = $('list');
  const emptyEl = $('empty');
  const underEl = $('under');
  const summary = $('summary');
  const form = $('buyer');

  /* Buyer details are remembered in this browser so a returning buyer
     doesn't have to type them again. */
  const DETAILS_KEY = 'bamboocult:buyer';
  const fields = ['name', 'company', 'phone', 'city', 'email', 'notes'];

  try {
    const saved = JSON.parse(localStorage.getItem(DETAILS_KEY)) || {};
    fields.forEach(f => { if (saved[f]) form.elements[f].value = saved[f]; });
  } catch (e) { /* nothing saved */ }

  form.addEventListener('input', () => {
    const data = {};
    fields.forEach(f => { data[f] = form.elements[f].value; });
    try { localStorage.setItem(DETAILS_KEY, JSON.stringify(data)); } catch (err) { /* ignore */ }
  });

  /* List */

  function render() {
    const items = BC.list.all();
    emptyEl.hidden = items.length > 0;
    underEl.hidden = items.length === 0;
    listEl.hidden = items.length === 0;

    summary.textContent = items.length
      ? `${items.length} ${items.length === 1 ? 'product' : 'products'} in your list. Your details go at the bottom of the message.`
      : 'No products yet, but you can still send us a general enquiry.';

    // Keep focus and caret if the buyer is typing a quantity while the list refreshes.
    const active = document.activeElement;
    const activeId = active && active.dataset ? active.dataset.qty : null;

    listEl.innerHTML = items.map(item => {
      const p = BC.product(item.id);
      const cat = BC.category(p.cat);
      return `
        <li class="enq-item">
          <a href="${BC.productUrl(p)}" class="media-link" tabindex="-1" aria-hidden="true">${BC.media(p, { decorative: true })}</a>
          <div class="enq-item__info">
            <h3 class="enq-item__name"><a href="${BC.productUrl(p)}">${esc(p.name)}</a></h3>
            <p class="enq-item__meta">${esc(p.code)} · ${esc(cat.name)}</p>
          </div>
          <div class="enq-item__qty">
            <label for="qty-${esc(p.id)}">Quantity, ${esc(p.unit || 'units')}</label>
            <input class="input" id="qty-${esc(p.id)}" data-qty="${esc(p.id)}" type="number" min="1" step="1" inputmode="numeric" placeholder="e.g. 500" value="${esc(item.qty)}">
          </div>
          <button class="enq-item__remove" type="button" data-remove="${esc(p.id)}" aria-label="Remove ${esc(p.name)}">×</button>
        </li>`;
    }).join('');

    BC.settleImages(listEl);

    if (activeId) {
      const again = listEl.querySelector(`[data-qty="${CSS.escape(activeId)}"]`);
      if (again) { again.focus(); const v = again.value; again.value = ''; again.value = v; }
    }
  }

  listEl.addEventListener('input', e => {
    const input = e.target.closest('[data-qty]');
    if (!input) return;
    const n = parseInt(input.value, 10);
    BC.list.setQty(input.dataset.qty, n > 0 ? String(n) : '');
  });

  listEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-remove]');
    if (!btn) return;
    const p = BC.product(btn.dataset.remove);
    BC.list.remove(btn.dataset.remove);
    BC.toast(`Removed ${p ? p.code : 'item'} from your list`);
  });

  $('clear').addEventListener('click', () => {
    if (!window.confirm('Remove every product from your enquiry list?')) return;
    BC.list.clear();
  });

  // Typing a quantity updates storage, which fires bc:list; only re-render
  // when the set of products changes, not on every keystroke.
  let lastIds = '';
  document.addEventListener('bc:list', () => {
    const ids = BC.list.all().map(i => i.id).join(',');
    if (ids !== lastIds) { lastIds = ids; render(); }
  });

  /* Message */

  function details() {
    const v = name => form.elements[name].value.trim();
    return { name: v('name'), company: v('company'), phone: v('phone'), city: v('city'), email: v('email'), notes: v('notes') };
  }

  function message(d) {
    const items = BC.list.all();
    const lines = [`Hello ${config.brand},`, ''];

    if (items.length) {
      lines.push('I’d like a quote for the following:', '');
      items.forEach((item, i) => {
        const p = BC.product(item.id);
        lines.push(`${i + 1}. ${p.code} – ${p.name}`);
        lines.push(`   Quantity: ${item.qty ? `${item.qty} ${p.unit || 'units'}` : 'to be confirmed'}`);
      });
    } else {
      lines.push('I have a general enquiry about bulk orders.');
    }

    if (d.notes) lines.push('', 'Notes:', d.notes);

    lines.push('', '—');
    lines.push(`Name: ${d.name}`);
    if (d.company) lines.push(`Company: ${d.company}`);
    if (d.city) lines.push(`City: ${d.city}`);
    lines.push(`Phone: ${d.phone}`);
    if (d.email) lines.push(`Email: ${d.email}`);

    return lines.join('\n');
  }

  function validate() {
    return BC.checkRequired(form, [
      { name: 'name', message: 'Please add your name' },
      { name: 'phone', message: 'Please add a phone number so we can reply' }
    ]);
  }

  // Older browsers do not set event.submitter, so remember the button that was pressed.
  form.querySelectorAll('[data-send]').forEach(btn => {
    btn.addEventListener('click', () => { form.dataset.via = btn.dataset.send; });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;
    const d = details();
    const text = message(d);
    const via = (e.submitter && e.submitter.dataset.send) || form.dataset.via || 'whatsapp';

    if (via === 'email') {
      const subject = `Quote request${d.company ? ' – ' + d.company : ''}`;
      window.location.href = BC.mailLink(subject, text);
    } else {
      window.open(BC.waLink(text), '_blank', 'noopener');
    }
  });

  $('copy').addEventListener('click', () => {
    const text = message(details());
    const done = () => BC.toast('Copied. Paste it into any message or email');
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  });

  function fallbackCopy(text, done) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); done(); } catch (e) { BC.toast('Copy didn’t work in this browser'); }
    area.remove();
  }

  lastIds = BC.list.all().map(i => i.id).join(',');
  render();
})();
