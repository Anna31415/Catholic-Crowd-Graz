# App-Konzept: Suchfunktion – Catholic Crowd Graz

### Anmerkung: 
Die main.js (ca. 250 Zeilen) existiert bereits. Sie lädt Events und generiert den Kalender. Diese Datei war von Anfang an nötig, da der Kalender die Hauptfunktion der Website ist. Für Assignment 2 wird eine separate search.js erstellt, da dies dem Aufgabenumfang entspricht und die Suchfunktion ohnehin geplant war.

## Funktion: Was soll die Anwendung tun?

- Die Suchfunktion ermöglicht es dem User, **Events nach Suchtext zu suchen**. Die Suche funktioniert auf Event-Titel, Organisation und Beschreibung.

## Bedienung: Wie wird die Anwendung verwendet?

1. - User klickt oder tippt in ein Suchfeld (unter den Kalender-Navigation-Buttons)
   - Suchfeld hat Placeholder: "Nach Event suchen..."
2. - User tippt etwas ein
   - Groß-/Kleinschreibung wird ignoriert
3. Suche bestätigen
   - Option A: Klick auf "Suchen"-Button (rechts neben dem Suchfeld)
   - Option B: Drück Enter im Suchfeld
4. - Linkes Panel öffnet sich (Slide-Animation von links) und zeigt eine Liste aller Suchergebnisse mit Volldetails
   - Eine "Keine Events gefunden"-Nachricht, falls keine Treffer
   - Events sind nach Datum sortiert

