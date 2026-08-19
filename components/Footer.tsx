import { company } from "@/lib/content";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand brand-logo footer-logo" href="#top" aria-label="SCHLOSS-X Startseite">
            <Image src="/schloss-x-logo.svg" alt="SCHLOSS-X" width={1200} height={300} />
          </a>
          <p>Moderne Elektrotechnik.<br />Intelligent verbunden.</p>
        </div>
        <nav className="footer-column" aria-label="Leistungen im Footer">
          <span>Leistungen</span>
          <a href="/leistungen/elektroinstallation">Elektroinstallation</a>
          <a href="/leistungen/beleuchtung">Beleuchtung</a>
          <a href="/leistungen/smart-home">Smart Home</a>
          <a href="/leistungen/sicherheit">Sicherheit</a>
          <a href="/leistungen/netzwerk">Netzwerk</a>
          <a href="/leistungen/service">Service</a>
        </nav>
        <div className="footer-column">
          <span>Kontakt</span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <p>{company.address.street}<br />{company.address.zipCity}</p>
        </div>
      </div>
      <div className="legal">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    </footer>
  );
}
