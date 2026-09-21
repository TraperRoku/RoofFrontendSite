// src/seo/site.js
// Jedyne źródło prawdy dla domeny, danych NAP, ID konwersji i logiki leada.
// Jeśli coś zmieniasz w danych firmy — zmieniasz TYLKO tutaj.

/* ------------------------------------------------------------------ */
/* DOMENA                                                              */
/* ------------------------------------------------------------------ */

// UWAGA: wybierz JEDNĄ wersję i wymuś ją przekierowaniem 301 na serwerze.
// Wszystkie inne warianty (bez www, http, literówka bezpiechnydach.pl)
// muszą przekierowywać tutaj.
export const SITE_URL = 'https://www.bezpiecznydach.pl';

/** Buduje absolutny URL kanoniczny. canonical('/naprawa-dachu-plaskiego') */
export const canonical = (path = '') => {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '');
  return `${SITE_URL}${clean}`;
};

/* ------------------------------------------------------------------ */
/* KONTAKT                                                             */
/* ------------------------------------------------------------------ */

export const PHONE_E164 = '+48518144882';
export const PHONE_DISPLAY = '518 144 882';
export const EMAIL = 'bezpiecznydach@gmail.com';

/* ------------------------------------------------------------------ */
/* NAP — musi być IDENTYCZNE w stopce, w Google Business Profile        */
/* i w każdym JSON-LD w serwisie.                                      */
/* ------------------------------------------------------------------ */

export const BUSINESS = {
  legalName: 'Bezpieczny Dach',
  name: 'Bezpieczny Dach — dachy płaskie i papa termozgrzewalna',
  streetAddress: 'Mosty 9D',
  addressLocality: 'Mosty',
  postalCode: '72-132',
  addressRegion: 'Zachodniopomorskie',
  addressCountry: 'PL',

  // TODO: podmień na realne współrzędne Mostów — w starym kodzie były
  // współrzędne Szczecina (53.4289 / 14.5530), co rozjeżdżało się z adresem.
  latitude: 53.6297,
  longitude: 14.7361,

  // JEDEN zestaw godzin. Wcześniej w serwisie były cztery różne warianty
  // (00:00-24:00, 07:00-20:00, 07:00-18:00, Pon-Pt+Sobota).
  openingHours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-14:00'],

  priceRange: '$$$',
  foundingYear: 2011,
};

export const AREA_SERVED = [
  'Szczecin', 'Goleniów', 'Stargard', 'Police', 'Gryfino',
  'Nowogard', 'Świnoujście', 'Koszalin', 'Województwo zachodniopomorskie',
];

/* ------------------------------------------------------------------ */
/* GOOGLE ADS / GTAG                                                   */
/* ------------------------------------------------------------------ */

export const GTAG_ID = 'AW-18028227969';
export const GTAG_PHONE_CONVERSION = 'AW-18028227969/Na2aCIG8yKIcEIHbw5RD';
export const GTAG_FORM_CONVERSION = 'AW-18028227969/0GuaCIHvsI0cEIHbw5RD';

export const FORMSPREE_URL = 'https://formspree.io/f/mblgapbk';

/* ------------------------------------------------------------------ */
/* KWALIFIKACJA LEADA                                                  */
/* ------------------------------------------------------------------ */

export const MIN_AREA_M2 = 150;

/**
 * true  = formularz NIE wyśle zgłoszenia poniżej 150 m² i nie odpali konwersji
 *         (Google nie uczy się na drobnicy)
 * false = zgłoszenie przechodzi, ale z wartością konwersji 0.1
 */
export const BLOCK_SMALL_JOBS = false;

export const AREA_OPTIONS = [
  { value: 'do150',     label: `do ${MIN_AREA_M2} m² — w miarę dostępności`, leadValue: 0.1 },
  { value: '150-500',   label: `${MIN_AREA_M2} – 500 m²`,                leadValue: 1.0 },
  { value: '500-1500',  label: '500 – 1500 m²',                          leadValue: 2.0 },
  { value: '1500plus',  label: 'powyżej 1500 m²',                        leadValue: 3.0 },
  { value: 'nie-wiem',  label: 'nie wiem — proszę o pomiar',             leadValue: 1.0 },
];

export const isSmallJob = (v) => v === 'do150';

export const leadValueFor = (v) =>
  AREA_OPTIONS.find((o) => o.value === v)?.leadValue ?? 1.0;

/* ------------------------------------------------------------------ */
/* KONWERSJE — jedno miejsce, żeby nigdy więcej nie policzyć podwójnie  */
/* ------------------------------------------------------------------ */

let lastConversionAt = 0;
const DEDUPE_MS = 5000;

/** Normalizacja telefonu do E.164 pod Enhanced Conversions. */
export const normalizePhone = (raw = '') => {
  const digits = String(raw).replace(/\D/g, '');
  if (!digits) return undefined;
  return `+48${digits.slice(-9)}`;
};

const normalizeEmail = (raw = '') => {
  const e = String(raw).trim().toLowerCase();
  return e.includes('@') ? e : undefined;
};

/**
 * Jedyna funkcja w całym serwisie, która odpala konwersję Google Ads.
 * Nie wywołuj gtag('event','conversion') nigdzie indziej.
 */
export function fireConversion({
  sendTo,
  value = 1.0,
  email,
  phone,
  label,
  dedupe = true,
} = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return false;

  const now = Date.now();
  if (dedupe && now - lastConversionAt < DEDUPE_MS) return false;
  lastConversionAt = now;

  // Enhanced Conversions — częściowo odzyskuje pomiar utracony
  // przez baner zgody blokujący ad_storage.
  const userData = {};
  const em = normalizeEmail(email);
  const ph = normalizePhone(phone);
  if (em) userData.email = em;
  if (ph) userData.phone_number = ph;
  if (Object.keys(userData).length) {
    window.gtag('set', 'user_data', userData);
  }

  window.gtag('event', 'conversion', {
    send_to: sendTo,
    value,
    currency: 'PLN',
  });

  if (label) {
    window.gtag('event', label, {
      event_category: 'lead',
      event_label: window.location.pathname,
      value,
    });
  }

  return true;
}

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */
/* ------------------------------------------------------------------ */

const postalAddress = () => ({
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.streetAddress,
  addressLocality: BUSINESS.addressLocality,
  postalCode: BUSINESS.postalCode,
  addressRegion: BUSINESS.addressRegion,
  addressCountry: BUSINESS.addressCountry,
});

/**
 * RoofingContractor jest podtypem LocalBusiness i lepiej opisuje branżę
 * niż generyczny LocalBusiness używany dotąd na wszystkich podstronach.
 */
export function localBusinessSchema({ path = '/', name, description } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE_URL}/#organization`,
    name: name || BUSINESS.name,
    legalName: BUSINESS.legalName,
    description,
    url: canonical(path),
    telephone: PHONE_E164,
    email: EMAIL,
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHours: BUSINESS.openingHours,
    priceRange: BUSINESS.priceRange,
    foundingDate: String(BUSINESS.foundingYear),
    areaServed: AREA_SERVED.map((n) => ({ '@type': 'Place', name: n })),
  };
}

export function serviceSchema({ path, serviceName, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    serviceType: serviceName,
    url: canonical(path),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: AREA_SERVED.map((n) => ({ '@type': 'Place', name: n })),
  };
}

/**
 * WAŻNE: przekazuj DOKŁADNIE te same stringi, które renderujesz na stronie.
 * Wcześniejszy kod robił faq.question.replace('?', ' w Szczecinie?'),
 * przez co dane strukturalne nie zgadzały się z widoczną treścią.
 */
export function faqSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbSchema(trail = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

/** Helper do <script type="application/ld+json"> w react-helmet. */
export const jsonLd = (obj) => JSON.stringify(obj);
