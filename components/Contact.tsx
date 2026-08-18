import Reveal from "./Reveal";
import { company } from "@/lib/content";

export default function Contact() {
  return (
    <section className="contact section" id="kontakt">
      <div className="grain" style={{ filter: "url(#grainFilter)" }} />
      <div className="contact-layout">
        <Reveal as="div" className="contact-inner">
          <p className="section-label on-dark">Ihr Projekt</p>
          <h2>
            Was darf Ihre Technik
            <br />
            <em>für Sie leisten?</em>
          </h2>
          <p className="lead">
            Erzählen Sie uns kurz von Ihrem Vorhaben. Sie erhalten eine
            persönliche Rückmeldung zu den nächsten sinnvollen Schritten.
          </p>
          <div className="contact-promises" aria-label="Vorteile der Kontaktaufnahme">
            <span>Persönliche Rückmeldung</span>
            <span>Regionaler Ansprechpartner</span>
          </div>
        </Reveal>

        <Reveal as="div" className="contact-panel" delay={0.08}>
          <p className="contact-panel-label">Direkter Kontakt</p>
          <a className="contact-email" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <div className="contact-brief">
            <p>Für eine erste Einschätzung helfen uns:</p>
            <ul>
              <li>Art des Vorhabens</li>
              <li>Ort des Projekts</li>
              <li>Gewünschter Zeitraum</li>
            </ul>
          </div>
          <a
            className="button inverse contact-button"
            href={`mailto:${company.email}?subject=Projektanfrage%20an%20SCHLOSS-X`}
          >
            Projekt anfragen <span aria-hidden="true">→</span>
          </a>
          <div className="contact-meta">
            <span>
              <b>Standort</b>
              {company.address.street}, {company.address.zipCity}
            </span>
            <span>
              <b>Einzugsgebiet</b>
              {company.serviceArea}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
