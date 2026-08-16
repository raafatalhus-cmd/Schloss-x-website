"use client";

import { useEffect, useState } from "react";
import { company } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          {company.brandShort}
          <b>{company.brandAccent}</b>
        </a>
        <nav
          className="main-nav"
          aria-label="Hauptnavigation"
          style={
            open
              ? {
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  background: "#1c1a16",
                  padding: "110px 40px",
                  gap: "26px",
                  fontSize: "18px",
                  width: "70%",
                  zIndex: 30,
                }
              : undefined
          }
        >
          <a href="#leistungen" onClick={() => setOpen(false)}>
            Leistungen
          </a>
          <a href="#ansatz" onClick={() => setOpen(false)}>
            Ansatz
          </a>
          <a href="#unternehmen" onClick={() => setOpen(false)}>
            Unternehmen
          </a>
        </nav>
        <a className="header-cta" href="#kontakt">
          Projekt anfragen
        </a>
        <button
          className="menu-btn"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
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
