# Arbeitsprotokoll – Catholic Crowd Graz

## Datensammlung (Grundlagen)

**09.04.2026 – Projekt-Setup & Methodologie**
- Promptotyping-Artikel analysiert
- 4-Phase-Struktur übernommen: Preparation → Exploration → Distillation → Implementation
- Projektumfang geklärt: Event-Plattform für katholische Organisationen in Graz

**09.04.2026 – Google Sheets Integration**
- CSV-Export-Methode als Hauptzugang gewählt (kein API-Key nötig, einfacher)
- Alternative Methoden (Google Sheets API, Google Apps Script) dokumentiert, aber verworfen
- Event-Struktur definiert: 7 Spalten (Titel, Org, Datum, Anfangszeit, Endzeit, Ort, Beschreibung

**09.04.2026 – Organisationen recherchiert & dokumentiert**
- 5 Organisationen erfasst für eine möglichen Gruppen-Bereich auf der Website
- : KHG, KHJ, Theozentrum, ÖCV, Katholische Jugend Graz
- Daten: Kontakt, Website, Social Media, Beschreibung für jede Organisation
- Format: Markdown (data/organisations.md) für menschliche Lesbarkeit
- Datei wieder verworfen. Spätere eventuelle Einführung eines Gruppen-Bereichs möglich.
---


## Visual Design (Ästhetik & Typing)

**10.04.2026 – Visual Design Framework erstellt**
- Responsive Breakpoints dokumentiert: 320px, 768px, 1200px
- Kalenderansicht-Konzept beschrieben
- Offene Designfragen markiert (noch keine Entscheidungen)

**10.04.2026 – Farben entschieden (Option B)**
- Primärfarbe: Church Red `#8B3A3A` (traditionell, würdevoll)
- Sekundärfarbe: Warm Cream `#F5DEB3` (offen, jugendlich, vielfältig)
- Neutrale: Weiß, Schwarz, Dunkelgrau, Hellgrau
- Begründung: Catholic heritage + modern accessibility
- Farben später in helles grün und braun-gold geändert

**10.04.2026 – Typography entschieden**
- Headlines: Roboto 700/500 (klar, würdevoll, modern)
- Body Text: Open Sans 400/600 (web-optimiert, hochlesbar)
- Responsive Größen: 16–17px Body, 18–36px Headlines je nach Breakpoint
- Elegante Akzente (Lora) verworfen → zu komplex für M1

---

## Rechtliche Foundation

**10.04.2026 – Impressum erstellt**
- Format: HTML (imprint.html)
- Betreiber: Anna Köll (markiert als Studentenprojekt)
- Adresse: Karl-Franzens-Universität Graz
- Lizenzangaben: Google Fonts (OFL), eigenem Code
- Haftungsausschluss: Google Sheets externe Quelle, keine Garantie auf Daten
- Datenschutz: Nur localStorage (Filter, Favoriten)

---

## Clarifications & Decisions

**11.04.2026 – Breakpoints geklärt**
- Entschieden: Min-Width Strategie (Standard CSS Media Queries)
- 0–767px = Mobile, 768–1199px = Tablet, 1200px+ = Desktop
- Ranges-Interpretation verworfen (zu umständlich)
- Requirements aktualisiert, Widersprüche-Tabelle bereinigt



## HTML CSS und JavaSript
Implementation (Vanilla JavaScript MVP)

**12.04.2026 – HTML-Struktur erstellt (index.html)**
- Semantische Struktur: Header (Nav) → Banner → Calendar → About → Footer
- Event-Details Modal (Side-Panel) mit Hidden-State
- CSS & JS Verlinkung
- Impressum als separate Seite (imprint.html) DSGVO-konform
- ✅ Status: MVP-ready, kein Filter (per User Request)

**12.04.2026 – CSS-Styling implementiert (css/style.css)**
- CSS-Variablen zentral: Farben, Fonts, Spacing, Breakpoints
- Header: Pastelgrün `#A8E6CF` (später mehrfach angepasst)
- Responsive Grid-Layout für 320px/768px/1200px
- Calendar: 7-Spalten Table mit Hover-Effects
- About-Sektion: Full-width mit Overlay
- Footer: Sticky, Dark Background
- ✅ Status: Fully responsive, alle Breakpoints getestet

**12.04.2026 – JavaScript Calendar Engine (js/main.js)**
- CSV-Loading from Google Sheets with error handling
- Event-Parsing: 7 Struktur-Spalten mit Validierung (Tier 1: skip null title/date/org)
- Calendar-Rendering: 6-Wochen-Grid mit dynamischen Daten
- Event-Detail Panel: Click auf Day → Modal mit Volldetails
- Navigation: Prev/Next Month Buttons
- Auto-Refresh: 5-Minuten Intervall

**12.04.2026 – Filter-Funktionalität entfernt (per User Request)**
- User-Input: "Die Filterung soll noch nicht im Prototyp inkludiert sein"
- Aktion: Deleted `renderOrganizationFilters()`, removed `selectedOrganizations` Set, cleaned filter listeners
- Resultat: Alle Events werden angezeigt, MVP schlanker
- ✅ Status: Filter-Code entfernt, Kalender zeigt ALL events

**12.04.2026 – Bugfixes durchgeführt**

1. **Timezone-Bug:** Events 1 Tag später angezeigt
   - Root Cause: `toISOString()` konvertiert zu UTC vor Datumsteil-Extraktion
   - Fix: Lokales Datumformat (getFullYear + padStart)
   - ✅ Resolved

2. **Async-Timing Bug:** April-Events erst nach Mai-Navigation sichtbar
   - Root Cause: `renderCalendar()` aufgerufen, bevor `loadEvents()` fertig war
   - Fix: Async/await in DOMContentLoaded Event Listener (`await loadEvents()`)
   - ✅ Resolved
   
## Design & Color Refinements

**12.04.2026 – Design & Color Refinements (mehrere Iterationen)**

*Details:*
- Button Hover-Farben: von Dunkelrot → Gold (`#FFD700` später `#d6c56b` später `#b8a127`)
- "Catholic Crowd Graz" Titel: Weiß → Leicht-Gold → Weiß mit Gold-Glow → Weiß mit Text-Stroke → Gold mit Underline → Nur Gold
- Monatsname: Added Gold Underline + Text-Shadow für Lesbarkeit
- Wochentage: Headers Farb-Anpassungen für Kontrast
- Finale Farben (12.04.2026 Schluss):
  - Grün: `#b8de97` (Limettes Grün)
  - Gold: `#b8a127` (Dunkles Goldbraun)

**12.04.2026 – Feature: Heute-Markierung & Auswahl-Tag**
- Heute (12.04.2026): Subtiler Gold-Hintergrund (30% Opazität)
- Ausgewählter Tag: Grüner Rahmen (2px) ohne Füllung (später User-Request reversal)
- Implementation: CSS-Klassen + JS Variable `selectedDate`
- ✅ Status: Beide Features arbeiten korrekt

**12.04.2026 – Layout Fixes**
- Problem: Spalten mit Events breiter als Leerspalten
- Fix: `table-layout: fixed` + `.event-item { text-overflow: ellipsis }`
- Resultat: Alle 7 Spalten gleichmäßig, Texte gekürzt mit "..."
- ✅ Status: Konsistentes Kalender-Layout

**12.04.2026 – Text-Readability Improvements**
- Text-Shadow zu verschiedenen Elementen hinzugefügt (später entfernt: User-Request)
- Gegenelement: 0.5px Umrandung (`-webkit-text-stroke`) für Header/Nav/Buttons/Days
- Finale Choice: Shadow entfernt, Umrandung später entfernt → Clean Design
- ✅ Status: Balanciert zwischen Lesbarkeit & Ästhetik

**12.04.2026 – Farben: Mehrfache Iterationen**
- Ausgangspunkt: Pastel Green `#A8E6CF` + Gold `#FFD700` (aus Konzept)
- Iteration 1: Grün zu hell? → `#72c280` (darker)
- Iteration 2: Zu dunkel? → `#91ffa4` (lighter/neon)
- Iteration 3: Neon zu much? → `#a4fc58` (lime)
- Revert & Stabilize → `#a7d97c` → `#abcf8c` → `#b8de97` (Final Green)
- Gold: `#D1B000` → `#d6c56b` → `#bda83c` → `#b8a127` (Final Gold)
- Result: 2-Farben-System konsistent, modern, warm


## Code Optimization & Documentation

**13.04.2026 – Code Cleanup Pass 1 durchgeführt**
- Entfernt: 7 HTML-Kommentare aus `index.html` (unnötig für Produktionscode)
- Entfernt: `main::before` Pseudo-Element aus CSS (war invisible/unused)
- Entfernt: `.about-content` CSS-Klasse (wurde nie genutzt)
- Resultat: ~40 Zeilen entfernt, visuell/funktionell 100% gleich
- ✅ Status: First optimization pass complete

**13.04.2026 – Code Cleanup Pass 2 durchgeführt**
- Entfernt: `--black` CSS-Variable (nur 1x benutzt, unnötig)
- Entfernt: `h4`–`h6` Heading-Regeln aus CSS (Elemente nicht im HTML)
- Entfernt: Vererbte Properties (z.B. `font-family: 'Roboto'` auf `button`, war schon global)
- Resultat: ~60 weitere Zeilen entfernt
- ✅ Status: Second optimization pass complete, 100% visual/functional match

**13.04.2026 – Code Cleanup Pass 3 durchgeführt**
- Entfernt: Duplizierte Color-Properties (z.B. `header color: var(--dark-gray)` bereits geerbt)
- Entfernt: `footer color` (redundant, schon global)
- Entfernt: `.about h2 font-size` & `.about p line-height/font-size` (Cascade intakt)
- Entfernt: Paddings-Duplikation in Mobile Header
- Entfernt: `border: none` von Button (CSS Reset, nicht nötig)
- Entfernt: Media Query Comment-Labels (unnötige Komplexität)
- Resultat: ~50 weitere Zeilen entfernt
- **Finale CSS-Größe:** ~460 Zeilen (von ursprünglich ~610 = 25–30% Reduktion)
- ✅ Status: Third optimization pass complete, Code bleibt zu 100% funktionsfähig

## Tutorials erstellt
**13.04.2026 – Comprehensive Tutorial erstellt (3,500+ Zeilen)**
- Format: Markdown (`/tutorial/TUTORIAL.md`)
- Struktur: 11 Hauptkapitel mit 60+ Subsektionen
- Inhalt:
  1. Projektstruktur & Überblick
  2. HTML Semantische Struktur (jedes Element erklärt)
  3. CSS Grundlagen (Variables, Reset, Global Styles)
  4. CSS Header & Navigation
  5. CSS Banner (Parallax-Effekt)
  6. CSS Kalender
  7. CSS Event-Panel
  8. CSS Footer (Sticky Position)
  9. CSS About (Overlay-Technik)
  10. Responsive Design Strategy
  11. FAQ & Presentation Tips
- Features: ASCII-Diagramme, Visual Explanations, Code-Blöcke, Tabellen, "WIRD SPÄTER ERKLÄRT" Marker
- Alle Erklärungen basieren auf aktuellem Code (nicht generisch)
- ✅ Status: Tutorial complete, presentation-ready

**13.04.2026 – Tutorial-Qualität bewertet**
- User-Frage: "Ist das anfängerfreundlich?"
- Ehrliche Bewertung: Gut für Basis-Konzepte, aber zu komplex für absolute Anfänger bei Pseudo-Elementen, Z-Index, Transforms
- Vorschlag: Intro-Kapitel + Beginner vs. Advanced Versionen + mehr Visualisierungen
- User Decision: Keep current format + create PDF/HTML with graphics (separate version)
- ✅ Status: Quality assessment complete, improvement suggestions noted

## Bug gefixt

**13.04.2026 – Event-Panel Bug identifiziert & gefixt**
- Problem: Side-Panel beim Laden der Website direkt offen
- Root Cause: CSS fehlte `display: none;` → Panel war standardmäßig sichtbar
- Fix: `display: none;` hinzugefügt zu `#event-panel` CSS
- Resultat: Panel bleibt versteckt, öffnet sich nur bei Klick auf Event
- Code-Änderung: 1 Zeile CSS
- Tutorial aktualisiert: 7.1 Sektion erklärt jetzt warum `display: none;` kritisch ist
- ✅ Status: Bug fixed, tutorial updated

## Readme erstellt
**13.04.2026 – README.md für GitHub erstellt**
- Inhalt:
  - Projekt-Name & Beschreibung (Was ist die Seite?)
  - Wat is die Seite macht
  - Anleitung: Wie man es öffnet (Lokal + Online)
  - Projektstruktur (Datei-Übersicht)
  - Technische Details (Stack, Browser, Responsive)
  - Links zu Tutorial & Datenquellen
  - Metadaten (Entwickler, Semester)
- Format: Markdown mit Emojis, klare Struktur
- Platzhalter: GitHub-Username & Live-Website URL (noch auszufüllen)
- ✅ Status: GitHub-ready README complete



## Suchfunktion Implementation

**Mai 2026 – Search-Funktion vollständig implementiert**

**HTML-Erweiterung (index.html)**
- `#search-container` hinzugefügt:
  - Input-Feld: `#search-input` mit Placeholder "Nach Event suchen..."
  - Suchen-Button: `#search-button`
  - Suche zurücksetzen-Button: `#clear-search`
- `#search-panel` hinzugefügt:
  - Close-Button: `#close-search-panel` (✕)
  - Titel: `#search-panel-title` ("Suchergebnisse")
  - Results-Container: `#search-panel-results`

**JavaScript Search Engine (js/search.js – neue Datei)**
- `filterEventsBySearch(searchText)` Funktion:
  - Case-insensitive Suche in Titel + Organisation + Beschreibung
  - Ergebnisse sortiert nach Datum (aufsteigend)
  - Leere Suche zeigt "Keine Events gefunden"
  - Search-Panel öffnet/schließt dynamisch
- `renderEventItem(event)` Hilfsfunktion:
  - Formatiert Event-Details mit Icons (📅, 🕐, 📍, 📝)
  - Datum formatiert mit `toLocaleDateString('de-AT')`
  - Konditionale Anzeige: Beschreibung nur falls vorhanden, Endzeit optional
- Event-Listener Setup:
  - Enter-Taste im Suchfeld triggert Suche
  - Klick auf "Suchen"-Button triggert Suche
  - "Suche zurücksetzen"-Button leert Input + setzt filteredEvents zurück
  - Close-Button schließt Search-Panel
- Integriert mit main.js: `filterEventsBySearch()` ruft `renderCalendar()` auf

**CSS Search-Styling (css/style.css – erweitert)**
- `#search-container`: Flex-Layout mit Gap
- `#search-input`: 
  - Border Focus-State: Primary Green
  - Box-Shadow bei Focus
  - Flex: 1 für responsive Width
- `#search-button` & `#clear-search`: 
  - Button-Styling (Grün/Gold)
  - Hover-Effects
- `#search-panel`:
  - Display: none (hidden by default)
  - Wird von search.js ein-/ausgeblendet
  - Result-Items mit Meta-Daten (Icons, Datum, Zeit, Ort)
- Mobile Responsive:
  - `#search-container`: Flex-Direction Column bei 767px
  - `#search-input`: Width: 100%

**Integration & Testing**
- Search funktioniert unabhängig von Kalender-Navigation
- Suche filtert Kalender-Ansicht nicht (nur Search-Panel angezeigt)
- Bei Clear: Alle Events wieder im Kalender sichtbar
- ✅ Status: Search-Funktion fully functional


## Last steps: Optimizaton for Submission