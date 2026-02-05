"use client";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TradingPlatforms = () => {
  const platforms = [
  { name: "GST Registration" },
  { name: "GST Return Filing" },
  { name: "Input Tax Credit (ITC)" },
  { name: "GST Invoices" },
  { name: "GST Rates & HSN" },
  { name: "E-Way Bill" },
  { name: "GST Compliance" },
];

  return (
    <section
      style={{
        background: "linear-gradient(270deg, #7433A5 5%, #20074E 50%)",
      }}
      id="dhanapp"
      className="w-full text-white lg:pt-16 pt-10 pb-44 sm:pb-36 lg:pb-22 relative overflow-hidden"
    >
      <div className="flex justify-center gap-2 px-5">
  <Image
    alt="lightning"
    src="/Assets/light2.png"
    width={100}
    height={100}
    className="h-10 md:h-14 w-auto lg:h-16 "
  />
  <h1 className="text-center text-[1.7rem] md:text-[1.8rem] lg:text-[2rem] font-reddit font-semibold text-white">
    Building Smart{" "}
    <span className="text-amber">GST Filing & Compliance Platforms</span>
  </h1>
</div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT CONTENT */}
        <div className="max-w-xl lg:space-y-6 space-y-5 z-10">
          <h1 className="text-center md:text-start text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-semibold leading-snug mt-4 md:mt-0">
            GST App
          </h1>
          <p className="text-center md:text-start text-gray-medium text-base md:text-lg leading-relaxed lg:w-10/11 lg:pr-5">
           Simplify your GST journey with fast, accurate and reliable tools.
  From GST registration to return filing, input tax credit, invoicing
  and compliance — everything is designed to make taxation effortless
  for individuals, freelancers, and businesses. Stay updated with the
  latest GST rules and file your returns on time.
          </p>

         {/* <Link href="">
          <Button label="Explore GST App " showArrow className="py-3 px-6 md:px-8"/>
         </Link> */}
        </div>

        {/* RIGHT PHONE MOCKUPS */}
        <div className="relative z-0 flex justify-center lg:justify-end w-full lg:w-1/2">
          <div className="relative w-[220px] md:w-[260px] lg:w-[400px] h-auto z-20">
            <Image
              src="/Assets/phone12.png"
              alt="Dhan App Screen 1"
              width={380}
              height={600}
              className="rounded-xl drop-shadow-2xl lg:mt-12"
              priority
            />
          </div>
        </div>
      </div>

      {/* BOTTOM PLATFORM TABS */}
      <div className="absolute bottom-0  w-full">
        <div
          style={{
            background: "linear-gradient(270deg, #59267F 5%, #19083D 50%)",
          }}
          className="mx-auto  bg-opacity-10 py-6"
        >
          <div className="flex flex-wrap lg:justify-between gap-2 container">
            {platforms.map(({ name }, index) => (
              <button
                key={index}
                className={`flex justify-center relative bg-transparent px-1 md:px-2 lg:px-3 py-2 pt-1 rounded-lg border border-purple-muted/30`}
              >
                {/* <Image
                  src="/Assets/icon.svg"
                  alt="dhan icon"
                  width={40}
                  height={40}
                  className="rounded-full"
                /> */}
                <span className="font-medium text-[0.9rem]  text-purple-muted mt-1">{name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPlatforms;
