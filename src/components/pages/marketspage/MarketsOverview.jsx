"use client";
import React from "react";
import MarketsCard from "@/components/molecules/MarketsCard";

const data = [
  { name: "NIFTY 50", price: 22025.5, change: 0.85 },
  { name: "SENSEX", price: 72600.2, change: -0.35 },
  { name: "BANK NIFTY", price: 46520.3, change: 1.12 },
  { name: "MCX GOLD", price: 62455.0, change: 0.42 },
];

const MarketsOverview = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f4f4f4]">
      <div className="container mx-auto ">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy text-center mb-12">
          Market Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {data.map((item, index) => (
            <MarketsCard
              key={index}
              name={item.name}
              price={item.price}
              change={item.change}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsOverview;
