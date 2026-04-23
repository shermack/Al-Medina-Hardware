import React from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../components/HeroSection.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import ProductCard from "../components/ProductCard.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import WhatsAppInquiryButton from "../components/WhatsAppInquiryButton.jsx";
import { categories, products } from "../data/products.js";

const stats = [
  { label: "Years of Excellence", value: 18 },
  { label: "Active Product Lines", value: 1200 },
  { label: "Supplier Partners", value: 85 },
  { label: "Projects Supported", value: 5400 }
];

const whyChooseItems = [
  {
    icon: "🏬",
    title: "Comprehensive showroom and warehouse",
    description: "A modern display floor and organized stock holding for quick sourcing."
  },
  {
    icon: "🚚",
    title: "Reliable delivery system across the coast",
    description: "Fast dispatch and dependable transport support for project timelines."
  },
  {
    icon: "⚙️",
    title: "Digitized operations for fast order processing",
    description: "Computerized workflows improve speed, tracking, and order accuracy."
  },
  {
    icon: "🤝",
    title: "Strong supplier partnerships and quality assurance",
    description: "Trusted sourcing relationships help maintain consistent quality and supply."
  }
];

const Counter = ({ value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = (timestampStart) => {
      const progress = Math.min((timestampStart - start) / duration, 1);
      const next = Math.floor(progress * value);
      setCount(next);
      if (progress < 1) requestAnimationFrame(step);
    };
    const startAnim = (t) => {
      start = t;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(startAnim);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-heading font-bold text-brand-blue">
      {count}+ 
    </span>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />

      <section className="company-intro-section py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="company-intro-title section-title"
            >
              Company Introduction
            </motion.h2>
            <p className="section-subtitle mt-4">
              Al-Medina Hardware is one of Kenya’s premier hardware brands, strategically located in
              Kilifi Town. Since 2006, we have grown from a modest shop into a comprehensive wholesale
              and retail enterprise supplying local and imported hardware solutions.
            </p>
            <p className="section-subtitle mt-4">
              Our fully computerized operations, departmentalized go-down, and reliable delivery system
              ensure accuracy, speed, and efficiency for every client.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="company-stat-card rounded-3xl p-6">
                <Counter value={stat.value} />
                <p className="text-sm text-brand-slate mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">Product Categories</h2>
              <p className="text-slate-200 mt-3">A full spectrum of hardware solutions for every project stage.</p>
            </div>
          </div>
          <div className="mt-10">
            <CategoryGrid categories={categories} />
          </div>
        </div>
      </section>

      <section className="why-choose-section py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle mt-3">
                We deliver quality, affordability, and dependable support for contractors and homeowners.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {whyChooseItems.map((item) => (
                <div key={item.title} className="why-choose-card rounded-3xl p-6">
                  <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                  <p className="mt-4 text-lg font-semibold text-brand-blue">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-brand-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">Company Achievements</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Established in 2006 with a fast-growing customer base",
              "State-of-the-art showroom and departmentalized go-down",
              "Reliable delivery system with on-time fulfillment",
              "Digitized operations for speed and accuracy"
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white border border-white/10 p-6 text-brand-ink">
                <p className="font-semibold text-brand-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle mt-3">High-demand items curated for major builds.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">Testimonials</h2>
              <p className="text-slate-200 mt-3">Trusted by contractors, designers, and homeowners.</p>
            </div>
          </div>
          <div className="mt-10">
            <TestimonialsSection />
          </div>
        </div>
      </section>

      <section className="bg-blue-50/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title">Contact Section</h2>
            <p className="section-subtitle mt-3">
              Speak to our sales team for bulk supply, delivery scheduling, or specialized orders.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-brand-slate">
              <p>Charo Wa Mae Road, Kilifi Town, Kenya</p>
              <p>0718 670 021 / 0714 404 171</p>
              <p>almadinahardware@yahoo.com</p>
            </div>
          </div>
          <div className="soft-blue-card rounded-3xl p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Fast Sales Support
            </p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-brand-ink">
              Request product availability or bulk supply support
            </h3>
            <p className="mt-3 text-sm leading-6 text-brand-slate">
              Our sales team can confirm product details, delivery options, and current availability
              directly through WhatsApp.
            </p>
            <WhatsAppInquiryButton className="mt-6 w-full sm:w-auto">Send WhatsApp Inquiry</WhatsAppInquiryButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
