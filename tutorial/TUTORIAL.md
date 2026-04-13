# Catholic Crowd Graz – HTML & CSS Tutorial

**Autor:** Dein eigenes Projekt  
**Datum:** April 2026  
**Ziel:** Diese Website reproduzieren und erklären können – Zeile für Zeile

---

## 📋 Inhaltsverzeichnis

1. [Projektstruktur & Überblick](#1-projektstruktur--überblick)
2. [HTML – Semantische Struktur](#2-html--semantische-struktur)
3. [CSS Grundlagen – Design Tokens & Reset](#3-css-grundlagen--design-tokens--reset)
4. [CSS Header & Navigation](#4-css-header--navigation)
5. [CSS Banner & Hero-Bereich](#5-css-banner--hero-bereich)
6. [CSS Kalender-Bereich](#6-css-kalender-bereich)
7. [CSS Event-Panel](#7-css-event-panel)
8. [CSS Footer](#8-css-footer)
9. [CSS About-Sektion](#9-css-about-sektion)
10. [Responsive Design – Wie alles auf Handy passt](#10-responsive-design--wie-alles-auf-handy-passt)
11. [Häufige Fragen & Tipps für die Präsentation](#11-häufige-fragen--tipps-für-die-präsentation)

---

## 1. Projektstruktur & Überblick

### 📁 Wie ist dein Projekt organisiert?

```
Catholic-Crowd-Graz/
├── index.html              # Hauptseite (die Kalender-Website)
├── imprint.html            # Impressum/Datenschutz
├── css/
│   └── style.css          # Alle Styling-Regeln
├── js/
│   └── main.js            # JavaScript (wird später erklärt)
├── images/
│   └── pexels-usidz-36551806.jpg  # Hintergrundbild
└── tutorial/
    └── TUTORIAL.md        # Dieses Dokument
```

### 🎯 Was tut die Website?

**Catholic Crowd Graz** ist ein **Event-Kalender**:
- Zeigt katholische Veranstaltungen in Graz
- Organisiert nach Monaten (April, Mai, Juni...)
- Klick auf ein Datum → Details des Events öffnen sich
- Responsive Design: funktioniert auf Handy, Tablet & Desktop

### 🤝 Zusammenhang HTML + CSS

- **HTML** = das Gerüst (welche Elemente brauchen wir?)
- **CSS** = das Design (wie sieht es aus?)
- **JavaScript** = die Interaktion (was passiert beim Klick?) ← *wird später erklärt*

---

## 2. HTML – Semantische Struktur

### Was ist "semantisches HTML"?

**Semantic HTML** = HTML-Elemente, die **nicht nur sagen WAS auf der Seite ist, sondern AUCH was sie bedeuten**.

❌ **Falsch (nicht semantisch):**
```html
<div class="menu">
  <div class="item"><a href="/">Home</a></div>
</div>
```

✅ **Richtig (semantisch):**
```html
<nav>
  <a href="/">Home</a>
</nav>
```

Warum? Weil Browser, Suchmaschinen und Screen-Reader verstehen, dass das eine Navigation ist.

---

### 2.1 Die HEAD-Section

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catholic Crowd Graz – Event Calendar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
```

#### 📍 Zeile für Zeile:

| Code | Was es tut | Warum? |
|------|-----------|-------|
| `<!DOCTYPE html>` | Sagt dem Browser: "Das ist HTML5" | Browser weiß, wie er die Seite rendern soll |
| `<html lang="de">` | Die ganze Seite ist Deutsch | Für Suchmaschinen & Screen-Reader wichtig |
| `<meta charset="UTF-8">` | Zeichenkodierung: "Ä, Ö, Ü richtig anzeigen" | Sonst sieht man Müll-Zeichen |
| `<meta name="viewport"...>` | **WICHTIG für Handys!** Sagt: "Seite soll sich Bildschirmgröße anpassen" | Ohne das sieht die Seite auf Handy winzig aus |
| `<title>` | Der Name im Browser-Tab | HTML-Metainfo (nicht auf Seite sichtbar) |
| `<link rel="stylesheet"...>` | Verbindung zur CSS-Datei | Ohne CSS ist alles hässlich & grau |

---

### 2.2 Der BODY – Die sichtbare Seite

```html
<body>
    <header>...</header>
    <section class="banner">...</section>
    <main>...</main>
    <section class="about">...</section>
    <aside>...</aside>
    <footer>...</footer>
    <script src="js/main.js"></script>
</body>
```

**Warum akurat DIESE Reihenfolge?** = Das ist die logische Lesereihenfolge (von oben nach unten):

1. **Header** = Der erste Eindruck (Logo + Navigation)
2. **Banner** = Hero-Bereich (große Überschrift, Hintergrundbild)
3. **Main** = Der Hauptinhalt (Kalender)
4. **Section About** = Infosektion (was ist diese Website?)
5. **Aside Event-Panel** = Seitenbereich für Details *(wird vom JavaScript reingeklappt)*
6. **Footer** = Finale Info (Impressum, Links)

---

### 2.3 Der HEADER

```html
<header>
    <h1>Catholic Crowd Graz</h1>
    <nav>
        <a href="#start">Start</a>
        <a href="#veranstaltungen">Veranstaltungen</a>
        <a href="#about">Über</a>
    </nav>
</header>
```

#### 📝 Erklärung:

| Element | Bedeutung |
|---------|-----------|
| `<header>` | **Semantisch**: das ist der Kopfbereich der Seite |
| `<h1>` | **Überschrift Stufe 1** = die WICHTIGSTE Überschrift auf der Seite (nur 1x per Seite!) |
| `<nav>` | **Semantisch**: das ist eine Navigation |
| `<a href="#start">` | **Link zu Ankerpunkt** `#start` (= `<section id="start">`) auf DIESER Seite |

**Warum `<nav>` und nicht nur `<div>`?**
→ Search engines wissen sofort: "Das ist Navigation, nicht irgendwelcher Content"

**Warum `href="#start"` (mit #)?**
→ Das ist ein **seiteninterner Link** = springe zu dem HTML-Element mit `id="start"`

---

### 2.4 Der BANNER (Hero-Bereich)

```html
<section class="banner" id="start">
    <p>Veranstaltungen der katholischen Hochschul- und Jugendorganisationen in Graz</p>
</section>
```

| Element | Bedeutung |
|---------|-----------|
| `<section>` | Ein semantischer Block / Bereich |
| `class="banner"` | CSS-Klasse zum Stylen (Hintergrundbild, Farben usw.) |
| `id="start"` | Eindeutige ID (für Navigation: `<a href="#start">`) |
| `<p>` | Absatz = normale Text-Zeile |

**Warum `<section>` statt `<div>`?**
→ `<section>` ist semantischer = Browser/Suchmaschinen verstehen, dass das ein zusammenhängender Inhaltsbereich ist

---

### 2.5 Der MAIN – Der Kalender

```html
<main id="veranstaltungen">
    <div id="calendar-controls">
        <button id="prev-month">← Vorheriger Monat</button>
        <h2 id="month-title">April 2026</h2>
        <button id="next-month">Nächster Monat →</button>
    </div>
    <div id="calendar"></div>
</main>
```

| Element | Bedeutung |
|---------|-----------|
| `<main>` | **Semantisch sehr wichtig**: das ist der HAUPTINHALT der Seite |
| `<div>` | Eine Box (Container) = hier braucht man keine semantische Bedeutung |
| `<button>` | Ein anklickbares Element (nicht `<a>`!) |
| `<h2>` | Überschrift Stufe 2 = untergeordnete Überschrift |

**Warum `<div id="calendar">` und nicht direkt `<table>`?**
→ Das `<div>` ist leer! Das JavaScript füllt es später mit der Kalender-Tabelle

*Hinweis: Das Kalender-HTML wird von JavaScript generiert → wird später erklärt*

---

### 2.6 Die ABOUT-Sektion

```html
<section id="about" class="about">
    <h2>Über diese Plattform</h2>
    <p>
        <strong>Catholic Crowd Graz</strong> ist eine Veranstaltungsplattform...
    </p>
</section>
```

| Element | Bedeutung |
|---------|-----------|
| `<section id="about">` | Ein Bereich mit eigener Navigation (siehe Header) |
| `<strong>` | **Fettgedruckt** (semantisch: wichtiger Text) |

**CSS macht die weiße überlappende Box** mit `:before` pseudo-element (später erklärt)

---

### 2.7 Das EVENT-PANEL (Seitenleiste)

```html
<aside id="event-panel">
    <button id="close-panel">✕</button>
    <div id="event-details"></div>
</aside>
```

| Element | Bedeutung |
|---------|-----------|
| `<aside>` | **Semantisch**: Seiteninhalt (nicht Hauptinhalt) |
| `class="close-panel"` | Button mit X → JavaScript schließt das Panel |
| `#event-details` | Leer! JavaScript füllt hier die Event-Infos rein |

*Hinweis: Das Panel ist WITH `position: fixed` = bleibt beim Scrollen sichtbar (CSS erklärt später)*

---

### 2.8 Der FOOTER

```html
<footer>
    <p>&copy; 2026 Catholic Crowd Graz – Studentenprojekt</p>
    <nav>
        <a href="imprint.html">Impressum</a>
        <a href="mailto:anna.koell@gmx.at">Kontakt</a>
    </nav>
</footer>
```

| Element | Bedeutung |
|---------|-----------|
| `<footer>` | **Semantisch**: der Fußbereich der Seite |
| `&copy;` | **HTML Entity** = © Symbol |
| `href="imprint.html"` | Link zu ANDERER Datei (nicht `#` !) |
| `href="mailto:"` | Spezial-Link = öffnet E-Mail-Programm |

---

### 2.9 Der JavaScript-Link

```html
<script src="js/main.js"></script>
```

**WIRD SPÄTER IM SEMESTER ERKLÄRT** ✓

---

## 3. CSS Grundlagen – Design Tokens & Reset

### 3.1 Was ist CSS?

**CSS** = **C**ascading **S**tyle **S**heets  
= Regeln, die definieren, WIE HTML aussieht

```css
h1 {
  color: blue;           /* Farbe */
  font-size: 2rem;       /* Größe */
  margin-bottom: 1rem;   /* Abstand unten */
}
```

### 3.2 Google Fonts importieren

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap');
```

**Was tut das?**
- Lädt die Schriftarten **Roboto** und **Open Sans** von Google Servers
- `:wght@400;500;700` = 3 verschiedene Strichstärken
  - 400 = normal
  - 500 = halbfett
  - 700 = fett
- So muss man nicht einzelne .ttf-Dateien hochladen

---

### 3.3 CSS-Variablen (Design Tokens)

```css
:root {
  --primary-red: #b8de97;
  --secondary-cream: #b8a127;
  --dark-gray: #333333;
  --light-gray: #EEEEEE;
  --white: #FFFFFF;
  
  --font-headline: 'Roboto', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  
  --font-size-body: 16px;
  --font-size-h1: 1.5rem;
  --font-size-h2: 1.25rem;
  
  --spacing-base: 1rem;
  --spacing-double: 2rem;
  --spacing-half: 0.5rem;
  --spacing-large: 3rem;
  
  --line-height: 1.5;
  --text-shadow-subtle: 1px 1px 3px rgba(0, 0, 0, 0.5);
  --text-shadow-strong: 2px 2px 12px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4);
}
```

#### 🎨 Warum CSS-Variablen?

**OHNE Variablen:**
```css
header { background-color: #b8de97; }
button { background-color: #b8de97; }
h1 { color: #b8de97; }
/* Wenn wir die Farbe ändern wollen: 3x einzeln ändern! 😫 */
```

**MIT Variablen:**
```css
header { background-color: var(--primary-red); }
button { background-color: var(--primary-red); }
h1 { color: var(--primary-red); }
/* Nur 1x die Variable ändern: `:root { --primary-red: #new-color; }` 👍 */
```

#### 📋 Bedeutung der Variablen:

| Variable | Wert | Wozu? |
|----------|------|-------|
| `--primary-red` | `#b8de97` | Hauptfarbe (grüne Buttons, Icons) |
| `--secondary-cream` | `#b8a127` | Sekundärfarbe (Gold accents) |
| `--dark-gray` | `#333333` | Dunkler Text, Footer |
| `--spacing-base` | `1rem` | Basis-Abstand (16px auf Handy) |
| `--spacing-large` | `3rem` | Großer Abstand (Padding) |
| `--text-shadow-subtle` | `...` | Leichter Schatten unter Text (lesbar machen) |

---

### 3.4 Der CSS Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Was passiert da?**

| Eigenschaft | Standard-Browser | Wir setzen | Warum? |
|-------------|------------------|-----------|--------|
| `margin: 0` | Browser hat standard 16px um alles | Wir löschen das | Um vorhersagbar zu sein |
| `padding: 0` | Browser hat standard Innenabstand | Wir löschen das | Um vorhersagbar zu sein |
| `box-sizing: border-box` | Breite ohne Border | Breite INKLUSIVE Border | Mathematik wird einfacher |

**Beispiel Box-Sizing:**

```
box-sizing: content-box (Standard)
┌─────────────────────┐
│ border (5px)        │
│ ┌─────────────────┐ │
│ │ Inhalt (100px)  │ │
│ └─────────────────┘ │
└─────────────────────┘
Total Breite: 100px + 5px + 5px = 110px ❌ unerwartet!

box-sizing: border-box (unsere Wahl)
┌─────────────────────┐
│ border (5px)        │
│ ┌───────────────┐   │
│ │ Inhalt (90px) │   │
│ └───────────────┘   │
└─────────────────────┘
Total Breite: 100px ✅ wie erwartet!
```

---

### 3.5 Body Styles

```css
body {
  font-family: var(--font-body);          /* 'Open Sans' */
  font-size: var(--font-size-body);       /* 16px */
  line-height: var(--line-height);        /* 1.5 = 150% Zeilenhöhe */
  color: var(--dark-gray);                /* Dunkler grauer Text */
  background-color: var(--white);         /* Weißer Hintergrund */
  display: grid;                          /* Parent ist Grid-Container */
  grid-template-columns: 1fr;             /* 1 Spalte */
  grid-template-rows: auto auto auto 1fr auto;  /* 5 Reihen */
  min-height: 100vh;                      /* Mindestens voller Bildschirm */
}
```

#### 🎨 CSS Grid Layout – Die Struktur

**Diese 5 CSS Grid Rows entsprechen unseren HTML-Elementen:**

```
┌──────────────────────────────┐
│ header (auto)                │ ← wird so hoch wie nötig
├──────────────────────────────┤
│ .banner (auto)               │ ← wird so hoch wie nötig
├──────────────────────────────┤
│ main (1fr = restlicher Platz)│ ← beansprucht allen verbleibenden Platz
├──────────────────────────────┤
│ .about (auto)                │ ← wird so hoch wie nötig
├──────────────────────────────┤
│ footer (auto)                │ ← wird so hoch wie nötig
└──────────────────────────────┘
```

**Warum `1fr` für main?**
→ Wenn die Seite short ist: `main` dehnt sich, `footer` bleibt unten  
→ Wenn die Seite lang ist: alles scrollt normal

---

### 3.6 Überschriften & Links globally stylen

```css
h1, h2, h3 {
  font-family: var(--font-headline);   /* Roboto */
  font-weight: 700;                     /* Fett */
  margin-bottom: var(--spacing-base);   /* Abstand unten */
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }

a {
  color: var(--primary-red);            /* Grün */
  text-decoration: none;                /* Keine Unterstriche */
  transition: opacity 0.2s ease;        /* Smooth fade effect */
}

a:hover {
  opacity: 0.8;                         /* Beim Hover: weniger sichtbar */
}

button {
  cursor: pointer;                      /* Hand-Cursor */
  transition: background-color 0.2s ease;  /* Smooth color change */
}
```

---

## 4. CSS Header & Navigation

### 4.1 Header – Der Behälter

```css
header {
  background-color: var(--primary-red);   /* Grüner Hintergrund */
  padding: var(--spacing-base);           /* 1rem = 16px Innenabstand */
  display: flex;                          /* Flexbox-Layout */
  justify-content: space-between;         /* Logo links, Nav rechts */
  align-items: center;                    /* Vertikal zentriert */
  gap: var(--spacing-base);               /* 1rem Abstand zwischen Items */
  flex-wrap: wrap;                        /* Auf Handy: umfließen */
  border-bottom: 3px solid var(--secondary-cream);  /* Goldene Trennlinie */
}
```

#### 🎨 Flexbox erklärt

```
┌─────────────────────────────────────────┐
│ header (display: flex)                  │
│ ┌──────────┐  (space-between)  ┌──────┐ │
│ │ Logo     │                   │ Nav  │ │
│ └──────────┘                   └──────┘ │
└─────────────────────────────────────────┘
```

- `justify-content: space-between` = Logo ganz links, Nav ganz rechts
- `align-items: center` = alles vertikal zentriert
- `gap: 1rem` = 1rem Abstand zwischen Logo und Nav
- `flex-wrap: wrap` = auf Handy: Nav unter Logo (nicht nebeneinander)

### 4.2 Header h1 – Das Logo

```css
header h1 {
  color: var(--white);              /* Weißer Text */
  margin-bottom: 0;                 /* Kein Abstand unten (würde Logo shiften) */
  flex: 1;                          /* Beansprucht verbleibenden Platz */
  min-width: 200px;                 /* Aber mind. 200px breit */
  text-shadow: var(--text-shadow-subtle);  /* Schatten für Lesbarkeit */
}
```

**Warum `flex: 1`?**
→ Das Logo soll den verfügbaren Platz ausfüllen (damit Navigation rechts bleibt)

```
┌────────────────────────────────────────┐
│ Logo (flex: 1)      Navigation         │
│ (nimmt Platz)       (fix-Breite)       │
└────────────────────────────────────────┘
```

### 4.3 Header Navigation

```css
header nav {
  display: flex;           /* Horizontal anordnen */
  gap: var(--spacing-double);  /* 2rem Abstand zwischen Links */
}

header nav a {
  color: var(--white);     /* Weißer Text */
  font-weight: 600;        /* Halbfett */
  padding: var(--spacing-half) var(--spacing-base);  /* Innenabstand */
  border-bottom: 3px solid transparent;  /* Unsichtbare Linie */
  transition: border-color 0.2s ease;    /* Bei Hover: smooth */
  text-shadow: var(--text-shadow-subtle);
}

header nav a:hover {
  opacity: 1;              /* Full opacity */
  border-bottom-color: var(--secondary-cream);  /* Gold-Linie erscheint */
}
```

**Interaktions-Effekt:**
- **Default:** Gold-Border ist unsichtbar (`transparent`)
- **Hover:** Gold-Border erscheint (`opacity: 1` + `border-bottom-color`)
- **Smooth:** `transition: border-color 0.2s ease` = nicht abrupt, sondern sanft

---

### 4.4 Header Responsive (auf Handy)

```css
@media (max-width: 767px) {
  header {
    flex-direction: column;   /* Logo oben, Nav unten */
    text-align: center;       /* Alles zentriert */
  }

  header h1 {
    width: 100%;              /* Volle Breite */
    margin-bottom: var(--spacing-half);  /* Abstand zur Nav */
  }

  header nav {
    gap: var(--spacing-base);  /* Kleinerer Abstand zwischen Links */
  }
}
```

**Was passiert auf Handy (< 768px)?**

```
Desktop (≥ 768px):          Mobile (< 768px):
┌───────────────────┐      ┌──────────┐
│ Logo  Nav         │      │  Logo    │
│                   │  →   ├──────────┤
│                   │      │  Nav     │
└───────────────────┘      └──────────┘
```

---

## 5. CSS Banner & Hero-Bereich

### 5.1 Banner Container

```css
.banner {
  background-color: var(--secondary-cream);        /* Gold Fallback */
  background-image: url('../images/pexels-usidz-36551806.jpg');  /* Großes Foto */
  background-size: cover;                          /* Fülle den Container */
  background-position: center;                     /* Zentriert */
  background-attachment: fixed;                   /* Parallax-Effekt */
  padding: var(--spacing-large) var(--spacing-base);  /* 3rem Oben/Unten, 1rem Seiten */
  text-align: center;                              /* Text zentriert */
}
```

#### 🎨 Background-Properties erklärt

| Eigenschaft | Wert | Effekt |
|-------------|------|--------|
| `background-image` | `url(...)` | Bild laden |
| `background-size: cover` | - | Bild füllt Container (kann croppen) |
| `background-position: center` | - | Bildmitte wird zentriert |
| `background-attachment: fixed` | - | **Parallax**: Bild scrollt nicht mit (bleibt stehen) |

**Parallax Effekt visuell:**

```
Beim Scrollen:
┌───────────────────────┐
│ ← Bild bleibt stehen  │
│   Text scrollt über   │  ← scroll
│   das Bild drüber     │
└───────────────────────┘
```

### 5.2 Banner Paragraph

```css
.banner p {
  font-size: 1.8rem;               /* Groß & auffällig */
  font-weight: 500;                /* Halbfett */
  max-width: 800px;                /* Nicht zu breit */
  margin: 0 auto;                  /* Horizontal zentriert */
  line-height: 1.6;                /* Luftig */
  color: var(--white);             /* Weißer Text */
  text-shadow: var(--text-shadow-strong);  /* Schatten: lesbar über Foto */
}
```

**Warum `text-shadow`?**

```
Ohne Schatten:           Mit Schatten:
┌────────────────┐      ┌────────────────┐
│ Weißer Text    │      │ Weißer Text    │
│ auf Foto       │  →   │ mit Schatten    │
│ (unleserlich)  │      │ (lesbar!)      │
└────────────────┘      └────────────────┘
```

Der Schatten (`2px 2px 12px rgba(0,0,0,0.6)`) wirft einen dunklen Shadow, der den Text vom Hintergrund abhebt.

### 5.3 Banner Responsive

```css
@media (min-width: 768px) {
  .banner {
    padding: 4rem var(--spacing-double);  /* Mehr Abstand */
  }
  .banner p {
    font-size: 2.2rem;   /* Größer */
    font-weight: 600;    /* Fetter */
  }
}

@media (min-width: 1200px) {
  .banner {
    padding: 5rem var(--spacing-double);  /* Noch mehr */
  }
  .banner p {
    font-size: 2.8rem;   /* Noch größer */
    font-weight: 600;
  }
}
```

**Responsive Strategie:**
- **Handy (320px):** Kleine Schrift, wenig Padding
- **Tablet (768px):** Mittlere Schrift, mehr Padding
- **Desktop (1200px):** Große Schrift, maximales Padding

---

## 6. CSS Kalender-Bereich

### 6.1 Main Container

```css
main {
  padding: var(--spacing-large);                    /* 3rem Innenabstand */
  overflow-y: auto;                                /* Vertikal scrollbar */
  background-image: url('../images/pexels-usidz-36551806.jpg');  /* Hintergrundbild */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;                    /* Parallax */
  background-color: #fafafa;                       /* Fallback Grau */
  position: relative;                              /* Basis für z-index */
}
```

**Warum `position: relative`?**
→ Damit können child-Elemente mit `position: absolute` relativ zu `main` positioniert werden

### 6.2 Kalender-Controls (Knöpfe)

```css
#calendar-controls {
  display: flex;                          /* Horizontal */
  justify-content: space-between;         /* Knöpfe außen, Titel Mitte */
  align-items: center;
  gap: var(--spacing-base);
  margin-bottom: var(--spacing-large);    /* Abstand zur Tabelle */
  flex-wrap: wrap;
}

#calendar-controls button {
  background-color: var(--primary-red);   /* Grün */
  color: var(--white);
  padding: var(--spacing-half) var(--spacing-base);
  border: none;                           /* Kein Border */
  border-radius: 4px;                     /* Leicht gerundete Ecken */
  font-weight: 600;
  text-shadow: var(--text-shadow-subtle);
}

#calendar-controls button:hover {
  background-color: var(--secondary-cream);  /* Gold beim Hover */
  color: var(--dark-gray);                /* Dunkelgrauer Text */
}
```

**Layout der Controls:**

```
┌─────────────────────────────────────┐
│ ← Prev  │  April 2026  │  Next →    │
│(Knopf)  │  (Überschrift) (Knopf)   │
└─────────────────────────────────────┘
Flexbox mit space-between: Knöpfe außen, Titel Mitte
```

### 6.3 Monatsanzeige

```css
#month-title {
  margin: 0;                                    /* Kein Standard-Margin */
  color: var(--white);                          /* Weißer Text */
  text-shadow: var(--text-shadow-strong);       /* Schatten */
  border-bottom: 2px solid var(--secondary-cream);  /* Gold-Line */
  padding-bottom: var(--spacing-half);          /* Abstand zur Line */
}
```

### 6.4 Kalender-Tabelle

```css
#calendar {
  background-color: var(--white);           /* Weißer Hintergrund */
  border: 1px solid var(--light-gray);      /* Grauer Border */
  border-radius: 4px;                       /* Rundlich */
  overflow-x: auto;                         /* Horizontal scrollbar auf Handy */
}

#calendar table {
  width: 100%;                              /* Volle Breite */
  table-layout: fixed;                      /* Spalten gleich breit */
}
```

**Warum `table-layout: fixed`?**

```
table-layout: auto (Standard):
Spalten-Breite hängt vom Inhalt ab → ungleichmäßig

table-layout: fixed:
┌────┬────┬────┬────┬────┬────┬────┐
│ Mo │ Di │ Mi │ Do │ Fr │ Sa │ So │  alle gleich breit ✓
└────┴────┴────┴────┴────┴────┴────┘
```

### 6.5 Tabellen-Header & Zellen

```css
#calendar th,
#calendar td {
  border: 1px solid var(--light-gray);  /* Alle Zellen haben Border */
  padding: var(--spacing-half);         /* Innenabstand */
  text-align: center;                   /* Text zentriert */
  font-size: 0.9rem;                    /* Klein */
}

#calendar th {
  background-color: var(--primary-red); /* Grüner Header */
  color: var(--white);
  font-weight: 700;                     /* Fett */
  padding: var(--spacing-base);         /* Mehr Abstand */
  text-shadow: var(--text-shadow-subtle);
}

#calendar td {
  height: 80px;                         /* Quadratische Zellen */
  vertical-align: top;                  /* Text oben */
  cursor: pointer;                      /* Hand-Cursor */
  transition: background-color 0.2s ease;
}

#calendar td:hover {
  background-color: #f9f9f9;            /* Hellgrau Hover */
}
```

### 6.6 Spezielle Datum-Zustände

```css
#calendar td.today {
  background-color: rgba(255, 215, 0, 0.3);  /* Gold mit 30% Transparenz */
}

#calendar td.selected {
  background-color: transparent;        /* Durchsichtig */
  border: 2px solid var(--primary-red);  /* Dicker grüner Border */
}

#calendar td.other-month {
  color: var(--light-gray);             /* Grauer Text */
  background-color: #fafafa;            /* Hellgrauer Hintergrund */
}
```

**Die 3 Zustände eines Datums:**

| Klasse | Aussehen | Bedeutung |
|--------|----------|-----------|
| `.today` | Gold-Hintergrund | Heute = 13.04.2026 |
| `.selected` | Grüner Border | Der Benutzer hat diesen Tag geklickt |
| `.other-month` | Grau & schwach | April- oder Mai-Datum (aber Montag/Dienstag?) |

### 6.7 Event-Items in der Tabelle

```css
.event-item {
  overflow: hidden;          /* Text über Zelle: abschneiden */
  text-overflow: ellipsis;   /* "..." am Ende */
  white-space: nowrap;       /* Keine Umbrüche */
  font-size: 0.85rem;        /* Klein */
  padding: 2px 4px;          /* Minimaler Innenabstand */
}
```

**Visuell:**

```
Zelle:
┌───────────────────┐
│ Messe in der Dom… │  ← "..." weil zu lange
└───────────────────┘
Statt:
│ Messe in der Dom… │
│ ...weitere Info   │
```

---

## 7. CSS Event-Panel

### 7.1 Das Panel selbst

```css
#event-panel {
  position: fixed;                              /* Bleibt beim Scrollen sichtbar */
  top: 0;                                       /* Oben am Bildschirm */
  right: 0;                                     /* Rechts */
  width: 100%;                                  /* Mobile: volle Breite */
  max-width: 400px;                             /* Desktop: max 400px */
  height: 100vh;                                /* Volle Höhe */
  background-color: var(--white);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);  /* Schatten links */
  z-index: 1000;                                /* Über allem (außer Höher) */
  padding: var(--spacing-base);
  overflow-y: auto;                             /* Scrollbar wenn zu lang */
  animation: slideInRight 0.3s ease;            /* Animation: reinfahren */
  display: none;                                /* ⭐ WICHTIG: Standardmäßig verborgen! */
}
```

**⭐ `display: none;` ist WICHTIG:**
- Das Panel soll **beim Laden der Seite nicht sichtbar sein**
- Es öffnet sich nur, wenn der User auf ein Event-Datum klickt (JavaScript: `panel.style.display = 'block'`)
- Ohne dieses `display: none;` würde das Panel beim Laden der Seite immer offengeblieben

#### 🎨 Position Fixed & Z-Index erklärt

```
┌────────────────────────────────────────┐
│ Page (z-index: auto)                   │
│ ┌────────────────────────────────────┐ │
│ │ main (z-index: auto)               │ │
│ │ Du kannst scrollen, aber:          │ │
│ └────────────────────────────────────┘ │
│ ┌──────────────┐                       │
│ │(scroll)      │ ← Event Panel bleibt! │
│ │ (scroll)     │    (position: fixed)  │
│ │ (scroll)     │    (z-index: 1000)    │
│ └──────────────┘                       │
└────────────────────────────────────────┘
```

### 7.2 Animation: Rein- und Rausfahren

```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);   /* Start: 100% nach rechts (off-screen) */
  }
  to {
    transform: translateX(0);      /* Ende: Normal-Position */
  }
}

#event-panel {
  animation: slideInRight 0.3s ease;  /* 0.3 Sekunden Animation */
}
```

**Animation visuell:**

```
Start (0%):              Mitte (50%):             Ende (100%):
┌────────────────┐      ┌────────────────┐      ┌────────────────┐
│                │      │   Panel──→     │      │ Panel          │
│ Seite          │  →   │ Seite overflw  │  →   │ Seite          │
│                │      │                │      │                │
└────────────────┘      └────────────────┘      └────────────────┘
Panel: 100% rechts      Panel: 50% rechts       Panel: 0 (normal)
```

### 7.3 Close Button

```css
#event-panel #close-panel {
  background: none;                  /* Kein Hintergrund */
  border: none;                      /* Kein Border */
  font-size: 1.5rem;                 /* Großer X */
  cursor: pointer;
  float: right;                      /* Rechts oben */
  margin-bottom: var(--spacing-base);  /* Abstand zur Content */
  color: var(--primary-red);         /* Grün */
}

#event-panel #close-panel:hover {
  opacity: 0.6;                      /* Halb-transparent beim Hover */
}
```

### 7.4 Event Details (Inhalt)

```css
#event-details {
  clear: both;                        /* Nach float-Element */
  margin-top: var(--spacing-double);  /* Abstand vom Close-Button */
}

#event-details h3 {
  color: var(--primary-red);          /* Grüne Titel */
  margin-bottom: var(--spacing-half);
}

#event-details p {
  margin-bottom: var(--spacing-base);
  font-size: 0.95rem;
}
```

### 7.5 Event Panel Responsive

```css
@media (max-width: 767px) {
  #event-panel {
    max-width: 100%;    /* Mobile: volle Breite */
  }
}
```

**WIRD SPÄTER GEFÜLLT VON JAVASCRIPT** ✓

---

## 8. CSS Footer

### 8.1 Footer Container

```css
footer {
  background-color: var(--dark-gray);           /* Dunkelgrau */
  padding: var(--spacing-large) var(--spacing-double);  /* Großer Abstand */
  text-align: center;                           /* Alles zentriert */
  margin-top: auto;                             /* Wichtig: bleibt unten */
}
```

**Warum `margin-top: auto`?**

Wir haben `body { display: grid; }` mit:
```
grid-template-rows: auto auto auto 1fr auto;
│                                     └── footer
└────────────── main (1fr = nimmt Platz)
```

Ohne `margin-top: auto`: footer könnte oben auf der Seite sein (wenn kurz)  
Mit `margin-top: auto`: footer wird immer nach unten gedrückt ("sticky footer")

### 8.2 Footer Text

```css
footer p {
  margin-bottom: var(--spacing-base);
  font-size: 0.9rem;    /* Kleine Schrift */
}
```

### 8.3 Footer Navigation

```css
footer nav {
  display: flex;                        /* Horizontal */
  justify-content: center;              /* Zentriert */
  gap: var(--spacing-double);           /* Großer Abstand */
  margin-top: var(--spacing-base);
}

footer a {
  color: var(--secondary-cream);        /* Gold */
  font-weight: 600;
  transition: border-bottom-color 0.2s ease;  /* Smooth */
  border-bottom: 2px solid transparent;  /* Unsichtbar */
}

footer a:hover {
  opacity: 1;
  border-bottom-color: var(--secondary-cream);  /* Gold-Line */
}
```

### 8.4 Footer Responsive

```css
@media (max-width: 767px) {
  footer {
    padding: var(--spacing-base);    /* Weniger Padding */
  }

  footer nav {
    flex-direction: column;           /* Links übereinander */
    gap: var(--spacing-base);         /* Weniger Abstand */
  }
}
```

---

## 9. CSS About-Sektion

### 9.1 About Container mit Overlay

```css
.about {
  padding: var(--spacing-large);
  background-color: #f9f9f9;         /* Hellgrau Fallback */
  background-image: url('../images/pexels-usidz-36551806.jpg');  /* Foto */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;      /* Parallax */
  position: relative;                 /* Basis für ::before */
}

.about::before {
  content: '';                        /* Pseudo-Element (unsichtbar per default) */
  position: absolute;                 /* Absolut positioniert */
  top: var(--spacing-double);         /* 2rem vom Oben */
  bottom: var(--spacing-double);      /* 2rem vom Unten */
  left: 50%;                          /* Horizontal zentriert: */
  width: 50%;                         /* 50% Breite */
  transform: translateX(-50%);        /* Korrektur: verschiebe um -50% der eigenen Breite */
  background: rgba(255, 255, 255, 0.95);  /* Semi-transparent Weiß */
  z-index: 1;                         /* Über Foto */
}
```

#### 🎨 Das Pseudo-Element `::before` erklärt

**Pseudo-Element?** = Fake-Element, den CSS erstellt (nicht im HTML!)

```
HTML:                          CSS `::before`:
<section class="about">        ┌──────────────────────────┐
  <h2>Titel</h2>             │ ::before (weiße Box)     │
  <p>Text</p>                ├──────────────────────────┤
</section>                     │ <h2>Titel</h2>           │
                               │ <p>Text</p>              │
                               └──────────────────────────┘
```

### 9.2 Text in der About-Box

```css
.about h2 {
  color: var(--primary-red);  /* Grün */
  margin-bottom: var(--spacing-base);
  position: relative;         /* Über dem Overlay */
  z-index: 2;                 /* Über ::before (z-index: 1) */
  text-align: center;
  max-width: 45%;             /* Nicht zu breit */
  margin-left: auto;          /* Zentriert */
  margin-right: auto;
}

.about p {
  margin-bottom: 0;
  position: relative;         /* Über Foto */
  z-index: 2;
  text-align: center;
  max-width: 45%;
  margin-left: auto;
  margin-right: auto;
}
```

**Z-Index Schichten:**

```
z-index: 2 (oben)
┌──────────────────────┐
│ <h2> & <p> (Text)    │
│                      │
├──────────────────────┤
z-index: 1
│ ::before (Weiße Box) │
├──────────────────────┤
z-index: auto (unten)
│ Hintergrundbild      │
└──────────────────────┘
```

### 9.3 About Responsive

```css
@media (min-width: 768px) {
  .about {
    padding: 3rem var(--spacing-double);  /* Mehr Padding */
  }
}

@media (min-width: 1200px) {
  .about {
    padding: 4rem var(--spacing-double);  /* Noch mehr */
  }
}
```

---

## 10. Responsive Design – Wie alles auf Handy passt

### 10.1 Mobile First Strategie

Unsere CSS ist so geschrieben:

1. **Mobile (Standard):** 320px – minimales Design
2. **Tablet:** `@media (min-width: 768px)` – mehr Platz
3. **Desktop:** `@media (min-width: 1200px)` – voller Luxus

```css
/* Mobile (default, all devices) */
h1 { font-size: 1.5rem; }
header { flex-direction: row; }

/* Tablet & größer */
@media (min-width: 768px) {
  h1 { font-size: 2rem; }    /* Fallback: bleibt row */
}

/* Desktop & größer */
@media (min-width: 1200px) {
  h1 { font-size: 2.25rem; }
}
```

### 10.2 Meta Viewport Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**KRITISCH!** Ohne das:
- Browser auf Handy zeigt die Seite in 960px (zoomed out) an
- Text ist zu klein zum Lesen
- Mit: Browser nutzt echte Handy-Breite (375px z.B.)

### 10.3 Breakpoints Bedeutung

| Breakpoint | Geräte | Änderungen |
|-----------|--------|-----------|
| **< 768px** | Handy | 1 Spalte, kleine Schrift, enge Abstände |
| **768px - 1199px** | Tablet | 2 Spalten (virtuell), mittlere Schrift |
| **≥ 1200px** | Desktop | Große Schrift, volle Abstände |

### 10.4 Responsive Elements in unserer Site

| Element | Handy | Tablet | Desktop |
|---------|-------|--------|---------|
| Header | Vertikal (Logo oben, Nav unten) | Horizontal | Horizontal |
| Banner Text | 1.8rem | 2.2rem | 2.8rem |
| Calendar | 7 Kolonnen (squeezed) | 7 Kolonnen (normal) | 7 Kolonnen (locker) |
| Event Panel | 100% breit | 100% breit | 400px breit |
| Footer Nav | Übereinander | Horizontal | Horizontal |

---

## 11. Häufige Fragen & Tipps für die Präsentation

### ❓ **F: Warum CSS-Variablen statt direkt Farben schreiben?**

**A:** Besser wartbar. Wenn du die Grün-Farbe vom Logo auf allen 15 Stellen ändern möchtest:

❌ Ohne Variablen: 15x einzeln suchen & ändern  
✅ Mit Variablen: 1x `:root { --primary-red: #new-color; }` ändern

---

### ❓ **F: Was ist Flexbox und Grid? Unterschied?**

**A:**
- **Flexbox** (`display: flex`) = 1-dimensionales Layout (Zeile ODER Spalte)
  - Nutzen wir: Header Nav, Footer Nav, Calendar Controls
- **Grid** (`display: grid`) = 2-dimensionales Layout (Zeilen UND Spalten)
  - Nutzen wir: Body Struktur (Header, Main, Footer übereinander)

---

### ❓ **F: Warum `background-attachment: fixed` (Parallax)?**

**A:** 
- Normal: Bild scrollt mit dem Inhalt
- Fixed: Bild bleibt stehen, Text scrollt drüber

**Effekt:** Tiefenwirkung, moderne Website-Optik

---

### ❓ **F: Was ist `::before` Pseudo-Element?**

**A:** Ein Fake-Element, das CSS erstellt:

```css
.about::before {
  content: '';  /* Wichtig: muss da sein! */
  /* ... styling ... */
}
```

Resultat im Browser:
```html
<!-- Virtual DOM: -->
<section class="about">
  <!-- ::before Box (von CSS erstellt) -->
  <h2>Inhalt</h2>
  <p>Text</p>
</section>
```

---

### ❓ **F: Wie funktioniert `z-index`?**

**A:** Wie Ebenen in Photoshop:

```
z-index: 1000 ─────► Event Panel (oben)
z-index: 2   ─────► About Text (Mitte)
z-index: 1   ─────► About Overlay (unten)
z-index: auto ────► Hintergrund (ganz unten)
```

Höhere Zahl = liegt oben

---

### ❓ **F: Mobile First – warum nicht Desktop First?**

**A:** 
- Mobile First = 80% der Benutzer (heutzutage)
- Einfacher: Einfaches Design zuerst, dann erweitern
- Schneller: Mobile Seite bleibt schnell, Desktop bekommt mehr

---

### ✅ **Tipps für die Präsentation:**

1. **Live-Demo:** Header-Zeile zeigen, `padding` ändern vor Augen, Live-Effekt
2. **Inspector benutzen:** F12 → Element inspizieren → CSS live ändern
3. **Responsive-Test:** DevTools (F12) → Mobile emulieren
4. **Von oben nach unten:** Header erklärt → dann Banner → dann Kalender
5. **Warum-Fragen beantworten:** "Warum Flex?" "Warum position: fixed?" etc.

---

### 📝 **Checkliste für die Präsentation:**

- [ ] HTML semantische Struktur (Header, Main, Footer = browser versteht)
- [ ] CSS-Variablen (Wartbarkeit, DRY principle)
- [ ] Flexbox Layout (Header, Navigation)
- [ ] CSS Grid Layout (Body Struktur)
- [ ] Background-Images mit Parallax
- [ ] Pseudo-Elemente (::before Overlay)
- [ ] Z-Index Layering (Tiefen-Ebenen)
- [ ] Responsive Design (Mobile First, Media Queries)
- [ ] Übergänge (transition, animation)
- [ ] Farbschema & Design Tokens

---

## 🎓 Nächste Schritte

Nach diesem Tutorial solltest du verstehen:

✅ Jedes HTML-Element (warum es dort steht)  
✅ Jede CSS-Regel (was sie bewirkt)  
✅ Warum diese Struktur gewählt wurde  
✅ Wie es auf verschiedenen Geräten funktioniert  
✅ Du kannst die Website erklären & modifizieren

**JavaScript kommt später im Semester** – dann werden die leeren `<div id="calendar"></div>` & `<div id="event-details"></div>` mit Inhalten gefüllt.

---
