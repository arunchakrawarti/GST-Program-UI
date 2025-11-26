"use client";
import React from "react";
import { FiWifi, FiBarChart2, FiZap, FiEye, FiClipboard } from "react-icons/fi";
import { RiFundsBoxFill, RiRadarLine } from "react-icons/ri";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const BuiltForInvestors = () => {
  return (
    <section id="terminvestors" className="w-full bg-white pb-10 md:by-14 lg:by-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-14">
        {/* Right Section */}
        <div className="flex-1 flex justify-center relative w-[67%] md:w-[80%] lg:w-[90%]">
          <div className="relative rounded-2xl p-3">
            <Image
              src="/Assets/lott2.webp"
              alt="Investor using Dhan"
              width={400}
              height={500}
              className="w-full md:w-[300px] lg:w-[350px] h-auto rounded-2xl"
            />

            {/* Floating Cards */}
            <div className="absolute top-20 -left-16 bg-white rounded-xl border border-gray-100 lg:px-4 md:px-2 px-1.5 py-2 text-sm space-y-1">
              <p className="text-gray-medium text-xs">Track 10,000+ stocks easily</p>
              <p className="text-gray-dark font-semibold">Watchlist Groups</p>
              <p className="text-gray-medium text-xs">for long-term investing</p>
            </div>

            <div className="absolute top-32 -right-9 bg-white rounded-lg border border-gray-100 h-16 w-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center font-bold text-gray-dark text-2xl md:text-3xl lg:text-4xl">
              I⁺
            </div>

            <div className="absolute -bottom-6 -right-16 bg-white rounded-xl border border-gray-100 lg:px-4 md:px-2 px-1.5 py-2 text-sm space-y-1">
              <p className="text-gray-dark font-semibold">Zero % Commission</p>
              <p className="text-gray-medium text-xs">on Direct Mutual Funds</p>
              <p className="text-gray-dark font-semibold">Start Investing</p>
            </div>
          </div>
        </div>

        {/* Left Section */}
       <div className="flex-1 mt-8 md:mt-4 lg:mt-0">
  <h2 className="text-[2rem] md:text-[2.1rem] lg:text-[2.5rem] font-semibold text-gray-dark mb-3">
    Built for Businesses & Tax Professionals
  </h2>

  <p className="text-gray-medium mb-8 text-[1.05rem]">
    Manage GST effortlessly with automated tools for registration, return filing,
    ITC reconciliation, invoicing, e-way bills, compliance tracking, and reporting.
    A fast, accurate and reliable platform designed for businesses, accountants and consultants.
  </p>

  {/* Feature List */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-dark">
    {[
      {
        icon: <FiWifi />,
        text1: "Connect GST Portal instantly using",
        text2: "GST Sync",
      },
      {
        icon: <RiRadarLine />,
        text1: "Reconcile ITC from GSTR-2A & 2B with",
        text2: "Smart ITC Matcher",
      },
      {
        icon: <FiBarChart2 />,
        text1: "View reports & analytics powered by",
        text2: "GST Insights Dashboard",
      },
      {
        icon: <FiZap />,
        text1: "File GSTR-1, 3B & 9 faster using",
        text2: "Quick GST Filing",
      },
      {
        icon: <RiFundsBoxFill />,
        text1: "Auto-calculate tax liability, interest & late fees with",
        text2: "GST Calculator",
      },
      {
        icon: <FiEye />,
        text1: "Track notices, due dates & compliance status with",
        text2: "GST Compliance Tracker",
      },
    ].map((item, i) => (
      <div key={i} className="flex items-start gap-3">
        <div className="text-amber text-[1.5rem] mt-1">{item.icon}</div>
        <div>
          <p className="font-medium text-[0.95rem] text-gray-medium">
            {item.text1}
          </p>
          <h3 className="font-semibold text-[1.05rem] text-gray-dark">
            {item.text2}
          </h3>
        </div>
      </div>
    ))}
  </div>

  <Button
    label="Explore GST Features"
    showArrow
    className="mt-10 px-6 md:px-8 py-3 text-white hover:text-white"
  />
</div>

      </div>
        <div>
                <Image
                    src="/Assets/dhanBorderL.png"
                    alt="Super Trader"
                    width={100}
                    height={10}
                    className="w-full  h-auto mt-10 hidden lg:block"
                  />
            </div>
    </section>
  );
};

export default BuiltForInvestors;
