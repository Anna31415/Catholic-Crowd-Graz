#  Catholic Crowd Graz – Event Kalender

Ein moderner, responsiver **Event-Kalender** für die Catholic Crowd Graz Community.

##  Was ist das?

**Catholic Crowd Graz** ist eine interaktive Veranstaltungskalender-Webseite, die:

- **Events in einem Kalender anzeigt** – Übersichtliche Monatsansicht
- **Event-Details präsentiert** – Klick auf ein Datum → Seitenleiste mit allen Infos
- **Daten aus Google Sheets lädt** – Nur die Tabelle aktualisieren, keine Code-Änderungen nötig
- **Vollständig responsive ist** – Mobile, Tablet & Desktop-tauglich
- **Ohne externe Libraries läuft** – Vanilla HTML, CSS & JavaScript

## Wie man es öffnet

### Schnellstart (lokal am PC)

1. **Repository klonen/herunterladen**
   ```bash
   git clone https://github.com/[dein-username]/Catholic-Crowd-Graz.git
   cd Catholic-Crowd-Graz
   ```

2. **`index.html` im Browser öffnen**
   - Doppelklick auf `index.html` im Explorer, ODER
   - Im Browser: `Datei` → `Datei öffnen` → `index.html` auswählen

3. **Fertig!** 
   - Kalender wird geladen
   - Events aus Google Sheets werden automatisch angezeigt

### Online-Version
- Link zur live-Website: https://anna31415.github.io/Catholic-Crowd-Graz/

## ⚙️ Technische Details

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (kein Framework)
- **Datenquelle:** Google Sheets (CSV Export)
- **Responsive:** Mobile-first (320px, 768px, 1200px+)
- **Browser:** Alle modernen Browser (Chrome, Firefox, Safari, Edge)

## Mehr Infos

- Siehe `tutorial/TUTORIAL.md` für eine **detaillierte Erklärung** von HTML, CSS & Layout
- Alle Events kommen aus einer Google Sheets Tabelle (Link im `js/main.js`)
