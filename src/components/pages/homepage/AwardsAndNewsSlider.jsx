// "use client";
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { CgArrowRight, CgArrowLeft } from "react-icons/cg";
// import Image from "next/image";

// const AwardsAndNewsSlider = () => {
//   const awardsRef = useRef(null);
//   const newsRef = useRef(null);

//   const awards = [
//     {
//       img: "/Assets/IndiaShow.svg",
//       title: "Best GST Compliance Platform",
//       year: "2024",
//     },
//     {
//       img: "/Assets/IndiaShow.svg",
//       title: "Fastest Growing GST Software",
//       year: "2024",
//     },
//     {
//       img: "/Assets/IndiaShow.svg",
//       title: "Excellence in Tax Technology",
//       year: "2023",
//     },
//     {
//       img: "/Assets/IndiaShow.svg",
//       title: "Top Innovator in GST Automation",
//       year: "2023",
//     },
//     {
//       img: "/Assets/IndiaShow.svg",
//       title: "Most Trusted GST Filing Partner",
//       year: "2022",
//     },
//   ];

//   const news = [
//     {
//       img: "/Assets/lott2.webp",
//       title: "Our GST Software Helps 1.2M+ Businesses File Seamlessly",
//       desc: "Automated filing boosted efficiency by 70%",
//     },
//     {
//       img: "/Assets/lott5.webp",
//       title: "Partnership with CA Networks Across India",
//       desc: "Helping professionals simplify GST compliance",
//     },
//     {
//       img: "/Assets/lott2.webp",
//       title: "AI-Based Error Detection Introduced",
//       desc: "Reduces GST return mistakes by 85%",
//     },
//     {
//       img: "/Assets/lott5.webp",
//       title: "Supporting MSMEs With Automated e-Invoicing",
//       desc: "Thousands onboarded in first month",
//     },
//     {
//       img: "/Assets/lott2.webp",
//       title: "New GST Dashboard Launched for Businesses",
//       desc: "Single place to track filings, notices & analytics",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     CgArrowLeft: false,
//     CgArrowRight: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section id="winning" className="bg-[#fff7ec] py-16 overflow-hidden">
//       {/* ----------- Top Section ----------- */}
//       <div className="container mx-auto ">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-navy flex items-center">
//             🏆 Recognized in GST & Tax Innovation
//           </h2>

//           <div className="flex gap-2">
//             <button
//               onClick={() => awardsRef.current.slickPrev()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 cursor-pointer flex items-center justify-center hover:border-amber/50"
//             >
//               <CgArrowLeft size={24} />
//             </button>
//             <button
//               onClick={() => awardsRef.current.slickNext()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 cursor-pointer flex items-center justify-center hover:border-amber/50"
//             >
//               <CgArrowRight size={24} />
//             </button>
//           </div>
//         </div>

//         <Slider ref={awardsRef} {...settings}>
//           {awards.map((award, index) => (
//             <div key={index} className="px-3">
//               <div className=" py-8 flex flex-col items-center justify-center text-center">
//                 <Image
//                   src={award.img}
//                   alt="award"
//                   width={140}
//                   height={140}
//                   className="mb-4"
//                 />
//                 <h3 className="text-navy font-medium text-[1rem] mb-1">
//                   {award.title}
//                 </h3>
//                 <p className="text-gray-dark text-[0.9rem] font-bold">
//                   {award.year}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* ----------- News Section ----------- */}
//       <div className="container mx-auto mt-20">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-navy">
//             We are in the News
//           </h2>

//           <div className="flex gap-2">
//             <button
//               onClick={() => newsRef.current.slickPrev()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 cursor-pointer flex items-center justify-center hover:border-amber/50"
//             >
//               <CgArrowLeft size={24} />
//             </button>
//             <button
//               onClick={() => newsRef.current.slickNext()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 cursor-pointer flex items-center justify-center hover:border-amber/50"
//             >
//               <CgArrowRight size={24} />
//             </button>
//           </div>
//         </div>

//         <Slider ref={newsRef} {...settings}>
//           {news.map((item, index) => (
//             <div key={index} className="px-3 pb-4">
//               <div className=" p-6 flex flex-col gap-3 border border-purple-muted/20 rounded-xl bg-purple-muted/1 transition-all duration-300 h-[150px]">
//                 <Image
//                   src={item.img}
//                   alt="news"
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//                 <h3 className="text-navy font-semibold text-[1rem] leading-tight">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <div>
//         <Image
//           src="/Assets/dhanBorder.png"
//           alt="Super Trader"
//           width={100}
//           height={10}
//           className="w-full  h-auto mt-10 hidden lg:block"
//         />
//       </div>
//     </section>
//   );
// };

// export default AwardsAndNewsSlider;




// "use client";
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { CgArrowRight, CgArrowLeft } from "react-icons/cg";
// import Image from "next/image";

// const AwardsAndNewsSlider = () => {
//   const awardsRef = useRef(null);
//   const newsRef = useRef(null);

//   const awards = [
//     { img: "/Assets/IndiaShow.svg", title: "Best GST Compliance Platform", year: "2024" },
//     { img: "/Assets/IndiaShow.svg", title: "Fastest Growing GST Software", year: "2024" },
//     { img: "/Assets/IndiaShow.svg", title: "Excellence in Tax Technology", year: "2023" },
//     { img: "/Assets/IndiaShow.svg", title: "Top Innovator in GST Automation", year: "2023" },
//     { img: "/Assets/IndiaShow.svg", title: "Most Trusted GST Filing Partner", year: "2022" },
//   ];

//   const news = [
//     { img: "/Assets/lott2.webp", title: "Our GST Software Helps 1.2M+ Businesses File Seamlessly" },
//     { img: "/Assets/lott5.webp", title: "Partnership with CA Networks Across India" },
//     { img: "/Assets/lott2.webp", title: "AI-Based Error Detection Introduced" },
//     { img: "/Assets/lott5.webp", title: "Supporting MSMEs With Automated e-Invoicing" },
//     { img: "/Assets/lott2.webp", title: "New GST Dashboard Launched for Businesses" },
//   ];

//   // Responsive settings for slider
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,   // Large screen default
//     slidesToScroll: 1, // Click arrow = 1 slide scroll
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } }, // md
//       { breakpoint: 640, settings: { slidesToShow: 1 } },  // sm
//     ],
//   };

//   return (
//     <section id="winning" className="bg-[#fff7ec] py-16 overflow-hidden">
//       <div className="container mx-auto">

//         {/* ----------- Awards Section ----------- */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-navy flex items-center">
//             🏆 Recognized in GST & Tax Innovation
//           </h2>
//           <div className="flex gap-2">
//             <button
//               onClick={() => awardsRef.current.slickPrev()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
//             >
//               <CgArrowLeft size={24} />
//             </button>
//             <button
//               onClick={() => awardsRef.current.slickNext()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
//             >
//               <CgArrowRight size={24} />
//             </button>
//           </div>
//         </div>

//         <Slider ref={awardsRef} {...settings}>
//           {awards.map((award, index) => (
//             <div key={index} className="px-3">
//               <div className="py-8 flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-md">
//                 <Image src={award.img} alt="award" width={140} height={140} className="mb-4" />
//                 <h3 className="text-navy font-medium text-[1rem] mb-1">{award.title}</h3>
//                 <p className="text-gray-dark text-[0.9rem] font-bold">{award.year}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* ----------- News Section ----------- */}
//         <div className="mt-20 flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-navy">We are in the News</h2>
//           <div className="flex gap-2">
//             <button
//               onClick={() => newsRef.current.slickPrev()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
//             >
//               <CgArrowLeft size={24} />
//             </button>
//             <button
//               onClick={() => newsRef.current.slickNext()}
//               className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
//             >
//               <CgArrowRight size={24} />
//             </button>
//           </div>
//         </div>

//         <Slider ref={newsRef} {...settings}>
//           {news.map((item, index) => (
//             <div key={index} className="px-3 pb-4">
//               <div className="p-6 flex flex-col gap-3 border border-purple-muted/20 rounded-xl bg-purple-muted/10 transition-all duration-300 h-[180px]">
//                 <Image src={item.img} alt="news" width={40} height={40} className="object-contain" />
//                 <h3 className="text-navy font-semibold text-[1rem] leading-tight">{item.title}</h3>
//               </div>
//             </div>
//           ))}
//         </Slider>

//       </div>
//     </section>
//   );
// };

// export default AwardsAndNewsSlider;




"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";
import Image from "next/image";

const AwardsAndNewsSlider = () => {
  const awardsRef = useRef(null);
  const newsRef = useRef(null);

  const awards = [
    { img: "/Assets/IndiaShow.svg", title: "Best GST Compliance Platform", year: "2024" },
    { img: "/Assets/IndiaShow.svg", title: "Fastest Growing GST Software", year: "2024" },
    { img: "/Assets/IndiaShow.svg", title: "Excellence in Tax Technology", year: "2023" },
    { img: "/Assets/IndiaShow.svg", title: "Top Innovator in GST Automation", year: "2023" },
    { img: "/Assets/IndiaShow.svg", title: "Most Trusted GST Filing Partner", year: "2022" },
  ];

  const news = [
    { img: "/Assets/lott2.webp", title: "Our GST Software Helps 1.2M+ Businesses File Seamlessly" },
    { img: "/Assets/lott5.webp", title: "Partnership with CA Networks Across India" },
    { img: "/Assets/lott2.webp", title: "AI-Based Error Detection Introduced" },
    { img: "/Assets/lott5.webp", title: "Supporting MSMEs With Automated e-Invoicing" },
    { img: "/Assets/lott2.webp", title: "New GST Dashboard Launched for Businesses" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,   // Large screen
    slidesToScroll: 1, // Click/Swipe scroll 1
    swipeToSlide: true, // Enable swipe gesture for mobile
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // md
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },  // sm
    ],
  };

  return (
    <section id="winning" className="bg-[#fff7ec] py-16 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* ----------- Awards Section ----------- */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-navy flex items-center">
            🏆 Recognized in GST & Tax Innovation
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => awardsRef.current.slickPrev()}
              className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
            >
              <CgArrowLeft size={24} />
            </button>
            <button
              onClick={() => awardsRef.current.slickNext()}
              className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
            >
              <CgArrowRight size={24} />
            </button>
          </div>
        </div>

        <Slider ref={awardsRef} {...settings}>
          {awards.map((award, index) => (
            <div key={index} className="px-3">
              <div className="py-8 flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-md min-h-[200px]">
                <Image src={award.img} alt="award" width={140} height={140} className="mb-4" />
                <h3 className="text-navy font-medium text-[1rem] mb-1">{award.title}</h3>
                <p className="text-gray-dark text-[0.9rem] font-bold">{award.year}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* ----------- News Section ----------- */}
        <div className="mt-20 flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-navy">We are in the News</h2>
          <div className="flex gap-2">
            <button
              onClick={() => newsRef.current.slickPrev()}
              className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
            >
              <CgArrowLeft size={24} />
            </button>
            <button
              onClick={() => newsRef.current.slickNext()}
              className="w-10 h-10 rounded-full border border-amber/70 text-amber hover:text-amber/80 flex items-center justify-center"
            >
              <CgArrowRight size={24} />
            </button>
          </div>
        </div>

        <Slider ref={newsRef} {...settings}>
          {news.map((item, index) => (
            <div key={index} className="px-3 pb-4">
              <div className="p-6 flex flex-col gap-3 border border-purple-muted/20 rounded-xl bg-purple-muted/10 transition-all duration-300 min-h-[180px]">
                <Image src={item.img} alt="news" width={40} height={40} className="object-contain" />
                <h3 className="text-navy font-semibold text-[1rem] leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default AwardsAndNewsSlider;
