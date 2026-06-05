# Prjoekt-Idee - Website
Anna Köll
## Vorläufiger Name: Catholic Crowd Graz

Problemstellung: In Graz gibt es viele Organisationen, die Veranstaltungen für Studierende und junge Erwachsene, die am christlichen/katholischen Glauben interessiert sind, anbieten. Das umfasst Gottesdienste und Gebete, aber auch Geprächsrunden, Bildungsveranstaltungen, Wanderungen, etc. Durch die Anzahl der verschiedenen Organisationen ist es schwierig, den Überblick zu behalten.

Die Website soll Veranstaltungen von katholischen Jugend- und Hochschulorganisationen in Graz (Katholische Hochschuljugend, Katholische Hochschulgemeinde, Katholische Jugend, Theozentrum, Priesterseminar,…)  in einem Kalender zusammenfassen. Benutzer*innen sollen auch nach Organisationen filtern und Begriffe suchen können.

Die Website bietet einen Überblick für Studierende und junge Erwachsene in Graz, die an den Veranstaltungen dieser Organisationen interessiert sind. Außerdem soll sie den Austausch zwischen den verschiedenen Organisationen stärken.

Folgende Daten werden pro Event benötigt: 
- Titel
- Datum, Uhrzeit, Ort
- Organisation
- optional: Beschreibender Text

Wo könnten die Daten herkommen? 
- manuelle Eingabe in ein JSON-File
- Google Calender API: Die Organisationen müssten einen Google Calender haben und mir Zugriff geben.
- Google Forms: Organisationen tragen Daten in ein Formular ein, dass dann in Google Sheets landet. Die Website liest die Daten über ein generiertes JSON-File oder Google Sheets API aus.


Anmerkung: Beste Option: Organisationen tragen Daten in Google Sheets ein