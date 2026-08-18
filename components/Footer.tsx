import { company } from "@/lib/content";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <a className="brand brand-logo footer-logo" href="#top" aria-label="SCHLOSS-X Startseite">
        <Image
          src="/schloss-x-logo.png"
          alt="SCHLOSS-X"
          width={1200}
          height={354}
        />
      </a>
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
