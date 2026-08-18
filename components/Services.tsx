import Reveal from "./Reveal";
import { services } from "@/lib/content";
import Link from "next/link";

function ServiceIcon({ index }: { index: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons = [
    <>
      <path d="M8 3v5M16 3v5M6 8h12v3a6 6 0 0 1-12 0V8Z" {...common} />
      <path d="M12 17v4M9 21h6" {...common} />
    </>,
    <>
      <path d="M9 17h6M10 21h4" {...common} />
      <path d="M8.5 14.5a6 6 0 1 1 7 0c-1 .7-1.5 1.3-1.5 2.5h-4c0-1.2-.5-1.8-1.5-2.5Z" {...common} />
      <path d="M12 2V1M4.9 4.9l-.7-.7M19.1 4.9l.7-.7M3 12H2M22 12h-1" {...common} />
    </>,
    <>
      <path d="m3 11 9-7 9 7M5.5 9.5V21h13V9.5" {...common} />
      <circle cx="9" cy="14" r="1.5" {...common} />
      <circle cx="15" cy="14" r="1.5" {...common} />
      <path d="M10.5 14h3M12 15.5V18" {...common} />
    </>,
    <>
      <path d="M12 2.5 20 6v5.5c0 5.1-3.4 8.4-8 10-4.6-1.6-8-4.9-8-10V6l8-3.5Z" {...common} />
      <circle cx="12" cy="11" r="2.5" {...common} />
      <path d="M12 13.5V17" {...common} />
    </>,
    <>
      <circle cx="5" cy="12" r="2.5" {...common} />
      <circle cx="19" cy="6" r="2.5" {...common} />
      <circle cx="19" cy="18" r="2.5" {...common} />
      <path d="m7.3 11 9.4-4M7.3 13l9.4 4" {...common} />
    </>,
    <>
      <path d="M20.5 7.5a5.5 5.5 0 0 1-7.4 6.6L7 20.2a2.1 2.1 0 0 1-3-3l6.1-6.1a5.5 5.5 0 0 1 6.6-7.4l-3.4 3.4 3.6 3.6 3.6-3.2Z" {...common} />
    </>,
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

export default function Services() {
  return (
    <section className="services section" id="leistungen">
      <div className="grain" style={{ filter: "url(#grainFilter)" }} />
      <Reveal as="div" className="section-heading">
        <div>
          <p className="section-label on-dark">Kompetenzen</p>
          <h2>
            Eine Basis.
            <br />
            <em>Viele Möglichkeiten.</em>
          </h2>
        </div>
        <p>
          Von klassischer Elektrotechnik bis zu intelligent verbundenen
          Gebäudefunktionen.
        </p>
      </Reveal>
      <div className="service-grid">
        {services.map((s, i) => (
          <Reveal as="article" key={s.title} delay={(i % 3) * 0.06}>
            <div className="service-card-top">
              <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
              <span className="service-icon">
                <ServiceIcon index={i} />
              </span>
            </div>
            <span className="service-tag">{s.tag}</span>
            <div className="service-copy">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link className="service-link" href={`/leistungen/${s.slug}`}>Mehr erfahren →</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
