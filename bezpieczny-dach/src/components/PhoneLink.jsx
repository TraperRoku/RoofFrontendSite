// src/components/PhoneLink.jsx
import React from 'react';
import {
  PHONE_E164,
  PHONE_DISPLAY,
  GTAG_PHONE_CONVERSION,
  fireConversion,
} from '../seo/site';

/**
 * JEDYNE miejsce w serwisie, które odpala konwersję telefoniczną.
 *
 * Usunięty został globalny listener document.addEventListener('click', ...)
 * z App.jsx, który łapał ten sam klik po bąbelkowaniu i liczył konwersję
 * drugi raz. fireConversion() ma dodatkowo 5-sekundową deduplikację
 * na wypadek podwójnego tapnięcia na telefonie.
 */
// POPRAWIONA WERSJA:
function PhoneLink({ children, className, onClick: extraOnClick, ...props }) {
  const handleClick = (e) => {
    if (extraOnClick) extraOnClick(e);

    fireConversion({
      sendTo: GTAG_PHONE_CONVERSION,
      value: 1.0,
      label: 'phone_click',
    });
  };

  return (
    <a
      href={`tel:${PHONE_E164}`}
      className={className}
      onClick={handleClick}
      data-conversion="phone"
      {...props}
    >
      {children || PHONE_DISPLAY}
    </a>
  );
}

export default PhoneLink;
