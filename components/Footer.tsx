import { company } from "@/lib/content";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <a className="brand brand-logo footer-logo" href="#top" aria-label="SCHLOSS-X Startseite">
        <Image
          src="/schloss-x-logo.svg"
          alt="SCHLOSS-X"
          width={1200}
          height={300}
        />
      </a>
      <p>Moderne Elektrotechnik. Intelligent verbunden.</p>
      <div className="legal">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    </footer>
  );
}
