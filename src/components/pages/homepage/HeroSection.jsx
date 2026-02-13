"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import Button from "@/components/atoms/Button";
import Link from "next/link";

const HeroSection = () => {
  const texts = [
    "GST Overview",
    "GST Registration",
    "GST Returns (GSTR-1, 3B)",
    "Input Tax Credit (ITC)",
    "GST Rates & Slabs",
    "E-Invoice & E-Way Bill",
    "GST Payments",
    "GST Notice & Compliance",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-down");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("slide-up");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setAnimationClass("slide-down");
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(270deg, #004857 5%, #040B1C 50%)",
      }}
      className="relative overflow-hidden text-white min-h-screen flex items-center pb-52 sm:pb-32 md:pb-20 lg:pb-20"
    >
      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        .slide-down {
          animation: slideDown 0.4s ease-in-out forwards;
        }
        .slide-up {
          animation: slideUp 0.4s ease-in-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Side */}
        <div className="mt-24 lg:mt-0 space-y-6">
          <div className="relative">
            <h1 className="leading-snug text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] xl:text-[3rem] font-bold">
              GST Billing Software <br />
              Platform for{" "}
              <span
                key={texts[currentIndex]}
                className={`text-teal-green inline-block ${animationClass}`}
              >
                {texts[currentIndex]}
              </span>
            </h1>
          </div>

          {/* Built For Section */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 mt-10">
            <div className="border-l-2 border-gray-medium pl-3">
              <h1 className="text-gray-medium text-lg font-semibold">
                Built for
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-white">
                Businesses
              </p>
              <div className="flex gap-3 mt-2">
                <Link href="https://biil-banao-user.vercel.app/auth/signin">
                <Button label="Login" />
                </Link>
                 
                <Link href="https://biil-banao-user.vercel.app/auth/signup">
                <Button label="Signup" />
                </Link>
              </div>
            </div>

            <div className="border-l-2 border-gray-medium pl-3">
              <div>
                <h1 className="text-gray-medium text-lg font-semibold">
                Built for
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-white">
                Chartered Accountants
              </p>
              </div>
              <div className="flex gap-3 mt-2">
                <Link href="https://biil-banao-user.vercel.app/auth/signin">
                <Button label="Login" />
                </Link>
                 
                <Link href="https://biil-banao-user.vercel.app/auth/signup">
                <Button label="Signup" />
                </Link>
              </div>
            </div>

          </div>

          {/* <p className="text-sm sm:text-base text-gray-medium font-semibold mt-6">
            Open your free
            account in minutes!
          </p> */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base mt-4">
            <div className="flex items-center gap-2">
              <IoMdStar className="text-amber text-lg" />
              <span>1 Mn+ Active Users</span>
            </div>

            <div className="flex items-center gap-2">
              <FaGooglePlay className="text-green-400 text-lg" />
              <span>4.5 Play Store Rating</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/Assets/gsttet.png"
            alt="GST Illustration"
            width={600}
            height={900}
            className="object-contain max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] lg:max-h-[80vh]"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0B162C]/80 backdrop-blur-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 px-4 sm:px-6 py-4 text-sm z-20">
        {texts.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#0F2138]/50 hover:bg-[#1A3B5D]/80 cursor-pointer transition"
          >
            <BsLightningCharge className="text-amber" />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
