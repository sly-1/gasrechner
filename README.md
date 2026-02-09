# ⛽ GasZähler Pro v8.3.9 – Ultimate Edition

Eine hochpräzise Progressive Web App (PWA) zur vollständigen Kontrolle deines Gasverbrauchs und deiner Finanzen. Entwickelt für maximale Transparenz und Datensicherheit.

## 🚀 Neue Features in v8.3.9
* **Dynamische Bestpreis-Logik:** Die App berechnet automatisch, ob du mit deinem aktuellen Verbrauch in der günstigeren Preisstufe landest und passt die Kostenrechnung in Echtzeit an.
* **Konfigurierbare Preis-Staffeln:** Tarife sind nicht mehr fest im Code, sondern direkt in den Einstellungen über das Format `Limit:Cent:Grundpreis` editierbar.
* **Doppel-Ampel-System:** Sofortiges visuelles Feedback für den aktuellen Kontostand (Guthaben/Nachzahlung) sowie die Jahresprognose (Abschlags-Check).
* **Live-Preview Mode:** Teste neue Zählerstände direkt im Eingabefeld. Die App zeigt vorläufige Berechnungen in einem dezenten "Draft-Stil" an, ohne die Historie zu verändern.

## 🛠 Kern-Funktionen
### 💰 Finanz-Dashboard
* **Echtzeit-Saldo:** Vergleich deiner gezahlten Abschläge mit den real aufgelaufenen Kosten.
* **Safety Advisor:** Empfehlung für einen "Sicheren Abschlag" basierend auf der Jahresprognose inklusive eines 10%igen Puffers.
* **Kommerzielle Rundung:** Alle Empfehlungen werden für eine saubere Budgetplanung auf volle Euro gerundet.

### 📈 Analyse & Trends
* **Trend-Indikatoren:** Symbole (↗︎, ↘︎, →) zeigen sofort, ob dein aktueller Tagesverbrauch über oder unter deinem langjährigen Durchschnitt liegt.
* **Interaktives Chart:** Visualisierung des m³-Verbrauchs pro Tag über den Zeitverlauf.
* **Automatisierte Hochrechnung:** Präzise Jahresprognose unter Berücksichtigung von Brennwert und Zustandszahl.

### 🔒 Sicherheit & Privatsphäre
* **Privacy First:** Alle Daten werden ausschließlich lokal im `LocalStorage` deines Browsers gespeichert. Keine Cloud, kein Tracking.
* **App-Lock:** Optionaler Schutz durch eine PIN-Abfrage beim Start der Anwendung.
* **Daten-Hoheit:** Integrierte Export- und Importfunktionen für manuelle Backups.

## ⚙️ Einrichtung der Preis-Staffeln
Trage deine Tarife in den Einstellungen wie folgt ein (eine Stufe pro Zeile):
`6000:12.80:5.36`  (Bis 6.000 kWh: 12,80 ct/kWh und 5,36 € Grundpreis)
`99999:11.79:10.41` (Darüber: 11,79 ct/kWh und 10,41 € Grundpreis)

---
*Entwickelt als leichtgewichtige Single-File-Lösung für maximale Performance auf iOS und Android.*
