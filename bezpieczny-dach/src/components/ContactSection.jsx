import React, { useState } from 'react';
import './ContactSection.css';

const GTAG_FORM_CONVERSION = 'AW-18028227969/0GuaCIHvsI0cEIHbw5RD';
const FORMSPREE_URL = 'https://formspree.io/f/mblgapbk';

// Pusty stan formularza — jako stała, żeby reset był jednoznaczny
const EMPTY_FORM = {
  name: '',
  email: '',
  numerTelefonu: '',  // POPRAWKA: musi być w initial state
  message: '',
  consent: false,
};

function ContactSection() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Walidacja przed wysłaniem (zabezpieczenie po stronie JS)
    if (!formData.consent) {
      alert('Proszę wyrazić zgodę na przetwarzanie danych osobowych.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // KONWERSJA: fire TYLKO po potwierdzeniu sukcesu z serwera
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: GTAG_FORM_CONVERSION,
            value: 1.0,
            currency: 'PLN',
          });
        }

        // Opcjonalnie: GA4 event dla własnych celów analitycznych
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'form_submit_success', {
            event_category: 'contact',
            event_label: 'wycena',
          });
        }

        alert('Wiadomość wysłana! Skontaktujemy się w ciągu 24h.');
        setFormData(EMPTY_FORM);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Formspree error:', errorData);
        alert('Wystąpił błąd. Proszę zadzwonić: 518 144 882');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Błąd sieci. Proszę zadzwonić: 518 144 882');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Skontaktuj się z nami</h2>
        <div className="contact-info">
          <p><strong>Telefon:</strong> +48 518 144 882</p>
          <p><strong>Email:</strong> bezpiecznydach@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Twoje imię i nazwisko"
              required
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Twój email"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="numerTelefonu"
              value={formData.numerTelefonu}
              onChange={handleChange}
              placeholder="Numer telefonu"
              required
              autoComplete="tel"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Opisz zlecenie: lokalizacja, przybliżona powierzchnia dachu, zakres prac"
              required
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
              Wyrażam zgodę na przetwarzanie moich danych osobowych...
              {/* [reszta tekstu zgody bez zmian] */}
            </label>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;