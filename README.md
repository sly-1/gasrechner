# ⛽ GasZähler Pro v8.3.14 – Balanced Stability Edition

**GasZähler Pro** ist eine hochpräzise, datenschutzorientierte Progressive Web App (PWA) zur Überwachung von Gasverbrauch und Heizkosten. Entwickelt für Hausbesitzer und Mieter, bietet sie maximale Transparenz über die finanzielle Entwicklung deines Energieverbrauchs – ohne Cloud-Zwang und zu 100 % lokal auf deinem Gerät.

---

## 🚦 Das Doppel-Ampel-System (Echtzeit-Analyse)

Die App nutzt eine duale Analyse-Logik, um dir sowohl den aktuellen Kontostand als auch die voraussichtliche Jahresabrechnung zu visualisieren:

### 1. Saldo-Ampel (Ist-Zustand: "Habe ich aktuell genug gezahlt?")
Diese Ampel vergleicht die Summe deiner bisher geleisteten Abschlagszahlungen mit den real aufgelaufenen Kosten seit dem Datum deiner ersten Zahlung.
* 🟢 **Guthaben:** Deine geleisteten Zahlungen übersteigen die aktuellen Kosten. Du bist finanziell im sicheren Bereich.
* 🔴 **Nachzahlung:** Dein realer Verbrauch ist höher als die bisherigen Abschläge. Würde heute abgerechnet, müsstest du den Differenzbetrag sofort begleichen.

### 2. Prognose-Ampel (Soll-Zustand: "Reicht mein Abschlag für das Jahr?")
Basierend auf deinem Durchschnittsverbrauch ($m^3/Tag$) berechnet die App die voraussichtlichen Gesamtkosten für 365 Tage und vergleicht diese mit deiner jährlichen Abschlags-Summe.
* 🔵 **Blau (Zu hoch):** Dein Abschlag ist deutlich zu hoch angesetzt. Du gewährst deinem Anbieter ein zinsloses Darlehen.
* 🟢 **Grün (Ideal):** Abschlag und Verbrauch sind perfekt aufeinander abgestimmt. Keine Überraschungen zu erwarten.
* 🟠 **Orange (Knapp):** Eine leichte Nachzahlung zeichnet sich ab. Eine moderate Erhöhung des Abschlags wird empfohlen.
* 🔴 **Rot (Korrektur nötig!):** Dein Abschlag wird die Jahreskosten nicht decken. Erhöhe deinen Abschlag zeitnah, um eine hohe Einmalzahlung zu vermeiden.

---

## 🚀 Highlights der v8.3.14

### 📐 Neu: Full-Width Layout für Konfiguration
In der Version 8.3.14 wurde die Ergonomie der Einstellungen entscheidend verbessert:
* **Datum-Stabilität:** Das Feld für die **1. Abschlagszahlung** nutzt nun die volle Displaybreite. Dies verhindert Darstellungsfehler und Fehlberechnungen des Saldos auf schmalen Smartphones.
* **Separater PIN-Bereich:** Die PIN-Sperre wurde logisch unter das Datumsfeld verschoben, um Eingabefehler zu minimieren.

### 📊 Sticky-Axis Chart (Fixierte Achse)
Das Verbrauchsdiagramm wurde für die Langzeitnutzung optimiert:
* **Fixierte Skala:** Beim horizontalen Scrollen durch deine monatlichen Verbräuche bleibt die Y-Achse (Verbrauch in $m^3/Tag$) am linken Rand fixiert.
* **Smart-Focus:** Beim Öffnen der App springt das Diagramm automatisch zum aktuellsten Datenpunkt ganz rechts.

### 🔒 Safe-Delete Sicherheitssystem
Ein versehentliches Löschen der Datenbank ist durch eine zweistufige Barriere geschützt:
* **Klartext-Bestätigung:** Das vollständige Zurücksetzen erfordert die manuelle Eingabe des Wortes **"LÖSCHEN"**.
* **Eingabe-Validierung:** Die App verhindert das Speichern von Zählerständen, die niedriger als der letzte Eintrag sind, um die Statistik sauber zu halten.

---

## 🛠 Technische Details & Einrichtung

### Berechnungslogik
Die Umrechnung von Volumen in Energie erfolgt nach der physikalischen Grundformel:
$$kWh = (m^3_{aktuell} - m^3_{start}) \times Brennwert \times Zustandszahl$$

### Bestpreis-Engine (Tarifstaffeln)
Die App unterstützt Preisstaffeln (z.B. günstigerer Arbeitspreis ab einer bestimmten Abnahmemenge).
**Format:** `VerbrauchsLimit:ArbeitspreisCent:GrundpreisEuro`
*Beispiel für einen zweistufigen Tarif:*
`6000:12.80:5.36` (Bis 6.000 kWh)
`99999:11.79:10.41` (Über 6.000 kWh)

---

## 📱 PWA-Installation
1. Öffne die App im mobilen Browser (z.B. Safari oder Chrome).
2. Wähle im Menü **"Zum Home-Bildschirm hinzufügen"**.
3. Die App wird nun als eigenständige Anwendung ohne Browser-Adressleiste gestartet.

---
*Präzise. Sicher. Lokal. Dein Verbrauch unter deiner Kontrolle.*
