# ⛽ GasZähler Pro – Final Version

Ein hochpräziser Gasverbrauchs-Tracker für den Browser, optimiert als Progressive Web App (PWA). Diese App wurde speziell für Tarife mit **Bestabrechnung** (Staffelpreise) und präziser Kostenkontrolle entwickelt.

## 📊 Aktuelle Tarif-Konfiguration
Die App ist auf deine spezifischen Vertragsdaten vorkonfiguriert:

* **Brennwert:** 11,500
* **Z-Zahl:** 0,9500
* **Start-Offset:** 1,000 m³ (Kostenberechnung beginnt erst ab diesem Zählerstand)
* **Stufe 1 (bis 6.000 kWh/Jahr):** 12,80 ct/kWh | Grundpreis: 5,36 €/Monat
* **Stufe 2 (ab 6.001 kWh/Jahr):** 11,79 ct/kWh | Grundpreis: 10,41 €/Monat

## ✨ Kernfunktionen
* **Dynamische Bestabrechnung:** Automatische Auswahl der günstigsten Preisstaffel basierend auf dem (hochgerechneten) Jahresverbrauch.
* **Prognose-Modul:** Berechnet die voraussichtlichen Jahreskosten basierend auf deinem aktuellen täglichen Durchschnittsverbrauch.
* **Tagesgenaue Grundgebühr:** Die Fixkosten werden exakt auf die Tage zwischen den Ablesungen verteilt.
* **Datensicherung:** Integrierte Export- und Importfunktion via Backup-Code.

## 🛠 Bedienungsanleitung
1.  **Referenzpunkt setzen:** Speichere als ersten Eintrag den Zählerstand **1,000 m³** mit dem Datum deiner Übernahme/Vertragsbeginn.
2.  **Regelmäßige Ablesung:** Trage neue Stände ein, um den Trend und die Prognose zu verfeinern.
3.  **Installation:** Wähle im Browser deines Smartphones **"Zum Home-Bildschirm hinzufügen"**, um die App wie eine native Anwendung zu nutzen.

---

## 📝 Changelog

### v5.0 (Aktuelle Version)
* **Feature:** Vollständige Backup-Suite (Export/Import via Zwischenablage) wiederhergestellt.
* **Update:** Standard-Brennwert auf 11,500 angepasst.
* **Fix:** Fehlerkorrektur in der Prognose-Logik (Start-Offset-Abzug).
* **Persistence:** Brennwert-Einstellungen werden nun dauerhaft lokal gespeichert.

### v4.0
* **Feature:** Implementierung des Start-Offsets (Zählerstand bei Übernahme).
* **Feature:** Hinterlegung der individuellen Tarif-Staffeln (12,80ct / 11,79ct).

### v3.0
* **Feature:** Einführung der linearen Jahresprognose (Extrapolation auf 365 Tage).
* **Feature:** Grafische Darstellung des Verbrauchs-Trends (m³/Tag) via Chart.js.
* **UI:** Optimierung des Designs für iOS-Look & Feel.

### v2.0
* **Feature:** Unterstützung für Staffel-Tarife und Bestabrechnung.
* **Feature:** Einführung der anteiligen Grundpreis-Berechnung pro Tag.

### v1.0
* **Basis:** Grundlegende Zählerstand-Erfassung und Umrechnung von m³ in kWh.
* **Storage:** Implementierung des LocalStorage zur dauerhaften Speicherung der Historie.

---
*Entwickelt als maßgeschneiderte Lösung zur präzisen Gaskosten-Kontrolle.*
