import { company } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="grain" style={{ filter: "url(#grainFilter)" }} />
      <div className="hero-copy">
        <p className="eyebrow">
          <i /> Elektrotechnik &amp; Gebäudesysteme
        </p>
        <h1>
          Elektrotechnik.
          <br />
          <em>Intelligent</em> verbunden.
        </h1>
        <p className="hero-text">
          SCHLOSS-X verbindet fundiertes Elektrohandwerk mit moderner
          IoT-Kompetenz – für Technik, die zuverlässig zusammenspielt und
          einfach funktioniert.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#kontakt">
            Projekt besprechen →
          </a>
          <a className="text-link" href="#leistungen">
            Leistungen ansehen
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        {/* Signature element: hand-authored schematic / floor-plan motif,
            referencing real electrical planning drawings rather than
            generic tech iconography or a stock photo we can't back up. */}
        <svg viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="440" height="480" fill="none" stroke="#3a382f" strokeWidth="1" />
          <line x1="40" y1="180" x2="480" y2="180" stroke="#3a382f" strokeWidth="1" />
          <line x1="40" y1="340" x2="480" y2="340" stroke="#3a382f" strokeWidth="1" />
          <line x1="230" y1="40" x2="230" y2="180" stroke="#3a382f" strokeWidth="1" />
          <line x1="340" y1="340" x2="340" y2="520" stroke="#3a382f" strokeWidth="1" />

          <path
            id="circuitPath"
            d="M70 460 L70 200 L150 200 L150 100 L300 100 L300 210 L440 210 L440 300 L380 300 L380 400 L440 400"
            fill="none"
            stroke="#9c5a32"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 1,
              animation: "draw 1.8s .3s cubic-bezier(.65,0,.35,1) forwards",
            }}
          />
          <circle className="node" cx="70" cy="460" r="5" fill="#9c5a32" />
          <circle className="node" cx="150" cy="100" r="5" fill="#9c5a32" />
          <circle className="node" cx="300" cy="210" r="5" fill="#c98a5e" />
          <circle className="node" cx="440" cy="210" r="4" fill="#c98a5e" />
          <circle className="node" cx="380" cy="400" r="5" fill="#9c5a32" />
          <circle className="node" cx="440" cy="400" r="4" fill="#c98a5e" />

          <text x="70" y="490" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#a6a49a" letterSpacing="1">
            LICHT
          </text>
          <text x="300" y="240" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#a6a49a" letterSpacing="1">
            NETZWERK
          </text>
          <text x="380" y="430" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#a6a49a" letterSpacing="1">
            SICHERHEIT
          </text>
        </svg>
      </div>
      <p className="hero-region">
        <b>Standort · </b>
        {company.serviceArea}
      </p>
    </section>
  );
}
