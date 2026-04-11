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
23. Kalender lesbar auf allen Größen ⚠️ **[VAGE: Definition "lesbar" (Contrast? Font-size?)]**
24. Filter zugänglich auf allen Größen ⚠️ **[ABHÄNGIG VON Q2: Position wird noch festgelegt]**

### Qualität (4×)
25. Fallback wenn Google Sheets down ⚠️ **[VAGE: Cache first oder Message first? Priorität?]** (gecachte Daten oder Meldung)
26. Fehlerhafte Events ⚠️ **[VAGE: Definition "fehlerhaft"? Nur NULL-Felder oder auch ungültige Formate?]** ignorieren, nicht brechen
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
1. Kalender-Library? (FullCalendar.js vs. Vanilla JS vs. andere)
2. Filter-Position? (Sidebar, Dropdown, Modal, Kombination) → **WIRKT SICH AUS auf:** Must 17, Must 23-24
3. organizations.json Format? (Flach oder nested) → **WIRKT SICH AUS auf:** HTML-Struktur

**Technisch:**
10. Lokalisation: Deutsch oder mehrsprachig? ✅

**ZUSÄTZLICHE LÜCKEN ERKANNT:**
- **Bilder/Logos:** Point 44 (Nice) erwähnt "Lazy Loading für Bilder", aber es wird nie definiert, woher Organisations-Logos/Event-Bilder kommen
  → LÜCKE: Datenstruktur für Bilder fehlt
- **Event-Statistiken:** User Story "Arbeitgeber" erwähnt, aber nicht in Requirements
- **"Sofort" vs. "5–10 Min":** User Story vs. Must-Have Widerspruch

---

### ⚠️ WIDERSPRÜCHE / LÜCKEN ZUM BEHEBEN

| Problem | Wo | Betroffene Items |
|---------|-----|---|
| **WIDERSPRUCH:** "Sofort" vs. "5–10 Min Refresh" | User Story + Must 11 | Klären: Real-time oder 5-10 Min? |
| **WIDERSPRUCH:** Q8 "Endzeit-default flexibel?" aber Must 2 sagt "+90min" | Offene Fragen | Q8 löschen oder Must 2 ändern |
| **LÜCKE:** Event-Statistiken erwähnt (User Story) aber nicht definiert | Nice-Have & User Story | Entweder definieren oder aus Story streichen |
| **LÜCKE:** Organisations-Bilder/Logos nicht definiert | Nice 44 (Lazy Loading) | Woher kommen Bilder? Datenstruktur fehlt |
| **LÜCKE:** organizations.json wird nicht erwähnt, wie erstellt | Must 4 | Manuell pflegen? Aus Markdown autogeneriert? |
| **VAGE:** "Lesbar" (Must 23) – keine Definition | Must 23 | Contrast-Anforderung? Font-size? |
| **VAGE:** "Gekürzt bei Bedarf" (Must 8) – wie kurz? | Must 8 | Max. Zeichenlänge definieren |
| **VAGE:** "Schnelles" Zurücksetzen (Must 16) | Must 16 | Konkrete Timing angeben? |
| **VAGE:** "ggf. interaktive Karte" (Nice 36) | Nice 36 | Ja oder nein? Nicht "vielleicht" |
| **ABHÄNGIG auf Exploration:** Filter-Position nicht klar | Must 17, 23-24 | Wartet auf Phase 2 Design-Decision |

- **Google Sheets:** https://docs.google.com/spreadsheets/d/1nbuUu9C1qppWsV4WnVNlCHLYVb3M8D8tVJ-HIBRyg9s/
