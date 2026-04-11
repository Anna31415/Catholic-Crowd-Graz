# Requirements – Catholic Crowd Graz

## MUST-HAVE

### Kalenderansicht – ZENTRAL
- Startseite zeigt Monatskalender mit allen Events
- Navigation: Vorheriger/Nächster Monat
- Event-Titel im Kalender sichtbar(gekürzt bei Bedarf)
- Click → Side-Panel mit Volldetails
- Auto-Refresh alle 5–10 Minuten



### Responsive (3×)
22. Mobile (0–767px): 320px Breakpoint | Tablet (768–1199px): 768px Breakpoint | Desktop (1200px+): 1200px Breakpoint ✅ **[ENTSCHIEDEN: Min-Width Strategie]**
23. Kalender lesbar auf allen Größen ✅ **[ENTSCHIEDEN: Font 16–17px Body, 18–36px Headlines | Kontrast 4.5:1 WCAG AA | Line-Height 1.5]**
24. Filter zugänglich auf allen Größen ⚠️ **[ABHÄNGIG VON Q2: Position wird noch festgelegt]**

### Qualität (4×)
25. Fallback wenn Google Sheets down ✅ **[ENTSCHIEDEN: Cache-First Strategie | localStorage speichert letzte erfolgreiche Events | Bei Fehler: gecachte Events nutzen]** (gecachte Daten oder Meldung)
26. Fehlerhafte Events ✅ **[ENTSCHIEDEN (M1): Validierung Tier 1 nur | SKIP Events: Titel LEER ODER Datum LEER/ungültig ODER Org-Name LEER | Org-Name gegen organizations.json prüfen = später (Q3)]** ignorieren, nicht brechen
27. Keine Konsolen-Fehler
28. Graceful degradation bei Datenfehlern


## NICE-TO-HAVE

- Filterund nach Organisationen,
Mehrfachauswahl möglich
- Mobile: Dropdown oder Hamburger-Menu ⚠️ **[OFFEN in Q2 – noch zu explorieren]**; Desktop: Sidebar oder Top-Navigation ⚠️ **[OFFEN in Q2]**)
- Zusätzliche Filter: Uhrzeit (Vorm/Nachm/Abend) ⚠️ **[VAGE: Exakte Grenzzeiten?]**, Ort, Suchtext
- Organisations-Detail-Seite (alle Events der Org, Kontakt, Social Media)
- Alternative Views: Timeline nach Ort, ggf. interaktive Karte
- Suchfunktion (Titel, Beschreibung, Ort, Org-Name)
- Event-Export als .ics (iCalendar) für Kalender-Apps
- Share-Buttons für Social Media (Facebook, WhatsApp, Email)
- Dark Mode / Light Mode Toggle
- Event-Tags (z.B. "Spirituell", "Bildung", "Sport", "Kultur")
- Bilder für die Events

---

## OFFENE FRAGEN

**Design & Tech:**
1. Kalender-Library? ✅ **[ENTSCHIEDEN: Vanilla JS | Grund: Lernziel, volle Kontrolle, keine Dependencies, perfekt für HTML/CSS-Tutorial]**
2. Filter-Position? (Sidebar, Dropdown, Modal, Kombination) → **WIRKT SICH AUS auf:** Must 17, Must 23-24


- **Google Sheets:** https://docs.google.com/spreadsheets/d/1nbuUu9C1qppWsV4WnVNlCHLYVb3M8D8tVJ-HIBRyg9s/
