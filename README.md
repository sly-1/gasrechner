# ⛽ GasZähler Pro (Custom Version)

Dieser Gasverbrauchs-Tracker ist speziell für Tarife mit **Bestabrechnung** und **Staffelpreisen** optimiert. Er ermöglicht die präzise Überwachung der Kosten unter Berücksichtigung von Grundpreis-Sprüngen und technischen Faktoren wie der Z-Zahl.

## 📊 Hinterlegter Tarif
Die App ist aktuell auf folgende Konditionen vorkonfiguriert:

* **Stufe 1 (bis 6.000 kWh/Jahr):** * Arbeitspreis: **12,80 ct/kWh**
    * Grundpreis: **5,36 €/Monat**
* **Stufe 2 (ab 6.001 kWh/Jahr):** * Arbeitspreis: **11,79 ct/kWh**
    * Grundpreis: **10,41 €/Monat**

## ⚙️ Besonderheit: Startwert (Offset)
Da der Zähler bei der Übernahme bereits auf **1,000 m³** stand, verfügt die App über ein **Offset-Feld** in den erweiterten Einstellungen. 
* Der Wert von `1.000` ist als Standard hinterlegt. 
* Dadurch wird sichergestellt, dass die Kostenberechnung erst ab dem ersten selbst verbrauchten Liter Gas beginnt.

## ✨ Kernfunktionen
* **Jahresprognose:** Basierend auf deinem täglichen Durchschnittsverbrauch berechnet die App, in welche Preisstufe du am Jahresende voraussichtlich fallen wirst.
* **Dynamische Fixkosten:** Die monatliche Grundgebühr wird tagesgenau auf die Zeitspanne seit deiner ersten Ablesung umgelegt.
* **Live-Anpassung:** Sollten sich Brennwert oder Z-Zahl ändern, kannst du diese Werte anpassen, und die gesamte Historie wird sofort neu berechnet.

## 🛠 Bedienungshilfe
1. **Erster Eintrag:** Speichere als allerersten Wert in der Historie den Stand **1,000 m³** mit dem Datum deiner Übernahme. Dies ist dein Referenzpunkt.
2. **Ablesung:** Trage regelmäßig deinen aktuellen Zählerstand ein. Die App zeigt dir sofort den Zuwachs ("Δ Tag") und die kumulierten Gesamtkosten an.
3. **PWA-Installation:** Öffne die HTML-Datei auf deinem Smartphone und wähle **"Zum Home-Bildschirm hinzufügen"**, um die App wie eine native Anwendung ohne Browserzeile zu nutzen.

## 💾 Sicherheit
Die Daten werden im `LocalStorage` deines Browsers gespeichert. Nutze regelmäßig die **Backup-Funktion** (unten in der App), um deinen Datenstand als Textcode zu kopieren und sicher an einem anderen Ort (z. B. Notiz-App) zu verwahren.

---
*Konfiguration: 1m³ Start-Offset | Dual-Staffel-Tarif (6000 kWh Grenze)*