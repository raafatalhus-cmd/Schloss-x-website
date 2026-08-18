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
          <Reveal as="article" key={project.slug} delay={index * 0.06}>
            <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
              <span>{project.status}</span>
              <div className="project-diagram">
                <i className="diagram-line line-a" />
                <i className="diagram-line line-b" />
                <i className="diagram-node node-a" />
                <i className="diagram-node node-b" />
                <i className="diagram-node node-c" />
              </div>
              <small>{String(index + 1).padStart(2, "0")} / 03</small>
            </div>
            <div className="project-content">
              <span className="project-category">{project.category} · {project.location}</span>
              <h3>{project.title}</h3>
              <p>{project.result}</p>
              <Link href={`/projekte/${project.slug}`}>Projekt ansehen →</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
