# iSAQB CPSA‑F Trainer — Anleitung

Offline‑Übungs‑App (Multiple Choice) zur Vorbereitung auf die Zertifizierung
**CPSA‑F** (Certified Professional for Software Architecture – Foundation Level).
Eine einzige HTML‑Datei: läuft im Browser bzw. auf dem Handy, **ohne Installation,
ohne Konto, ohne Internet**. Enthält **152 eigenständige Fragen** über alle 6 Kapitel des Curriculums.

---

## 1. Schnellstart (aufs Handy)

1. Die Datei **`isaqb-trainer.html`** aufs Gerät bringen (AirDrop, E‑Mail an sich selbst, iCloud/Files, USB …).
2. In **Safari** (iOS) oder **Chrome** (Android) öffnen.
3. Über das Teilen‑Menü **„Zum Home‑Bildschirm hinzufügen"** → sieht aus und startet wie eine App und funktioniert **offline**.

> Der Lernfortschritt wird **lokal im Browser** gespeichert (localStorage) und verlässt das Gerät nicht.
> Am PC genügt Doppelklick auf die Datei.

---

## 2. Die zwei Modi

| Modus | Zweck | Verhalten |
|---|---|---|
| **Üben** | Lernen | Sofortiges Feedback **mit Erklärung** nach jeder Frage; kein Timer, keine Punkte. |
| **Prüfung simulieren** | Ernstfall proben | Wie die echte Prüfung: **40 Fragen · 75 Min Countdown**, Auswertung **erst am Ende**, Punkte nach offizieller iSAQB‑Bewertung, **60 % zum Bestehen**. |

---

## 3. Funktionen im Überblick

- **Filter** nach **Kapitel** (1–6) und **Prüfungsrelevanz** (R1/R2/R3).
- **Nur falsch beantwortete** – wiederholt gezielt deine Fehler (schrumpft beim Lernen).
- **Nur Lesezeichen** – übt nur markierte Fragen (Stern oben rechts an der Frage).
- **Fehler bevorzugen** (Spaced Repetition) – neue/schwache Fragen kommen häufiger.
- **Antworten mischen** – Reihenfolge der Optionen wird zufällig gemischt.
- **Pause / Fortsetzen** – unterbrochene Runde wird gespeichert und exakt wieder aufgenommen.
- **Statistik** – Trefferquote gesamt und pro Kapitel, „sicher"‑Zähler.
- **Dark Mode** (🌓 oben rechts) und **Fortschritt zurücksetzen**.

---

## 4. Fragetypen & Bewertung (im Prüfungsmodus)

Jede Frage nutzt **Checkboxen** und nennt im Kopf, **wie viele Antworten** zu wählen sind und **wie viele Punkte** sie zählt (1–2). Die Bewertung entspricht der offiziellen iSAQB‑Prüfungsordnung:

| Typ | Bedeutung | Bewertung |
|---|---|---|
| **A** | „Single Correct Answer" – **eine** richtige Antwort | Richtig = volle Punkte. Nichts / falsch / zu viele angekreuzt = **0**. |
| **P** | „Pick‑from‑many" – **N** richtige („Wählen Sie N Antworten") | Je richtiges Kreuz **+Punkte/N**, je falsches **−Punkte/N**; nie unter 0; **mehr als N angekreuzt = 0**. |
| **K** | „Choose Category" – Zuordnung, je Zeile eine von 2 Kategorien | Je richtige Zeile **+Punkte/m**, je falsche **−Punkte/m** (m = Zeilen); nie unter 0. |

**Bestehen:** mindestens **60 %** der insgesamt erreichbaren Punkte.
*(Zeit: 75 Min für Muttersprachler, in der echten Prüfung 90 Min für Nicht‑Muttersprachler.)*

---

## 5. Bewertungsbeispiele (Punktevergabe)

**Grundprinzip:** Richtige Kreuze geben anteilig Punkte, falsche Kreuze ziehen anteilig ab – **nie unter 0 pro Frage**. Punkte pro Frage: **1–2** (im Fragenkopf angezeigt). „Ausgelassen" (leer) zieht **nichts** ab; nur **falsche** Kreuze kosten.

**A‑Frage** — Beispiel: **2 Punkte**, genau **1** richtig

| Antwort | Punkte |
|---|---|
| keine Auswahl | 0 |
| die richtige angekreuzt | **2** |
| eine falsche angekreuzt | 0 |
| mehrere angekreuzt | 0 |

**P‑Frage** — Beispiel: **2 Punkte**, **2 von 4** richtig (→ je richtige = 1 Punkt)

| Antwort | Rechnung | Punkte |
|---|---|---|
| keine Auswahl | – | 0 |
| beide richtigen | 1 + 1 | **2** |
| 1 richtige + 1 falsche | 1 − 1 | 0 |
| nur 1 richtige (1 ausgelassen) | 1 | **1** |
| beide falschen | −1 − 1 → min 0 | 0 |
| mehr als 2 angekreuzt | – | 0 |

**P‑Frage** — Beispiel: **1 Punkt**, **4** richtig (→ je richtige = 0,25)

| Antwort | Rechnung | Punkte |
|---|---|---|
| 4 richtige | 4 × 0,25 | **1** |
| 3 richtige + 1 falsche | 3×0,25 − 0,25 | **0,5** |
| 2 richtige + 2 falsche | 0,5 − 0,5 | 0 |
| 1 richtige + 3 falsche | 0,25 − 0,75 → min 0 | 0 |
| 2 richtige, 2 ausgelassen | 2 × 0,25 | **0,5** |

**K‑Frage (Zuordnung)** — Beispiel: **1 Punkt**, **3 Zeilen** (→ je richtige Zeile = 1/3)

| Zuordnung | Rechnung | Punkte |
|---|---|---|
| alle 3 richtig | 3 × 1/3 | **1** |
| keine Zuordnung | – | 0 |
| 2 richtig + 1 falsch | 2/3 − 1/3 | **1/3** |
| 1 richtig + 2 falsch | 1/3 − 2/3 → min 0 | 0 |
| 2 richtig, 1 Zeile leer | 2 × 1/3 | **2/3** |

**Merksätze**
- **Mehr** ankreuzen als gefordert (A: mehr als 1 · P: mehr als N) = **0 Punkte** für die ganze Frage.
- Eine Frage kann **nie negativ** werden (Minimum 0) – Fehler in einer Frage ziehen keine Punkte anderer Fragen ab.
- **Bestehen:** ≥ **60 %** der Summe aller erreichbaren Punkte.

---

## 6. Abkürzungen & Begriffe

| Kürzel | Bedeutung |
|---|---|
| **iSAQB** | International Software Architecture Qualification Board (Herausgeber der Zertifizierung) |
| **CPSA‑F** | Certified Professional for Software Architecture – **F**oundation Level |
| **R1 / R2 / R3** | Prüfungsrelevanz je Lernziel: **R1** = kommt sicher dran · **R2** = kann drankommen · **R3** = nicht prüfungsrelevant |
| **A / P / K** | Fragetypen (siehe Abschnitt 4) |
| **LZ** | Lernziel (z. B. „LZ 3‑4") – Verweis ins Curriculum |
| **arc42** | Bewährte Vorlage/Gliederung für Architekturdokumentation |
| **ADR** | Architecture Decision Record – dokumentierte Architekturentscheidung |
| **ATAM** | Architecture Tradeoff Analysis Method – szenariobasierte Bewertungsmethode |
| **ISO 25010** | Normiertes Qualitätsmodell (Wartbarkeit, Sicherheit, Performanz …) |
| **UML** | Unified Modeling Language (Diagramme: Klassen, Sequenz, Verteilung …) |
| **SOLID** | 5 Entwurfsprinzipien: SRP, OCP, LSP, ISP, DIP |
| **DRY / KISS / YAGNI** | Don't Repeat Yourself · Keep It Simple · You Aren't Gonna Need It |
| **SoC** | Separation of Concerns (Trennung der Zuständigkeiten) |

---

## 7. Grundlage & Referenzen

Die Fragen sind **eigenständig formuliert** und orientieren sich an den **öffentlichen Lernzielen** des iSAQB‑Curriculums (6 Kapitel, 38 Lernziele, R1/R2/R3‑Markierung). Die Bewertung folgt der **offiziellen Prüfungsordnung** (Version 2020.2).

- Curriculum (HTML/PDF): <https://public.isaqb.org/curriculum-foundation/>
- Curriculum als PDF (DE): <https://public.isaqb.org/curriculum-foundation/curriculum-foundation-de.pdf>
- Prüfungsordnung / Bewertung (EN): <https://public.isaqb.org/examination-foundation/examination_rules/examination-rules-en.pdf>
- Prüfungsformat & Ablauf: <https://www.isaqb.org/certifications/cpsa-exams/foundation-level-exam/>
- Curriculum‑Repository: <https://github.com/isaqb-org/curriculum-foundation>

---

## 8. Wichtiger Hinweis (Disclaimer)

- **Inoffiziell** – nicht mit dem iSAQB® verbunden.
- Die Fragen sind **keine Original‑ oder Musterprüfungsfragen** (diese sind urheberrechtlich geschützt), sondern eigene Formulierungen zum Üben.
- Fragen wurden **KI‑gestützt erstellt und geprüft**. Sie eignen sich sehr gut zum Trainieren; im Zweifel bitte mit dem Curriculum abgleichen.
- Das iSAQB‑Curriculum ist urheberrechtlich geschützt (© iSAQB e. V.); hier dienen nur die **öffentlichen Lernziele** als inhaltliche Orientierung.
- Empfehlung: Die **offizielle Musterprüfung** des iSAQB erst **nach** dem Lernen durchspielen.

---

## 9. Technik & Datenschutz (kurz)

- Eine **self‑contained** HTML‑Datei (HTML + CSS + JavaScript), **keine externen Abhängigkeiten**, Fragen als Daten direkt im Code.
- **Komplett offline**, keine Server‑Kommunikation, keine Tracker.
- Fortschritt liegt ausschließlich im **localStorage** des Browsers. Browserdaten löschen (oder „Fortschritt zurücksetzen") = Neustart bei null.
- Mehr Fragen ergänzen: neue Einträge folgen dem Datenschema im Code
  (`{ id, chapter, lz, r, type, q, options, correct, explanation }`, bzw. für K‑Fragen `categories` + `rows`).
