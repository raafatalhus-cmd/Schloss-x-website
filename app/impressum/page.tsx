import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | SCHLOSS-X",
  description: "Impressum und Anbieterkennzeichnung von SCHLOSS-X.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <p className="section-label">Rechtliche Angaben</p>
      <h1>Impressum</h1>

      <div className="legal-note">
        <strong>Muster – noch nicht final veröffentlicht.</strong>
        <br />
        Die farbig markierten Angaben müssen vor der endgültigen Freigabe
        geprüft oder ergänzt werden.
      </div>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong><span className="legal-placeholder">FIRMENNAME + RECHTSFORM</span></strong>
        <br />
        Inhaber: <span className="legal-placeholder">VOLLSTÄNDIGER NAME</span>
        <br />
        <span className="legal-placeholder">STRASSE + HAUSNUMMER</span>
        <br />
        <span className="legal-placeholder">PLZ + ORT</span>
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <span className="legal-placeholder">BITTE ERGÄNZEN</span>
        <br />
        E-Mail: <span className="legal-placeholder">E-MAIL-ADRESSE</span>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht:{" "}
        <span className="legal-placeholder">BITTE ERGÄNZEN</span>
        <br />
        Registernummer (HRA):{" "}
        <span className="legal-placeholder">BITTE ERGÄNZEN</span>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:{" "}
        <span className="legal-placeholder">
          BITTE ERGÄNZEN ODER „NICHT VORHANDEN“ BESTÄTIGEN
        </span>
      </p>

      <h2>Hinweis zur inhaltlichen Verantwortung</h2>
      <p>
        Falls künftig redaktionelle oder journalistische Inhalte veröffentlicht
        werden, muss eine verantwortliche Person nach § 18 Abs. 2 MStV ergänzt
        werden. Für die derzeitige reine Unternehmensdarstellung ist dieser
        Punkt noch zu prüfen.
      </p>

      <Link className="back-link" href="/">
        ← Zurück zur Startseite
      </Link>
    </main>
  );
}
