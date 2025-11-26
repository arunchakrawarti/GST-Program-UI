"use client";
import React from "react";
import Image from "next/image";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-2xl  hover:shadow-md transition-all text-center p-6">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
        <Image src={image} alt={name} width={96} height={96} className="object-cover transition-all hover:scale-105 duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-navy">{name}</h3>
      <p className="text-sm text-gray-medium">{role}</p>
    </div>
  );
};

export default TeamCard;
