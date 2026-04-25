import React from 'react';

const PHONE_NUMBER = '+48518144882';
const PHONE_DISPLAY = '518 144 882';

// Conversion IDs z Twojego kodu
const GTAG_PHONE_CONVERSION = 'AW-18028227969/Na2aCIG8yKIcEIHbw5RD';

function PhoneLink({ children, className, onClick: extraOnClick, ...props }) {
  const handleClick = (e) => {
    // 1. Najpierw wywołaj dodatkowy handler (np. zamknięcie menu)
    if (extraOnClick) extraOnClick(e);

    // 2. Wyślij zdarzenie konwersji Google Ads — BEZ preventDefault
    //    Link tel: zachowuje się normalnie (przeglądarka otwiera tel: URL)
    //    gtag wysyła zdarzenie asynchronicznie w tle
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: GTAG_PHONE_CONVERSION,
      });
    }

    // 3. Fallback: gtag_report_conversion jeśli zdefiniowana (stary format)
    //    Ale NIE wywołujemy preventDefault — tel: link działa niezależnie
    if (
      typeof window.gtag_report_conversion === 'function' &&
      typeof window.gtag !== 'function'
    ) {
      // Tylko jeśli nowy gtag niedostępny, użyj starego formatu
      window.gtag_report_conversion(`tel:${PHONE_NUMBER}`);
    }
  };

  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children || PHONE_DISPLAY}
    </a>
  );
}

export default PhoneLink;