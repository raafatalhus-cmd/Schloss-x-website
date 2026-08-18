# SCHLOSS-X – Austausch- und Launch-Checkliste

## Zentrale Inhalte

Fast alle Musterinhalte stehen in `lib/content.ts`. Vor Veröffentlichung ersetzen:

- Telefonnummer und bestätigte Reaktionszeit
- alle Einträge mit `MUSTERPROJEKT`
- beide `MUSTERBEWERTUNG`-Einträge inklusive Zustimmung
- alle Muster-Qualifikationen
- lokale Texte mit echten regionalen Projekten
- Leistungsumfang fachlich prüfen

## Bilder

- echte Projektbilder mit schriftlicher Freigabe einsetzen
- Portrait von Hayyan Khatib final bearbeiten
- Alt-Texte und Bildrechte dokumentieren
- Open-Graph-Bild nach finaler Domain aktualisieren

## Kontaktformular

`components/ContactForm.tsx` läuft absichtlich im Testmodus und versendet nichts.
Vor dem Start einen serverseitigen E-Mail-Dienst anbinden, Spam-Schutz ergänzen,
Fehlerfälle testen und die Datenschutzerklärung aktualisieren.

## Externe Aktivierung

- `NEXT_PUBLIC_SITE_URL=https://schloss-x.de`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...`
- Domain und Weiterleitung von `www` konfigurieren
- E-Mail-Zustellung für `info@schloss-x.de` prüfen
- Google Search Console und Google-Unternehmensprofil verifizieren
- Sitemap einreichen

## Recht

- Telefon, Registergericht, HRA-Nummer und Umsatzsteuer-ID ergänzen
- Vercel-Vertrag, Speicherdauer und Auftragsverarbeitung prüfen
- Rechtstexte nach Formular-/Analyse-Anbindung aktualisieren
- individuelle rechtliche Prüfung durchführen

## Qualität

- Testbanner entfernen
- Desktop, Tablet und Smartphone prüfen
- Tastatur- und Screenreader-Test
- Lighthouse/Core Web Vitals prüfen
- alle Links, 404-Seite, Formular und E-Mail testen
