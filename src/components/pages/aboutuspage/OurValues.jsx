"use client";
import React from "react";
import { FiLock, FiUsers, FiTrendingUp, FiActivity } from "react-icons/fi";

const gstValues = [
  {
    icon: <FiTrendingUp />,
    title: "Accuracy",
    desc: "Ensuring precise GST calculations, E-Invoices, and returns every time.",
  },
  {
    icon: <FiLock />,
    title: "Trust & Security",
    desc: "Your financial data is protected with bank-grade security protocols.",
  },
  {
    icon: <FiUsers />,
    title: "Customer First",
    desc: "Dedicated support and guidance for businesses of all sizes to stay GST-compliant.",
  },
  {
    icon: <FiActivity />,
    title: "Innovation",
    desc: "Automated filing, real-time tracking, and smart tools to simplify tax compliance.",
  },
];

const OurValuesGST = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gstValues.map((v, i) => (
            <div
              key={i}
              className="bg-[#f9f9f9] p-8 rounded-2xl hover:shadow-md transition-all border border-gray-medium/10 hover:border-none"
            >
              <div className="text-amber text-4xl mb-4 flex justify-center">{v.icon}</div>
              <h3 className="text-xl font-semibold text-navy mb-2">{v.title}</h3>
              <p className="text-gray-dark text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesGST;
