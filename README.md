# ⛽ GasZähler Pro v8.3.12 – Ultimate Control Edition

**GasZähler Pro** ist eine hochpräzise, datenschutzorientierte Progressive Web App (PWA), die speziell für Hausbesitzer und Mieter entwickelt wurde, um die volle Kontrolle über Gaskosten und Verbrauchsverhalten zu behalten. 

Keine Cloud, kein Abo, keine Datenweitergabe – alles bleibt lokal auf deinem Gerät.

---

## 🚀 Die Highlights der v8.3.12

### 1. Dynamisches UI-Management (NEU)
Um die App auch nach jahrelanger Nutzung übersichtlich zu halten, wurden neue Navigations-Konzepte eingeführt:
* **Wischbares Diagramm:** Das Verbrauchs-Chart wird nicht mehr horizontal zusammengepresst. Pro Eintrag erhält das Chart 45px Breite. Über ein Scroll-Fenster kannst du bequem durch die Zeit wischen. Die App fokussiert beim Start automatisch den aktuellsten Datenpunkt ganz rechts.
* **Kompakte Einstellungen:** Durch ein neues Grid-Layout stehen zusammengehörige Werte (wie Brennwert & z-Zahl) nun nebeneinander. Dies reduziert die Höhe des Einstellungsmenüs um über 50%.
* **Scroll-Historie:** Die Tabelle der vergangenen Ablesungen ist nun in einem festen Container mit "Sticky-Header" gekapselt. Die Spaltenüberschriften bleiben beim Scrollen immer sichtbar.

### 2. Intelligente Finanz-Ampel (Dual-Status)
Die App bewertet deine finanzielle Situation in Echtzeit auf zwei Ebenen:
* **Der Kontostand (Current Balance):** Vergleicht deine bisher gezahlten Abschläge mit den real aufgelaufenen Kosten.
    * 🟢 **Grün:** Du hast aktuell ein Guthaben.
    * 🔴 **Rot:** Du bist im Minus (Nachzahlungsgefahr zum jetzigen Zeitpunkt).
* **Die Prognose (Prediction):** Analysiert, ob dein gewählter monatlicher Abschlag für das restliche Jahr basierend auf deinem Durchschnittsverbrauch ausreicht.
    * 🔵 **Blau:** Dein Abschlag ist viel zu hoch (Geld verschenkt).
    * 🟢 **Grün:** Dein Abschlag ist perfekt auf deinen Verbrauch abgestimmt.
    * 🟠 **Orange:** Warnung, es wird zum Ende des Jahres knapp.
    * 🔴 **Rot:** Sofortige Erhöhung empfohlen, um hohe Nachzahlungen zu vermeiden.

### 3. Bestpreis-Abrechnungs-Engine
Viele Gasanbieter nutzen Preisstaffeln (z.B. Wechsel des Arbeitspreises ab 6.000 kWh). 
* Die App prüft bei jedem Eintrag automatisch, in welche Staffel deine Jahresprognose fällt.
* Die Kosten werden sofort auf Basis des voraussichtlich günstigsten Tarifs berechnet.

### 4. Daten-Integrität & Plausibilität
Ein mechanischer Gaszähler läuft niemals rückwärts. 
* **Plausibilitäts-Schutz:** Die App blockiert das Speichern von Werten, die niedriger als der letzte Stand sind.
* **Live-Vorschau:** Alle Berechnungen (Guthaben, Prognose, Trend) werden bereits *während* des Tippens als "Vorschau" (kursiv) visualisiert.

---

## 🛠 Technische Details & Einrichtung

### Die Berechnungslogik
Die App nutzt die offizielle Formel zur Ermittlung der thermischen Energie:
$$kWh = m^3 \times Brennwert \times Zustandszahl$$

### Preis-Staffeln konfigurieren
Trage deine Tarife in den Einstellungen zeilenweise wie folgt ein (`Limit:Arbeitspreis_Cent:Grundpreis_Euro`):
* `6000:12.80:5.36` (Bis 6.000 kWh: 12,80 ct/kWh und 5,36 € Grundpreis/Monat)
* `99999:11.79:10.41` (Ab 6.001 kWh: 11,79 ct/kWh und 10,41 € Grundpreis/Monat)

### Installation als PWA
1. Öffne die Datei in deinem mobilen Browser (z.B. Safari auf iOS).
2. Tippe auf das **Teilen-Icon** und wähle **"Zum Home-Bildschirm hinzufügen"**.
3. Die App wird nun mit eigenem Icon auf deinem Homescreen installiert und startet im Vollbildmodus ohne Browser-Leisten.

---

## 🔒 Datenschutz & Sicherheit
* **Offline-First:** 100% der Daten werden im `LocalStorage` deines Browsers gespeichert.
* **PIN-Schutz:** Optional kannst du in den Einstellungen eine PIN vergeben. Die App sperrt sich bei jedem Schließen automatisch.
* **Backup:** Über die Export/Import-Funktion kannst du deine Daten jederzeit als Text-String sichern.

---
*Entwickelt für maximale Transparenz in Zeiten steigender Energiekosten.*
