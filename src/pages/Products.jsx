import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";
import { categories, products } from "../data/products.js";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.categoryId === category;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="products-page pb-20 pt-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-brand-blue px-6 py-12 text-center text-white shadow-glow sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Product Catalog
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold md:text-5xl">
            Explore Our Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 md:text-lg">
            Browse reliable hardware solutions and inquire instantly through WhatsApp for current
            product pricing and availability.
          </p>
        </div>

        <div className="products-filter-panel mt-10 grid gap-4 rounded-3xl p-4 md:grid-cols-3">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-2xl border border-blue-900/10 bg-blue-50/60 p-3 outline-none ring-brand-blue/20 transition focus:ring-4 md:col-span-2"
            placeholder="Search products or categories"
          />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-2xl border border-blue-900/10 bg-blue-50/60 p-3 outline-none ring-brand-blue/20 transition focus:ring-4"
          >
            <option value="all">All Categories</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } }
          }}
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.35 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
