// "use client";
// import React from "react";
// import Image from "next/image";
// import Button from "@/components/atoms/Button";
// import Link from "next/link";

// const testimonials = [
//   {
//     name: "Amit Verma",
//     username: "@amit_gstfilings",
//     text: "Managing multiple GST clients used to be very time-consuming. After switching to this GST panel, return filing, ITC reconciliation, and compliance tracking have become extremely smooth. The dashboard gives complete control and saves hours of manual work every month",
//     img: "/Assets/lott5.webp",
//   },
//   {
//     name: "Priya Sinha",
//     username: "@priyas_taxpro",
//     text: "Earlier, GST filings were confusing and stressful for me. This software made everything simple—from GSTR-1 to GSTR-3B filing. The reminders and alerts ensure I never miss a due date.",
//     img: "/Assets/lott2.webp",
//   },
//   {
//     name: "Rohan Gupta",
//     username: "@rohanbiz_owner",
//     text: "This panel has reduced manual GST work by more than 50%. Automated reminders, accurate calculations, and a clean dashboard make it one of the best GST software I’ve used.",
//     img: "/Assets/man3.jpg",
//   },
//   {
//     name: "Sumit Sharma",
//     username: "@sumit_compliance",
//     text: "The auto ITC calculation and validation features are a big plus. Errors are detected before filing, which has reduced rejections and notices significantly. It’s a very reliable GST compliance tool",
//     img: "/Assets/manimage.jpg",
//   },
//   {
//     name: "Neha Jain",
//     username: "@nehacorporate",
//     text: "Real-time GST portal sync and detailed reports help us track liabilities and payments accurately. The software brings transparency and confidence to our GST operations.",
//     img: "/Assets/girl1.jpg",
//   },
//   {
//     name: "Vikas Patel",
//     username: "@vikas_taxpayer",
//     text: "E-invoice and e-way bill generation from a single platform has simplified our daily operations. The panel is fast, user-friendly, and perfectly suited for growing businesses.",
//     img: "/Assets/man2.jpg",
//   },
// ];

// const LoveFromIndia = () => {
//   return (
//     <section className="w-full bg-navy py-14 text-white px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-center text-[1.6rem] md:text-[1.9rem] font-semibold mb-10 leading-snug">
//           ❤️ Trusted by Millions of <span className="text-amber">GST Users</span>
//         </h2>

//         {/* Horizontal Scrollable Flex */}
//         <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 ">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-[90%] sm:w-[80%] md:w-[45%] lg:w-[23%] bg-[#2a4565] rounded-xl p-5 shadow-lg hover:scale-[1.03] transition-all duration-300 flex flex-col min-h-[190px]"
//             >
//               {/* Profile */}
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-12 h-12 rounded-full overflow-hidden">
//                   <Image
//                     src={item.img}
//                     alt={item.name}
//                     width={48}
//                     height={48}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">{item.name}</h3>
//                   <p className="text-gray-medium text-xs">{item.username}</p>
//                 </div>
//               </div>

//               {/* Text */}
//               <p className="text-gray-medium text-sm leading-relaxed flex-grow">
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-14 bg-[#2a4565] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="text-center md:text-left">
//             <h3 className="text-lg font-semibold mb-1">
//               Join India’s <span className="text-amber">#Bill Banaofessionals</span> Network
//             </h3>
//             <p className="text-gray-medium text-sm max-w-md">
//               Connect with GST consultants, CAs, business owners & tax experts.
//             </p>
//           </div>

//           <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
//             <div className="flex -space-x-3">
//               <Image src="/Assets/lott2.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
//               <Image src="/Assets/lott5.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
//               <Image src="/Assets/maskgroup.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
//             </div>

//             <p className="text-sm text-white">72K+</p>

//            <Link href="https://biil-banao-user.vercel.app/auth/signin">
//             <Button label="Join Now" showArrow className="py-3 px-5 rounded-md" />
//            </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default LoveFromIndia;



"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function LoveFromIndia() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Amit Verma",
      username: "@amit_gstfilings",
      text: "Managing multiple GST clients used to be very time-consuming. After switching to this GST panel, filing & tracking became smooth.",
      img: "/Assets/lott5.webp",
    },
    {
      name: "Priya Sinha",
      username: "@priyas_taxpro",
      text: "Earlier GST filings were stressful. This software simplified everything with reminders and alerts.",
      img: "/Assets/lott2.webp",
    },
    {
      name: "Rohan Gupta",
      username: "@rohanbiz_owner",
      text: "Reduced manual GST work by 50%. Clean dashboard and automation is amazing.",
      img: "/Assets/man3.jpg",
    },
    {
      name: "Sumit Sharma",
      username: "@sumit_compliance",
      text: "Auto ITC validation detects errors before filing. Very reliable compliance tool.",
      img: "/Assets/manimage.jpg",
    },
    {
      name: "Neha Jain",
      username: "@nehacorporate",
      text: "Real-time sync and detailed reports give full transparency in GST tracking.",
      img: "/Assets/girl1.jpg",
    },
    {
      name: "Vikas Patel",
      username: "@vikas_taxpayer",
      text: "E-invoice & e-way bill from one platform simplified our operations.",
      img: "/Assets/man2.jpg",
    },
  ];

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.offsetWidth * 0.8;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-navy py-14 text-white px-4">
      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <h2 className="text-center text-[1.6rem] md:text-[1.9rem] font-semibold mb-10">
          ❤️ Trusted by Millions of <span className="text-amber">GST Users</span>
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className=" md:flex absolute left-[-12px] top-1/3 md:top-3/8 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur p-3 rounded-full shadow"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className=" md:flex absolute right-[-12px] top-1/3 md:top-3/8 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur p-3 rounded-full shadow"
        >
          <FaChevronRight size={18} />
        </button>

        {/* Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[23%] bg-[#2a4565] rounded-xl p-5 shadow-lg hover:scale-[1.03] transition flex flex-col min-h-[190px]"
            >
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

              <p className="text-gray-medium text-sm flex-grow">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#2a4565] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-1">
              Join India’s <span className="text-amber">#Bill Banaofessionals</span>
            </h3>
            <p className="text-gray-medium text-sm max-w-md">
              Connect with GST consultants, CAs, business owners & experts.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
            <div className="flex -space-x-3">
              <Image src="/Assets/lott2.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
              <Image src="/Assets/lott5.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
              <Image src="/Assets/maskgroup.webp" width={45} height={45} className="rounded-full border-2 border-white" alt="user" />
            </div>

            <p className="text-sm text-white">72K+</p>

            <Link href="https://biil-banao-user.vercel.app/auth/signin">
              <Button label="Join Now" showArrow className="py-3 px-5 rounded-md" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
