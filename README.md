# ⚖️ GasZähler Pro v8.3.15
> **Präzises Energiemonitoring & Finanzprognose im iOS-Design.**
> Eine autarke Web-Applikation zur Erfassung, Analyse und Echtzeit-Simulation deines Gasverbrauchs.

---

## 💎 Release Notes v8.3.15
* **Grid-Stabilisierung:** Das Eingabefeld "Datum der 1. Zahlung" nutzt nun die volle Breite des Einstellungsrasters, um Darstellungsfehler auf Mobilgeräten zu eliminieren.
* **Ergonomie-Update:** Alle Aktionsschaltflächen wurden auf eine maximale Breite von 320px begrenzt und zentriert, was die Bedienbarkeit auf Tablets und Desktops massiv verbessert.
* **Smart-Layout:** Adaptive Spaltenanpassung im Einstellungsmenü für bessere Lesbarkeit.

---

## 🚦 Intelligentes Status-System (Ampel-Logik)
Die App bietet eine sofortige visuelle Rückmeldung über deinen finanziellen Status:

### 1. Saldo-Ampel (Ist-Zustand)
Prüft, ob deine bisherigen Abschlagszahlungen die aktuell verbrauchten Kosten decken:
* 🟢 **Guthaben:** Die Summe deiner Abschläge ist höher als die Kosten des realen Verbrauchs.
* 🔴 **Nachzahlung:** Die verbrauchten kWh kosten bereits mehr, als du bisher eingezahlt hast.

### 2. Prognose-Ampel (Jahres-Trend)
Berechnet die Wahrscheinlichkeit einer Nachzahlung am Ende des Abrechnungszeitraums:
* 🔵 **Blau (Überzahlung):** Deine Abschläge sind viel zu hoch angesetzt (>10% Puffer).
* 🟢 **Grün (Ideal):** Dein Verbrauch deckt sich fast exakt mit deinem Zahlplan.
* 🟠 **Orange (Warnung):** Ein leichter Mehrverbrauch (5-15%) wurde registriert.
* 🔴 **Rot (Kritisch):** Hohe Nachzahlungsgefahr (>15% über Plan).

---

## 🛠 Technische Grundlagen

### 1. Energie-Berechnung
Die Umrechnung von Volumen ($m^3$) in Energie ($kWh$) erfolgt nach der thermischen Formel:



**Formel:** $E_{kWh} = (V_{Differenz}) \cdot H_s \cdot z$
* **Brennwert ($H_s$):** Energiegehalt des Gases (siehe Abrechnung).
* **Zustandszahl ($z$):** Korrekturfaktor für Temperatur und Druck.

### 2. Visualisierung
* **Trend-Charts:** Dynamische Balkendiagramme visualisieren den täglichen Lastgang.
* **Trend-Pfeile:** Direkter Vergleich des aktuellen Intervalls mit dem globalen Durchschnitt (↗︎, ↘︎, →).

---

## 🔒 Sicherheit & Privatsphäre
* **Local Storage:** Daten werden sandboxed im Browser gespeichert. Kein Cloud-Zwang.
* **PIN-Sperre:** Schutz deiner Finanzdaten vor unbefugtem Zugriff.
* **Datenhoheit:** Export und Import der Historie via JSON-Schnittstelle möglich.

---

## 🚀 Inbetriebnahme
1. Öffne die **Einstellungen** (Zahnrad-Symbol).
2. Trage **Brennwert** und **z-Zahl** deiner letzten Rechnung ein.
3. Hinterlege das **Datum der 1. Zahlung** und deinen **Abschlag**.
4. Speichere deinen ersten Zählerstand – GasZähler Pro übernimmt die Analyse.
