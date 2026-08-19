import { company } from "@/lib/content";

export default function Hero() {
  const nodes = [[92, 132], [310, 132], [380, 270], [300, 350], [438, 410]];

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
            <path d="M46 198H474M46 352H474M250 56V198M330 198V352M170 352V504" />
            <path className="plan-detail" d="M72 82H162M276 82H356M356 224H446M72 378H144M196 378H268" />
          </g>
          <path id="circuitPath" d="M92 132H220V270H380V410H438" pathLength={1} />
          <path className="circuit-secondary" d="M220 270V132H310" pathLength={1} />
          <path className="circuit-secondary" d="M220 270H140V420H300V350H380" pathLength={1} />
          <g className="nodes">
            {nodes.map(([cx, cy], index) => (
              <g className="node" key={`${cx}-${cy}`} style={{ animationDelay: `${0.5 + index * 0.18}s` }}>
                <circle className="node-ring" cx={cx} cy={cy} r="7" />
                <circle className="node-core" cx={cx} cy={cy} r="2.5" />
              </g>
            ))}
          </g>
          <g className="node-labels">
            <text x="76" y="112">BELEUCHTUNG</text>
            <text x="286" y="112">NETZWERK</text>
            <text x="390" y="258">STEUERUNG</text>
            <text x="274" y="336">SICHERHEIT</text>
            <text x="416" y="434">SENSORIK</text>
          </g>
          <g className="system-status" transform="translate(370 82)">
            <circle cx="0" cy="0" r="3" />
            <text x="10" y="3">SYSTEMSTATUS · VERBUNDEN</text>
          </g>
        </svg>
        <span className="hero-visual-caption">Vernetzte Gebäudetechnik</span>
      </div>
      <p className="hero-region"><b>Standort · </b>{company.serviceArea}</p>
    </section>
  );
}
