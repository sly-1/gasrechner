# ⚖️ GasZähler Pro v8.3.14
> **High-End Energiemonitoring & Finanzprognose**
> Eine professionelle Single-Page-Application (SPA) im nativen iOS-Design zur präzisen Erfassung, Analyse und Simulation von Gasverbrauchsdaten.

---

## 💎 Release Notes v8.3.14
* **Layout-Architektur:** Korrektur des Grids für das Start-Zahlungsdatum (kein Overflow mehr auf iPhone SE/Mini).
* **Ergonomie-Update:** Dynamische Button-Skalierung (max. 350px) für bessere Bedienbarkeit auf iPads und Desktops.
* **Eingabe-Validierung:** Visuelles Feedback bei unplausiblen Zählerständen (Vermeidung von Negativ-Verbräuchen).

---

## 🚦 Das Intelligente Ampel-System (Deep Dive)
Die App nimmt dir die Interpretation der nackten Zahlen ab. Hier ist die Logik hinter den Status-Badges:

### 1. Saldo-Ampel (Echtzeit-Finanzcheck)
Diese Ampel beantwortet die Frage: *"Habe ich bis heute genug Abschlag bezahlt?"*
* 🟢 **Guthaben:** Die Summe der geleisteten Abschläge (basierend auf dem Datum der 1. Zahlung) ist höher als die tatsächlichen Kosten der verbrauchten kWh.
* 🔴 **Nachzahlung:** Die aktuellen Kosten übersteigen die bereits geleisteten Zahlungen. Zeit für eine manuelle Rücklage.

### 2. Prognose-Ampel (Jahres-Trendanalyse)
Hier wird der aktuelle Durchschnittsverbrauch auf 365 Tage hochgerechnet und mit der Jahressumme deiner Abschläge verglichen.
* 🔵 **Blau (Überzahlung):** Du zahlst deutlich zu viel (>10% Puffer). Senkung der Abschläge möglich.
* 🟢 **Grün (Zielkurs):** Dein Verbrauch passt perfekt zu deinen Zahlungen (Abweichung < 5%).
* 🟠 **Orange (Warnung):** Du liegst leicht über dem Soll (5% bis 15% Mehrverbrauch). 
* 🔴 **Rot (Kritisch):** Dein prognostizierter Jahresverbrauch liegt >15% über deinem Zahlplan. Eine hohe Nachzahlung bei der Jahresabrechnung droht!

---

## 🛠 Technische Kern-Module & Logik

### 1. Die Thermische Rechen-Engine
Gas wird in Volumen ($m^3$) gemessen, aber in Energie ($kWh$) bezahlt. Die App berechnet dies präzise:

* **Brennwert ($H_s$):** Energiegehalt pro $m^3$ (standardmäßig ca. 10.5 bis 11.5).
* **Zustandszahl ($z$):** Korrekturfaktor für Temperatur und Luftdruck am Standort.
* **Formel:** $$E_{\text{kWh}} = (V_{\text{neu}} - V_{\text{start}}) \cdot H_s \cdot z$$

### 2. Dynamische Staffeltarife
Unterstützt komplexe Versorgungsverträge durch Eingabe im Format `Limit:Cent:Grundpreis`. Die App wählt automatisch die günstigste Staffel basierend auf der Prognose.

### 3. Trend-Analyse & Historie
* **Trend-Pfeile:** Vergleicht den aktuellen Intervall-Verbrauch mit dem globalen Durchschnitt.
* **Scrollable Charts:** Visualisierung der täglichen Lastgänge via Chart.js, optimiert für Touch-Gesten.

---

## 🔒 Sicherheit & Datenschutz
* **Local-First:** 100% datenschutzkonform. Daten werden im `localStorage` des Browsers sandboxed gespeichert.
* **PIN-Protection:** AES-inspirierter Zugriffsschutz durch den integrierten Lock-Screen.
* **Daten-Souveränität:** Manuelle Export- und Importfunktion via JSON-Backup-Strings.

---

## 🚀 Setup-Anleitung
1. **Einstellungen öffnen:** Klicke auf das Zahnrad-Symbol.
2. **Parameter setzen:** Brennwert und z-Zahl laut letzter Abrechnung eintragen.
3. **Zahlplan:** Datum der 1. Zahlung und monatlichen Abschlag hinterlegen.
4. **Erfassung:** Ersten Zählerstand als "Start-m³" eintragen oder direkt in die Historie speichern.
