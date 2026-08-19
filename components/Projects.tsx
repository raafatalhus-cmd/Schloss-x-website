import Link from "next/link";
import Reveal from "./Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="projects section" id="projekte">
      <Reveal as="div" className="section-heading">
        <div>
          <p className="section-label">Referenzen · Testinhalt</p>
          <h2>Technik wird sichtbar.<br /><em>Im Ergebnis.</em></h2>
        </div>
        <p>Diese Musterprojekte zeigen bereits das spätere Format und werden vor dem Start durch echte Referenzen ersetzt.</p>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            as="article"
            className={`project-card ${index === 0 ? "project-card-featured" : "project-card-secondary"}`}
            key={project.slug}
            delay={index * 0.06}
          >
            <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
              <span className="project-status">{index === 0 ? "HAUPTREFERENZ · MUSTER" : project.status}</span>
              <div className="project-diagram">
                <i className="diagram-line line-a" />
                <i className="diagram-line line-b" />
                <i className="diagram-node node-a" />
                <i className="diagram-node node-b" />
                <i className="diagram-node node-c" />
              </div>
              <em className="project-image-note">Projektbild · Platzhalter</em>
              <small>{String(index + 1).padStart(2, "0")} / 03</small>
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className="project-location">{project.location}</span>
              </div>
              <h3>{project.title}</h3>
              <span className="project-result-label">Ergebnis</span>
              <p>{project.result}</p>
              <Link href={`/projekte/${project.slug}`}>Projekt ansehen →</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
