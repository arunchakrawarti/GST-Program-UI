"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

const testimonials = [
  {
    name: "Amit Verma",
    username: "@amit_gstfilings",
    text: "GST return filing has become super smooth with this platform. Fast, accurate and hassle-free.",
    img: "/Assets/lott2.webp",
  },
  {
    name: "Priya Sinha",
    username: "@priyas_taxpro",
    text: "Best GST portal experience, auto-reconciliation saves hours.",
    img: "/Assets/lott5.webp",
  },
  {
    name: "Rohan Gupta",
    username: "@rohanbiz_owner",
    text: "Finally a platform that makes GST compliance simple and smooth.",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sumit Sharma",
    username: "@sumit_compliance",
    text: "Amazing UI, easy navigation and total transparency.",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Neha Jain",
    username: "@nehacorporate",
    text: "Automated reports and strong security features. Best for companies.",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Vikas Patel",
    username: "@vikas_taxpayer",
    text: "Super quick filing, accurate tax breakup and summaries.",
    img: "https://i.pravatar.cc/150?img=4",
  },
];

const LoveFromIndia = () => {
  return (
    <section className="w-full bg-navy py-14 text-white px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[1.6rem] md:text-[1.9rem] font-semibold mb-10 leading-snug">
          ❤️ Trusted by Millions of <span className="text-amber">GST Users</span>
        </h2>

        {/* Horizontal Scrollable Flex */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 ">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[80%] md:w-[45%] lg:w-[23%] bg-[#2a4565] rounded-xl p-5 shadow-lg hover:scale-[1.03] transition-all duration-300 flex flex-col min-h-[190px]"
            >
              {/* Profile */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-medium text-xs">{item.username}</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-medium text-sm leading-relaxed flex-grow">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-[#2a4565] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-1">
              Join India’s <span className="text-amber">#GSTProfessionals</span> Network
            </h3>
            <p className="text-gray-medium text-sm max-w-md">
              Connect with GST consultants, CAs, business owners & tax experts.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
            <div className="flex -space-x-3">
              <Image src="/Assets/lott2.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
              <Image src="/Assets/lott5.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
              <Image src="/Assets/maskgroup.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
            </div>

            <p className="text-sm text-white">72K+</p>

            <Button label="Join Now" showArrow className="py-3 px-5 rounded-md" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoveFromIndia;
