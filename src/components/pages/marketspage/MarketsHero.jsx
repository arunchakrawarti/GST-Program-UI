"use client";
import React from "react";
import Button from "@/components/atoms/Button";

const GSTHero = () => {
  return (
    <section className="bg-navy text-white py-10 md:py-16 lg:py-20 text-center">
      <div className="container flex flex-col items-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-16">
          Simplify Your GST & Accounting
        </h1>
        <p className="text-lg md:text-xl text-gray-medium mb-8 max-w-2xl">
          Manage E-Way Bills, E-Invoices, track sales & purchases, monitor cash flow, 
          and stay GST-compliant — all from one easy-to-use platform.
        </p>
        {/* <Button 
          label="Start 14-Day Free Trial" 
          className="py-3 px-6 rounded-md text-white font-medium"
        /> */}
        {/* <p className="text-gray-medium text-sm mt-3 max-w-md">
          No credit card required. Get started in minutes.
        </p> */}
      </div>
    </section>
  );
};

export default GSTHero;
