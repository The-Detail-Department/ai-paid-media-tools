(function () {
  const form = document.querySelector('#filters');
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const readiness = document.querySelector('#readiness');
  const grade = document.querySelector('#grade');
  const setup = document.querySelector('#setup');
  const action = document.querySelector('#action');
  const commercial = document.querySelector('#commercial');
  const rows = Array.from(document.querySelectorAll('.tool-row'));
  const sectionButtons = Array.from(document.querySelectorAll('[data-section-filter]'));
  const resultCount = document.querySelector('#result-count');
  const emptyState = document.querySelector('#empty-state');
  const emptyReset = document.querySelector('#empty-reset');
  const total = rows.length;

  function matchesAction(row, value) {
    if (!value) return true;
    if (['read', 'create', 'modify', 'delete'].includes(value)) {
      return row.dataset[value] === 'Yes';
    }
    if (value === 'write-partial') {
      return ['create', 'modify', 'delete'].some(function (operation) {
        return row.dataset[operation] === 'Partial';
      });
    }
    if (value === 'write-none') {
      return ['create', 'modify', 'delete'].every(function (operation) {
        return ['No', 'N/A', 'Unverified'].includes(row.dataset[operation]);
      });
    }
    return true;
  }

  function applyFilters() {
    const query = search.value.trim().toLowerCase();
    const categoryValue = category.value;
    const readinessValue = readiness.value;
    const gradeValue = grade.value;
    const setupValue = setup.value;
    const actionValue = action.value;
    const commercialValue = commercial.value;
    let visible = 0;

    rows.forEach(function (row) {
      const matchesQuery = !query || row.dataset.search.includes(query);
      const matchesCategory = !categoryValue || row.dataset.category === categoryValue;
      const matchesReadiness = !readinessValue || row.dataset.readiness === readinessValue;
      const matchesGrade = !gradeValue || row.dataset.grade === gradeValue;
      const matchesSetup = !setupValue || row.dataset.setup === setupValue;
      const matchesCommercial = !commercialValue || row.dataset.commercial === commercialValue;
      const matches = matchesQuery && matchesCategory && matchesReadiness && matchesGrade &&
        matchesSetup && matchesAction(row, actionValue) && matchesCommercial;
      row.hidden = !matches;
      if (matches) visible += 1;
    });

    sectionButtons.forEach(function (button) {
      const active = categoryValue && button.dataset.sectionFilter === categoryValue;
      button.classList.toggle('is-active', Boolean(active));
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    resultCount.textContent = visible + ' of ' + total + (visible === 1 ? ' tool' : ' tools');
    emptyState.hidden = visible !== 0;
  }

  form.addEventListener('input', applyFilters);
  form.addEventListener('reset', function () {
    window.setTimeout(applyFilters, 0);
  });
  sectionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      category.value = button.dataset.sectionFilter;
      applyFilters();
      document.querySelector('#index').scrollIntoView({ behavior: 'smooth', block: 'start' });
      category.focus({ preventScroll: true });
    });
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
