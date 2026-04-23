import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-bg relative overflow-hidden bg-brand-blue text-white">
      <div className="absolute inset-0 bg-hero-grid opacity-20" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-orange/25 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold uppercase tracking-widest text-brand-orange"
            >
              Building for Future Generations
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              The Best Hardware Supplier in East Africa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100"
            >
              Supplying high-quality construction materials, tools, electrical equipment, and
              building solutions since 2006. Trusted by contractors, developers, and homeowners
              across Kenya.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-orange-600"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-blue"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="hero-departments-panel gradient-border rounded-3xl p-6 shadow-glow">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Active Departments</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                    Live
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Building Materials", "Steel & Metal", "Electrical", "Plumbing"].map((item) => (
                    <div key={item} className="hero-department-card rounded-2xl p-4">
                      <p className="text-sm font-semibold text-white">{item}</p>
                      <p className="mt-2 text-xs text-blue-100">Fast-moving inventory</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-brand-blue p-5 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest">Delivery Network</p>
                    <p className="mt-1 flex items-center gap-2 text-lg font-semibold">
                      <span aria-hidden="true">📍</span>
                      <span>Kilifi + Coast Region</span>
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-satisfaction-card float-slow absolute -bottom-10 -left-5">
              <p className="text-[11px] text-brand-slate">Customer Satisfaction</p>
              <p className="font-heading text-xl font-semibold text-brand-ink">98%</p>
              <div className="mt-2 h-1.5 rounded-full bg-slate-200/80">
                <div className="h-1.5 w-[98%] rounded-full bg-green-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
