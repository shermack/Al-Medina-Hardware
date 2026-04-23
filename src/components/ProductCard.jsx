import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import { fallbackProductImage } from "../data/products.js";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const categoryName = product.category;

  const handleInquiry = () => {
    const message =
      `Hello Al-Medina Hardware,\n\n` +
      `I would like to inquire about the price of the following product:\n\n` +
      `Product: ${product.name}\n` +
      `Category: ${categoryName}\n\n` +
      `Please provide more details.`;

    window.open(`https://wa.me/254718670021?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="product-card-shell group flex flex-col overflow-hidden rounded-3xl ring-1 ring-blue-950/5"
    >
      <div className="product-image-frame relative m-4 mb-0 aspect-[4/3] overflow-hidden bg-brand-blue/10">
        <img
          src={product.image || fallbackProductImage}
          alt={product.name}
          className="h-full w-full rounded-xl object-cover object-center transition duration-300 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = fallbackProductImage;
          }}
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-ink/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-brand-blue/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
          {categoryName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-xl font-semibold text-brand-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-brand-slate">{product.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={handleInquiry}
            className="inline-flex items-center justify-center rounded-full bg-brand-orange px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Inquire Price
          </button>
          <button
            onClick={() => addItem(product)}
            className="inline-flex items-center justify-center rounded-full border border-brand-blue/25 bg-blue-50 px-4 py-3 text-center text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-2">
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="17" cy="20" r="1.5" />
              <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.76L20 7H7" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
