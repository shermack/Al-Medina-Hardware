import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Departments", path: "/departments" },
  { name: "Achievements", path: "/achievements" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" }
];

const logoUrl = `${import.meta.env.BASE_URL}Logo/Logo.png`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totals, toggleCart } = useCart();

  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-2 transition-colors ${
      isActive ? "bg-white text-brand-blue" : "text-blue-100 hover:bg-white/10 hover:text-white"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-white text-brand-blue"
        : "text-white hover:bg-white/10 active:bg-white/15"
    }`;

  const closeMenu = () => setOpen(false);

  const handleMobileCart = () => {
    closeMenu();
    toggleCart();
  };

  return (
    <header className="site-header-blend sticky top-0 z-50 overflow-visible text-white backdrop-blur">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-18">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Al-Medina Hardware" className="header-logo-image" />
            <div className="hidden border-l border-white/20 pl-5 sm:block">
              <p className="font-heading font-semibold text-white">Al-Medina Hardware</p>
              <p className="text-xs text-blue-100">Building for Future Generations</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={navClass}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleCart}
              className="relative hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue lg:inline-flex"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-2">
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="17" cy="20" r="1.5" />
                <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.76L20 7H7" />
              </svg>
              Cart
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-xs text-white">
                {totals.count}
              </span>
            </button>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-1" aria-hidden="true">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
      <span className="header-cut-line" aria-hidden="true" />

      <motion.div
        initial={false}
        animate={open ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-slate-950/60 lg:hidden"
        onClick={closeMenu}
      />

      <motion.aside
        initial={false}
        animate={open ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed right-0 top-0 z-[60] flex h-screen w-[76%] max-w-[18rem] flex-col overflow-y-auto border-l border-white/10 bg-brand-blue px-5 py-5 text-white shadow-2xl lg:hidden"
      >
        <div className="relative z-10 flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="font-heading text-base font-semibold text-white">Menu</p>
              <p className="text-xs text-blue-100">Navigate Al-Medina Hardware</p>
            </div>
            <button
              onClick={closeMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold text-white transition hover:bg-white hover:text-brand-blue"
              aria-label="Close menu"
            >
              X
            </button>
          </div>

          <nav className="mt-6 flex flex-1 flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} onClick={closeMenu} className={mobileNavClass}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 grid gap-3 border-t border-white/10 pt-5">
            <button
              onClick={handleMobileCart}
              className="inline-flex w-full items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue"
            >
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="17" cy="20" r="1.5" />
                  <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.76L20 7H7" />
                </svg>
                Cart
              </span>
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-orange px-2 text-xs text-white">
                {totals.count}
              </span>
            </button>

            <Link
              to="/products"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Products
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue"
            >
              Contact Sales
            </Link>

            <a
              href="https://wa.me/254718670021"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.aside>
    </header>
  );
};

export default Navbar;
