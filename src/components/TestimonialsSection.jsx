import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John K.",
    role: "Contractor",
    quote:
      "Al-Medina Hardware has been our go-to supplier for over five years. Their commitment to quality and reliability is unmatched."
  },
  {
    name: "Mary A.",
    role: "Interior Designer",
    quote:
      "Their selection of high-quality materials and timely delivery makes every project smoother. The team is professional and responsive."
  },
  {
    name: "Samuel O.",
    role: "Property Developer",
    quote:
      "Excellent service and dependable stock levels. We count on Al-Medina for large-scale supply without delays."
  },
  {
    name: "Fatima B.",
    role: "Home Renovator",
    quote:
      "The quality of their products is outstanding and the staff guided me throughout my renovation journey."
  }
];

const TestimonialsSection = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="testimonial-card rounded-3xl border border-white/20 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue font-heading font-semibold text-white">
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-brand-blue">{item.name}</p>
              <p className="text-xs text-brand-slate">{item.role}</p>
            </div>
          </div>
          <div className="mt-5 text-3xl leading-none text-brand-orange">“</div>
          <p className="mt-2 text-base leading-7 text-brand-slate">{item.quote}</p>
          <div className="mt-5 h-0.5 w-12 rounded-full bg-brand-orange/70" />
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
