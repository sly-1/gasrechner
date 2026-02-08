# ⛽ GasZähler Pro v8.0.1 – Clean & Focused Edition

Ein spezialisiertes Dashboard zur Überwachung von Gaskosten, das physikalische Präzision mit einer klaren, ablenkungsfreien Benutzeroberfläche kombiniert.

## 🎨 Design-Philosophie (v8.0.1 Update)
* **Neutrales Layout:** Eingabebereiche und Tabellen sind in neutralem Grau gehalten, um den Fokus auf die Daten zu lenken.
* **Funktionale Farben:** Farben werden ausschließlich für Status-Meldungen (Ampel-System) verwendet. 
* **Verbesserte Sichtbarkeit:** Die Ampel-Karten (Kontostand & Prognose) nutzen verstärkte linke Akzentleisten für sofortige visuelle Rückmeldung.

## 🚦 Intelligentes Ampel-System
Die App nutzt zwei unabhängige Logik-Systeme zur Kostenkontrolle:

1.  **Echter Kontostand (Cashflow):**
    * Vergleicht die Summe deiner bisher gezahlten Abschläge mit den real aufgelaufenen Kosten.
    * **Grün:** Du hast ein Guthaben.
    * **Rot:** Du bist im Rückstand (Nachzahlung droht).

2.  **Jahresprognose (Trend-Analyse):**
    * Berechnet basierend auf deinem Durchschnittsverbrauch die Kosten bis zum Jahresende.
    * **Grün (< 95% des Budgets):** Alles im grünen Bereich.
    * **Orange (95% - 105%):** Punktlandung oder leichte Nachzahlung.
    * **Rot (> 105%):** Dein aktueller Abschlag ist zu niedrig.

## ⚙️ Kern-Konfiguration
* **Brennwert & z-Zahl:** Individuell einstellbar nach den Angaben deines Netzbetreibers.
* **Start-Offset:** Ermöglicht den Einstieg bei laufenden Zählerständen.
* **Sicherheit:** Optionale PIN-Sperre zum Schutz deiner Finanzdaten (Standard: deaktiviert).

## 🚀 Schnelleinstieg
1. HTML-Code als `index.html` speichern.
2. Parameter (Abschlag, Brennwert, etc.) in den Einstellungen hinterlegen.
3. Ersten Zählerstand speichern.
4. Regelmäßig (z.B. wöchentlich) ablesen für präzise Prognosen.

---
*Präzision statt Rätselraten bei der nächsten Abrechnung.*
