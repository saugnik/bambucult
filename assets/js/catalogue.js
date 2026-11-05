(() => {
  const { products, categories, esc } = BC;
  const $ = id => document.getElementById(id);

  const els = {
    title: $('title'), blurb: $('blurb'), crumb: $('crumb'), side: $('cat-list'),
    types: $('types'), count: $('count'), grid: $('grid'), empty: $('empty'),
    q: $('q'), sort: $('sort'), engrave: $('engrave'), print: $('print'), reset: $('reset')
  };

  const defaultTitle = els.title.textContent;
  const defaultBlurb = els.blurb.textContent;

  const params = new URLSearchParams(location.search);
  const state = {
    cat: BC.category(params.get('c')) ? params.get('c') : '',
    type: params.get('t') || '',
    q: params.get('q') || '',
    engrave: params.get('engrave') === '1',
    sort: params.get('sort') === 'az' ? 'az' : 'code'
  };

  // Fold accents, dashes and curly apostrophes so "kids'" finds "Kids’".
  const smoothScroll = () => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth');

  const normalise = s => s.toLowerCase().normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’‘']/g, '')
    .replace(/[–—-]/g, ' ');

  const haystack = new Map(products.map(p => {
    const cat = BC.category(p.cat);
    return [p.id, normalise([p.name, p.code, p.code.replace('-', ''), cat ? cat.name : '', p.types.join(' '), p.desc].join(' '))];
  }));

  const matches = (p, words) => words.every(w => haystack.get(p.id).includes(w));

  function inShelf() {
    return state.cat ? products.filter(p => BC.inCategory(p, state.cat)) : products;
  }

  function apply(base, words) {
    let list = base;
    if (state.type) list = list.filter(p => p.types.includes(state.type));
    if (state.engrave) list = list.filter(p => p.engrave);
    if (words.length) list = list.filter(p => matches(p, words));
    if (state.sort === 'az') list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }

  // A search that finds nothing on this shelf looks through the whole catalogue
  // instead, so a product code typed on the wrong shelf still finds its product.
  function filtered() {
    const words = normalise(state.q).split(/\s+/).filter(Boolean);
    const list = apply(inShelf(), words);
    if (list.length || !words.length || !state.cat) return { list, widened: false };
    const all = apply(products, words);
    return all.length ? { list: all, widened: true } : { list, widened: false };
  }

  function renderSide() {
    const item = (id, name, n) => `
      <li><a href="catalogue.html${id ? '?c=' + id : ''}" data-cat="${id}"${state.cat === id ? ' aria-current="page"' : ''}>
        <span>${esc(name)}</span><span>${n}</span>
      </a></li>`;
    els.side.innerHTML = item('', 'All products', products.length) +
      categories.map(c => item(c.id, c.name, BC.countIn(c.id))).join('');
  }

  function renderTypes() {
    const cat = BC.category(state.cat);
    if (!cat || !cat.types) { els.types.innerHTML = ''; return; }
    const shelf = inShelf();
    const chip = (value, label, n) =>
      `<button class="chip" type="button" data-type="${esc(value)}" aria-pressed="${state.type === value}">${esc(label)}<small>${n}</small></button>`;
    els.types.innerHTML = chip('', 'All', shelf.length) +
      cat.types.map(t => chip(t, t, shelf.filter(p => p.types.includes(t)).length)).join('');
  }

  function syncUrl() {
    const next = new URLSearchParams();
    if (state.cat) next.set('c', state.cat);
    if (state.type) next.set('t', state.type);
    if (state.q) next.set('q', state.q);
    if (state.engrave) next.set('engrave', '1');
    if (state.sort !== 'code') next.set('sort', state.sort);
    const qs = next.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
  }

  function render() {
    const cat = BC.category(state.cat);
    if (cat && cat.types && !cat.types.includes(state.type)) state.type = '';
    if (!cat) state.type = '';

    BC.setNav(cat ? cat.id : '');
    els.title.textContent = cat ? cat.name : defaultTitle;
    els.blurb.textContent = cat ? cat.blurb : defaultBlurb;
    els.crumb.textContent = cat ? cat.name : 'Catalogue';
    document.title = (cat ? cat.name + ' · ' : '') + 'Catalogue · BambooCult';

    els.engrave.setAttribute('aria-pressed', state.engrave);
    els.sort.value = state.sort;
    if (els.q.value !== state.q) els.q.value = state.q;

    renderSide();
    renderTypes();

    const { list, widened } = filtered();
    els.grid.innerHTML = list.map(p => BC.card(p, { showType: !widened && !!cat })).join('');
    BC.settleImages(els.grid);
    els.empty.hidden = list.length > 0;

    const noun = list.length === 1 ? 'product' : 'products';
    els.count.textContent = widened
      ? `Nothing on this shelf. Showing ${list.length} ${noun} from the rest of the catalogue`
      : state.q
        ? `${list.length} ${noun} matching “${state.q}”`
        : `Showing ${list.length} ${noun}`;

    syncUrl();
  }

  els.side.addEventListener('click', e => {
    const a = e.target.closest('a[data-cat]');
    if (!a) return;
    e.preventDefault();
    state.cat = a.dataset.cat;
    state.type = '';
    render();
    if (window.innerWidth <= 960) a.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: smoothScroll() });
  });

  els.types.addEventListener('click', e => {
    const chip = e.target.closest('[data-type]');
    if (!chip) return;
    state.type = chip.dataset.type;
    render();
  });

  let typing;
  els.q.addEventListener('input', () => {
    clearTimeout(typing);
    typing = setTimeout(() => { state.q = els.q.value.trim(); render(); }, 140);
  });

  els.sort.addEventListener('change', () => { state.sort = els.sort.value; render(); });
  els.engrave.addEventListener('click', () => { state.engrave = !state.engrave; render(); });
  els.print.addEventListener('click', () => window.print());
  els.reset.addEventListener('click', () => {
    Object.assign(state, { type: '', q: '', engrave: false });
    render();
    els.q.focus();
  });

  render();

  if (state.cat && window.innerWidth <= 960) {
    const current = els.side.querySelector('[aria-current]');
    if (current) current.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  }
})();
