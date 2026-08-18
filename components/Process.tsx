import Reveal from "./Reveal";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section className="process section">
      <Reveal as="div" className="section-heading">
        <div>
          <p className="section-label">Der Weg zur Lösung</p>
          <h2>
            Klarer Prozess.
            <br />
            <em>Saubere Umsetzung.</em>
          </h2>
        </div>
        <p style={{ color: "var(--muted)" }}>
          Technik beginnt nicht mit einem Produkt, sondern mit den richtigen
          Fragen.
        </p>
      </Reveal>
      <div className="steps">
        {steps.map((s, i) => (
          <Reveal as="article" key={s.number} delay={i * 0.06}>
            <div className="step-marker">
              <span className="step-num">{s.number}</span>
            </div>
            <div className="step-copy">
              <span className="step-label">Schritt {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
