import React from "react";
import { motion } from "framer-motion";
import { fallbackProductImage } from "../data/products.js";

const CategoryGrid = ({ categories }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-ink shadow-lg"
        >
          <img
            src={category.image || fallbackProductImage}
            alt={category.name}
            className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.src = fallbackProductImage;
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/35 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-heading text-lg font-semibold">{category.name}</h3>
            <p className="mt-2 text-sm text-blue-100">{category.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryGrid;
