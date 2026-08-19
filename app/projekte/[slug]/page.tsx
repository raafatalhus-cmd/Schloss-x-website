import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubpageShell from "@/components/SubpageShell";
import { projects } from "@/lib/content";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = projects.find((item) => item.slug === slug); return p ? { title: `${p.title} | Musterprojekt`, description: p.result } : {}; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = projects.find((item) => item.slug === slug); if (!p) notFound();
  return <SubpageShell label={`${p.status} · ${p.category}`} title={p.title} intro={p.location}>
    <section className="case-study-grid"><article><span>01</span><h2>Ausgangslage</h2><p>{p.challenge}</p></article><article><span>02</span><h2>Lösung</h2><p>{p.solution}</p></article><article><span>03</span><h2>Ergebnis</h2><p>{p.result}</p></article></section>
    <section className="detail-note"><strong>MUSTERPROJEKT</strong><p>Vor dem echten Start werden Text, Bilder, Projektort und Freigabe des Auftraggebers vollständig ersetzt beziehungsweise bestätigt.</p></section>
  </SubpageShell>;
}
