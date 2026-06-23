// Catholic Crowd Graz – Search Function

// DOM-Elemente werden über Hilfsfunktionen geholt, damit die Suche auch dann
// funktioniert, wenn das Skript vor dem vollständigen DOM geladen wird.

function getSearchInput() {
  return document.getElementById('search-input');
}

function getSearchButton() {
  return document.getElementById('search-button');
}

function getSearchPanel() {
  return document.getElementById('search-panel');
}

function getResultsList() {
  return document.getElementById('search-panel-results');
}

function getCloseButton() {
  return document.getElementById('close-search-panel');
}

function getClearButton() {
  return document.getElementById('clear-search');
}

// Hilfsfunktion: Event-HTML generieren
function renderEventItem(event) {
  const dateFormatted = new Date(event.date).toLocaleDateString('de-AT', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });
  return `
    <div class="result-item">
      <h4>${event.title}</h4>
      <p><strong>${event.organization}</strong></p>
        <p><strong>📅</strong> ${dateFormatted}</p>
        <p><strong>🕐</strong> ${event.startTime}${event.endTime ? ' – ' + event.endTime : ''}</p>
     
      <p><strong>📍 Ort:</strong> ${event.location || 'TBA'}</p>
      ${event.description ? `<p><strong>📝 Beschreibung:</strong><br>${event.description}</p>` : ''}
    </div>
  `;
}
// Filter-Funktkion
function filterEventsBySearch(searchText) {
  const searchPanel = getSearchPanel();
  const resultsList = getResultsList();
  const searchInput = getSearchInput();

  if (!searchPanel || !resultsList) {
    console.warn('filterEventsBySearch: search panel elements missing');
    return;
  }

  const query = searchText.toLowerCase().trim();
  
  if (query === '') {
    // Clear search results and hide panel; calendar still shows all events
    searchResults = [];
    searchPanel.style.display = 'none';
    resultsList.innerHTML = '';
    if (searchInput) {
      searchInput.value = '';
    }
  } else {
    searchResults = events
      .filter(e => `${e.title} ${e.organization} ${e.description}`.toLowerCase().includes(query))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
    
    resultsList.innerHTML = searchResults.length === 0 
      ? '<div class="result-empty">Keine Events gefunden</div>'
      : searchResults.map(renderEventItem).join('');
    
    searchPanel.style.display = 'block';
  }
  
  renderCalendar();
}

// Event-Listener Setup
function setupSearchListeners() {
  const searchInput = getSearchInput();
  const searchButton = getSearchButton();
  const searchPanel = getSearchPanel();
  const resultsList = getResultsList();
  const closeButton = getCloseButton();
  const clearButton = getClearButton();

  if (!searchInput || !searchButton || !resultsList || !searchPanel) {
    console.warn('setupSearchListeners: search UI elements missing, skipping search setup');
    return;
  }

  if (searchInput.dataset.searchListenersAttached === 'true') {
    return;
  }
  searchInput.dataset.searchListenersAttached = 'true';

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') filterEventsBySearch(searchInput.value);
  });

  searchButton.addEventListener('click', () => filterEventsBySearch(searchInput.value));

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      searchPanel.style.display = 'none';
    });
  }

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      searchInput.value = '';
      filterEventsBySearch('');
    });
  }
}


