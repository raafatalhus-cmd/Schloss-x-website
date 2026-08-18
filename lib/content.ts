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
    tag: "Installation",
    title: "Elektroinstallation",
    text: "Die zuverlässige Basis für Neubau, Sanierung und Modernisierung.",
  },
  {
    tag: "Licht",
    title: "Beleuchtung",
    text: "Licht, das Räume funktional macht und Architektur gezielt unterstützt.",
  },
  {
    tag: "Vernetzung",
    title: "Smart Home",
    text: "Intelligente Funktionen, die Komfort schaffen und einfach bedienbar bleiben.",
  },
  {
    tag: "Schutz",
    title: "Sicherheit",
    text: "Durchdachte Überwachungs- und Sicherheitslösungen für ein gutes Gefühl.",
  },
  {
    tag: "Kommunikation",
    title: "Netzwerk",
    text: "Stabile Verbindungen für Kommunikation, Arbeit und vernetzte Gebäudetechnik.",
  },
  {
    tag: "Betrieb",
    title: "Service",
    text: "Wartung und Unterstützung, damit Ihre Technik zuverlässig funktioniert.",
  },
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
  email: "kontakt@schloss-x.de",
  // TODO: Telefonnummer ergänzen, sobald final freigegeben (siehe Analyse: fehlt für Vertrauen)
  phone: null as string | null,
} as const;
