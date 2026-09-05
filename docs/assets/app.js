(function () {
  const form = document.querySelector('#filters');
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const readiness = document.querySelector('#readiness');
  const grade = document.querySelector('#grade');
  const interfaceControl = document.querySelector('#interface');
  const mcp = document.querySelector('#mcp');
  const rows = Array.from(document.querySelectorAll('.tool-row'));
  const resultCount = document.querySelector('#result-count');
  const emptyState = document.querySelector('#empty-state');
  const emptyReset = document.querySelector('#empty-reset');
  const total = rows.length;

  function applyFilters() {
    const query = search.value.trim().toLowerCase();
    const categoryValue = category.value;
    const readinessValue = readiness.value;
    const gradeValue = grade.value;
    const interfaceValue = interfaceControl.value;
    const mcpValue = mcp.value;
    let visible = 0;

    rows.forEach(function (row) {
      const matchesQuery = !query || row.dataset.search.includes(query);
      const matchesCategory = !categoryValue || row.dataset.category === categoryValue;
      const matchesReadiness = !readinessValue || row.dataset.readiness === readinessValue;
      const matchesGrade = !gradeValue || row.dataset.grade === gradeValue;
      const matchesInterface = !interfaceValue || row.dataset.interfaces.split(' ').includes(interfaceValue);
      const matchesMcp = !mcpValue || row.dataset.mcp === mcpValue;
      const matches = matchesQuery && matchesCategory && matchesReadiness && matchesGrade && matchesInterface && matchesMcp;
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
