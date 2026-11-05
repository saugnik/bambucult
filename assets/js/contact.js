(() => {
  const { config } = BC;
  const form = document.getElementById('contact-form');

  const value = name => form.elements[name].value.trim();

  function validate() {
    return BC.checkRequired(form, [
      { name: 'name', message: 'Please add your name' },
      { name: 'phone', message: 'Please add a phone number so we can reply' },
      { name: 'message', message: 'Please tell us what you need' }
    ]);
  }

  function message() {
    const lines = [`Hello ${config.brand},`, '', `About: ${value('topic')}`, '', value('message'), '', '—', `Name: ${value('name')}`];
    if (value('company')) lines.push(`Company: ${value('company')}`);
    lines.push(`Phone: ${value('phone')}`);
    if (value('email')) lines.push(`Email: ${value('email')}`);
    return lines.join('\n');
  }

  // Older browsers do not set event.submitter, so remember the button that was pressed.
  form.querySelectorAll('[data-send]').forEach(btn => {
    btn.addEventListener('click', () => { form.dataset.via = btn.dataset.send; });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;
    const via = (e.submitter && e.submitter.dataset.send) || form.dataset.via || 'whatsapp';
    if (via === 'email') {
      window.location.href = BC.mailLink(`${value('topic')}${value('company') ? ' – ' + value('company') : ''}`, message());
    } else {
      window.open(BC.waLink(message()), '_blank', 'noopener');
    }
  });
})();
