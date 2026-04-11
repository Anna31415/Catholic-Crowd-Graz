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
1. Header
2. Banner
3. Kalenderansicht
4. Footer

---

## Kalenderansicht (zentral)

**Grundkonzept (aus requirements.md Must 6–11):**
- Monatskalender als Startseite
- Navigation: Vorheriger/Nächster Monat
- Event-Titel sichtbar (gekürzt bei Bedarf) ⚠️ OFFEN: Zeichenlimit?
- Click auf Event → Side-Panel mit Volldetails
- Auto-Refresh alle 5–10 Minuten

## Farben

**Primärfarben:**
- 🔴 **Primary Red** `#8B3A3A` (Church Red – traditionell, würdevoll, katholisch)
- 🟨 **Secondary Cream** `#F5DEB3` (Warm & einladend – signalisiert Jugend & Vielfalt)

**Neutrale Farben:**
- ⚪ Weiß `#FFFFFF` (Hintergrund)
- ⬛ Schwarz `#000000` (Text)
- 🩶 Dunkelgrau `#333333` (Text Secondary)
- 🩶 Hellgrau `#EEEEEE` (Borders, subtle backgrounds)

**Verwendung:**
- Header/Navigation: Primary Red `#8B3A3A`
- Buttons (CTA): Secondary Cream `#F5DEB3`
- Hover-States: Mischung aus Rot + Cream
- Events im Kalender: Alle Organisationen nutzen diese 2 Farben (kein individual color-coding)
  - z.B. Event-Boxes alternieren oder nutzen Rot als Akzent


---

## Offene Designfragen (Phase 2)

| Frage | Relevanz |
|-------|----------|
| Filter-Position (Sidebar/Dropdown/Modal)? | ⚠️ Beeinflusst Layout |
| Organisations-Bilder/Logos Quelle? | ⚠️ Datenstruktur |

---
