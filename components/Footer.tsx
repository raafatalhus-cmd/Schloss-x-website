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
        <div className="footer-column footer-follow">
          <span>Social Media</span>
          <div className="social-list" aria-label="Social Media – Links folgen">
            <span className="social-item" title="Instagram-Link wird ergänzt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              <span><b>Instagram</b><small>Link folgt</small></span>
            </span>
            <span className="social-item" title="Facebook-Link wird ergänzt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8.5C14 7.5 14.5 7 16 7h2V4.2c-.7-.1-1.8-.2-3-.2-3 0-5 1.8-5 5.2V10H7v3h3v8"/></svg>
              <span><b>Facebook</b><small>Link folgt</small></span>
            </span>
            <span className="social-item" title="LinkedIn-Link wird ergänzt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="9" width="4" height="11"/><path d="M4 5.5h4M11 20V9h4v2c1-1.5 5-2 5 3v6"/></svg>
              <span><b>LinkedIn</b><small>Link folgt</small></span>
            </span>
            <span className="social-item" title="WhatsApp-Link wird ergänzt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.6 2.8 2 4.2 4.8 5l1.2-1 2 1.2c-.5 1.7-1.8 2.2-3.5 1.7-3.4-1-5.9-3.4-6.9-6.8C6.1 7 6.7 5.7 8.3 5.2l1.2 2-1 1.3Z"/></svg>
              <span><b>WhatsApp</b><small>Link folgt</small></span>
            </span>
          </div>
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
