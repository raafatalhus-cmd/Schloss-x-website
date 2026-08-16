import Reveal from "./Reveal";
import { company } from "@/lib/content";

export default function Contact() {
  return (
    <section className="contact section" id="kontakt">
      <div className="grain" style={{ filter: "url(#grainFilter)" }} />
      <Reveal as="div" className="contact-inner">
        <p className="section-label on-dark">Ihr Projekt</p>
        <h2>
          Was darf Ihre Technik
          <br />
          <em>für Sie leisten?</em>
        </h2>
        <p className="lead">
          Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns persönlich
          bei Ihnen zurück.
        </p>
        <a className="button inverse" href={`mailto:${company.email}`}>
          Projekt anfragen →
        </a>
        <div className="contact-meta">
          <span>
            <b>Adresse</b>
            {company.address.street}
            <br />
            {company.address.zipCity}
          </span>
          <span>
            <b>Einzugsgebiet</b>
            {company.serviceArea}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
