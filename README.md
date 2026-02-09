# ⛽ GasZähler Pro v8.3.11 – Ultimate Control Edition

**GasZähler Pro** ist eine hochpräzise, datenschutzorientierte Progressive Web App (PWA), die speziell für Hausbesitzer und Mieter entwickelt wurde, um die volle Kontrolle über Gaskosten und Verbrauchsverhalten zu behalten. 

Keine Cloud, kein Abo, keine Datenweitergabe – alles bleibt lokal auf deinem Gerät.

---

## 🚀 Die Highlights der v8.3.11

### 1. Intelligente Finanz-Ampel (Dual-Status)
Die App bewertet deine finanzielle Situation in Echtzeit auf zwei Ebenen:
* **Der Kontostand:** Vergleicht gezahlte Abschläge mit verbrauchtem Gas. 
    * 🟢 **Grün:** Du hast ein Guthaben.
    * 🔴 **Rot:** Du bist im Minus (Nachzahlungsgefahr).
* **Die Prognose:** Analysiert, ob dein monatlicher Abschlag für das restliche Jahr reicht.
    * 🔵 **Blau:** Abschlag viel zu hoch (Geld verschenkt).
    * 🟢 **Grün:** Abschlag ist perfekt eingestellt.
    * 🟠 **Orange:** Warnung, es könnte knapp werden.
    * 🔴 **Rot:** Sofortige Erhöhung empfohlen, um Nachzahlungen zu vermeiden.

### 2. Bestpreis-Abrechnungs-Engine
Viele Gasanbieter nutzen Preisstaffeln (z.B. günstigerer Arbeitspreis ab 6.000 kWh). 
* Die App prüft bei jedem Eintrag automatisch, in welche Staffel deine Jahresprognose fällt.
* Die Kosten werden sofort auf Basis des voraussichtlich günstigsten Tarifs berechnet.

### 3. Daten-Integrität (Plausibilitäts-Check)
Ein Gaszähler läuft niemals rückwärts. 
* **Schutzfunktion:** Die App blockiert Eingaben, die niedriger als der letzte gespeicherte Stand sind.
* **Visuelles Feedback:** Das Eingabefeld färbt sich rot, falls ein Tippfehler vorliegt.

### 4. Optimierte Benutzeroberfläche
* **Scrollable History:** Die Tabellenansicht ist in einem festen Fenster gekapselt. Auch nach Jahren der Nutzung bleibt die App kompakt und der "Speichern"-Button sofort erreichbar.
* **Sticky Header:** Die Spaltenüberschriften bleiben beim Scrollen der Historie immer sichtbar.
* **Live-Preview:** Alle Berechnungen (Guthaben, Prognose) werden bereits *während* des Tippens als "Vorschau" (kursiv/gegraut) angezeigt.

---

## 🛠 Technische Details & Einrichtung

### Umrechnungsformel
Die App berechnet die thermische Energie nach der Standardformel:
$kWh = m^3 \times Brennwert \times Zustandszahl$

### Preis-Staffeln konfigurieren
Trage deine Tarife in den Einstellungen wie folgt ein (Limit:Cent:Grundpreis):
`6000:12.80:5.36` (Bis 6.000 kWh)
`99999:11.79:10.41` (Ab 6.001 kWh)

### Installation als App
1.  Öffne die HTML-Datei in deinem mobilen Browser (Safari/Chrome).
2.  Wähle **"Zum Home-Bildschirm hinzufügen"**.
3.  Die App startet nun ohne Browser-Leiste im Vollbildmodus.

---

## 🔒 Datenschutz & Sicherheit
* **Lokal:** Alle Daten werden im `LocalStorage` deines Browsers gespeichert.
* **PIN-Schutz:** Aktiviere in den Einstellungen eine 4-stellige PIN, um unbefugten Zugriff zu verhindern.
* **Backup-System:** Nutze die Export-Funktion, um deine Daten als Text-String zu sichern (z.B. in einer Notiz-App).

---
*Entwickelt für maximale Transparenz in Zeiten steigender Energiekosten.*
