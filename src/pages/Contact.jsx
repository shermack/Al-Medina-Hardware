import React from "react";
import WhatsAppInquiryButton from "../components/WhatsAppInquiryButton.jsx";

const Contact = () => {
  const quoteMessage =
    `Hello Al-Medina Hardware, I would like to inquire about your products.`;

  return (
    <div className="contact-page pb-20 pt-12">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-brand-blue px-6 py-12 text-center text-white shadow-glow sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Contact</p>
          <h1 className="contact-heading mt-4 text-3xl font-heading font-semibold text-white md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Speak with our sales team for quotations, delivery scheduling, or custom orders.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="contact-card p-8">
            <h2 className="font-heading text-2xl font-semibold text-brand-ink">Contact Details</h2>
            <div className="mt-6 grid gap-4 text-sm text-brand-slate">
              <p><span className="mr-2">📍</span>Location: Kilifi, Coast Region</p>
              <p><span className="mr-2">📞</span>Phone: 0718 670 021</p>
              <p>
                <span className="mr-2">✉️</span>Email:{" "}
                <a href="mailto:almadinahardware@yahoo.com" className="font-medium text-brand-blue hover:text-brand-orange">
                  almadinahardware@yahoo.com
                </a>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppInquiryButton message={quoteMessage} className="w-full sm:w-auto">
                Chat on WhatsApp
              </WhatsAppInquiryButton>
              <a
                href="tel:+254718670021"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-ink"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="contact-card bg-brand-blue p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              WhatsApp Inquiry
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold text-blue-200">Request a Quote</h2>
            <p className="mt-4 text-sm leading-7 text-slate-50">
              The fastest way to reach our team is through WhatsApp. Send your product list,
              location, and project details for quick support.
            </p>
            <WhatsAppInquiryButton
              message={quoteMessage}
              className="mt-6 bg-[#25D366] text-brand-blue shadow-md hover:bg-[#1DA851]"
            >
              Request Quote on WhatsApp
            </WhatsAppInquiryButton>
          </div>
        </div>

        <div className="contact-card mt-12 overflow-hidden rounded-3xl">
          <iframe
            title="Al-Medina Hardware Location"
            src="https://www.google.com/maps?q=Charo+Wa+Mae+Road,+Kilifi+Town,+Kenya&output=embed"
            className="h-96 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
