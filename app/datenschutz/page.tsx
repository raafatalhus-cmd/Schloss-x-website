import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz | SCHLOSS-X",
  description: "Muster-Datenschutzerklärung der SCHLOSS-X Website.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <p className="section-label">Datenschutz</p>
      <h1>Datenschutzerklärung</h1>

      <div className="legal-note">
        <strong>Muster – noch nicht final veröffentlicht.</strong>
        <br />
        Diese Erklärung beschreibt den aktuellen technischen Stand der Website.
        Markierte Punkte müssen vor der endgültigen Freigabe bestätigt werden.
      </div>

      <h2>1. Verantwortlicher</h2>
      <p>
        <strong>{company.name}</strong>
        <br />
        Inhaber: Hayyan Khatib
        <br />
        {company.address.street}, {company.address.zipCity}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        <br />
        Telefon: <span className="legal-placeholder">BITTE ERGÄNZEN</span>
      </p>

      <h2>2. Hosting und Server-Protokolle</h2>
      <p>
        Diese Website wird über Vercel bereitgestellt. Beim Aufruf können
        technisch notwendige Verbindungsdaten verarbeitet werden, insbesondere
        IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser- und
        Geräteinformationen sowie der HTTP-Status. Die Verarbeitung dient der
        sicheren, stabilen und effizienten Bereitstellung der Website.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse
        liegt im sicheren Betrieb und in der Fehleranalyse. Dienstleister ist
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Bei einer
        Übermittlung in die USA sind die jeweils geltenden Garantien und der
        abgeschlossene Auftragsverarbeitungsvertrag zu berücksichtigen.
      </p>
      <p>
        Speicherdauer und Vercel-Vertragseinstellungen:{" "}
        <span className="legal-placeholder">VOR FREIGABE PRÜFEN</span>
      </p>

      <h2>3. Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn Sie per E-Mail Kontakt aufnehmen, verarbeiten wir die von Ihnen
        übermittelten Angaben, um Ihre Anfrage zu beantworten. Dazu können Name,
        E-Mail-Adresse, Inhalt der Nachricht und freiwillig übermittelte
        Projektdaten gehören.
      </p>
      <p>
        Erfolgt die Anfrage zur Anbahnung oder Durchführung eines Vertrags, ist
        Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. In anderen Fällen erfolgt
        die Verarbeitung auf Grundlage unseres berechtigten Interesses an der
        Bearbeitung von Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO. Gesetzliche
        Aufbewahrungspflichten bleiben unberührt.
      </p>

      <h2>4. Schriftarten und externe Inhalte</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten werden durch die
        Anwendung lokal ausgeliefert. Beim Seitenaufruf wird daher keine direkte
        Verbindung Ihres Browsers zu Google Fonts hergestellt. Derzeit sind
        keine eingebetteten Karten, Videos, Analysewerkzeuge oder
        Marketing-Cookies eingebunden.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Nach aktuellem technischen Stand setzt diese Website keine optionalen
        Analyse- oder Marketing-Cookies. Sollte sich dies später ändern, wird
        diese Datenschutzerklärung vor dem Einsatz angepasst und – soweit
        erforderlich – eine Einwilligung eingeholt.
      </p>

      <h2>6. Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden nur so lange gespeichert, wie es für den
        jeweiligen Zweck erforderlich ist oder gesetzliche Pflichten bestehen.
        Für geschäftliche Korrespondenz können handels- und steuerrechtliche
        Aufbewahrungsfristen gelten.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre verarbeiteten Daten,</li>
        <li>Berichtigung unrichtiger Daten,</li>
        <li>Löschung oder Einschränkung der Verarbeitung,</li>
        <li>Datenübertragbarkeit,</li>
        <li>Widerspruch gegen eine Verarbeitung sowie</li>
        <li>Widerruf einer erteilten Einwilligung für die Zukunft.</li>
      </ul>

      <h2>8. Beschwerderecht</h2>
      <p>
        Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Für
        Niedersachsen ist dies insbesondere:
      </p>
      <p>
        Der Landesbeauftragte für den Datenschutz Niedersachsen
        <br />
        Prinzenstraße 5, 30159 Hannover
        <br />
        E-Mail: poststelle@lfd.niedersachsen.de
      </p>

      <h2>9. Stand und Änderungen</h2>
      <p>
        Stand: August 2026. Wird die Website technisch erweitert – etwa um ein
        Kontaktformular, Analysewerkzeuge, Karten oder externe Medien – muss
        diese Erklärung vor der Veröffentlichung entsprechend angepasst werden.
      </p>

      <Link className="back-link" href="/">
        ← Zurück zur Startseite
      </Link>
    </main>
  );
}
