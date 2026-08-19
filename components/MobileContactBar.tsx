import { company } from "@/lib/content";

export default function MobileContactBar() {
  return (
    <div className="mobile-contact-bar" aria-label="Schnellkontakt">
      <a className="disabled-call" href={company.phone ? `tel:${company.phone}` : "#kontakt"}>
        {company.phone ? "Anrufen" : "Telefon folgt"}
      </a>
      <a href="#kontakt">Projekt anfragen</a>
    </div>
  );
}
