# ⛽ GasZähler Pro v8.3.13 – Data Integrity Edition

**GasZähler Pro** ist eine hochpräzise, datenschutzorientierte Progressive Web App (PWA), die speziell für Hausbesitzer und Mieter entwickelt wurde. In Zeiten schwankender Energiepreise bietet sie die volle Kontrolle über Gaskosten und Verbrauchsverhalten – ohne Cloud, ohne Abo und zu 100 % lokal auf deinem Gerät.

---

## 🚦 Das Doppel-Ampel-System (Status-Analyse)

Die App verfügt über zwei unabhängige Analyse-Logiken, um dir sowohl den aktuellen finanziellen Stand als auch die zukünftige Entwicklung zu visualisieren:

### 1. Saldo-Ampel (Der Ist-Zustand)
Diese Ampel vergleicht die Summe deiner bisher geleisteten Abschlagszahlungen mit den real aufgelaufenen Kosten für das verbrauchte Gas seit Beginn des Abrechnungszeitraums.
* 🟢 **Guthaben:** Deine bisherigen Zahlungen decken den aktuellen Verbrauch. Du bist "im Plus".
* 🔴 **Nachzahlung:** Dein Verbrauch war höher als die bisherigen Zahlungen. Würdest du heute die Abrechnung erhalten, müsstest du den Differenzbetrag nachzahlen.

### 2. Prognose-Ampel (Der Soll-Zustand für das Jahr)
Diese Ampel analysiert deinen durchschnittlichen Tagesverbrauch (m³/Tag) über den gesamten Zeitraum und rechnet diesen auf 365 Tage hoch. Das Ergebnis wird mit deiner jährlichen Abschlags-Summe verglichen.
* 🔵 **Blau (Viel zu hoch):** Dein Abschlag ist deutlich höher als dein tatsächlicher Bedarf. Du "parkst" unnötig Geld beim Versorger.
* 🟢 **Grün (Ideal):** Dein Abschlag und dein prognostizierter Verbrauch passen perfekt zusammen. Alles im Plan.
* 🟠 **Orange (Knapp):** Dein Verbrauch ist leicht gestiegen. Es könnte am Jahresende eine kleine Nachzahlung drohen.
* 🔴 **Rot (Sofort Erhöhen!):** Dein aktueller Abschlag wird die prognostizierten Jahreskosten nicht decken. Eine manuelle Erhöhung des Abschlags ist dringend ratsam, um einen "Zahlungsschock" bei der Endabrechnung zu vermeiden.

---

## 🚀 Die Highlights der v8.3.13

### 📊 Optimierte Chart-Navigation (Sticky-Axis)
Um auch bei hunderten Einträgen die Übersicht zu behalten, wurde das Diagramm-System überarbeitet:
* **Fixierte Y-Achse:** Während du horizontal durch die Zeit (die blauen Balken) wischst, bleibt die Beschriftung der vertikalen Achse ($m^3/Tag$) am linken Rand fest verankert.
* **Dynamische Breite:** Das Diagramm wächst automatisch mit (45px pro Eintrag), sodass die Balken niemals gestaucht werden.
* **Auto-Focus:** Die App springt beim Laden oder Speichern automatisch an den rechten Rand zu den aktuellsten Daten.

### 🔒 Maximale Datensicherheit (Safe-Delete)
Ein versehentliches Löschen deiner mühsam gesammelten Daten ist nahezu unmöglich:
* **Text-Validierung:** Das Zurücksetzen der Datenbank erfordert nicht nur einen Klick, sondern die manuelle Eingabe des Bestätigungswortes **"LÖSCHEN"**.
* **Plausibilitäts-Check:** Die App blockiert Eingaben, die physikalisch unmöglich sind (z. B. wenn der neue Zählerstand niedriger ist als der letzte gespeicherte Wert).

### 📐 UI & Ergonomie
* **Grid-Layout:** Alle Einstellungen sind in einem platzsparenden Raster angeordnet, was das vertikale Scrollen auf dem Smartphone um 50 % reduziert.
* **Sticky-Header-Tabelle:** Die Spaltenüberschriften der Historie bleiben beim Durchscrollen der Liste immer am oberen Rand sichtbar.
* **Vollbild-Erlebnis:** Als PWA installiert, bietet die App eine native User-Experience ohne störende Browser-Leisten.

---

## 🛠 Technische Details & Konfiguration

### Die Berechnungsformel
Die App wandelt das gemessene Volumen deines Zählers ($m^3$) nach der offiziellen Formel in thermische Energie um:
$$kWh = (m^3_{neu} - m^3_{start}) \times Brennwert \times Zustandszahl$$

### Bestpreis-Automatik (Preisstaffeln)
Du kannst beliebig viele Preisstufen hinterlegen. Die App nutzt immer die Stufe, die deiner Jahresprognose entspricht.
**Format:** `VerbrauchsLimit:ArbeitspreisCent:GrundpreisEuro`
*Beispiel:*
`6000:12.80:5.36` (Tarif bis 6.000 kWh)
`99999:11.79:10.41` (Tarif ab 6.001 kWh)

---

## 📱 Installation als App
1. Datei im Browser auf dem Smartphone öffnen.
2. Im Menü (Teilen-Icon) auf **"Zum Home-Bildschirm hinzufügen"** tippen.
3. Die App erscheint nun mit eigenem Icon auf deinem Homescreen.

---
*Entwickelt für maximale Transparenz und Datensparsamkeit.*
