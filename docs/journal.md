# Arbeitsprotokoll – Catholic Crowd Graz

## Phase 1: Datensammlung (Grundlagen)

**09.04.2026 – Projekt-Setup & Methodologie**
- Promptotyping-Artikel analysiert (Christopher Pollin)
- 4-Phase-Struktur übernommen: Preparation → Exploration → Distillation → Implementation
- Projektumfang geklärt: Event-Plattform für 5 katholische Organisationen in Graz

**09.04.2026 – Google Sheets Integration**
- CSV-Export-Methode als Hauptzugang gewählt (kein API-Key nötig, einfacher)
- Alternative Methoden (Google Sheets API, Google Apps Script) dokumentiert, aber verworfen
- Event-Struktur definiert: 7 Spalten (Titel, Org, Datum, Anfangszeit, Endzeit, Ort, Beschreibung)
- Fallback-Strategie: localStorage Cache + static.json bei Ausfall

**09.04.2026 – Organisationen recherchiert & dokumentiert**
- 5 Organisationen erfasst: KHG, KHJ, Theozentrum, ÖCV, Katholische Jugend Graz
- Daten: Kontakt, Website, Social Media, Beschreibung für jede Organisation
- Format: Markdown (data/organisations.md) für menschliche Lesbarkeit

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
- Alle Informationen erhalten, nur Verbosity entfernt
- Strukturelle Reorganisation für bessere Klarheit

**09.04.2026 – Konsistenz-Check durchgeführt**
- 12 vague Formulierungen markiert (z.B. "lesbar" undefined, "gekürzt" ohne Zeichenlimit)
- 3 Widersprüche gefunden: "sofort" vs. "5–10 Min Refresh", "Endzeit-default" redundant, "Suchfunktion" doppelt
- 4 Lücken identifiziert: Logos/Bilder-Quelle, Event-Statistiken, organizations.json-Workflow, Name-Konsistenz-Logik
- 3 Items als konsistent bestätigt ✅
- 4 Abhängigkeiten auf Phase 2 erkannt

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
- Elegant Typography (Lora) für Milestone 1 (Scope Creep)
- Ranges-basierte Breakpoints (Min-Width einfacher)
- Organisations-individuelle Farben (zu viele Farben → 2-Farben-System statt)

---

## Lessons Learned

- **Promptotyping ist strukturiert aber nicht rigid:** Wir haben Phasen gemischt (Distillation vor vollständiger Exploration), aber es funktioniert, solange Konsistenz-Checks kontinuierlich erfolgen
- **Dokumentation vorher = weniger Refactoring nachher:** Konsistenz-Check in Phase 3 hat 12 potenzielle Implementierungs-Probleme früh erkannt
- **CSV Export >> API für Public Data:** Einfacher, keine Auth, keine Rate Limits, besser für Studentenprojekt
- **Design-Decisions müssen Beginns klar sein:** Farben + Typography früh zu fixieren hilft CSS-Generierung später
