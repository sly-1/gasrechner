# ⛽ GasZähler Pro v8.3.13 – Data Integrity Edition

**GasZähler Pro** ist eine hochpräzise, datenschutzorientierte Progressive Web App (PWA) zur Überwachung von Gasverbrauch und Heizkosten. In Zeiten schwankender Energiepreise bietet sie Hausbesitzern und Mietern die volle Kontrolle – ohne Cloud, ohne Abo und zu 100 % lokal auf deinem Gerät.

---

## 🚦 Das Doppel-Ampel-System (Finanz-Analyse)

Die v8.3.13 nutzt eine duale Berechnungslogik, um dir sowohl den aktuellen finanziellen Stand als auch die zukünftige Entwicklung in Echtzeit zu visualisieren:

### 1. Saldo-Ampel (Der Ist-Zustand)
Diese Ampel vergleicht die Summe deiner bisher geleisteten Abschlagszahlungen mit den real aufgelaufenen Kosten für das verbrauchte Gas bis zum heutigen Tag.
* 🟢 **Guthaben:** Deine bisherigen Zahlungen decken den aktuellen Verbrauch. Du bist "im Plus".
* 🔴 **Nachzahlung:** Dein Verbrauch war höher als die bisherigen Zahlungen. Würdest du heute die Abrechnung erhalten, müsstest du den Differenzbetrag nachzahlen.

### 2. Prognose-Ampel (Der Soll-Zustand für das Jahr)
Diese Ampel analysiert deinen durchschnittlichen Tagesverbrauch ($m^3/Tag$) über den gesamten Zeitraum und rechnet diesen auf 365 Tage hoch. Das Ergebnis wird mit deiner jährlichen Abschlags-Summe verglichen.
* 🔵 **Blau (Viel zu hoch):** Dein Abschlag ist deutlich höher als dein tatsächlicher Bedarf. Du zahlst dem Anbieter quasi einen zinslosen Kredit.
* 🟢 **Grün (Ideal):** Dein Abschlag und dein prognostizierter Verbrauch passen perfekt zusammen.
* 🟠 **Orange (Knapp):** Dein Verbrauch ist gestiegen. Es könnte am Jahresende eine kleine Nachzahlung drohen.
* 🔴 **Rot (Sofort Erhöhen!):** Dein aktueller Abschlag wird die prognostizierten Jahreskosten nicht decken. Eine Erhöhung des Abschlags ist dringend ratsam, um einen "Zahlungsschock" zu vermeiden.

---

## 🚀 Die Highlights der v8.3.13

### 📊 Optimierte Chart-Navigation (Sticky-Axis)
Für Nutzer mit vielen Datenpunkten wurde das Diagramm-System revolutioniert:
* **Fixierte Y-Achse:** Während du horizontal durch die Zeit wischst, bleibt die Beschriftung der vertikalen Achse ($m^3/Tag$) am linken Rand fest verankert.
* **Dynamische Breite:** Das Diagramm wächst pro Eintrag um 45px mit, sodass die Balken niemals gestaucht werden.
* **Auto-Focus:** Die App springt beim Öffnen automatisch ganz nach rechts zu den aktuellsten Daten.

### 🔒 Maximale Datensicherheit (Safe-Delete)
Um versehentlichen Datenverlust zu verhindern, wurde eine Sicherheitsbarriere eingebaut:
* **Text-Validierung:** Das Zurücksetzen der Datenbank erfordert die manuelle Eingabe des Bestätigungswortes **"LÖSCHEN"**.
* **Plausibilitäts-Check:** Die App blockiert Eingaben, die physikalisch unmöglich sind (z. B. wenn der neue Zählerstand niedriger ist als der letzte gespeicherte Wert).

### 📐 UI & Ergonomie
* **Grid-Layout:** Alle Einstellungen sind in einem platzsparenden Raster angeordnet, was das vertikale Scrollen auf dem Smartphone massiv reduziert.
* **Sticky-Header-Tabelle:** Die Spaltentitel der Historie bleiben beim Durchscrollen der Liste immer oben sichtbar.
* **Live-Vorschau:** Alle Berechnungen (Saldo, Prognose) werden bereits während der Eingabe im "Draft-Modus" (kursiv) angezeigt.

---

## 🛠 Technische Details & Konfiguration

### Die Berechnungsformel
Die App wandelt das gemessene Volumen deines Zählers ($m^3$) nach der offiziellen Formel in thermische Energie um:
$$kWh = (m^3_{aktuell} - m^3_{start}) \times Brennwert \times Zustandszahl$$

### Bestpreis-Automatik (Preisstaffeln)
Du kannst beliebig viele Preisstufen hinterlegen. Die App nutzt immer die Stufe, die deiner Jahresprognose entspricht.
**Format:** `VerbrauchsLimit:ArbeitspreisCent:GrundpreisEuro`
*Beispiel:*
`6000:12.80:5.36` (Tarif bis 6.000 kWh)
`99999:11.79:10.41` (Tarif ab 6.001 kWh)

---

## 📱 Installation als PWA
1. Datei im Browser auf dem Smartphone öffnen.
2. Im Menü (Teilen-Icon) auf **"Zum Home-Bildschirm hinzufügen"** tippen.
3. Die App startet nun im Vollbildmodus ohne störende Browser-Leisten.

---
*Entwickelt für maximale Transparenz und Datensouveränität.*
