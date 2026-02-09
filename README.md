# 🔥 GasZähler Pro v8.6.0

**GasZähler Pro** ist eine hochspezialisierte Progressive Web App (PWA) zur präzisen Überwachung und Prognose von Gasverbrauch und Heizkosten. Sie kombiniert eine „Rechtzeit-Ampel“ mit kaufmännischen Sicherheits-Puffern und flexiblen Zahlungsintervallen.

---

## 🚀 Kern-Features im Detail

### 1. Intelligente Dateneingabe & Validierung
* **Chronologie-Schutz:** Verhindert falsche Eingaben. Ein neuer Stand muss zeitlich und wertmäßig logisch zwischen vorhandene Daten passen.
* **Dubletten-Sperre:** Pro Kalendertag ist nur ein Eintrag zulässig.
* **Live-Vorschau (Blau):** Zeigt schon während der Eingabe kursiv in der Tabelle, wie sich der neue Wert auf Trend und Tagesverbrauch auswirken würde.

### 2. Finanz-Logik & Prognose
* **Variable Zahlungszyklen (Neu):** Die Anzahl der jährlichen Abschläge ist einstellbar (Standard: 11). Die Empfehlung berechnet automatisch den notwendigen Betrag pro Zahlungstermin.
* **Dynamische Tarif-Staffelung:** Erkennt automatisch die richtige Preisstufe basierend auf der Jahresprognose.
* **Kaufmännischer 10% Puffer:** Alle Prognosen enthalten einen Sicherheitsaufschlag für unvorhersehbare Mehrverbräuche.
* **Ampel-System:**
    * 💎 **Blau:** Abschlag sehr hoch (>15% über Bedarf).
    * ✅ **Grün:** Abschlag ideal (deckt Kosten + 10% Puffer).
    * ⚠️ **Orange:** Puffer wird bereits angegriffen.
    * 🚨 **Rot:** Abschlag zu niedrig – Nachzahlung droht.

### 3. Quick-Stats & Analyse
* **Monats-Tracking:** Realverbrauch (m³) im laufenden Kalendermonat.
* **Tages-Durchschnitt:** m³-Verbrauch pro Tag über die gesamte Laufzeit.
* **Kosten-Check:** Durchschnittliche Kosten pro Tag in Euro (inkl. Grundgebühr und Puffer).
* **Trend-Pfeile:** Zeigen pro Eintrag, ob der Verbrauch über (`↗`) oder unter (`↘`) dem Gesamtschnitt lag.

### 4. Datensicherheit & Tools
* **PIN-Schutz:** Sicherung des Setup-Menüs.
* **100% Privatsphäre:** Lokale Speicherung im Browser (`LocalStorage`).
* **Backup & Restore:** Export/Import der Datenbank als JSON-String.

---

## 📊 Technische Formeln

1. **Energie (kWh):**
   $$kWh = (Stand_{neu} - Stand_{alt}) \cdot Brennwert \cdot zZahl$$

2. **Abschlags-Empfehlung (Euro):**
   $$Empfehlung = \frac{(Kosten_{Jahr} \cdot 1.10)}{Anzahl_{Zahlungen}}$$

3. **Saldo:**
   $$Saldo = (Anzahl_{geleisteter\_Zahlungen} \cdot Abschlag) - Kosten_{Ist}$$

---

## 📝 Letzter Commit-Log (v8.6.0)

```text
release: v8.6.0 - Flexible Payment Cycles

- Feature: Added adjustable payment frequency per year (payCount).
- Default: Set default installments to 11 (customizable in setup).
- Logic: Recalibrated traffic light system to honor payment frequency.
- Analytics: Integrated 'Quick-Stats' for monthly and daily consumption.
- Stability: Finalized chronological validation and PIN protection.
