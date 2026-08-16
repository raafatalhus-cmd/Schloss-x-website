import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <div className="brand">
        {company.brandShort}
        <b>{company.brandAccent}</b>
      </div>
      <p>Moderne Elektrotechnik. Intelligent verbunden.</p>
      <div className="legal">
        <span>© {new Date().getFullYear()} {company.name}</span>
        {/* TODO: echte Unterseiten verlinken, sobald Impressum/Datenschutz
            vorliegen — siehe Analyse Punkt 6/7, Platzhalter-Links vermeiden */}
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
    </footer>
  );
}
