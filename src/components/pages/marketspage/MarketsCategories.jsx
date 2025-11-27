"use client";
import React from "react";

const gstCategories = [
  { title: "E-Way Bill", desc: "Generate and track E-Way Bills easily." },
  { title: "E-Invoice", desc: "Create GST-compliant E-Invoices instantly." },
  { title: "Purchase & Sales Invoice", desc: "Manage your purchase and sales invoices efficiently." },
  { title: "Inventory Tracking", desc: "Keep track of your stock and inventory in real-time." },
  { title: "Cash & Bank Transactions", desc: "Monitor payments, receipts, and bank reconciliations." },
  { title: "Order Tracking", desc: "Track customer orders and shipments seamlessly." },
  { title: "Self-Employment Receipts", desc: "Edit and manage receipts for self-employment income." },
  { title: "GST Reports", desc: "Generate GST reports and filing-ready summaries." },
];

const GSTCategories = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-12">
          GST & Accounting Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {gstCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] p-6 rounded-2xl hover:shadow-md transition-all border border-gray-medium/10 hover:border-none"
            >
              <h3 className="text-xl font-semibold text-navy mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-dark text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GSTCategories;
