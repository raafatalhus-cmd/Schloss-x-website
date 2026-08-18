"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <strong>Test erfolgreich.</strong>
        <p>In der Live-Version wird diese Anfrage sicher an das Firmenpostfach übertragen.</p>
        <button type="button" onClick={() => setSent(false)}>Neue Testanfrage</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-test-label">TESTMODUS · Es werden keine Daten versendet</div>
      <label>
        Name
        <input name="name" autoComplete="name" required placeholder="Vor- und Nachname" />
      </label>
      <label>
        E-Mail
        <input name="email" type="email" autoComplete="email" required placeholder="name@beispiel.de" />
      </label>
      <div className="form-row">
        <label>
          Projektart
          <select name="projectType" required defaultValue="">
            <option value="" disabled>Bitte auswählen</option>
            <option>Elektroinstallation</option><option>Beleuchtung</option>
            <option>Smart Home</option><option>Sicherheit</option>
            <option>Netzwerk</option><option>Service</option>
          </select>
        </label>
        <label>
          Projektort
          <input name="location" required placeholder="PLZ oder Ort" />
        </label>
      </div>
      <label>
        Kurzbeschreibung
        <textarea name="message" rows={4} required placeholder="Worum geht es bei Ihrem Vorhaben?" />
      </label>
      <label className="consent-field">
        <input type="checkbox" required />
        <span>Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung zur Bearbeitung meiner Anfrage zu.</span>
      </label>
      <button className="button inverse contact-button" type="submit">Testanfrage senden <span>→</span></button>
    </form>
  );
}
