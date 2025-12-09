// "use client";
// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Button from "@/components/atoms/Button";

// const testimonials = [
//   {
//     name: "Amit Verma",
//     username: "@amit_gstfilings",
//     text: "GST return filing has become super smooth with this platform. Fast, accurate and completely hassle-free. Highly recommended for businesses!",
//     img: "/Assets/lott2.webp",
//   },
//   {
//     name: "Priya Sinha",
//     username: "@priyas_taxpro",
//     text: "Best GST portal experience so far. Auto-reconciliation and error-free calculations save me hours every month. Perfect for CA & Tax Professionals.",
//     img: "/Assets/lott2.webp",
//   },
//   {
//     name: "Rohan Gupta",
//     username: "@rohanbiz_owner",
//     text: "Finally a platform that makes GST compliance simple. No glitches, smooth workflow and super-fast filing. Great job team!",
//     img: "/Assets/lott2.webp",
//   },
//   {
//     name: "Sumit Sharma",
//     username: "@sumit_compliance",
//     text: "Amazing GST platform! Clean UI, easy navigation and total transparency. Filing GSTR-1 and GSTR-3B has never been this easy.",
//     img: "/Assets/lott2.webp",
//   },
//   {
//     name: "Neha Jain",
//     username: "@nehacorporate",
//     text: "The automated GST reports and data security features are top-notch. Helps our company stay compliant without confusion.",
//     img: "/Assets/lott2.webp",
//   },
//   {
//     name: "Vikas Patel",
//     username: "@vikas_taxpayer",
//     text: "A true game changer! Super quick GST filing, accurate tax breakup and instant summaries. Makes compliance stress-free.",
//     img: "/Assets/lott2.webp",
//   },
//   {
//     name: "Karan Mehta",
//     username: "@karan_mehta_ca",
//     text: "As a CA handling multiple clients, this platform is a blessing. Zero errors, automated validations and seamless return flow.",
//     img: "/Assets/lott2.webp",
//   },
// ];

// const LoveFromIndia = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 4, 
//     slidesToScroll: 1,
//     arrows: false,
//     appendDots: (dots) => (
//       <div>
//         <ul className="flex justify-center mt-10 gap-2"> {dots} </ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="w-3 h-3 bg-amber rounded-full opacity-60 hover:opacity-100 transition-all"></div>
//     ),
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 3 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="w-full bg-navy py-16 text-white">
//       <div className="container mx-auto ">
//         {/* ---- Heading ---- */}
//         <h2 className="text-center text-[1.8rem] font-semibold mb-12">
//           <span className="mr-2">❤️</span>Trusted by Millions of{" "}
//           <span className="text-amber">GST Users</span>
//         </h2>

//         {/* ---- Slider ---- */}
//         <div className="custom-dots">
//           <Slider {...settings}>
//             {testimonials.map((item, index) => (
//               <div key={index} className="px-3">
//                 <div className="bg-[#2a4565] rounded-2xl p-6  flex flex-col justify-between shadow-lg hover:scale-[1.03] transition-all duration-300 w-[260px] h-[280px] mx-auto">
//                   {/* Profile */}
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-dark">
//                       <Image
//                         src={item.img}
//                         alt={item.name}
//                         width={48}
//                         height={48}
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-medium">{item.name}</h3>
//                       <p className="text-gray-medium text-sm">
//                         {item.username}
//                       </p>
//                     </div>
//                   </div>
//                   {/* Text */}
//                   <p className="text-gray-medium text-[0.95rem] leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* ---- Bottom Community Join Section ---- */}
//         <div className="mt-20 lg:mt-24 bg-[#2a4565] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">
//           <div>
//             <h3 className="text-lg font-semibold mb-1">
//               Join India’s <span className="text-amber">#GSTProfessionals</span>{" "}
//               Network
//             </h3>
//             <p className="text-[var(--color-gray-medium)] text-sm max-w-md">
//               Connect with GST consultants, CA firms, business owners & tax
//               experts. Learn GST best practices, discuss compliance updates and
//               collaborate with other professionals.
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="flex -space-x-3">
//               <Image
//                 src="/Assets/lott2.webp"
//                 alt="user"
//                 width={40}
//                 height={40}
//                 className="rounded-full w-12 h-12 border-2 border-[var(--color-white)]"
//               />
//               <Image
//                 src="/Assets/lott5.webp"
//                 alt="user"
//                 width={40}
//                 height={40}
//                 className="rounded-full w-12 h-12 border-2 border-[var(--color-white)]"
//               />
//               <Image
//                 src="/Assets/maskgroup.webp"
//                 alt="user"
//                 width={40}
//                 height={40}
//                 className="rounded-full w-12 h-12 border-2 border-[var(--color-white)]"
//               />
//             </div>
//             <p className="text-sm text-white">72K+</p>

//             <Button
//               label="Join Now"
//               showArrow
//               className=" py-3 px-4 md:px-6 rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoveFromIndia;



"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/atoms/Button";

const testimonials = [
  {
    name: "Amit Verma",
    username: "@amit_gstfilings",
    text: "GST return filing has become super smooth with this platform. Fast, accurate and completely hassle-free.",
    img: "/Assets/lott2.webp",
  },
  {
    name: "Priya Sinha",
    username: "@priyas_taxpro",
    text: "Best GST portal experience so far. Auto-reconciliation and error-free calculations save me hours every month.",
    img: "/Assets/lott2.webp",
  },
  {
    name: "Rohan Gupta",
    username: "@rohanbiz_owner",
    text: "Finally a platform that makes GST compliance simple. No glitches, smooth workflow and super-fast filing.",
    img: "/Assets/lott2.webp",
  },
  {
    name: "Sumit Sharma",
    username: "@sumit_compliance",
    text: "Amazing GST platform! Clean UI, easy navigation and total transparency.",
    img: "/Assets/lott2.webp",
  },
  {
    name: "Neha Jain",
    username: "@nehacorporate",
    text: "The automated GST reports and data security features are top-notch.",
    img: "/Assets/lott2.webp",
  },
  {
    name: "Vikas Patel",
    username: "@vikas_taxpayer",
    text: "A true game changer! Super quick GST filing, accurate tax breakup and instant summaries.",
    img: "/Assets/lott2.webp",
  },
];

const LoveFromIndia = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],

    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-6 gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-amber rounded-full opacity-60 hover:opacity-100 transition-all"></div>
    ),
  };

  return (
    <section className="w-full bg-navy py-14 text-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-[1.6rem] md:text-[1.8rem] font-semibold mb-12 leading-tight">
          <span className="mr-2">❤️</span>Trusted by Millions of{" "}
          <span className="text-amber">GST Users</span>
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-2 sm:px-3">
              <div className="bg-[#2a4565] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:scale-[1.03] transition-all duration-300 w-full h-auto min-h-[250px]">
                
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
                    <p className="text-gray-medium text-sm">{item.username}</p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-medium text-[0.9rem] leading-relaxed">
                  {item.text}
                </p>

              </div>
            </div>
          ))}
        </Slider>

        {/* Bottom Community Section */}
        <div className="mt-16 lg:mt-20 bg-[#2a4565] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-1">
              Join India’s <span className="text-amber">#GSTProfessionals</span> Network
            </h3>
            <p className="text-gray-medium text-sm">
              Connect with GST consultants, CA firms, business owners & tax experts.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <Image src="/Assets/lott2.webp" alt="user" width={40} height={40} className="rounded-full border-2 border-white" />
              <Image src="/Assets/lott5.webp" alt="user" width={40} height={40} className="rounded-full border-2 border-white" />
              <Image src="/Assets/maskgroup.webp" alt="user" width={40} height={40} className="rounded-full border-2 border-white" />
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
