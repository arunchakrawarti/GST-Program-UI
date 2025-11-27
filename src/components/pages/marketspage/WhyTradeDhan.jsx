"use client";
import React from "react";
import { FiFileText, FiRefreshCcw, FiActivity } from "react-icons/fi";

const reasons = [
  {
    icon: <FiFileText />,
    title: "E-Invoice Generation",
    desc: "Create GST-compliant invoices quickly and efficiently.",
  },
  {
    icon: <FiRefreshCcw />,
    title: "E-Way Bill Tracking",
    desc: "Generate and track E-Way Bills for smooth logistics.",
  },
  {
    icon: <FiActivity />,
    title: "Business Insights",
    desc: "Monitor sales, purchases, and GST liabilities in real-time.",
  },
];

const WhyChooseGST = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-12">
          Why Use GST Platform?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-8 bg-[#f9f9f9] rounded-2xl border border-gray-medium/10 hover:border-none hover:shadow-md transition-all"
            >
              <div className="text-amber text-4xl mb-4 flex justify-center">
                {r.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">{r.title}</h3>
              <p className="text-gray-dark text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGST;
