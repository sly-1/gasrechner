# ⛽ GasZähler Pro v7.9 – Real Cashflow Edition

Maximale Präzision in der Kostenkontrolle durch Berücksichtigung echter Zahlungsströme.

## 📅 Zahlungsplan-Logik (v7.9)
Die App rechnet nicht mehr mit fiktiven Tagesraten, sondern mit realen Zahltagen:
* **Zahltag-Check:** Du definierst das Datum des ersten Abschlags (z.B. 28.02.2026).
* **Cashflow-Analyse:** Der Kontostand bleibt negativ, bis ein Zahltag erreicht wird. Erst dann springt das Guthaben nach oben.
* **Abschlags-Limit:** Unterstützung für Tarife mit weniger als 12 Abschlägen pro Jahr (z.B. 11 Zahlungen).

## ⚙️ Kern-Funktionen
* **Präziser Kontostand:** Abgleich zwischen tatsächlich geleisteten Zahlungen und verbrauchtem Gas.
* **Jahresprognose:** Hochrechnung basierend auf dem aktuellen Tagesschnitt inklusive Grundpreis-Staffelung.
* **Zähler-Offset:** Unterstützung für beliebige Start-Zählerstände.

---

## 📝 Changelog

### v7.9 (Real Cashflow)
* **Neu:** Implementierung eines Zahlungsplans (Startdatum & Anzahl Abschläge).
* **Fix:** Kontostand-Berechnung von linearer Tagesrate auf diskrete Zahltage umgestellt.
* **UI:** Neuer Bereich "Zahlungsplan" in den Einstellungen.

---
*Maßgeschneiderte Lösung zur präzisen Gaskosten-Kontrolle.*
