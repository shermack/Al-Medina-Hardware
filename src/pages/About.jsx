import React from "react";
import { motion } from "framer-motion";

const values = [
  { icon: "✔️", text: "Integrity and accountability in every transaction" },
  { icon: "🤝", text: "Teamwork, leadership, and continuous innovation" },
  { icon: "🙌", text: "Respect for customers, suppliers, and our community" },
  { icon: "🌱", text: "Sustainability and responsible business practices" },
  { icon: "⭐", text: "Commitment to quality and value for money" }
];

const About = () => {
  return (
    <div className="about-page pb-20 pt-12">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-brand-orange font-semibold">About Us</p>
          <h1 className="about-heading-accent section-title mt-4 text-white md:text-white">Our Story</h1>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-blue-100">
            Established in 2006, Al-Medina Hardware has evolved from a small-scale shop into one of
            Kenya’s leading wholesale and retail hardware enterprises. Based at Charo Wa Mae Road in
            Kilifi Town, we support construction and development projects across East Africa.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="about-card rounded-3xl p-8">
            <h2 className="about-heading-accent text-2xl font-heading font-semibold text-brand-blue">Company History</h2>
            <p className="text-brand-slate mt-4">
              Our growth has been fueled by strategic expansion of product lines, a fully
              departmentalized go-down, and a reliable delivery system. With computerized operations
              and an expert team, we process orders quickly, manage inventory effectively, and deliver
              on time.
            </p>
          </div>
          <div className="about-card rounded-3xl p-8">
            <h2 className="about-heading-accent text-2xl font-heading font-semibold text-brand-blue">What We Offer</h2>
            <p className="text-brand-slate mt-4">
              We supply high-quality building materials, tools, electrical and plumbing supplies,
              paints, safety gear, tiles, and household hardware. Our products are sourced from
              reputable local and international manufacturers.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="about-card rounded-3xl p-8">
            <h2 className="about-heading-accent text-2xl font-heading font-semibold text-brand-blue">Vision</h2>
            <p className="text-brand-slate mt-4">
              To be the best and most reliable experts in local and imported hardware products,
              delivering sustainable, high-quality, customer-centered solutions with strong value.
            </p>
          </div>
          <div className="about-card rounded-3xl p-8">
            <h2 className="about-heading-accent text-2xl font-heading font-semibold text-brand-blue">Mission</h2>
            <p className="text-brand-slate mt-4">
              To understand and meet our clients’ needs, grow alongside them, and provide value for
              money through reliable service, quality assurance, and trust-based relationships.
            </p>
          </div>
        </div>

        <div className="about-values-shell mt-16 rounded-3xl p-8">
          <h2 className="about-heading-accent text-2xl font-heading font-semibold text-brand-blue">Our Values</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.text} className="about-value-card rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden="true">{value.icon}</span>
                  <p className="text-brand-slate">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
