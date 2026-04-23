import React from "react";
import { Link } from "react-router-dom";

const logoUrl = `${import.meta.env.BASE_URL}Logo/Logo.png`;

const Footer = () => {
  return (
    <footer className="mt-20 bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoUrl} alt="Al-Medina Hardware" className="mb-4 h-12 w-auto rounded bg-white/95 p-1" />
            <p className="text-sm text-blue-100">
              Leading hardware supplier in East Africa, delivering quality materials, tools, and
              building solutions since 2006.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Quick Links</h4>
            <div className="grid gap-2 text-sm text-blue-100">
              <Link to="/about" className="hover:text-brand-orange">About Us</Link>
              <Link to="/products" className="hover:text-brand-orange">Products</Link>
              <Link to="/departments" className="hover:text-brand-orange">Departments</Link>
              <Link to="/achievements" className="hover:text-brand-orange">Achievements</Link>
              <Link to="/contact" className="hover:text-brand-orange">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Contact</h4>
            <div className="grid gap-2 text-sm text-blue-100">
              <p>Charo Wa Mae Road, Kilifi Town, Kenya</p>
              <p>0718 670 021 / 0714 404 171</p>
              <p>almadinahardware@yahoo.com</p>
              <p>www.almedinahardware.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-blue-100 sm:flex-row">
          <span>© 2026 Al-Medina Hardware. All rights reserved.</span>
          <span>Building for Future Generations</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
