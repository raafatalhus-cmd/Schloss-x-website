import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="services section" id="leistungen">
      <div className="grain" style={{ filter: "url(#grainFilter)" }} />
      <Reveal as="div" className="section-heading">
        <div>
          <p className="section-label on-dark">Kompetenzen</p>
          <h2>
            Eine Basis.
            <br />
            <em>Viele Möglichkeiten.</em>
          </h2>
        </div>
        <p>
          Von klassischer Elektrotechnik bis zu intelligent verbundenen
          Gebäudefunktionen.
        </p>
      </Reveal>
      <div className="service-grid">
        {services.map((s, i) => (
          <Reveal as="article" key={s.title} delay={(i % 3) * 0.06}>
            <span className="service-tag">{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
