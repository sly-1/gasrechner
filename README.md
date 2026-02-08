# ⛽ GasZähler Pro v7.9.7 – Precision Update

Das präziseste Tool zur Gaskosten-Kontrolle. Jetzt mit dynamischen Netz-Parametern.

## 📐 Mathematische Genauigkeit
Die App nutzt die offizielle Formel zur Umrechnung von Kubikmetern in Kilowattstunden:
$$kWh = m^3 \times \text{Brennwert} \times \text{z-Zahl}$$

* **Brennwert:** Die im Gas enthaltene Energie (z.B. 11.25).
* **z-Zahl (Zustandszahl):** Korrekturfaktor für Temperatur und Druck (z.B. 0.952).
*Beide Werte findest du auf deiner letzten Gasrechnung.*

## 🚀 Neu in v7.9.7
* **Variable Faktoren:** Brennwert und z-Zahl sind jetzt direkt in den Einstellungen editierbar und werden im `localStorage` gespeichert.
* **kWh-Anzeige:** In der Info-Zeile des Kontostands werden nun auch die verbrauchten Kilowattstunden angezeigt.
* **UI-Feinschliff:** Optimierte Eingabefelder für mobile Nutzung.

## 🚦 Budget-Ampel (5% Toleranz)
* **🟢 < 95%:** Alles bestens.
* **🟠 95%-105%:** Punktlandung.
* **🔴 > 105%:** Nachzahlung droht.

---
*Präzision statt Schätzung.*
