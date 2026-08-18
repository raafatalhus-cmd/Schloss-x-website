// Zentrale Inhalte für die SCHLOSS-X Website.
//
// Warum diese Datei? Damit Texte geändert werden können, ohne die
// Komponenten (JSX/CSS) anzufassen. Für spätere Anpassungen reicht es,
// hier die Werte zu bearbeiten — z. B. über eine kurze Anfrage an
// Claude Code oder Claude Tag im Slack, ohne dass der Code selbst
// verstanden werden muss.
//
// WICHTIG: Nur echte, bestätigte Informationen eintragen. Keine
// Leistungen, Zertifikate oder Referenzen erfinden.

export const services = [
  {
    slug: "elektroinstallation",
    tag: "Installation",
    title: "Elektroinstallation",
    text: "Die zuverlässige Basis für Neubau, Sanierung und Modernisierung.",
    intro: "Von der ersten Planung bis zur sauberen Übergabe entsteht eine Elektroinstallation, die zum Gebäude und zur späteren Nutzung passt.",
    points: ["Planung und Abstimmung", "Neubau und Modernisierung", "Verteilung, Leitungen und Anschlüsse", "Dokumentierte Übergabe"],
  },
  {
    slug: "beleuchtung",
    tag: "Licht",
    title: "Beleuchtung",
    text: "Licht, das Räume funktional macht und Architektur gezielt unterstützt.",
    intro: "Ein durchdachtes Lichtkonzept verbindet Orientierung, Atmosphäre und einen effizienten Betrieb.",
    points: ["Lichtplanung", "Innen- und Außenbereiche", "Steuerung und Szenen", "Energieeffiziente Lösungen"],
  },
  {
    slug: "smart-home",
    tag: "Vernetzung",
    title: "Smart Home",
    text: "Intelligente Funktionen, die Komfort schaffen und einfach bedienbar bleiben.",
    intro: "Vernetzte Funktionen werden so geplant, dass sie im Alltag verständlich, erweiterbar und zuverlässig bleiben.",
    points: ["Zentrale Bedienung", "Automationen und Szenen", "Licht- und Beschattungssteuerung", "Erweiterbare Systemstruktur"],
  },
  {
    slug: "sicherheit",
    tag: "Schutz",
    title: "Sicherheit",
    text: "Durchdachte Überwachungs- und Sicherheitslösungen für ein gutes Gefühl.",
    intro: "Sicherheitsfunktionen werden passend zu Gebäude, Nutzung und gewünschtem Schutzumfang zusammengestellt.",
    points: ["Bedarfsanalyse", "Überwachungslösungen", "Zutrittsnahe Funktionen", "Verständliche Bedienung"],
  },
  {
    slug: "netzwerk",
    tag: "Kommunikation",
    title: "Netzwerk",
    text: "Stabile Verbindungen für Kommunikation, Arbeit und vernetzte Gebäudetechnik.",
    intro: "Eine strukturierte Netzwerkinfrastruktur schafft die Grundlage für zuverlässige Kommunikation und moderne Gebäudefunktionen.",
    points: ["Strukturierte Verkabelung", "Netzwerkverteilung", "WLAN-Vorbereitung", "Dokumentation"],
  },
  {
    slug: "service",
    tag: "Betrieb",
    title: "Service",
    text: "Wartung und Unterstützung, damit Ihre Technik zuverlässig funktioniert.",
    intro: "Auch nach der Umsetzung bleibt SCHLOSS-X persönlicher Ansprechpartner für Anpassungen, Prüfung und technische Unterstützung.",
    points: ["Fehlersuche", "Wartung und Prüfung", "Anpassungen", "Persönliche Unterstützung"],
  },
] as const;

export const projects = [
  {
    slug: "wohnhaus-modernisierung",
    status: "MUSTERPROJEKT",
    category: "Modernisierung",
    title: "Elektrotechnik für ein modernisiertes Wohnhaus",
    location: "Musterort im Raum Osnabrück",
    challenge: "Bestehende Installation übersichtlich erneuern und auf spätere Erweiterungen vorbereiten.",
    solution: "Neue Verteilung, strukturierte Leitungswege sowie vorbereitete Licht-, Netzwerk- und Smart-Home-Funktionen.",
    result: "Eine klare technische Grundlage mit nachvollziehbarer Bedienung und Reserven für spätere Wünsche.",
  },
  {
    slug: "lichtkonzept-gewerbe",
    status: "MUSTERPROJEKT",
    category: "Beleuchtung",
    title: "Funktionales Lichtkonzept für Gewerberäume",
    location: "Musterort in der Region",
    challenge: "Arbeitsbereiche gleichmäßig ausleuchten und zugleich eine angenehme Kundenatmosphäre schaffen.",
    solution: "Zoniertes Lichtkonzept mit getrennt steuerbaren Bereichen und energieeffizienten Leuchten.",
    result: "Bessere Orientierung, passende Lichtstimmungen und eine einfach bedienbare Steuerung.",
  },
  {
    slug: "netzwerk-smart-building",
    status: "MUSTERPROJEKT",
    category: "Vernetzung",
    title: "Netzwerkbasis für ein intelligentes Gebäude",
    location: "Musterprojekt Hasbergen",
    challenge: "Daten, Gebäudefunktionen und spätere Erweiterungen in einer stabilen Infrastruktur zusammenführen.",
    solution: "Strukturierte Verkabelung, zentraler Technikpunkt und dokumentierte Anschlussstruktur.",
    result: "Zuverlässige Verbindungen und eine erweiterbare Basis für weitere Gebäudefunktionen.",
  },
] as const;

export const testimonials = [
  {
    status: "MUSTERBEWERTUNG",
    quote: "Die Abstimmung war verständlich, die Umsetzung sauber und jeder Schritt nachvollziehbar.",
    author: "Musterkunde · vor Veröffentlichung ersetzen",
  },
  {
    status: "MUSTERBEWERTUNG",
    quote: "Unsere Anforderungen wurden zu einer Lösung verbunden, die im Alltag einfach funktioniert.",
    author: "Musterkunde · vor Veröffentlichung ersetzen",
  },
] as const;

export const qualifications = [
  "MUSTER · bestätigten Abschluss ergänzen",
  "MUSTER · Eintragung oder Zulassung ergänzen",
  "MUSTER · Hersteller-Schulung ergänzen",
] as const;

export const serviceAreas = [
  { slug: "hasbergen", name: "Hasbergen", text: "Elektrotechnik und vernetzte Gebäudelösungen mit persönlicher Abstimmung vor Ort." },
  { slug: "osnabrueck", name: "Osnabrück", text: "Planung, Installation und Modernisierung für private und gewerbliche Projekte." },
] as const;

export const steps = [
  { number: "01", title: "Verstehen", text: "Wir klären Gebäude, Anforderungen und Ziele." },
  { number: "02", title: "Konzipieren", text: "Aus einzelnen Anforderungen wird eine stimmige Lösung." },
  { number: "03", title: "Umsetzen", text: "Die Technik wird fachgerecht und sauber realisiert." },
  { number: "04", title: "Begleiten", text: "Sie erhalten eine verständliche Übergabe und persönlichen Service." },
] as const;

export const company = {
  name: "Schloss-X e.K.",
  brandShort: "SCHLOSS",
  brandAccent: "—X",
  address: {
    street: "Riedweg 22",
    zipCity: "49205 Hasbergen",
  },
  serviceArea: "Hasbergen · Osnabrück und Umgebung",
  email: "info@schloss-x.de",
  // TODO: Telefonnummer ergänzen, sobald final freigegeben (siehe Analyse: fehlt für Vertrauen)
  phone: null as string | null,
  responseTime: "MUSTER · Rückmeldung innerhalb von 1–2 Werktagen",
} as const;
