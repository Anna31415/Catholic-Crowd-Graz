 
# Google Sheets Integration für Catholic Crowd Graz

Die Daten für die Website bestehen aus Informationen zu verschiedenen Veranstaltungen der katholischen Hochschul- und Jugendorganisationen in Graz. Diese sind in einer Google-Sheets-Datei, die laufend von den verschiedenen Organisationen mit ihren bevorstehenden Veranstaltungen beabeitet werden soll.



## 1. Google Sheets Details

**Datenquelle für alle Events der Plattform**

- **Link (öffentlich lesbar):** https://docs.google.com/spreadsheets/d/1nbuUu9C1qppWsV4WnVNlCHLYVb3M8D8tVJ-HIBRyg9s/edit?usp=sharing
- **Spreadsheet ID:** `1nbuUu9C1qppWsV4WnVNlCHLYVb3M8D8tVJ-HIBRyg9s`
- **Datensatz:** Alle Veranstaltungen der katholischen Hochschul- und Jugendorganisationen in Graz
- **Zugriff:** Öffentlich (mit Link einsehbar), keine Authentifizierung nötig
- **Bearbeitung:** Google-Konten mit Berechtigung
---

## 2. Datenstruktur

Das Google Sheets enthält folgende Spalten:

| # | Spalte | Datentyp | Beispiel | Pflicht | Notizen |
|---|--------|----------|----------|---------|---------|
| A | **Titel** | Text | "ALPHA-Kurs" | Ja | Event-Name, max. 100 Zeichen |
| B | **Organisation** | Text | "Katholische Hochschulgemeinde" | Ja |
| C | **Datum** | Datum | 2026-04-16 | Ja | Format: YYYY-MM-DD (ISO 8601) |
| D | **Anfangszeit** | Zeit | 19:00 | Ja | Format: HH:MM (24h) |
| E | **Endzeit** | Zeit | 20:30 | Nein | Format: HH:MM; |
| F | **Ort** | Text | "Andrä Saal, Leechgasse 24, 8010 Graz" | Ja | Vollständige Adresse |
| G | **Beschreibung** | Text | "Einführung in christliche Grundlagen..." | Nein | Max. 500 Zeichen |

**Header-Zeile:** Zeile 1  
**Data-Start:** Zeile 2  

---

## 3. Zugriffsmethode: 

CSV Export (siehe zugriffsmethoden-google-sheets.md)
