(() => {
  const { products, categories } = BC;

  const facts = {
    products: products.length,
    categories: categories.length,
    engrave: products.filter(p => p.engrave).length
  };
  document.querySelectorAll('[data-fact]').forEach(el => {
    if (el.dataset.fact in facts) el.textContent = facts[el.dataset.fact];
  });

  BC.renderIndex(document.getElementById('cat-index'));

  const build = document.getElementById('build-list');
  if (build) {
    build.innerHTML = products
      .filter(p => p.cat === 'construction')
      .map(p => `<li><a href="${BC.productUrl(p)}"><span>${BC.esc(p.code)}</span>${BC.esc(p.name)}</a></li>`)
      .join('');
  }

  const featured = document.getElementById('featured');
  featured.innerHTML = products
    .filter(p => p.featured)
    .slice(0, 8)
    .map(p => BC.card(p))
    .join('');
  BC.settleImages(featured);
})();
