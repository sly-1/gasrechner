# ⛽ GasZähler Pro v7.9.6 – Smart Budget & Analytics

Die ultimative Progressive Web App (PWA) zur präzisen Überwachung deines Gasverbrauchs. Optimiert für iOS und Android, bietet sie tiefere Einblicke als jeder Standard-Zähler.

## 🚀 Kernfunktionen (v7.9.6)

### 🚦 Intelligente 3-Stufen-Prognose
Schluss mit nervösen Schwankungen. Die Jahresprognose nutzt ein **5% Toleranz-System**:
* **🟢 Grün (Sicher):** Prognose liegt unter 95 % des Jahresbudgets.
* **🟠 Orange (Punktlandung):** Du liegst zwischen 95 % und 105 %. Alles im Plan, aber kein Puffer.
* **🔴 Rot (Nachzahlung):** Prognose über 105 %. Zeit, den Abschlag anzupassen.

### 💰 Real-Cashflow & Kontostand
Berechnet deinen Kontostand basierend auf **echten Zahltagen**. Gib einfach das Datum deines ersten Abschlags ein (z.B. 28.02.), und die App berechnet exakt, wie viel Geld du zum aktuellen Zeitpunkt bereits an den Versorger überwiesen hast vs. die real entstandenen Kosten.

### 🔔 Visuelles Feedback (Neu)
* **Save-Toast:** Eine dezente Bestätigung ("✅ Ablesung gespeichert") erscheint nach jedem Speichervorgang.
* **Smart-Badge:** Ein dynamisches Schild empfiehlt dir basierend auf der Prognose den idealen monatlichen Abschlag.

### 📊 Analyse & Datensicherheit
* **Trend-Chart:** Visualisiert den täglichen Durchschnittsverbrauch zwischen den Ablesungen.
* **Backup & Import:** Deine Daten gehören dir. Exportiere den gesamten Verlauf per Klick in die Zwischenablage.
* **Offset-Support:** Nutze einen Start-Zählerstand, falls du mitten im Jahr beginnst.

---

## 🛠 Installation (PWA)
1. Seite im mobilen Browser öffnen.
2. **iOS:** "Teilen" -> "Zum Home-Bildschirm".
3. **Android:** "Drei Punkte" -> "App installieren".

## 📝 Technisches Setup
Die App basiert auf einem Single-File-Ansatz (HTML5/CSS3/JS). 
* **Daten:** Lokal im Browser gespeichert (`localStorage`).
* **Berechnung:** Thermische Leistung ($kWh = m^3 \times 11.5 \times 0.95$).
* **Preise:** Dynamische Staffelung über `myTiers` konfigurierbar.

---

## 📜 Changelog
* **v7.9.6:** Einführung des Save-Confirmation-Toasts und UI-Stabilisierung.
* **v7.9.4:** Wiederherstellung der Backup- und Löschfunktionen.
* **v7.9.2:** Implementierung der 5% Toleranz-Logik für die Jahresprognose.
* **v7.9.0:** Umstellung auf diskrete monatliche Zahltage (Cashflow-Update).

---
*Präzise Kontrolle. Keine Überraschungen bei der Jahresabrechnung.*
