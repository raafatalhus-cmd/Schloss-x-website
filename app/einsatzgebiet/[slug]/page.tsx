import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubpageShell from "@/components/SubpageShell";
import { serviceAreas, services } from "@/lib/content";

export function generateStaticParams() { return serviceAreas.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const area = serviceAreas.find((item) => item.slug === slug); return area ? { title: `Elektrotechnik in ${area.name} | SCHLOSS-X`, description: area.text } : {}; }

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const area = serviceAreas.find((item) => item.slug === slug); if (!area) notFound();
  return <SubpageShell label="Einsatzgebiet · Testseite" title={`Elektrotechnik in ${area.name}`} intro={area.text}>
    <section className="detail-grid"><div><p className="section-label">Leistungen vor Ort</p><h2>Persönlich geplant.<br /><em>Sauber umgesetzt.</em></h2></div><ul>{services.map((service) => <li key={service.slug}>{service.title}</li>)}</ul></section>
    <section className="detail-note"><strong>LOKALE MUSTERSEITE</strong><p>Vor Veröffentlichung wird diese Seite mit echten regionalen Projekten, Anfahrtsinformationen und überprüften lokalen Inhalten ergänzt.</p></section>
  </SubpageShell>;
}
