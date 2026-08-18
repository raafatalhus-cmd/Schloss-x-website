import Reveal from "./Reveal";
import { qualifications, testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="trust section" aria-label="Vertrauen und Nachweise">
      <Reveal as="div" className="trust-intro">
        <p className="section-label">Vertrauen · Testinhalt</p>
        <h2>Nachweise statt<br /><em>großer Versprechen.</em></h2>
      </Reveal>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <Reveal as="article" key={item.quote} delay={index * 0.06}>
            <span>{item.status}</span>
            <blockquote>„{item.quote}“</blockquote>
            <p>{item.author}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="div" className="qualification-strip">
        {qualifications.map((item) => <span key={item}>{item}</span>)}
      </Reveal>
    </section>
  );
}
