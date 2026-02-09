# 🔥 GasZähler Pro v8.5.8

**GasZähler Pro** ist eine hochspezialisierte Progressive Web App (PWA) zur präzisen Überwachung und Prognose von Gasverbrauch und Heizkosten. Sie wurde entwickelt, um Nachzahlungs-Schocks zu vermeiden, indem sie eine „Rechtzeit-Ampel“ mit kaufmännischen Sicherheits-Puffern kombiniert.

---

## 🚀 Kern-Features im Detail

### 1. Intelligente Dateneingabe & Validierung
* **Chronologie-Schutz:** Das System verhindert aktiv falsche Eingaben. Ein neuer Stand kann nur gespeichert werden, wenn er zeitlich und wertmäßig logisch zwischen die vorhandenen Daten passt.
* **Dubletten-Sperre:** Pro Kalendertag ist nur ein Eintrag zulässig, um Berechnungsfehler durch "Null-Tage" zu vermeiden.
* **Live-Vorschau (Blau):** Schon während der Eingabe zeigt eine kursive blaue Zeile in der Tabelle, wie sich der neue Wert auf den Trend und den Tagesverbrauch auswirken würde.

### 2. Finanz-Logik & Prognose
* **Dynamische Tarif-Staffelung:** Unterstützung für komplexe Tarife (z.B. Preisbremsen). Das System erkennt automatisch, in welche Verbrauchsstufe die aktuelle Jahresprognose fällt.
* **Kaufmännischer 10% Puffer:** Alle Kostenprognosen enthalten einen standardmäßigen Sicherheitsaufschlag von 10%, um kalte Winter oder Preisschwankungen abzufedern.
* **Abschlags-Dynamik (Ampel-System):**
    * 💎 **Blau:** Dein Abschlag ist sehr hoch (>15% über Bedarf). Hohe Rückzahlung zu erwarten.
    * ✅ **Grün:** Dein Abschlag ist ideal (deckt Basiskosten + 10% Puffer).
    * ⚠️ **Orange:** Dein Abschlag deckt die Basiskosten, aber der 10% Puffer wird bereits angegriffen.
    * 🚨 **Rot:** Dein Abschlag ist zu niedrig. Eine Nachzahlung ist wahrscheinlich.
* **Saldo-Berechnung:** Berechnet auf den Cent genau das aktuelle Guthaben oder Minus gegenüber den bereits geleisteten monatlichen Zahlungen (seit dem Datum der ersten Zahlung).

### 3. Quick-Stats & Analyse
* **Monats-Tracking:** Zeigt den realen Verbrauch (m³) im aktuellen Kalendermonat an.
* **Tages-Durchschnitt:** Ermittelt den m³-Verbrauch pro Tag über die gesamte Laufzeit.
* **Kosten-Check:** Zeigt die durchschnittlichen Kosten pro Tag in Euro (inkl. Grundgebühr und Puffer).
* **Trend-Pfeile:** Jede Tabellenzeile zeigt per Pfeil (`↗`, `→`, `↘`), ob der Verbrauch in diesem Zeitraum über oder unter dem Gesamtdurchschnitt lag.

### 4. Datensicherheit & Tools
* **PIN-Schutz:** Integrierter PIN-Schutz für das Setup-Menü.
* **Lokale Speicherung:** Alle Daten verbleiben ausschließlich im `LocalStorage` deines Browsers (keine Cloud, 100% Privatsphäre).
* **Backup & Restore:** Einfacher Export/Import der gesamten Datenbank als JSON-String über die Zwischenablage.
* **System-Reset:** Komplette Reinigung der App über einen gesicherten Löschbefehl.

---

## 📊 Technische Formeln

Die App nutzt folgende physikalische und kaufmännische Formeln zur Berechnung der Energie und Kosten:

1. **Energie (kWh):**
   $$kWh = (Stand_{neu} - Stand_{alt}) \cdot Brennwert \cdot zZahl$$

2. **Jahresprognose (Euro):**
   $$Kosten_{Jahr} = ((kWh_{Tag} \cdot 365) \cdot Preis_{kWh} + Grundpreis_{Jahr}) \cdot 1.10$$

3. **Saldo:**
   $$Saldo = (Anzahl_{Zahlungen} \cdot Abschlag) - Kosten_{Ist}$$

---

## 🛠 Bedienungshinweise
1. **Setup:** Öffne das Zahnrad-Symbol (⚙️), gib deine PIN und die Tarifdaten deines Versorgers ein.
2. **Brennwert/z-Zahl:** Diese findest du auf deiner letzten Abrechnung (Standardwerte: $10.55$ / $0.95$).
3. **Speichern:** Nach dem Klick auf "Speichern" bestätigt ein grüner Button den Erfolg. Das Eingabefeld wird für den nächsten Eintrag automatisch vorbereitet.

---

## 📝 Letzter Commit-Log (v8.5.8)

```text
release: v8.5.8 - The "Statistics & Stability" Update

NEW FEATURES:
- Added 'Quick-Stats' dashboard below the history table for instant overview.
- Real-time monitoring for current month consumption (m³).
- Daily cost average display (EUR) based on full-year projection (incl. buffers).
- Overall daily average meter reading (m³) display.

FIXES & IMPROVEMENTS:
- Strict chronological validation: Prevents same-day entries and out-of-order readings.
- UI: Rounded monthly recommendation for better readability (no cents).
- UI: Save-confirmation button (v8.5.5 logic) remains fully integrated.
- Maintenance: Optimized table scrolling for iOS/Android momentum scrolling.
- Logic: Refined safety buffer (10%) application in the financial status badge.

DATA INTEGRITY:
- PIN storage, Export/Import, and System-Reset remain 100% persistent.
