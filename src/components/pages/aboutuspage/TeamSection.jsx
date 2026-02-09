"use client";
import React from "react";
import TeamCard from "@/components/molecules/TeamCard";

const teamMembersGST = [
  {
    image: "/Assets/lott5.webp",
    name: "Rahul Mehta",
    role: "Founder & CEO",
  },
  {
    image: "/Assets/lott2.webp",
    name: "Neha Sharma",
    role: "Head of GST Compliance",
  },
  {
    image: "/Assets/man3.jpg",
    name: "Arjun Patel",
    role: "Lead GST Developer",
  },
  {
    image: "/Assets/girl1.jpg",
    name: "Priya Nair",
    role: "Head of Client Success",
  },
];

const TeamSectionGST = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f4f4f4]">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {teamMembersGST.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSectionGST;
