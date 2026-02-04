"use client";
import React from "react";
import {
  FiZap,
  FiPhoneOff,
  FiMail,
  FiShieldOff,
} from "react-icons/fi";
import { MdShowChart, MdSpeed } from "react-icons/md";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

const YouFirst = () => {
  return (
    <section id="youfisrt" className="w-full bg-white pb-10 md:pb-14 lg:pb-16 pt-0 md:pt-6 lg:pt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-14">
        
        {/* ---- Left Section ---- */}
        <div className="flex-1">
          <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-semibold text-gray-dark mb-3">
            Always Keeping Taxpayers First
          </h2>

          <p className="text-gray-medium mb-8 text-[1.05rem]">
            In our GST platform, businesses and tax professionals always come first.
            We provide a transparent, secure and reliable experience with
            zero interruptions — no spam, no unwanted calls, no data sharing.
            Just one goal: <b>your compliance made effortless.</b>
          </p>

          {/* ---- Feature List ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-dark">
            {[
              {
                icon: <FiPhoneOff />,
                text2: "No Unwanted Calls",
              },
              {
                icon: <FiZap />,
                text2: "No Wrong or Misleading Tax Advice",
              },
              {
                icon: <FiMail />,
                text2: "No Spam Emails or SMS",
              },
              {
                icon: <MdShowChart />,
                text2: "No Manual Errors — Auto GST Calculation",
              },
              {
                icon: <MdSpeed />,
                text2: "No Delays — Fast Return Filing",
              },
              {
                icon: <FiShieldOff />,
                text2: "No Data Sharing — 100% Secure",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="text-amber text-[1.5rem] mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-[1.05rem] text-gray-dark">
                    {item.text2}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Link href="/transparency-policy">
          <Button
            label="Read Our GST Transparency Policy"
            showArrow
            className="mt-10 px-6 md:px-8 py-3 text-white hover:text-white"
          />
          </Link>
        </div>

        {/* ---- Right Section ---- */}
        <div className="flex-1 flex justify-center relative w-[67%] md:w-[80%] lg:w-[90%]">
          <div className="relative rounded-2xl p-3 mt-10 md:mt-6 lg:mt-0">
            <Image
              src="/Assets/gst12.jpg"
              alt="GST Transparency Illustration"
              width={400}
              height={500}
              className="w-full md:w-[300px] lg:w-[400px] h-[200px] sm:h-[350px] rounded-2xl"
            />

            {/* Floating Card 1 */}
            <div className="absolute -top-6 -left-16 bg-white rounded-xl border border-gray-100 lg:px-4 md:px-2 px-1.5 py-2 text-sm space-y-1">
              <p className="text-gray-medium text-xs">Transparency Score</p>
              <p className="text-gray-dark font-semibold">100 / 100</p>
              <p className="text-gray-medium text-xs">GST-Compliant Always</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-6 -right-16 bg-white rounded-xl border border-gray-100 lg:px-4 md:px-2 px-1.5 py-2 text-sm space-y-1">
              <p className="text-gray-dark font-semibold">No Hidden Charges</p>
              <p className="text-gray-medium text-xs">
                100% Clear | No Extra Fees
              </p>
              <p className="text-gray-dark font-semibold">Fully Transparent</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default YouFirst;
