import React from "react";

const WhatsAppInquiryButton = ({ children = "Chat on WhatsApp", message, className = "" }) => {
  const defaultMessage =
    `Hello Al-Medina Hardware,\n\n` +
    `I would like to speak with your sales team about hardware products and availability.\n\n` +
    `Name:\n` +
    `Phone:\n` +
    `Location:`;

  return (
    <a
      href={`https://wa.me/254718670021?text=${encodeURIComponent(message || defaultMessage)}`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#1DA851] ${className}`}
    >
      {children}
    </a>
  );
};

export default WhatsAppInquiryButton;
