// Catholic Crowd Graz – Search Function

// Konstanten (DOM-Elemente)
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchPanel = document.getElementById('search-panel');
const resultsList = document.getElementById('search-panel-results');
const closeButton = document.getElementById('close-search-panel');
const clearButton = document.getElementById('clear-search');

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
  const query = searchText.toLowerCase().trim();
  
  if (query === '') {
    filteredEvents = [...events];
    searchPanel.style.display = 'none';
  } else {
    filteredEvents = events
      .filter(e => `${e.title} ${e.organization} ${e.description}`.toLowerCase().includes(query))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
    
    resultsList.innerHTML = filteredEvents.length === 0 
      ? '<div class="result-empty">Keine Events gefunden</div>'
      : filteredEvents.map(renderEventItem).join('');
    
    searchPanel.style.display = 'block';
  }
  
  renderCalendar();
}

// Event-Listener Setup
function setupSearchListeners() {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') filterEventsBySearch(searchInput.value);
  });
  
  searchButton.addEventListener('click', () => filterEventsBySearch(searchInput.value));
  
  closeButton.addEventListener('click', () => {
    searchPanel.style.display = 'none';
  });
  
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    filterEventsBySearch('');
  });
}


