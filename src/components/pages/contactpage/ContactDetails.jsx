"use client";
import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const ContactDetailsGST = () => {
  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-10">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8 mx-auto">
          <div className="p-6 rounded-2xl border border-gray-medium/10 hover:border-none hover:shadow-md transition-all bg-[#f9f9f9]">
            <FiPhoneCall className="text-amber text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-navy mb-2">Phone</h3>
            <p className="text-gray-dark text-sm">+91 98765 43210</p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-medium/10 hover:border-none hover:shadow-md transition-all bg-[#f9f9f9]">
            <FiMail className="text-amber text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-navy mb-2">Email</h3>
            <p className="text-gray-dark text-sm">support@captainbiz.com</p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-medium/10 hover:border-none hover:shadow-md transition-all bg-[#f9f9f9]">
            <FiMapPin className="text-amber text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-navy mb-2">Office</h3>
            <p className="text-gray-dark text-sm">
              12th Floor, CaptainBiz Tower, Mumbai, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsGST;
