// src/components/LandingHeader.jsx
import React, { useEffect, useState } from 'react';
import PhoneLink from './PhoneLink';
import { BUSINESS, PHONE_DISPLAY } from '../seo/site';
import logo from './photos/logo.webp';

/**
 * Nagłówek dla landingów Google Ads.
 *
 * Zero nawigacji — na stronie, za której ruch płacisz 20 zł, jedyne wyjścia
 * to telefon i formularz. Nazwa marki jest IDENTYCZNA z tą w reklamach
 * ("Bezpieczny Dach"), zgodnie z nazwą firmy w głównym Headerze.
 */
export function LandingHeader({ subtitle = 'Dachy płaskie · papa termozgrzewalna' }) {
  return (
    <header className="landing-header">
      <div className="landing-header__inner">

        <div className="landing-header__brand">
          <img
            src={logo}
            alt={`${BUSINESS.legalName} — dachy płaskie Szczecin`}
            className="landing-header__logo"
            width="40"
            height="40"
            fetchpriority="high"
          />
          <span className="landing-header__text">
            <span className="landing-header__name">{BUSINESS.legalName}</span>
            <span className="landing-header__subtitle">{subtitle}</span>
          </span>
        </div>

        <PhoneLink className="landing-header__phone" aria-label={`Zadzwoń ${PHONE_DISPLAY}`}>
          <span aria-hidden="true">📞</span> {PHONE_DISPLAY}
        </PhoneLink>

      </div>
    </header>
  );
}

/**
 * Pasek "Zadzwoń" przyklejony do dołu ekranu na mobile.
 *
 * Pokazuje się DOPIERO po przewinięciu — w pierwszym ekranie nie może
 * zabierać 55 px, bo tam ma się zmieścić H1, filtr 150 m², dwa CTA
 * i dowód B2B.
 */
export function StickyCallBar({ showAfter = 400, formHref = '#wycena', formText = 'Zgłoś przeciek' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > showAfter);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  return (
    <div
      className={`sticky-call-bar ${visible ? 'is-visible' : ''}`}
      aria-hidden={!visible}
    >
      <PhoneLink className="sticky-call-bar__call" tabIndex={visible ? 0 : -1}>
        <span aria-hidden="true">📞</span> Zadzwoń: {PHONE_DISPLAY}
      </PhoneLink>
      <a
        href={formHref}
        className="sticky-call-bar__form"
        tabIndex={visible ? 0 : -1}
      >
        {formText}
      </a>
    </div>
  );
}

/**
 * Minimalna stopka landingu — dane NAP dla botów, bez linków wychodzących.
 */
export function LandingFooter() {
  return (
    <footer className="landing-footer">
      <p className="landing-footer__nap">
        <strong>{BUSINESS.legalName}</strong> · {BUSINESS.streetAddress},{' '}
        {BUSINESS.postalCode} {BUSINESS.addressLocality} · tel.{' '}
        <PhoneLink className="landing-footer__phone">{PHONE_DISPLAY}</PhoneLink>
      </p>
      <p className="landing-footer__hours">
        Pon–Pt 7:00–18:00 · Sob 8:00–14:00
      </p>
      <p className="landing-footer__copy">
        © {new Date().getFullYear()} {BUSINESS.legalName}
      </p>
    </footer>
  );
}

export default LandingHeader;
