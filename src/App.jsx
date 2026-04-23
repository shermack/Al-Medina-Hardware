import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Departments from "./pages/Departments.jsx";
import Achievements from "./pages/Achievements.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35 }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-blue-50/60">
      <Navbar />
      <Cart />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/departments" element={<PageTransition><Departments /></PageTransition>} />
          <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
          <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <a
        href="https://wa.me/254718670021"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-[#1DA851] sm:px-5"
        style={{
          position: "fixed",
          right: "16px",
          bottom: "96px",
          zIndex: 9999,
          display: "inline-flex"
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.4 2.2 11.82c0 1.73.45 3.42 1.3 4.92L2 22l5.41-1.42a9.86 9.86 0 0 0 4.61 1.17h.01c5.41 0 9.83-4.4 9.83-9.82 0-2.63-1.03-5.1-2.81-6.99ZM12.03 20.1h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.21.84.86-3.12-.2-.32a8.13 8.13 0 0 1-1.25-4.36c0-4.5 3.68-8.17 8.2-8.17 2.18 0 4.23.84 5.77 2.39a8.1 8.1 0 0 1 2.39 5.79c0 4.5-3.68 8.17-8.18 8.17Zm4.48-6.14c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.12-.17.25-.66.8-.81.97-.15.17-.3.19-.56.06-.25-.13-1.08-.4-2.05-1.28-.76-.68-1.27-1.52-1.42-1.78-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.76 2.69 4.26 3.77.59.25 1.05.4 1.41.51.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.09-.23-.15-.49-.27Z" />
        </svg>
        <span>WhatsApp Us</span>
      </a>

      <Footer />
    </div>
  );
};

export default App;
