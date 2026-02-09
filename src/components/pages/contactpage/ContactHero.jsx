"use client";
import React from "react";
import Button from "@/components/atoms/Button";

const ContactHeroGST = () => {
  return (
    <section className="bg-navy text-white py-10 md:py-16 lg:py-20 text-center">
      <div className="container flex flex-col items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 mt-16">
          Contact Bill Banao
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-medium mb-8">
          Have questions about GST compliance, e-invoicing, or accounting? 
          Our team is here to assist you with all your GST and business finance needs.
        </p>
        {/* <Button label="Get Free GST Consultation" /> */}
      </div>
    </section>
  );
};

export default ContactHeroGST;
