/*
  Shared header and footer for every page.

  The header/footer markup lives here once. To change the menu or footer,
  edit this file and run:   node _tools/layout.js
  It rewrites the block between <!-- layout:header --> and <!-- /layout:header -->
  (and the same for footer) in each page listed in PAGES.
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES = ['index.html', 'catalogue.html', 'product.html', 'enquiry.html', 'about.html', 'contact.html'];

// The final logo (brand/logo-inline.svg) is inlined so it follows the text colour.
// Until that file exists, the placeholder in logo.html is used.
const inlineLogo = path.join(ROOT, 'brand', 'logo-inline.svg');
const LOGO = fs.existsSync(inlineLogo)
  ? `<a class="{{class}}" href="index.html" aria-label="BambuCult, home">${fs.readFileSync(inlineLogo, 'utf8').trim().replace('<svg ', '<svg class="brand__logo" ')}</a>`
  : fs.readFileSync(path.join(__dirname, 'logo.html'), 'utf8').trim();

// The type links are built from the catalogue itself, so the menu can never point at
// an empty filter. Products without a photo are hidden and do not count.
const vm = require('vm');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/js/products.js'), 'utf8'), ctx);
const PRODUCTS = ctx.window.BC_PRODUCTS.filter(p => !p.hidden);
const CATEGORIES = ctx.window.BC_CATEGORIES;

const typeLinks = cat => (cat.types || [])
  .filter(t => PRODUCTS.some(p => p.cat === cat.id && [].concat(p.type).includes(t)))
  .map(t => [TYPE_LABELS[t] || t, `catalogue.html?c=${cat.id}&amp;t=${encodeURIComponent(t).replace(/&/g, '&amp;')}`]);

// Friendlier wording for a few type names in the menu.
const TYPE_LABELS = {
  'Adult brushes': 'Adult toothbrushes',
  'Kids’ brushes': 'Kids’ toothbrushes'
};

const LEDES = {
  oral: 'Toothbrushes for adults and children, and the toothpaste that goes with them.',
  craft: 'Handcrafted desk pieces, home decor and drinkware.',
  gifts: 'Ready-made gift sets. Contents can be swapped and the box can carry your logo.',
  construction: 'Bamboo building materials supplied in bulk, cut and sized to order.',
  care: 'Razors, brushes, combs and the rest of the bathroom shelf, mostly in bamboo.'
};
const ALL_LABELS = {
  oral: 'All oral products', craft: 'All craft', gifts: 'All gift sets',
  construction: 'All building materials', care: 'All care products'
};
const ORDER = ['oral', 'craft', 'gifts', 'construction', 'care'];

const MENU = ORDER.map(id => CATEGORIES.find(c => c.id === id)).filter(Boolean).map((cat, i) => ({
  id: cat.id,
  label: cat.name,
  href: `catalogue.html?c=${cat.id}`,
  right: i >= 3,
  lede: LEDES[cat.id] || cat.blurb,
  links: cat.id === 'gifts'
    ? PRODUCTS.filter(p => p.cat === 'gifts').map(p => [p.name.replace(/^Bamboo /, ''), `product.html?p=${p.id}`])
    : typeLinks(cat),
  all: ALL_LABELS[cat.id] || `All ${cat.name}`
}));

const esc = s => s.replace(/&(?!amp;)/g, '&amp;');
const caret = '<svg class="caret" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>';
const searchIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6.8" cy="6.8" r="5.2"/><path d="M10.6 10.6L15 15"/></svg>';

const desktopMenu = MENU.map(m => `
          <li class="menu__item has-sub${m.right ? ' has-sub--right' : ''}">
            <a class="menu__link" href="${m.href}" data-nav="${m.id}">${esc(m.label)}${caret}</a>
            <div class="sub">
              <div class="sub__panel">
                <p class="sub__lede">${esc(m.lede)}</p>
                <ul class="sub__list">
${m.links.map(([t, h]) => `                  <li><a href="${h}">${esc(t)}</a></li>`).join('\n')}
                </ul>
                <a class="sub__all" href="${m.href}">${esc(m.all)} <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </li>`).join('');

const mobileMenu = MENU.map(m => `
        <details>
          <summary>${esc(m.label)}</summary>
          <div class="mobile-nav__sub">
            <a href="${m.href}">${esc(m.all)}</a>
${m.links.map(([t, h]) => `            <a href="${h}">${esc(t)}</a>`).join('\n')}
          </div>
        </details>`).join('');

const HEADER = `  <div class="topbar">
    <div class="wrap topbar__inner">
      <p>Wholesale &amp; corporate orders · Prices on request</p>
      <p class="topbar__contact"><a data-config="phone"></a><span aria-hidden="true">/</span><a data-config="email"></a></p>
    </div>
  </div>

  <header class="masthead">
    <div class="wrap masthead__inner">
      <form class="quick-search" action="catalogue.html" role="search">
        <label class="sr-only" for="quick-q">Search products</label>
        ${searchIcon}
        <input id="quick-q" name="q" type="search" placeholder="Search products">
      </form>
      ${LOGO.replace('{{class}}', 'brand')}
      <div class="masthead__right">
        <a class="wa-link" data-config="whatsapp" target="_blank" rel="noopener">WhatsApp us</a>
        <a class="list-link list-link--compact" href="enquiry.html" data-nav="enquiry"><span class="long">Enquiry list</span><span class="short">List</span> <span class="count is-empty" data-count>0</span></a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden>
      <div class="mobile-nav__inner">
        <form class="mobile-nav__search" action="catalogue.html" role="search">
          <label class="sr-only" for="mobile-q">Search products</label>
          ${searchIcon}
          <input id="mobile-q" name="q" type="search" placeholder="Search products">
        </form>
        <a href="index.html">Home</a>${mobileMenu}
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <div class="mobile-nav__contact"><a data-config="phone"></a><a data-config="email"></a></div>
      </div>
    </nav>
  </header>

  <nav class="navbar" aria-label="Main">
    <div class="wrap navbar__inner">
      <ul class="menu">
        <li class="menu__item"><a class="menu__link" href="index.html" data-nav="home">Home</a></li>${desktopMenu}
        <li class="menu__item"><a class="menu__link" href="about.html" data-nav="about">About</a></li>
        <li class="menu__item"><a class="menu__link" href="contact.html" data-nav="contact">Contact</a></li>
      </ul>
      <a class="list-link" href="enquiry.html" data-nav="enquiry">Enquiry list <span class="count is-empty" data-count>0</span></a>
    </div>
  </nav>`;

const FOOTER = `  <footer class="site-footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__brand">
          ${LOGO.replace('{{class}}', 'brand brand--light')}
          <p>Bamboo products for businesses: oral care, personal care, handcrafted pieces, gift sets and building materials.</p>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
${MENU.map(m => `            <li><a href="${m.href}">${esc(m.label)}</a></li>`).join('\n')}
            <li><a href="catalogue.html">Full catalogue</a></li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="index.html#branding">Custom branding</a></li>
            <li><a href="index.html#ordering">How ordering works</a></li>
            <li><a href="enquiry.html">Your enquiry list</a></li>
          </ul>
        </div>
        <div>
          <h2>Get in touch</h2>
          <address>
            <a data-config="phone"></a><br>
            <a data-config="email"></a><br>
            <a data-config="whatsapp" target="_blank" rel="noopener">WhatsApp</a><br><br>
            <span data-config="address"></span>
          </address>
        </div>
      </div>
      <div class="footer__base">
        <p>© <span data-year></span> BambuCult. All prices on request.</p>
        <p>Product photos are for illustration. Ask us for photos of current stock.</p>
      </div>
    </div>
  </footer>`;

function put(html, name, block, legacy) {
  const start = `<!-- layout:${name} -->`;
  const end = `<!-- /layout:${name} -->`;
  const i = html.indexOf(start);
  const j = html.indexOf(end);
  if (i !== -1 && j !== -1) return html.slice(0, i) + start + '\n' + block + '\n  ' + html.slice(j);
  const m = html.match(legacy);
  if (!m) throw new Error(`no ${name} block found`);
  return html.replace(legacy, `${start}\n${block}\n  ${end}`);
}

for (const page of PAGES) {
  const file = path.join(ROOT, page);
  if (!fs.existsSync(file)) { console.log(`skip ${page} (missing)`); continue; }
  let html = fs.readFileSync(file, 'utf8');
  html = put(html, 'header', HEADER, /<div class="topbar">[\s\S]*?<\/header>/);
  html = put(html, 'footer', FOOTER, /<footer class="site-footer">[\s\S]*?<\/footer>/);
  fs.writeFileSync(file, html);
  console.log(`updated ${page}`);
}
