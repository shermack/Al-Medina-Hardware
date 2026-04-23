import React from "react";
import TestimonialsSection from "../components/TestimonialsSection.jsx";

const Testimonials = () => {
  return (
    <div className="testimonials-page pb-20 pt-12">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Testimonials</p>
          <h1 className="testimonials-heading mt-4 text-3xl font-heading font-semibold text-white md:text-4xl">
            What Our Clients Say
          </h1>
          <p className="mt-3 text-base text-blue-100 md:text-lg">
            Contractors, designers, and homeowners rely on Al-Medina Hardware for quality and service.
          </p>
        </div>
        <div className="mt-12">
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
