import React from 'react';

const PHONE_NUMBER = '+48518144882';
const PHONE_DISPLAY = '518 144 882';

function PhoneLink({ children, className, onClick: extraOnClick, ...props }) {
  const handleClick = (e) => {
    if (extraOnClick) extraOnClick(e);

    // Wywołaj konwersję Google Ads jeśli gtag dostępny
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(`tel:${PHONE_NUMBER}`);
      e.preventDefault(); // callback w gtag_report_conversion sam przekieruje
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