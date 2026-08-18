import { company } from "@/lib/content";
import Image from "next/image";

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

      <div className="hero-media">
        <Image
          src="/hero-architecture-v2.png"
          alt="Modernes Gebäude mit integrierter Beleuchtung und Gebäudesteuerung"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 55vw"
        />
      </div>
      <p className="hero-region">
        <b>Standort · </b>
        {company.serviceArea}
      </p>
    </section>
  );
}
