import Reveal from "./Reveal";

export default function Qualification() {
  return (
    <section className="qualification" id="unternehmen">
      <Reveal as="div" className="qual-card">
        <div className="qual-portrait">
          {/* TODO: durch echtes Porträtfoto von Hayyan Khatib ersetzen —
              siehe Analyse: Foto ist der stärkste verbleibende
              Vertrauens-Hebel. Bis dahin ein dezentes Monogramm statt
              leerem Platzhalter oder eines übergroßen Wasserzeichens. */}
          <div className="qual-avatar" aria-hidden="true">
            HK
          </div>
          <div className="qual-portrait-caption">
            <strong>Hayyan Khatib</strong>
            <span>INHABER · SCHLOSS-X</span>
          </div>
          <p className="qual-portrait-note">Porträtfoto folgt</p>
        </div>
        <div className="qual-body">
          <p className="section-label">Was uns verbindet</p>
          <h2>
            Handwerkliche Präzision.
            <br />
            <em>Digitale Kompetenz.</em>
          </h2>
          <p className="qual-copy">
            Hayyan Khatib ist Inhaber und persönlicher Ansprechpartner bei
            SCHLOSS-X. Im Mittelpunkt stehen eine klare Abstimmung und
            technische Lösungen, die verständlich bleiben.
          </p>
          <div className="owner-fact">
            <strong>Hayyan Khatib</strong>
            <span>Inhaber &amp; persönlicher Ansprechpartner</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
