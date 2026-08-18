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
          <a className="mobile-contact-link" href="#kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </a>
        </nav>
        <a className="header-cta" href="#kontakt">
          Projekt anfragen
        </a>
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
