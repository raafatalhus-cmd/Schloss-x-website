import Reveal from "./Reveal";
import { qualFacts } from "@/lib/content";

export default function Qualification() {
  return (
    <section className="qualification" id="unternehmen">
      <Reveal as="div" className="qual-card">
        <div className="qual-portrait">
          {/* TODO: echtes Porträtfoto von Hayyan Khatib einsetzen —
              siehe Analyse: fehlt aktuell als Vertrauenselement */}
          <p className="qual-portrait-note">
            Porträt Hayyan Khatib
            <br />
            wird ergänzt
          </p>
        </div>
        <div className="qual-body">
          <p className="section-label">Was uns verbindet</p>
          <h2>
            Handwerkliche Präzision.
            <br />
            <em>Digitale Kompetenz.</em>
          </h2>
          <p className="qual-copy">
            SCHLOSS-X verbindet die fachliche Zulassung im Elektrohandwerk mit
            einem Masterstudium im Bereich Internet of Things. Das schafft
            eine besondere Perspektive: solide elektrische Grundlagen und ein
            tiefes Verständnis für vernetzte Systeme.
          </p>
          <div className="qual-facts">
            {qualFacts.map((f) => (
              <div key={f.value}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
          <small className="qual-note">
            Die genaue Abschluss- und Zulassungsbezeichnung wird in der
            finalen Website ergänzt.
          </small>
        </div>
      </Reveal>
    </section>
  );
}
