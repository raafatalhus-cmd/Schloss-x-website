import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

export default function SubpageShell({ label, title, intro, children }: { label: string; title: string; intro: string; children: React.ReactNode }) {
  return <>
    <header className="subpage-header">
      <Link className="brand-logo" href="/"><Image src="/schloss-x-logo.svg" alt="SCHLOSS-X" width={1200} height={300} /></Link>
      <Link href="/#kontakt">Projekt anfragen</Link>
    </header>
    <main className="subpage">
      <section className="subpage-hero">
        <p className="section-label on-dark">{label}</p><h1>{title}</h1><p>{intro}</p>
      </section>
      {children}
      <section className="subpage-cta"><h2>Projekt passend planen.</h2><p>Beschreiben Sie kurz Ihr Vorhaben und den Projektort.</p><Link className="button primary" href="/#kontakt">Projekt anfragen →</Link></section>
    </main><Footer />
  </>;
}
