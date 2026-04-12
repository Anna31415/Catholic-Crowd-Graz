# Visual Design – Catholic Crowd Graz


## Typography

**Headlines (H1–H4):** `Roboto` 700/500
- Begründung: Modern & klar (passt zu "jung & vielfältig"), aber trotzdem würdevoll genug für religiösen Kontext
- Google Fonts → kostenlos, keine externen Dependencies

**Body Text:** `Open Sans` 400/600
- Begründung: Optimiert für Web-Lesbarkeit auf allen Geräten (wichtig für 320–1200px Responsive)
- Jugendlich zugänglich ohne unprofessionell zu wirken
- Google Fonts → kostenlos

**Font-Größen (responsive):**
- Mobile (320px): 16px body, 18–24px headlines
- Tablet (768px): 16px body, 20–32px headlines
- Desktop (1200px): 17px body, 24–36px headlines

Begründung für Größen: Readability WCAG-konform, aber nicht zu groß auf Desktop

---

## Responsive Breakpoints

**MUST-HAVE**
Min-Width Breakpoints:
- Mobile: 320px
- Tablet: 768px
- Desktop: 1200px


## Struktur

1. **Header** 
   - Überschrift "Catholic Crowd Graz" (weiß)
   - Navigation "Start", "Veranstaltungen", "Über" (Weiß, mit Gold Underline Hover)
   - Hintergrund: Grün `#b8de97` mit Gold Unterstrich (3px)

2. **Banner** 
   - Tagline: "Veranstaltungen der katholischen Hochschul- und Jugendorganisationen in Graz"
   - Weiß mit doppeltem Schatten für Lesbarkeit
   - Hintergrund-Image mit Parallax-Effekt

3. **Kalenderansicht (Main)**
   - Monatsname (Weiß mit Gold Unterstrich)
   - Kalender (Grün Header, weiße Zellen, fixe Spaltenbreiten)
   - Navigation Buttons (Grün mit Hover-Gold)

4. **Über-Bereich**
   - Vollbreite Sektion mit 2–3 Sätzen
   - Text zentriert, Hintergrund mit Overlay

5. **Footer** 
   - Links: "Impressum", "Kontakt"
   - Hintergrund: Dunkelgrau


---

## Kalenderansicht (zentral)

**Grundkonzept (aus requirements.md Must 6–11):**
- Monatskalender als Startseite (6-Wochen-Gitter)
- Navigation: Vorheriger/Nächster Monat (grüne Buttons mit goldenen Hover-States)
- Event-Titel sichtbar und gekürzt mit "..." bei Platzmangel
- Click auf Event → Side-Panel mit Volldetails
- Auto-Refresh alle 5 Minuten via Google Sheets CSV
- **Tage-Markierung:**
  - Heute: Subtiler Gold-Hintergrund (30% Opazität) zur Orientierung
  - Ausgewählter Tag: Grüner Rahmen (2px) ohne Füllung
  - Alle Spalten gleichmäßig breit (fixed table-layout)

## Farben

**Primärfarben:**
- 🟢 **Primary Green** `#b8de97` (Limettes Grün – weich, freundlich, modern)
- 🟨 **Secondary Gold** `#b8a127` (Dunkles Goldbraun – elegant, warm, natürlich)

**Neutrale Farben:**
- ⚪ Weiß `#FFFFFF` (Hintergrund, Text)
- ⬛ Schwarz `#000000` (nicht verwendet)
- 🩶 Dunkelgrau `#333333` (Text Secondary)
- 🩶 Hellgrau `#EEEEEE` (Borders, subtle backgrounds)

**Verwendung:**
- **Header:** Pastelgrün `#b8de97` (Hintergrund)
- **Header-Titel "Catholic Crowd Graz":** Gold `#b8a127`
- **Header-Unterstrich:** Gold `#b8a127` (3px)
- **Navigation (Start, Veranstaltungen, Über):** Weiß
- **Buttons (Vorheriger/Nächster Monat):** Grün `#b8de97` (Hintergrund), Weiß Text; Hover → Gold `#b8a127`
- **Wochentage (Mo, Di, Mi...):** Grün `#b8de97` (Hintergrund), Weiß Text
- **Monatsname:** Weiß mit Schatten, Gold `#b8a127` Unterstrich
- **Heute-Markierung:** Gold `#b8a127` Hintergrund (30% Opazität)
- **Ausgewählter Tag:** Grün `#b8de97` Rahmen (2px, ohne Füllung)
- **Events im Kalender:** Text in dunkelgrau auf weißem Hintergrund


