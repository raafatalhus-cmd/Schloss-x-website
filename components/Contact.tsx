import Reveal from "./Reveal";
import { company } from "@/lib/content";
import ContactForm from "./ContactForm";

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
          <p className="contact-panel-label">Projektanfrage · Testversion</p>
          <a className="contact-email" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <div className="contact-channels" aria-label="Kontakt und Social Media">
            <a href={`mailto:${company.email}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h18v12H3zM3.5 7l8.5 7 8.5-7" /></svg>
              <span><b>E-Mail</b>Direkt schreiben</span>
            </a>
            <span className="social-placeholder" title="Profil-Link wird ergänzt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              <span><b>Instagram</b>Muster · Link folgt</span>
            </span>
            <span className="social-placeholder" title="Profil-Link wird ergänzt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8.5C14 7.5 14.5 7 16 7h2V4.2c-.7-.1-1.8-.2-3-.2-3 0-5 1.8-5 5.2V10H7v3h3v8"/></svg>
              <span><b>Facebook</b>Muster · Link folgt</span>
            </span>
          </div>
          <ContactForm />
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
