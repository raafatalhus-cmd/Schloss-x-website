"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <a className="brand brand-logo" href="#top" aria-label="SCHLOSS-X Startseite">
          <Image
            src="/schloss-x-logo.svg"
            alt="SCHLOSS-X"
            width={1200}
            height={300}
            priority
          />
        </a>
        <nav
          className={`main-nav ${open ? "open" : ""}`}
          id="main-navigation"
          aria-label="Hauptnavigation"
        >
          <a href="#ansatz" onClick={() => setOpen(false)}>
            Ansatz
          </a>
          <a href="#leistungen" onClick={() => setOpen(false)}>
            Leistungen
          </a>
          <a href="#projekte" onClick={() => setOpen(false)}>
            Projekte
          </a>
          <a href="#unternehmen" onClick={() => setOpen(false)}>
            Unternehmen
          </a>
          <a href="#kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </a>
        </nav>
        <div className="header-actions">
          <div className="header-contact" aria-label="Direkter Kontakt">
            <a className="header-icon" href="#kontakt" aria-label="Telefonkontakt – Nummer folgt" title="Telefonnummer folgt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 7.8 8.2 10c1.2 2.5 3.2 4.5 5.8 5.8l2.2-1.8 4.3 2.8-1.2 3c-.4 1-1.5 1.5-2.5 1.2C9.5 19.3 4.7 14.5 3 7.2c-.3-1 .2-2.1 1.2-2.5l3-1.2Z" /></svg>
            </a>
            <a className="header-icon header-email" href="mailto:info@schloss-x.de" aria-label="E-Mail an SCHLOSS-X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h18v12H3zM3.5 7l8.5 7 8.5-7" /></svg>
            </a>
          </div>
          <a className="header-cta" href="#kontakt">Projekt anfragen</a>
        </div>
        <button
          className="menu-btn"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "SCHLIESSEN" : "MENÜ"}
        </button>
      </header>
      <div
        className={`menu-backdrop ${open ? "show" : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </>
  );
}
