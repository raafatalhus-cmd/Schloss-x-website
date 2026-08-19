import { company } from "@/lib/content";

export default function Hero() {
  const systemNodes = [
    { x: 108, y: 142, label: "BELEUCHTUNG", labelX: 108, labelY: 118, anchor: "middle" },
    { x: 412, y: 142, label: "NETZWERK", labelX: 412, labelY: 118, anchor: "middle" },
    { x: 108, y: 416, label: "SICHERHEIT", labelX: 108, labelY: 448, anchor: "middle" },
    { x: 412, y: 416, label: "SENSORIK", labelX: 412, labelY: 448, anchor: "middle" },
  ];

  return (
    <section className="hero" id="top">
      <div className="grain" style={{ filter: "url(#grainFilter)" }} />
      <div className="hero-copy">
        <p className="eyebrow"><i /> Elektrotechnik &amp; Gebäudesysteme</p>
        <h1>Elektrotechnik.<br /><em>Intelligent</em> verbunden.</h1>
        <p className="hero-text">
          SCHLOSS-X verbindet fundiertes Elektrohandwerk mit moderner
          IoT-Kompetenz – für Technik, die zuverlässig zusammenspielt und
          einfach funktioniert.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#kontakt">Projekt besprechen →</a>
          <a className="text-link" href="#leistungen">Leistungen ansehen</a>
        </div>
        <div className="hero-proof" aria-label="Arbeitsweise von SCHLOSS-X">
          <span><b>01</b> Persönlich geplant</span>
          <span><b>02</b> Sauber umgesetzt</span>
          <span><b>03</b> Verständlich übergeben</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <span className="hero-visual-kicker">Systemübersicht · 01</span>
        <svg viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg">
          <g className="plan-fill"><path d="M46 56H474V504H46Z" /></g>
          <g className="plan-lines">
            <path d="M46 56H474V504H46Z" />
            <path d="M46 230H196M324 230H474M46 338H196M324 338H474" />
            <path className="plan-detail" d="M74 84H154M366 84H446M74 476H154M366 476H446" />
          </g>
          <g className="system-connections">
            <path id="circuitPath" d="M260 280H196V142H108" pathLength={1} />
            <path className="circuit-secondary" d="M260 280H324V142H412" pathLength={1} />
            <path className="circuit-secondary" d="M260 296H196V416H108" pathLength={1} />
            <path className="circuit-secondary" d="M260 296H324V416H412" pathLength={1} />
          </g>
          <g className="nodes">
            {systemNodes.map(({ x, y }, index) => (
              <g className="node" key={`${x}-${y}`} style={{ animationDelay: `${0.5 + index * 0.18}s` }}>
                <circle className="node-ring" cx={x} cy={y} r="7" />
                <circle className="node-core" cx={x} cy={y} r="2.5" />
              </g>
            ))}
            <g className="node node-central" style={{ animationDelay: "0.35s" }}>
              <rect x="244" y="270" width="32" height="36" rx="2" />
              <circle className="node-core" cx="260" cy="288" r="3" />
            </g>
          </g>
          <g className="node-labels">
            {systemNodes.map(({ label, labelX, labelY, anchor }) => (
              <text key={label} x={labelX} y={labelY} textAnchor={anchor as "middle"}>{label}</text>
            ))}
            <text className="central-label" x="260" y="336" textAnchor="middle">ZENTRALE STEUERUNG</text>
          </g>
          <g className="system-status" transform="translate(354 84)">
            <circle cx="0" cy="0" r="3" />
            <text x="10" y="3">VERBUNDEN</text>
          </g>
        </svg>
        <span className="hero-visual-caption">Vernetzte Gebäudetechnik</span>
      </div>
      <p className="hero-region"><b>Standort · </b>{company.serviceArea}</p>
    </section>
  );
}
