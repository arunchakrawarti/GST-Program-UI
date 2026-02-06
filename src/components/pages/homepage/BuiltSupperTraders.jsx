"use client";
import React from "react";
import { FiZap, FiTrendingUp, FiBarChart2, FiWifi } from "react-icons/fi";
import { RiRadarLine, RiFundsBoxFill } from "react-icons/ri";
import { MdShowChart, MdSpeed } from "react-icons/md";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

const BuiltSuperTraders = () => {
  return (
    <section id="supertraders" className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-14">
        {/* ---- Left Section ---- */}
        <div className="flex-1 order-2 md:order-1 mt-10 md:mt-4 lg:mt-0">
          <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-semibold text-gray-dark mb-3">
            Best GST Billing Software
          </h2>
          <p className="text-gray-medium mb-8 text-[1.05rem]">
            CaptainBiz is a reliable and easy-to-use GST Billing Software built for small and medium businesses in India. It simplifies invoicing, manages inventory, tracks payments, and ensures timely tax compliance, all from one dashboard. Whether you’re a retailer, wholesaler, or service provider. CaptainBiz helps you streamline operations and grow your business efficiently.
          </p>

          {/* ---- Feature List ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-dark">
  {[
    {
      icon: <FiWifi />,
      text1: "Connect GST Portal instantly via",
      text2: "GST Sync",
    },
    {
      icon: <FiZap />,
      text1: "File GSTR-1, 3B & other returns faster with",
      text2: "Quick GST Filing",
    },
    {
      icon: <RiFundsBoxFill />,
      text1: "Auto-calculate ITC, liability & interest using",
      text2: "Smart GST Calculator",
    },
    {
      icon: <MdShowChart />,
      text1: "Track monthly return status & filings on",
      text2: "Compliance Dashboard",
    },
    {
      icon: <MdSpeed />,
      text1: "Generate invoices & e-way bills instantly with",
      text2: "Super Fast E-Tools",
    },
    {
      icon: <FiTrendingUp />,
      text1: "Download ledger, notices & reports using",
      text2: "GST Data Connect",
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


          <Link href="/gst-feature">
          <Button
            label="Explore All GST Features"
            showArrow
            className="mt-10 px-6 md:px-8 py-3 text-white hover:text-white"
          />
          </Link>
        </div>

        {/* ---- Right Section ---- */}
        <div className="flex-1 order-1 md:order-2 flex justify-center relative w-[67%] md:w-[80%] lg:w-[90%]">
          <div className="relative rounded-2xl p-3">
            <Image
              src="/Assets/gst.jpg"
              alt="Super Trader"
              width={400}
              height={500}
              className="w-full md:w-[300px] lg:w-[350px] h-auto rounded-2xl"
            />

            {/* Floating Card 1 */}
            <div className="absolute top-20 -left-16 bg-white rounded-xl border border-gray-100 lg:px-4 md:px-2 px-1.5 py-2 text-sm space-y-1 ">
              <p className="text-gray-medium text-xs">GST Overview</p>
              <p className="text-gray-dark font-semibold">₹ 8,45,460</p>
              <p className="text-gray-medium text-xs">+3.5% Today</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute top-32 -right-9 bg-white rounded-lg border border-gray-100 h-16 w-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center font-bold text-gray-dark text-2xl md:text-3xl lg:text-4xl ">
              T⁺
           </div>

            {/* Floating Card 3 */}
            <div className="absolute -bottom-6 -right-16 bg-white rounded-xl border border-gray-100 lg:px-4 md:px-2 px-1.5 py-2 text-sm space-y-1 ">
              <p className="text-gray-dark font-semibold">GST Funding</p>
              <p className="text-gray-medium text-xs">
                LTP ₹ 575.15 | Leverage 4.00×
              </p>
              <p className="text-gray-dark font-semibold">Active Position</p>
            </div>
          </div>
        </div>
      </div>
      <div>
          <Image
              src="/Assets/dhanBorder.png"
              alt="Super Trader"
              width={100}
              height={10}
              className="w-full  h-auto mt-10 hidden lg:block"
            />
      </div>

    </section>
  );
};

export default BuiltSuperTraders;
