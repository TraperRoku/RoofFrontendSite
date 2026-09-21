// src/components/ContactSection.jsx
import React, { useState, useRef } from 'react';
import {
  FORMSPREE_URL,
  GTAG_FORM_CONVERSION,
  PHONE_DISPLAY,
  EMAIL,
  MIN_AREA_M2,
  AREA_OPTIONS,
  BLOCK_SMALL_JOBS,
  isSmallJob,
  leadValueFor,
  fireConversion,
} from '../seo/site';
import './ContactSection.css';

const EMPTY_FORM = {
  name: '',
  email: '',
  numerTelefonu: '',
  powierzchnia: '',
  lokalizacja: '',
  typObiektu: '',
  message: '',
  consent: false,
};

function ContactSection() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | 'ok' | 'error' | 'consent' | 'blocked'
  const statusRef = useRef(null);

  const small = isSmallJob(formData.powierzchnia);
  const hardBlocked = BLOCK_SMALL_JOBS && small;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (status) setStatus(null);
  };

  const announce = (next) => {
    setStatus(next);
    // Przeniesienie fokusu na komunikat — zastępuje alert(), który na iOS
    // wyglądał jak błąd systemowy i wybijał użytkownika z kontekstu.
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hardBlocked) { announce('blocked'); return; }
    if (!formData.consent) { announce('consent'); return; }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `Zapytanie ${formData.powierzchnia || '—'} · ${formData.lokalizacja || '—'}`,
        }),
      });

      if (response.ok) {
        fireConversion({
          sendTo: GTAG_FORM_CONVERSION,
          value: leadValueFor(formData.powierzchnia),
          email: formData.email,
          phone: formData.numerTelefonu,
          label: 'form_submit_lead',
        });
        setFormData(EMPTY_FORM);
        announce('ok');
      } else {
        announce('error');
      }
    } catch (err) {
      console.error('Contact form network error:', err);
      announce('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2>Zamów audyt techniczny dachu</h2>
        <p className="contact-lead">
          Przyjeżdżamy na obiekt, wykonujemy odkrywki kontrolne i przygotowujemy ofertę
          z rozbiciem na poszczególne etapy, zakres prac i dostarczane materiały. Bez opłat i bez zobowiązań.
        </p>

        {/* Filtr widoczny ZANIM ktoś zacznie wypełniać */}
        <p className="contact-qualifier">
          Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty).
          Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
        </p>

        <div className="contact-info">
          <p><strong>Telefon:</strong> {PHONE_DISPLAY}</p>
          <p><strong>E-mail:</strong> {EMAIL}</p>
        </div>

        {/* aria-live, żeby czytnik ekranu ogłosił wynik wysyłki */}
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className={`form-status form-status--${status || 'idle'}`}
        >
          {status === 'ok' && (
            <p>
              Zgłoszenie przyjęte. Odzywamy się w ciągu 24 godzin roboczych.
              Jeśli sprawa jest pilna — dzwoń: {PHONE_DISPLAY}.
            </p>
          )}
          {status === 'error' && (
            <p>
              Nie udało się wysłać zgłoszenia. Spróbuj ponownie
              albo zadzwoń: {PHONE_DISPLAY}.
            </p>
          )}
          {status === 'consent' && (
            <p>Zaznacz zgodę na przetwarzanie danych, żeby wysłać zgłoszenie.</p>
          )}
          {status === 'blocked' && (
            <p>
              Główny profil działalności to zlecenia pow. {MIN_AREA_M2} m² (hale, wspólnoty).
              Wykonujemy również mniejsze dachy i garaże w miarę dostępności wolnych terminów.
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit}>

          {/* Powierzchnia idzie PIERWSZA — kwalifikacja przed inwestycją czasu */}
          <div className="form-group">
            <label htmlFor="powierzchnia">Powierzchnia dachu *</label>
            <select
              id="powierzchnia"
              name="powierzchnia"
              value={formData.powierzchnia}
              onChange={handleChange}
              required
            >
              <option value="">— wybierz —</option>
              {AREA_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {small && (
            <p className="form-notice" role="alert">
              {BLOCK_SMALL_JOBS
                ? `Główny profil działalności to zlecenia pow. ${MIN_AREA_M2} m²; mniejsze dachy i garaże wykonujemy w miarę dostępności wolnych terminów.`
                : `Główny profil działalności to zlecenia pow. ${MIN_AREA_M2} m²; mniejsze dachy i garaże wykonujemy w miarę dostępności wolnych terminów.`}
            </p>
          )}

          <fieldset disabled={hardBlocked} className="form-fieldset">
            <legend className="visually-hidden">Dane kontaktowe</legend>

            <div className="form-group">
              <label htmlFor="lokalizacja">Lokalizacja obiektu *</label>
              <input
                id="lokalizacja"
                type="text"
                name="lokalizacja"
                value={formData.lokalizacja}
                onChange={handleChange}
                placeholder="Miejscowość, ulica"
                required
                autoComplete="address-level2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="typObiektu">Rodzaj obiektu</label>
              <select
                id="typObiektu"
                name="typObiektu"
                value={formData.typObiektu}
                onChange={handleChange}
              >
                <option value="">— wybierz —</option>
                <option value="hala">Hala produkcyjna lub magazynowa</option>
                <option value="wspolnota">Blok / wspólnota / spółdzielnia</option>
                <option value="publiczny">Obiekt użyteczności publicznej</option>
                <option value="gw">Jestem generalnym wykonawcą</option>
                <option value="inny">Inny</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="numerTelefonu">Telefon *</label>
              <input
                id="numerTelefonu"
                type="tel"
                name="numerTelefonu"
                value={formData.numerTelefonu}
                onChange={handleChange}
                inputMode="tel"
                pattern="[0-9 +()-]{9,}"
                required
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko / firma *</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Zakres prac</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Stan pokrycia, czy występują przecieki, planowany termin"
              />
            </div>

            <div className="form-group consent-group">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label htmlFor="consent">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                przygotowania oferty.
              </label>
            </div>

            <button type="submit" disabled={isSubmitting || hardBlocked}>
              {isSubmitting ? 'Wysyłanie…' : 'Zamów audyt techniczny'}
            </button>
          </fieldset>

        </form>
      </div>
    </section>
  );
}

export default ContactSection;
