"use client";
import React from "react";

const MarketsCard = ({ name, price, change, icon }) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-white  rounded-2xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-navy">{name}</h3>
        {icon && <span className="text-amber text-2xl">{icon}</span>}
      </div>
      <p className="text-2xl font-bold text-gray-dark mb-1">₹{price}</p>
      <p
        className={`text-sm font-medium ${
          isPositive ? "text-teal-green" : "text-red-500"
        }`}
      >
        {isPositive ? "▲" : "▼"} {Math.abs(change)}%
      </p>
    </div>
  );
};

export default MarketsCard;
