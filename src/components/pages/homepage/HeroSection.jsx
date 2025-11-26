"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

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
        setCurrentIndex((prev) => (prev + 1) % texts.length); // switch text
        setAnimationClass("slide-down"); // enter animation
      }, 400); // small delay to sync with animation
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      style={{
        background: "linear-gradient(270deg, #004857 5%, #040B1C 50%)",
      }}
      className="relative overflow-hidden text-white h-screen"
    >
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

      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Side */}
        <div className="space-y-6 mt-26 md:mt-30 lg:mt-32 z-10">
          <div className="flex  relative">
            <Image
              alt="lightning"
              src="/Assets/lightning.svg"
              width={100}
              height={100}
              className="h-16 md:h-20 lg:h-24 -ml-8 md:-ml-2"
            />
            <div>
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.4rem] tracking-wide font-bold leading-snug absolute z-10 top-1/2 -translate-y-1/2 text-nowrap">
                GST Billing Software <br></br> Platform for{" "}
                <span
                  key={texts[currentIndex]}
                  className={`text-teal-green inline-block ${animationClass}`}
                >
                  {texts[currentIndex]}
                </span>
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 md:gap-10 lg:gap-16 lg:ml-4 mt-10 md:mt-12 lg:mt-16">
            <div className="border-l-2 border-gray-medium pl-3 lg:pl-3.5">
              <h1 className="text-gray-medium text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-semibold">
                Built for
              </h1>
              <p className="text-[1.15rem] md:text-[1.4rem] lg:text-[1.5rem] text-white tracking-wide font-bold">
                Businesses
              </p>
            </div>
            <div className="border-l-2 border-gray-medium pl-3 lg:pl-3.5">
              <h1 className="text-gray-medium text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-semibold">
                Built for
              </h1>
              <p className="text-[1.15rem] md:text-[1.4rem] lg:text-[1.5rem] text-white tracking-wide font-bold">
                Chartered Accountants
              </p>
            </div>
          </div>

          <h1 className="text-[1rem] text-gray-medium  font-semibold mt-6 md:mt-8 lg:mt-12">
            Open your
            <span className="text-amber uppercase"> free </span>
            demat account in minutes!
          </h1>

          {/* Stats */}
          <div className="flex gap-8 my-5 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <IoMdStar className="text-amber" />
              <span className="text-[1rem] text-white">1 Mn+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGooglePlay className="text-green-400" />
              <span className="text-[1rem] text-white">
                4.5 Play Store Rating
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className=" absolute bottom-40 lg:-bottom-12 right-0 justify-center ">
          <Image
            src="/Assets/gsttet.png"
            alt="Trader"
            width={760}
            height={960}
            className="object-contain relative z-0"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute  bottom-0 left-0 w-full bg-[#0B162C]/80 backdrop-blur-md flex flex-wrap justify-center gap-6 py-4 text-sm">
        {texts.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F2138]/50 hover:bg-[#1A3B5D]/80 cursor-pointer transition"
          >
            <BsLightningCharge className="text-amber" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
