import { company } from "@/lib/content";

export default function Hero() {
  const nodes = [[76, 126], [150, 262], [258, 118], [418, 284], [366, 430], [438, 430]];

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
      </div>

      <div className="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg">
          <g className="plan-fill"><path d="M40 46H480V514H40Z" /></g>
          <g className="plan-lines">
            <path d="M40 46H480V514H40Z" />
            <path d="M40 188H236V46M236 188H480M320 188V352H480M40 352H174V514M174 352H320M392 352V514" />
            <path className="plan-detail" d="M88 188V164M212 188V164M320 236H344M174 402H198M392 402H416" />
          </g>
          <g className="plan-labels">
            <text x="58" y="72">01 · LICHT</text>
            <text x="338" y="214">02 · NETZWERK</text>
            <text x="58" y="378">03 · SICHERHEIT</text>
          </g>
          <path id="circuitPath" d="M76 126H150V262H258V118H418V284H366V430H438" pathLength={1} />
          <path className="circuit-secondary" d="M150 262H92V430H238V388H366" pathLength={1} />
          <g className="nodes">
            {nodes.map(([cx, cy], index) => (
              <g className="node" key={`${cx}-${cy}`} style={{ animationDelay: `${0.5 + index * 0.18}s` }}>
                <circle className="node-ring" cx={cx} cy={cy} r="7" />
                <circle className="node-core" cx={cx} cy={cy} r="2.5" />
              </g>
            ))}
          </g>
          <g className="node-labels">
            <text x="62" y="111">L-01</text><text x="244" y="102">N-01</text>
            <text x="404" y="269">N-02</text><text x="352" y="452">S-01</text>
            <text x="424" y="452">S-02</text>
          </g>
          <g className="system-status" transform="translate(414 76)">
            <circle cx="0" cy="0" r="18" /><path d="M-7 0H7M0-7V7" />
            <text x="-24" y="32">SYSTEM AKTIV</text>
          </g>
        </svg>
      </div>
      <p className="hero-region"><b>Standort · </b>{company.serviceArea}</p>
    </section>
  );
}
