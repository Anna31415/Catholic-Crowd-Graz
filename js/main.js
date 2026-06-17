// ========================================
// Catholic Crowd Graz – Event Calendar
// Vanilla JavaScript (No Libraries)
// ========================================

// Google Sheets CSV Export URL
const CSV_URL = 'https://docs.google.com/spreadsheets/d/1nbuUu9C1qppWsV4WnVNlCHLYVb3M8D8tVJ-HIBRyg9s/export?format=csv';
const CACHE_KEY = 'ccg_events_cache';
const CACHE_EXPIRY_KEY = 'ccg_cache_expiry';
const CACHE_DURATION = 5 * 60 * 1000; // 5 Minuten

let events = [];
let filteredEvents = [];
let currentDate = new Date();
let selectedDate = null;

// ========================================
// INIT – Seite laden
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
  await loadEvents();
  renderCalendar();
  setupEventListeners();
  setupSearchListeners();
  setupCalendarHelpButton();
  setupCalendarScrollShadows();
});

// ========================================
// 1. EVENTS LADEN (mit Cache Fallback)
// ========================================

async function loadEvents() {
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) throw new Error('Sheets unreachable');
    
    const csvText = await response.text();
    events = parseCSV(csvText);
    filteredEvents = [...events];
    
    // Cache speichern
    localStorage.setItem(CACHE_KEY, JSON.stringify(events));
    localStorage.setItem(CACHE_EXPIRY_KEY, Date.now().toString());
    
    console.log(`✅ ${events.length} Events geladen`);
  } catch (error) {
    console.error('❌ Google Sheets Fehler:', error);
    loadFromCache();
  }
}

function loadFromCache() {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    events = JSON.parse(cached);
    filteredEvents = [...events];
    console.log(`⚠️ Cache genutzt: ${events.length} Events`);
  } else {
    console.log('❌ Keine Cache vorhanden');
    events = [];
    filteredEvents = [];
  }
}

// ========================================
// 2. CSV PARSING
// ========================================
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  
  // Skip Header (Zeile 1)
  return lines.slice(1)
    .map(line => parseCSVLine(line))
    .filter(event => {
      // Validierung: Titel, Datum, Org erforderlich
      return event.title && event.date && event.organization;
    });
}

function parseCSVLine(line) {
  // Einfaches CSV-Parsing (funktioniert für normale Daten ohne Komma in Feldern)
  const parts = line.split(',').map(s => s.trim().replace(/^"|"$/g, ''));
  
  return {
    title: parts[0] || '',
    organization: parts[1] || '',
    date: parts[2] || '', // YYYY-MM-DD
    startTime: parts[3] || '', // HH:MM
    endTime: parts[4] || '', // HH:MM
    location: parts[5] || '',
    description: parts[6] || ''
  };
}

// ========================================
// 3. KALENDER GENERIEREN
// ========================================

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  // Update Monatstitel
  const monthNames = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];
  document.getElementById('month-title').textContent = `${monthNames[month]} ${year}`;
  
  // Kalender-HTML generieren
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  
  let html = '<table><thead><tr>';
  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  dayNames.forEach(day => {
    html += `<th>${day}</th>`;
  });
  html += '</tr></thead><tbody><tr>';
  
  let currentCell = new Date(startDate);
  const today = new Date().toISOString().split('T')[0];
  
  for (let i = 0; i < 42; i++) { // 6 Wochen
    const isCurrentMonth = currentCell.getMonth() === month;
    const dateStr = currentCell.getFullYear() + '-' +
                    String(currentCell.getMonth() + 1).padStart(2, '0') + '-' +
                    String(currentCell.getDate()).padStart(2, '0');
    const dayEvents = getEventsForDate(dateStr);
    
    let classNames = [];
    if (!isCurrentMonth) classNames.push('other-month');
    if (dateStr === today) classNames.push('today');
    if (dateStr === selectedDate) classNames.push('selected');
    
 const className = classNames.join(' ');
    html += `<td tabindex="0" class="${className}" onclick="openEventPanel('${dateStr}')" onkeydown="openEventPanel('${dateStr}')">
      <strong>${currentCell.getDate()}</strong>
      <div class="events">`;


    
    dayEvents.slice(0, 2).forEach(event => {
      // Dynamische Länge basierend auf verfügbarer Breite
      // Auf mobil: verfügbare Breite / 7 Spalten → kürzere Namen

      const isMobile = window.innerWidth <= 767;
      let maxLength = 20; // Standard max Länge für Desktop
      
      if (isMobile) {
        // Verfügbare Breite pro Spalte ca. 40-50px auf mobil → ~6 Zeichen
        maxLength = 20;
      }
      
      const title = event.title.length > maxLength ? event.title.slice(0, maxLength - 2) + '..' : event.title;
      html += `<div class="event-item">${title}</div>`;
    });
    
    if (dayEvents.length > 2) {
      html += `<div class="event-item">+${dayEvents.length - 2} mehr</div>`;
    }
    
    html += `</div></td>`;
    
    if ((i + 1) % 7 === 0 && i < 41) {
      html += '</tr><tr>';
    }
    
    currentCell.setDate(currentCell.getDate() + 1);
  }
  
  html += '</tr></tbody></table>';
  document.getElementById('calendar').innerHTML = html;
  updateCalendarScrollShadows();
}

function getEventsForDate(dateStr) {
  return filteredEvents
  .filter(e => e.date === dateStr)
  .sort((a, b) => a.startTime.localeCompare(b.startTime));
}

// ========================================
// 4. EVENT-DETAILS PANEL
// ========================================

function openEventPanel(dateStr) {
  const dayEvents = getEventsForDate(dateStr);
  
  if (dayEvents.length === 0) return;
  
  // Aktualisiere ausgewählten Tag
  selectedDate = dateStr;
  
  // Entferne alte Auswahl-Markierung
  document.querySelectorAll('#calendar td.selected').forEach(td => {
    td.classList.remove('selected');
  });
  
  // Setze neue Auswahl auf geklicktem Tag
  const dateCell = document.querySelector(`td[onclick*="'${dateStr}'"]`);
  if (dateCell) dateCell.classList.add('selected');
  
  const panel = document.getElementById('event-panel');
  const details = document.getElementById('event-details');
  
  const date = new Date(dateStr);
  const dateFormatted = date.toLocaleDateString('de-AT', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  details.innerHTML = `
    <h3>${dateFormatted}</h3>
    ${dayEvents.map(e => `
      <div class="event-detail">
        <h4>${e.title}</h4>
        <p><strong>Organisation:</strong> ${e.organization}</p>
        <p><strong>🕐</strong> ${e.startTime}${e.endTime ? ' – ' + e.endTime : ''}</p>
        <p><strong>📍Ort:</strong> ${e.location || 'TBA'}</p>
        ${e.description ? `<p><strong>Beschreibung:</strong><br>${e.description}</p>` : ''}
      </div>
    `)
    .join('')}
  `;
  
  panel.style.display = 'block';
}

// ========================================
// 5. EVENT-LISTENERS
// ========================================

// ========================================
// 4b. CALENDAR SCROLL SHADOWS (Mobile)
// ========================================

let shadowLeft = null;
let shadowRight = null;
let shadowPositionUpdateScheduled = false;

function setupCalendarScrollShadows() {
  const isMobile = window.innerWidth <= 767;
  if (!isMobile) return;

  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  // Create shadow elements if they don't exist
  if (!shadowLeft) {
    shadowLeft = document.createElement('div');
    shadowLeft.id = 'calendar-shadow-left';
    shadowLeft.style.cssText = 'position: fixed; left: 0; top: 0; width: 20px; height: 100%; background: linear-gradient(to right, rgba(0, 0, 0, 0.35), transparent); pointer-events: none; z-index: 10; opacity: 0; transition: opacity 0.2s ease;';
    document.body.appendChild(shadowLeft);
  }

  if (!shadowRight) {
    shadowRight = document.createElement('div');
    shadowRight.id = 'calendar-shadow-right';
    shadowRight.style.cssText = 'position: fixed; right: 0; top: 0; width: 20px; height: 100%; background: linear-gradient(to left, rgba(0, 0, 0, 0.35), transparent); pointer-events: none; z-index: 10; opacity: 0; transition: opacity 0.2s ease;';
    document.body.appendChild(shadowRight);
  }

  // Initial update
  updateCalendarScrollShadows();

  // Horizontal scroll of calendar (opacity only)
  calendarEl.addEventListener('scroll', updateCalendarScrollShadows);

  // Window scroll (schedule position update)
  window.addEventListener('scroll', scheduleCalendarShadowPositionUpdate);
  window.addEventListener('resize', updateCalendarScrollShadows);
}

function scheduleCalendarShadowPositionUpdate() {
  if (!shadowPositionUpdateScheduled) {
    shadowPositionUpdateScheduled = true;
    requestAnimationFrame(() => {
      updateCalendarShadowPositions();
      shadowPositionUpdateScheduled = false;
    });
  }
}

function updateCalendarShadowPositions() {
  if (!shadowLeft || !shadowRight) return;
  
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  const calendarRect = calendarEl.getBoundingClientRect();
  
  // Update left shadow position
  shadowLeft.style.left = calendarRect.left + 'px';
  shadowLeft.style.top = calendarRect.top + 'px';
  shadowLeft.style.height = calendarRect.height + 'px';
  
  // Update right shadow position
  shadowRight.style.left = (calendarRect.right - 20) + 'px';
  shadowRight.style.top = calendarRect.top + 'px';
  shadowRight.style.height = calendarRect.height + 'px';
}

function updateCalendarScrollShadows() {
  const isMobile = window.innerWidth <= 767;
  const calendarEl = document.getElementById('calendar');
  
  if (!isMobile || !calendarEl || !shadowLeft || !shadowRight) {
    if (shadowLeft) shadowLeft.style.opacity = '0';
    if (shadowRight) shadowRight.style.opacity = '0';
    return;
  }

  // Check scroll state
  const canScrollLeft = calendarEl.scrollLeft > 0;
  const canScrollRight = calendarEl.scrollLeft < calendarEl.scrollWidth - calendarEl.clientWidth;

  // Update opacity based on scroll state
  shadowLeft.style.opacity = canScrollLeft ? '1' : '0';
  shadowRight.style.opacity = canScrollRight ? '1' : '0';

  // Also update position (important for first load and resize)
  updateCalendarShadowPositions();
}

// ========================================
// 5. EVENT-LISTENERS
// ========================================

function setupEventListeners() {
  // Previous/Next Month
  document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });
  
  document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });
  
  // Close Event Panel
  document.getElementById('close-panel').addEventListener('click', () => {
    document.getElementById('event-panel').style.display = 'none';
  });
  
  // Auto-Refresh Events (jede 5 Minuten)
  setInterval(() => {
    loadEvents();
    renderCalendar();
  }, 5 * 60 * 1000);
}

// ========================================
// KALENDER HILFE BUTTON
// ========================================

function setupCalendarHelpButton() {
  const helpBtn = document.getElementById('calendar-help-btn');
  const modal = document.getElementById('calendar-help-modal');
  const closeBtn = document.getElementById('close-help-modal');
  
  if (!helpBtn || !modal) return;
  
  // Modal öffnen
  helpBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });
  
  // Modal schließen (X-Button)
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
  
  // Modal schließen (außerhalb klicken)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}
