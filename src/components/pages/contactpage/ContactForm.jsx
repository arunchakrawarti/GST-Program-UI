"use client";
import React from "react";
import Button from "@/components/atoms/Button";

const ContactForm = () => {
  return (
    <section className="bg-[#f4f4f4] py-10 md:py-16 lg:py-20">
      <div className="container  ">
        <div className=" bg-white rounded-2xl  p-8 md:p-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy  mb-10">
            Send Us a Message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-dark mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-medium/30 rounded-lg px-4 py-3 text-gray-dark focus:outline-none focus:border-amber"
              />
            </div>

            <div>
              <label className="block text-gray-dark mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-medium/30 rounded-lg px-4 py-3 text-gray-dark focus:outline-none focus:border-amber"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-dark mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-medium/30 rounded-lg px-4 py-3 text-gray-dark focus:outline-none focus:border-amber"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-dark mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-medium/30 rounded-lg px-4 py-3 text-gray-dark focus:outline-none focus:border-amber resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2  mt-2">
              <Button label="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
