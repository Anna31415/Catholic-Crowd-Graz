# Tutorial: search.js – Anfänger-Erklärung

## Was macht diese Datei?

Die `search.js` Datei ist wie eine **"Suchmaschine"** für Events. Wenn ein User im Suchfeld etwas eingibt und auf "Suchen" klickt, findet diese Datei alle passenden Events und zeigt sie in einem Panel auf der linken Seite an.
**Einfach gesagt:**
- User tippt: "KHG"
- search.js sucht: "Welche Events passen zu KHG?"
- Ergebnis: Liste aller KHG-Events wird angezeigt

---

## Grundkonzepte (für JavaScript-Anfänger)

Bevor wir in den Code gehen, 3 wichtige Begriffe:

### 1. **const** – Eine "Schachtel" mit einem Namen
```javascript
const meinName = "Anna";
```
Das bedeutet: "Ich habe eine Schachtel namens `meinName`, darin liegt `Anna`."

### 2. **Funktionen** – Ein Befehl mit Anleitung
```javascript
function machen() {
  // Hier stehen die Schritte
}
```
Das bedeutet: "Wenn ich `machen()` aufrufe, führe alle Schritte aus."

### 3. **DOM-Elemente** – HTML-Elemente finden
```javascript
document.getElementById('suchen')  // Finde das HTML-Element mit der ID 'suchen'
```
Das bedeutet: "Gib mir das HTML-Element, das 'suchen' heißt."

---

## Zeile für Zeile: Die Konstanten

### Zeilen 1–2: Kommentare
```javascript
// Catholic Crowd Graz – Search Function
```
Das ist ein **Kommentar**. Es hat keine Funktion, es hilft nur dem Menschen, den Code zu verstehen. (Alles nach `//` wird ignoriert)

---

### Zeilen 4–9: DOM-Elemente "speichern"

```javascript
// Konstanten (DOM-Elemente)
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchPanel = document.getElementById('search-panel');
const resultsList = document.getElementById('search-panel-results');
const closeButton = document.getElementById('close-search-panel');
const clearButton = document.getElementById('clear-search');
```

**Was passiert hier?**

Wir **suchen alle wichtigen HTML-Elemente** und speichern sie in Variablen:

| Konstante | Was ist das? | Im HTML |
|-----------|-------------|---------|
| `searchInput` | Das Textfeld | `<input id="search-input">` |
| `searchButton` | Der "Suchen"-Button | `<button id="search-button">` |
| `searchPanel` | Das linke Panel | `<aside id="search-panel">` |
| `resultsList` | Der Container für Ergebnisse | `<div id="search-panel-results">` |
| `closeButton` | Der "✕"-Button im Panel | `<button id="close-search-panel">` |
| `clearButton` | Der "Suche zurücksetzen"-Button | `<button id="clear-search">` |

**Warum machen wir das?**

Statt immer zu schreiben:
```javascript
document.getElementById('search-input')  // Lang!
document.getElementById('search-input')  // Nochmal
document.getElementById('search-input')  // Und nochmal
```

Schreiben wir einmal oben:
```javascript
const searchInput = document.getElementById('search-input');
```

Und dann können wir einfach `searchInput` benutzen. **Das ist kürzer und schneller!** ⚡

---

## Die `renderEventItem()` Funktion (Zeilen 11–29)

```javascript
function renderEventItem(event) {
  const dateFormatted = new Date(event.date).toLocaleDateString('de-AT', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });
  return `
    <div class="result-item">
      <h4>${event.title}</h4>
      <p><strong>${event.organization}</strong></p>
      <div class="result-meta">
        <span><strong>📅</strong> ${dateFormatted}</span>
        <span><strong>🕐</strong> ${event.startTime}${event.endTime ? ' – ' + event.endTime : ''}</span>
      </div>
      <p><strong>📍 Ort:</strong> ${event.location || 'TBA'}</p>
      ${event.description ? `<p><strong>📝 Beschreibung:</strong><br>${event.description}</p>` : ''}
    </div>
  `;
}
```

### Was macht diese Funktion?

**Sie verwandelt ein Event in HTML-Code.**

Beispiel:
- **Input:** Ein Event-Objekt mit Titel "ALPHA-Kurs", Org "KHG", etc.
- **Output:** HTML-Code für eine schöne Box mit allen Event-Infos

### Zeile für Zeile:

**Zeile 11:** `function renderEventItem(event) {`
- "Das ist eine Funktion, die ein Event bekommt"

**Zeile 12–14:** Datum formatieren
```javascript
const dateFormatted = new Date(event.date).toLocaleDateString('de-AT', { 
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
});
```
- `event.date` ist z.B. "2026-05-06"
- `toLocaleDateString()` wandelt das um in "Dienstag, 6. Mai 2026"
- Das Ergebnis speichern wir in `dateFormatted`

**Zeile 15–26:** HTML-Code zusammenbauen

Das ist ein großer Text-Block mit HTML. Wichtig:
- Die Backticks (`) erlauben uns, Variablen einzufügen mit `${variable}`
- Z.B. `<h4>${event.title}</h4>` bedeutet: "Zeige den Event-Titel hier an"

**Zeile 21:** Der "Ternärer Operator" (das `? ... : ...`)
```javascript
${event.endTime ? ' – ' + event.endTime : ''}
```
Das bedeutet: "Wenn es eine Endzeit gibt, zeige sie an. Sonst zeige nichts."

### Ergebnis:

Diese Funktion gibt HTML zurück, das so aussieht:

```html
<div class="result-item">
  <h4>ALPHA-Kurs</h4>
  <p><strong>Katholische Hochschulgemeinde</strong></p>
  <div class="result-meta">
    <span><strong>📅</strong> Dienstag, 6. Mai 2026</span>
    <span><strong>🕐</strong> 19:00 – 20:30</span>
  </div>
  <p><strong>📍 Ort:</strong> Andrä Saal</p>
  <p><strong>📝 Beschreibung:</strong><br>Einführung in Grundlagen...</p>
</div>
```

---

## Die `filterEventsBySearch()` Funktion (Zeilen 31–47)

```javascript
function filterEventsBySearch(searchText) {
  const query = searchText.toLowerCase().trim();
  
  if (query === '') {
    filteredEvents = [...events];
    searchPanel.style.display = 'none';
  } else {
    filteredEvents = events
      .filter(e => `${e.title} ${e.organization} ${e.description}`.toLowerCase().includes(query))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    resultsList.innerHTML = filteredEvents.length === 0 
      ? '<div class="result-empty">Keine Events gefunden</div>'
      : filteredEvents.map(renderEventItem).join('');
    
    searchPanel.style.display = 'block';
  }
  
  renderCalendar();
}
```

### Was macht diese Funktion?

**Sie ist die "Hauptfunktion" der Suchfunktion.**
1. Nimmt den Suchtext vom User
2. Sucht Matches
3. Zeigt das Panel mit Ergebnissen
4. Aktualisiert den Kalender

### Zeile für Zeile:

**Zeile 31:** `function filterEventsBySearch(searchText) {`
- Diese Funktion bekommt den Text, den der User eingegeben hat

**Zeile 32:** `const query = searchText.toLowerCase().trim();`
- `toLowerCase()` macht alles Kleinbuchstaben ("KHG" → "khg")
- `trim()` entfernt Leerzeichen am Anfang/Ende ("  KHG  " → "KHG")
- `query` ist jetzt die "saubere" Suchtext

**Zeilen 34–37: IF – Wenn das Suchfeld leer ist**

```javascript
if (query === '') {
  filteredEvents = [...events];
  searchPanel.style.display = 'none';
}
```

Wenn der User NICHTS eingegeben hat:
- `filteredEvents = [...events]` – Zeige ALLE Events (nicht gefiltert)
- `searchPanel.style.display = 'none'` – Verstecke das Panel

**Zeile 38–45: ELSE – Wenn der User etwas eingegeben hat**

```javascript
else {
  filteredEvents = events
    .filter(e => `${e.title} ${e.organization} ${e.description}`.toLowerCase().includes(query))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
```

Das ist komplex, lass mich das aufteilen:

**`.filter()`** – Wähle nur bestimmte Events aus
```javascript
.filter(e => `${e.title} ${e.organization} ${e.description}`.toLowerCase().includes(query))
```
Für jedes Event `e`, frage: "Enthält der Text (Titel + Org + Beschreibung) das Suchword?"
- Wenn JA → dieses Event behalten
- Wenn NEIN → weglöschen

**`.sort()`** – Sortiere die übrigen Events nach Datum
```javascript
.sort((a, b) => new Date(a.date) - new Date(b.date))
```
Damit die neuesten Events oben sind

**Zeilen 40–43: Zeige die Ergebnisse**

```javascript
resultsList.innerHTML = filteredEvents.length === 0 
  ? '<div class="result-empty">Keine Events gefunden</div>'
  : filteredEvents.map(renderEventItem).join('');
```

Das ist wieder der **Ternärer Operator**:
- **Wenn** `filteredEvents.length === 0` (keine Events gefunden):
  - Zeige "Keine Events gefunden"
- **Sonst**:
  - Benutze `.map(renderEventItem)` – für JEDES Event, rufe `renderEventItem()` auf
  - `.join('')` – klebe alle HTML-Stücke zusammen

**Zeile 44:** `searchPanel.style.display = 'block';`
- Zeige das Panel an

**Zeile 47:** `renderCalendar();`
- Aktualisiere den Kalender, damit nur gefilterte Events angezeigt werden

---

## Die `setupSearchListeners()` Funktion (Zeilen 49–68)

```javascript
function setupSearchListeners() {
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.length > 0) searchPanel.style.display = 'block';
  });
  
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
```

### Was macht diese Funktion?

**Sie verbindet alle Buttons und das Suchfeld mit "Aktion"-Handlern.**

### Analogie: Ein Postbote-System

Stell dir vor, jeder Button hat einen Postboten:
- "Wenn jemand auf diesen Button klickt, sag mir Bescheid!"
- "Dann führe ich die Anweisung aus"

Das nennt sich **Event-Listener**.

### Zeile für Zeile:

**Zeile 50–52: Wenn der User das Suchfeld anklickt**
```javascript
searchInput.addEventListener('focus', () => {
  if (searchInput.value.length > 0) searchPanel.style.display = 'block';
});
```
- `.addEventListener('focus', ...)` – "Wenn der User auf das Feld klickt..."
- `if (searchInput.value.length > 0)` – "...und es ist nicht leer..."
- `searchPanel.style.display = 'block'` – "...zeige das Panel"

**Zeile 54–57: Wenn der User Enter drückt**
```javascript
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') filterEventsBySearch(searchInput.value);
});
```
- `.addEventListener('keypress', ...)` – "Wenn der User eine Taste drückt..."
- `if (e.key === 'Enter')` – "...und diese Taste ist Enter..."
- `filterEventsBySearch(searchInput.value)` – "...führe die Suche aus"

**Zeile 59: Wenn der User auf "Suchen" klickt**
```javascript
searchButton.addEventListener('click', () => filterEventsBySearch(searchInput.value));
```
- Selbsterklärend: Suche durchführen

**Zeile 61–63: Wenn der User auf "✕" klickt**
```javascript
closeButton.addEventListener('click', () => {
  searchPanel.style.display = 'none';
});
```
- Verstecke das Panel

**Zeile 65–68: Wenn der User auf "Suche zurücksetzen" klickt**
```javascript
clearButton.addEventListener('click', () => {
  searchInput.value = '';
  filterEventsBySearch('');
});
```
- Lösche den Suchtext
- Rufe die Filter-Funktion mit leerem Text auf (zeigt alle Events)

---

## Zusammenfassung: Die 3 Funktionen

```
┌─────────────────────────────────────┐
│  search.js – Die 3 Funktionen       │
├─────────────────────────────────────┤
│                                     │
│  1. renderEventItem()               │
│     Macht: Event → HTML              │
│     Input: Ein Event-Objekt         │
│     Output: Schöne HTML-Box         │
│                                     │
│  2. filterEventsBySearch()          │
│     Macht: Findet und zeigt Events  │
│     Input: Suchtext                 │
│     Output: Panel mit Ergebnissen   │
│                                     │
│  3. setupSearchListeners()          │
│     Macht: Verbindet Buttons        │
│     Input: Nichts                   │
│     Output: Aktive Buttons          │
│                                     │
└─────────────────────────────────────┘
```

---

## Ablauf: Was passiert von Start bis Ende?

```
1. User öffnet Website
   ↓
2. setupSearchListeners() wird aufgerufen
   → Alle Buttons sind jetzt "aktiv"
   ↓
3. User tippt "KHG" in Suchfeld und klickt "Suchen"
   ↓
4. filterEventsBySearch() wird aufgerufen mit "KHG"
   → Findet alle Events mit "KHG" in Titel/Org/Beschreibung
   → Sortiert nach Datum
   ↓
5. Für jedes gefundene Event wird renderEventItem() aufgerufen
   → Macht HTML aus dem Event-Daten
   ↓
6. Das HTML wird ins Panel eingefügt
   → Panel öffnet sich mit allen gefilterten Events
   ↓
7. Kalender aktualisiert sich (zeigt nur KHG-Events)
```

---

## Wichtige JavaScript-Konzepte in dieser Datei

| Konzept | Bedeutung | Beispiel |
|---------|-----------|----------|
| `const` | Unveränderliche Variable | `const name = "Anna"` |
| `function` | Befehlsblock mit Namen | `function machen() {}` |
| `.addEventListener()` | "Wartet auf eine Aktion" | `button.addEventListener('click', () => {})` |
| `.filter()` | "Wähle nur Elemente, die..." | `events.filter(e => e.title === 'ABC')` |
| `.map()` | "Wandle alle Elemente um" | `events.map(e => e.title)` |
| `.join()` | "Klebe Strings zusammen" | `['a', 'b'].join(',')` → `'a,b'` |
| `? : ` (Ternär) | "Wenn... dann... sonst..." | `x > 0 ? 'positiv' : 'negativ'` |
| `${variable}` | "Setze Variable in Text ein" | `` `Hallo ${name}` `` |

---

## Häufige Fragen

**Q: Was passiert, wenn ich auf "✕" klicke?**
A: Das Panel wird nur versteckt, die Suche bleibt aktiv. Der Kalender filtert weiter.

**Q: Was ist der Unterschied zwischen "✕" und "Suche zurücksetzen"?**
A: 
- `✕` → Panel wird geschlossen (aber Suchtext bleibt)
- `Suche zurücksetzen` → Panel schließt + Suchtext löscht + ALLE Events zeigen

**Q: Kann man mehrere Events gleichzeitig suchen?**
A: Nein, es gibt keine AND/OR-Operatoren. Aber man kann mit ".includes()" auch Teile finden.

**Q: Warum gibt es zwei Funktionen für Filtern?**
A: 
- `renderEventItem()` macht nur HTML
- `filterEventsBySearch()` sucht und zeigt

Das ist eine gute Praxis: **Eine Funktion = Eine Aufgabe**

---

## Gut zu wissen: Was du hier gelernt hast

✅ Wie man HTML-Elemente in JavaScript findet (`getElementById`)  
✅ Wie man Events "abhört" (`addEventListener`)  
✅ Wie man Listen filtert und sortiert (`.filter()`, `.sort()`)  
✅ Wie man HTML dynamisch erzeugt (Template-Strings mit `${}`))  
✅ Wie man Funktionen nutzt, um Code zu organisieren  

Das sind die **Grundlagen** der modernen Web-Entwicklung! 🎉
