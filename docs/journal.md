# Arbeitsprotokoll – Catholic Crowd Graz

## Phase 1: Datensammlung (Grundlagen)

**09.04.2026 – Projekt-Setup & Methodologie**
- Promptotyping-Artikel analysiert (Christopher Pollin)
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

## Phase 3: Distillation (Anforderungen)

**09.04.2026 – Requirements dokumentiert**
- 32 MUST-HAVE Requirements definiert (8 Kategorien)
- 12 NICE-TO-HAVE Features aufgelistet
- 10+ Offene Fragen für Phase 2 Exploration
- 3 User Stories: Student-Entdeckung, Org-Promotion, Employer-Recruiting
- Problem: Erste Fassung zu lang (~800 Zeilen), viele Redundanzen

**09.04.2026 – Requirements komprimiert**
- Dokumentation um 60% gekürzt (~800 → ~400 Zeilen)

**09.04.2026 – Konsistenz-Check durchgeführt**
- vague Formulierungen markiert (z.B. "lesbar" undefined, "gekürzt" ohne Zeichenlimit)
- Widersprüche gefunden: "sofort" vs. "5–10 Min Refresh", "Endzeit-default" redundant, "Suchfunktion" doppelt

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

---

## Status Übersicht

**ABGESCHLOSSEN ✅**
- Phase 1 (Datensammlung): Sheets Integration + 5 Organisationen
- Phase 3 (Distillation): 32 MUST + 12 NICE Requirements + Konsistenz-Check
- Visual Design: Farben + Typography + Responsive Framework
- Legal Foundation: Impressum HTML

**OFFEN ⏳**
- Phase 2 (Exploration): Kalender-Library (FullCalendar vs. Vanilla), Filter-Position, organizations.json Format
- Phase 4 (Implementation): HTML/CSS/JS Code generieren
- Vague Items lösen (10 noch ausstehend)
- Git Commits (Phase 1, Phase 3, Phase 4.1–4.5)

**VERWORFEN ❌**
- Google Sheets API-Key Approach (zu komplex)
- Google Apps Script Webhooks (overkill)
- Elegant Typography (Lora)
- Ranges-basierte Breakpoints (Min-Width einfacher)
- Organisations-individuelle Farben (zu viele Farben → 2-Farben-System statt)

---

## Lessons Learned

- **Dokumentation vorher = weniger Refactoring nachher:** Konsistenz-Check in Phase 3 hat 12 potenzielle Implementierungs-Probleme früh erkannt
- **CSV Export >> API für Public Data:** Einfacher, keine Auth, keine Rate Limits, besser für Studentenprojekt
- **Design-Decisions müssen Beginns klar sein:** Farben + Typography früh zu fixieren hilft CSS-Generierung später

---

## Phase 4: Implementation (Vanilla JavaScript MVP)

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


## Lessons Learned (Updated)

- **Farben sind subjektiv:** 7+ Iterationen bis zum "richtigen" Grün/Gold – visuelle Entscheidungen iterativ treffen
- **Async/Await critical in modernem JavaScript:** Eine fehlende `await` verursacht schwierig zu findende Timing-Bugs
- **CSS `table-layout: fixed` löst viele Layout-Probleme:** Responsive Tabellen consistent halten
- **Vanilla JS Kalender machbar:** ~300 Zeilen ohne Libraries, verstehen des Codes essentiell für schnelle Anpassungen
- **Dokumentation (visual-design.md) muss mit Code synchron sein:** Post-hoc Doku ist schneller als pre-hoc, solange Consistency-Checks erfolgen

---

## Phase 4.5: Code Optimization & Documentation

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

**13.04.2026 – Event-Panel Bug identifiziert & gefixt**
- Problem: Side-Panel beim Laden der Website direkt offen
- Root Cause: CSS fehlte `display: none;` → Panel war standardmäßig sichtbar
- Fix: `display: none;` hinzugefügt zu `#event-panel` CSS
- Resultat: Panel bleibt versteckt, öffnet sich nur bei Klick auf Event
- Code-Änderung: 1 Zeile CSS
- Tutorial aktualisiert: 7.1 Sektion erklärt jetzt warum `display: none;` kritisch ist
- ✅ Status: Bug fixed, tutorial updated

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

**13.04.2026 – Status: Phase 4 gesamt ABGESCHLOSSEN ✅**
- ✅ Code optimized (460 Zeilen, 25–30% Reduktion)
- ✅ Tutorial comprehensive (3,500 Zeilen)
- ✅ Bug-fixes (Event-Panel display: none)
- ✅ README.md (GitHub-ready)


---

## Summary Status (13.04.2026)

| Bestandteil | Status | Details |
|-----------|--------|---------|
| HTML | ✅ Complete | 70 Zeilen, 7 semantische Elemente |
| CSS | ✅ Optimized | 460 Zeilen, responsive, 2-Farben-System |
| JavaScript | ✅ Working | 300+ Zeilen, Error-Handling, CSV-Loading |
| Bugs | ✅ Fixed | Timezone, Async, Layout, Panel-Display |
| Design | ✅ Finalized | Grün `#b8de97`, Gold `#b8a127` |
| Tutorial | ✅ Complete | 3,500 Zeilen, 11 Kapitel |
| README | ✅ Complete | GitHub-ready mit Setup-Anleitung |
| Git Commits | ⏳ Pending | Ready after final tests |
| Graphics PDF | ⏳ Optional | Awaiting user approval |
