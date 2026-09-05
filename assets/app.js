(function () {
  const form = document.querySelector('#filters');
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const interfaceControl = document.querySelector('#interface');
  const mcp = document.querySelector('#mcp');
  const control = document.querySelector('#control');
  const rows = Array.from(document.querySelectorAll('.tool-row'));
  const resultCount = document.querySelector('#result-count');
  const emptyState = document.querySelector('#empty-state');
  const emptyReset = document.querySelector('#empty-reset');
  const total = rows.length;

  function applyFilters() {
    const query = search.value.trim().toLowerCase();
    const categoryValue = category.value;
    const interfaceValue = interfaceControl.value;
    const mcpValue = mcp.value;
    const controlValue = control.value;
    let visible = 0;

    rows.forEach(function (row) {
      const matchesQuery = !query || row.dataset.search.includes(query);
      const matchesCategory = !categoryValue || row.dataset.category === categoryValue;
      const matchesInterface = !interfaceValue || row.dataset.interfaces.split(' ').includes(interfaceValue);
      const matchesMcp = !mcpValue || row.dataset.mcp === mcpValue;
      const matchesControl = !controlValue || row.dataset.control === controlValue;
      const matches = matchesQuery && matchesCategory && matchesInterface && matchesMcp && matchesControl;
      row.hidden = !matches;
      if (matches) visible += 1;
    });

    resultCount.textContent = visible + ' of ' + total + (visible === 1 ? ' tool' : ' tools');
    emptyState.hidden = visible !== 0;
  }

  form.addEventListener('input', applyFilters);
  form.addEventListener('reset', function () {
    window.setTimeout(applyFilters, 0);
  });
  emptyReset.addEventListener('click', function () {
    form.reset();
    applyFilters();
    search.focus();
  });

  document.addEventListener('keydown', function (event) {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
    if (event.key === '/' && !isTyping) {
      event.preventDefault();
      search.focus();
    }
  });
})();
