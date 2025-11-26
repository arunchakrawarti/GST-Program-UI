"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

const InvestTrade = () => {
  return (
    <div className="bg-navy">
      <div className=" container text-center grid md:grid-cols-2 gap-6 relative">
        {/* Left Content */}
        <div className="text-center md:text-left md:order-1 order-2 py-10 lg:py-14">
          <h1 className="text-[2rem] md:text-[2.3rem] lg:text-[2.6rem] font-semibold text-white leading-tight mb-4">
            Built Superfast. <br /> Made for  CaptainBiz Filing.
          </h1>

          <p className="text-white text-[1rem] md:text-[1.1rem] leading-relaxed mb-8 max-w-md mx-auto md:mx-0 opacity-90">
           File GST returns, generate e-invoices, reconcile GSTR-2A/2B, and 
            manage billing — all from one platform. Experience 
            compliance that’s truly{" "}
            <span className="text-amber font-medium">#MadeForTrade</span>.
          </p>

          <div  className="justify-center md:justify-start w-full">
            <Button
              label="Open GST Account"
              showArrow
              className="py-3 px-6 rounded-md font-medium"
            />
          </div>
          <p className="text-gray-medium text-sm mt-3">
             No credit card required • Setup in 2 minutes
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:flex justify-center md:justify-end md:relative md:order-2 order-1">
          <Image
            src="/Assets/common-banner.png"
            alt="subscribe"
            width={530}
            height={560}
            className="mx-auto md:mx-0 w-[245px]  md:w-[400px]  z-0 md:absolute -top-30 -mt-6 md:-mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestTrade;
