# SCHLOSS-X — Next.js Komponenten (Phase 1)

Dieses Paket ist der erste Schritt aus dem 7-Phasen-Plan: das Demo-Design aus
einer einzelnen HTML-Datei herausgeholt und als echtes, komponentenbasiertes
Next.js-Projekt strukturiert — passend zu eurem bestehenden App-Router-Setup
(`app/page.tsx`, `app/layout.tsx`, `app/globals.css`).

## Was ist neu gegenüber der HTML-Demo-Version?

- **Komponenten statt Einzeldatei**: `Header`, `Hero`, `Statement`,
  `Services`, `Qualification`, `Process`, `Contact`, `Footer` — jede in
  ihrer eigenen Datei unter `components/`.
- **Echte Schriften über `next/font/google`** in `app/layout.tsx` (Archivo,
  IBM Plex Sans, IBM Plex Mono, Fraunces) statt der Arial/Georgia-Fallbacks
  aus der ursprünglichen Demo.
- **Zentrale Inhalte** in `lib/content.ts` — Leistungen, Prozessschritte,
  Qualifikations-Fakten und Firmendaten liegen an einem Ort. Texte lassen
  sich dort ändern, ohne die Komponenten anzufassen (Vorgriff auf Phase 7).
- **`Reveal`-Komponente** (`components/Reveal.tsx`) kapselt die
  Scroll-Animation als *progressive enhancement*: Inhalte sind ohne
  JavaScript und vor der Hydration immer sichtbar. Das behebt den Bug, den
  wir in der HTML-Version gefunden hatten (Inhalte blieben unsichtbar, wenn
  das Timing nicht passte).

## Einbinden ins bestehende Projekt

1. `lib/`, `components/` und den Inhalt von `app/` in euer Repo kopieren
   (bestehende `app/page.tsx`, `app/layout.tsx`, `app/globals.css`
   überschreiben — vorher sichern oder per Git-Diff vergleichen).
2. Falls euer `tsconfig.json` den `@/*`-Pfad-Alias noch nicht kennt, in den
   `compilerOptions` ergänzen:
   ```json
   "paths": { "@/*": ["./*"] }
   ```
   (Bei den meisten `create-next-app`-Projekten ist das bereits Standard.)
3. `npm run dev` — die Google Fonts werden beim Build automatisch geladen,
   es ist keine zusätzliche Installation nötig.

## Noch offen (bewusst nicht erfunden)

Im Code mit `TODO`-Kommentaren markiert:

- **Porträtfoto** von Hayyan Khatib (`components/Qualification.tsx`)
- **Impressum/Datenschutz**: aktuell Platzhalter-Links (`components/Footer.tsx`)
- **Telefonnummer**: in `lib/content.ts` als `phone: null` vorbereitet,
  einfach eintragen sobald final
- **Hero-/Service-Bilder**: aktuell bewusst ohne Fotografie gelöst (siehe
  Design-Analyse) — sobald echtes Bildmaterial vorliegt, ist das der
  nächste sinnvolle Schritt

## Nicht in diesem Paket enthalten (kommt in späteren Phasen)

- Playwright-Testsetup / automatisierte Screenshot-QA (Phase 2)
- Bild-Optimierungs-Pipeline (Phase 3)
- Lighthouse/Accessibility/SEO-Schema (Phase 4)
- Deployment-Konfiguration für Cloudflare Pages/Vercel (Phase 6)

## Hinweis zur Prüfung

Dieses Paket wurde außerhalb einer echten Next.js-Laufzeitumgebung erstellt
(kein Netzwerkzugriff hier, daher kein `npm install`/`next build` möglich).
Struktur und Klammern-Balance wurden geprüft, aber führt vor dem ersten
Deploy unbedingt `next build` lokal aus, um Typfehler oder fehlende Imports
zu fangen.
