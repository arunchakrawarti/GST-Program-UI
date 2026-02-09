"use client";
import React from "react";
import Button from "@/components/atoms/Button";

const AboutGSTHero = () => {
  return (
    <section className="bg-navy text-white py-10 md:py-16 lg:py-20 text-center">
      <div className="container flex flex-col items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 mt-16">
          About Bill Banao GST Platform
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-medium mb-8">
          We aim to simplify GST compliance for every business in India. Our platform provides seamless E-Invoice generation, E-Way Bill tracking, and real-time GST reporting to make accounting hassle-free.
        </p>
        {/* <Button label="Start Your Free Trial" /> */}
      </div>
    </section>
  );
};

export default AboutGSTHero;
