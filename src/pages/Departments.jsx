import React from "react";
import { categories } from "../data/products.js";

const departmentIcons = {
  "Building Materials": "🧱",
  "Steel and Metal": "🔩",
  "Electrical Supplies": "⚡",
  "Plumbing Supplies": "🚰",
  "Tiles and Finishes": "🧩",
  "Bathroom Products": "🚿",
  "Roofing Materials": "🏠",
  Ironmongery: "🛠️",
  "Household Hardware": "🪑",
  "Procurement Desk": "📋",
  "Logistics & Delivery": "🚚",
  "Customer Support": "🎧"
};

const DepartmentCard = ({ title, description }) => (
  <div className="department-card rounded-3xl p-6">
    <div className="text-2xl text-brand-orange" aria-hidden="true">
      {departmentIcons[title] || "🏬"}
    </div>
    <h3 className="mt-4 inline-block border-b-2 border-brand-orange pb-2 text-lg font-heading font-semibold text-white">
      {title}
    </h3>
    <p className="mt-3 text-sm leading-6 text-blue-100">{description}</p>
  </div>
);

const Departments = () => {
  return (
    <div className="departments-page pb-20 pt-12">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Departments</p>
          <h1 className="departments-heading mt-4 text-3xl font-heading font-semibold text-white md:text-4xl">
            Specialized Product Departments
          </h1>
          <p className="mt-3 text-base text-blue-100 md:text-lg">
            Our fully departmentalized showroom helps clients source the right products quickly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <DepartmentCard key={category.id} title={category.name} description={category.description} />
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <DepartmentCard
            title="Procurement Desk"
            description="Dedicated team supporting bulk orders, supplier negotiations, and project scheduling."
          />
          <DepartmentCard
            title="Logistics & Delivery"
            description="Reliable delivery system across Kilifi and the Coast region for timely dispatch."
          />
          <DepartmentCard
            title="Customer Support"
            description="Expert advice on product selection, usage, and after-sales assistance."
          />
        </div>
      </div>
    </div>
  );
};

export default Departments;
