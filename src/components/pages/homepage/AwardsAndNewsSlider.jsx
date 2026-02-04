"use client";
import React from "react";
import Image from "next/image";

const AwardsAndNewsSlider = () => {
  const awards = [
    {
      img: "/Assets/IndiaShow.svg",
      title: "Best GST Compliance Platform",
      year: "2024",
    },
    {
      img: "/Assets/IndiaShow.svg",
      title: "Fastest Growing GST Software",
      year: "2024",
    },
    {
      img: "/Assets/IndiaShow.svg",
      title: "Excellence in Tax Technology",
      year: "2023",
    },
    {
      img: "/Assets/IndiaShow.svg",
      title: "Top Innovator in GST Automation",
      year: "2023",
    },
    {
      img: "/Assets/IndiaShow.svg",
      title: "Most Trusted GST Filing Partner",
      year: "2022",
    },
  ];

  const news = [
    {
      img: "https://i.pravatar.cc/150?img=17",
      title: "Our GST Software Helps 1.2M+ Businesses File Seamlessly",
      desc: "Automated filing boosted efficiency by 70%",
    },
    {
      img: "https://i.pravatar.cc/150?img=13",
      title: "Partnership with CA Networks Across India",
      desc: "Helping professionals simplify GST compliance",
    },
    {
      img: "https://i.pravatar.cc/150?img=18",
      title: "AI-Based Error Detection Introduced",
      desc: "Reduces GST return mistakes by 85%",
    },
    {
      img: "https://i.pravatar.cc/150?img=8",
      title: "Supporting MSMEs With Automated e-Invoicing",
      desc: "Thousands onboarded in first month",
    },
    {
      img: "https://i.pravatar.cc/150?img=26",
      title: "New GST Dashboard Launched for Businesses",
      desc: "Single place to track filings, notices & analytics",
    },
  ];

  return (
    <section id="winning" className="bg-[#fff7ec] py-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-amber-500 flex items-center">
            🏆 Recognized in GST & Tax Innovation
          </h2>
        </div>

        {/* Slider for Awards */}
        <div className="overflow-x-auto scrollbar-hide cursor-grab scroll-smooth pb-4">
          <div className="flex gap-6 min-w-300 scroll-snap-x mandatory">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[24%] sm:w-[30%] md:w-[35%] lg:w-[23%] bg-white p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-all duration-300 min-h-[250px] flex flex-col items-center justify-center text-center scroll-snap-align-start"
              >
                <Image
                  src={award.img}
                  alt="award"
                  width={140}
                  height={140}
                  className="mb-4"
                />
                <h3 className="text-navy font-medium text-[1rem] px-10 mb-1">
                  {award.title}
                </h3>
                <p className="text-gray-dark px-20 text-[0.9rem] font-bold">
                  {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-amber-500">We are in the News</h2>
        </div>
        <div className="overflow-x-auto scrollbar-hide cursor-grab scroll-smooth pb-4">
          <div className="flex gap-6 min-w-300 scroll-snap-x mandatory">
            {news.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[24%] sm:w-[20%] md:w-[30%] lg:w-[23%] bg-[#2a4565] p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-all duration-300 min-h-[180px] flex flex-col items-center scroll-snap-align-start`}
              >
                <Image
                  src={item.img}
                  alt="news"
                  width={40}
                  height={40}
                  className="object-contain mb-4"
                />
                <h3 className="text-white font-semibold text-[1rem] leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-medium text-[0.85rem]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/Assets/dhanBorder.png"
          alt="Super Trader"
          width={100}
          height={10}
          className="w-full h-auto mt-10 hidden lg:block"
        />
      </div>
    </section>
  );
};

export default AwardsAndNewsSlider;
