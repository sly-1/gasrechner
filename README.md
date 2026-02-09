# ⛽ GasZähler Pro v8.3.10 – Ultimate Control

GasZähler Pro ist eine hochoptimierte Progressive Web App (PWA), die speziell für die präzise Überwachung von Gasverbrauch und Heizkosten entwickelt wurde. Sie kombiniert technische Genauigkeit mit intuitiven Finanz-Analysen.

## 🌟 Top-Features (v8.3.10)

### 🛡️ Daten-Integrität & Plausibilität
* **Rücklauf-Schutz:** Die App erkennt unlogische Eingaben. Ist ein eingegebener Zählerstand niedriger als der vorherige, wird die Speicherung blockiert und das Feld markiert.
* **Live-Vorschau:** Berechnungen werden bereits während der Eingabe im "Draft-Modus" (ausgegraut) angezeigt, um Fehler vor dem Speichern zu vermeiden.

### 💰 Intelligentes Tarif-Management
* **Bestpreis-Automatik:** Vollautomatische Berechnung des günstigsten Tarifs bei Anbietern mit verbrauchsabhängigen Preisstaffeln.
* **Frei konfigurierbare Staffeln:** Tarife können direkt in den Einstellungen im Format `Limit:Arbeitspreis:Grundpreis` hinterlegt werden (z.B. für die 6.000 kWh Grenze).
* **Brennwert & z-Zahl:** Berücksichtigung technischer Faktoren zur exakten Umrechnung von m³ in kWh.

### 🚦 Visuelles Feedback (Doppel-Ampel)
* **Konto-Status:** Sofortige Anzeige, ob du aktuell ein Guthaben (Grün) hast oder eine Nachzahlung (Rot) droht.
* **Abschlags-Check:** Die Jahresprognose bewertet deinen monatlichen Abschlag:
    * 🟦 **Blau:** Abschlag deutlich zu hoch.
    * 🟩 **Grün:** Abschlag ideal gewählt.
    * 🟧 **Orange:** Knapp kalkuliert.
    * 🟥 **Rot:** Abschlag muss dringend erhöht werden.

### 📊 Analyse & Trends
* **Trend-Indikatoren:** Pfeile (↗︎, ↘︎, →) vergleichen deinen aktuellen Tagesverbrauch mit dem historischen Durchschnitt.
* **Sicherer Abschlag:** Berechnet basierend auf der Prognose einen empfohlenen Abschlag inkl. 10% Sicherheitspuffer.
* **Interaktive Historie:** Grafische Darstellung des Verbrauchsverlaufs mittels Chart.js.

## ⚙️ Einrichtung der Preis-Staffeln
In den Einstellungen kannst du deine Tarife zeilenweise definieren:
`6000:12.80:5.36` (Stufe 1: bis 6.000 kWh, 12.8 ct, 5.36 € Grundpreis)
`99999:11.79:10.41` (Stufe 2: alles darüber, 11.79 ct, 10.41 € Grundpreis)

## 🔒 Privatsphäre & Sicherheit
* **Offline-First:** Alle Daten verbleiben im `LocalStorage` deines Geräts. Keine Cloud-Anbindung, kein Tracking.
* **App-Lock:** Optionaler Schutz durch eine 4-stellige PIN beim App-Start.
* **Backup:** Einfacher Export/Import der gesamten Historie als Text-String.

---
*Optimiert für die Installation als Web-App auf dem Homescreen (iOS & Android).*
