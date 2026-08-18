import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubpageShell from "@/components/SubpageShell";
import { services } from "@/lib/content";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: `${service.title} | SCHLOSS-X`, description: service.text };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services.find((item) => item.slug === slug); if (!service) notFound();
  return <SubpageShell label={`Leistung · ${service.tag}`} title={service.title} intro={service.intro}>
    <section className="detail-grid"><div><p className="section-label">Leistungsumfang · Muster</p><h2>Von Anfang an<br /><em>klar strukturiert.</em></h2></div><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul></section>
    <section className="detail-note"><strong>TESTINHALT</strong><p>Diese Seite ist technisch und gestalterisch fertig. Vor der Veröffentlichung werden Leistungsumfang, verwendete Systeme, Zulassungen und Bilder fachlich bestätigt.</p></section>
  </SubpageShell>;
}
