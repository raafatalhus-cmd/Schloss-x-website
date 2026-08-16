import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="statement" id="ansatz">
      <Reveal as="p" className="section-label">
        Unser Ansatz
      </Reveal>
      <Reveal>
        <h2>
          Technik sollte nicht kompliziert wirken.
          <br />
          <em>Sie sollte einfach funktionieren.</em>
        </h2>
        <p className="lead">
          Wir betrachten Elektroinstallation, Beleuchtung, Sicherheit und
          Netzwerk nicht isoliert. So entsteht eine technische Grundlage, die
          zu Ihrem Gebäude, Ihrem Alltag und Ihren Anforderungen passt.
        </p>
      </Reveal>
    </section>
  );
}
