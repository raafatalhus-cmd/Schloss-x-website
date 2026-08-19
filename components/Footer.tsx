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
          <a href="/leistungen/netzwerk">Netzwerk</a>
        </nav>
        <div className="footer-column">
          <span>Kontakt</span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <p>{company.address.street}<br />{company.address.zipCity}</p>
        </div>
        <div className="footer-column footer-follow">
          <span>Folgen</span>
          <div className="footer-social" aria-label="Social Media – Links folgen">
            <span title="Instagram-Link wird ergänzt" aria-label="Instagram – Link folgt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </span>
            <span title="Facebook-Link wird ergänzt" aria-label="Facebook – Link folgt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8.5C14 7.5 14.5 7 16 7h2V4.2c-.7-.1-1.8-.2-3-.2-3 0-5 1.8-5 5.2V10H7v3h3v8"/></svg>
            </span>
          </div>
          <small>Profil-Links folgen</small>
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
