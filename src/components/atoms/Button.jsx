"use client";
import { CgArrowRight } from "react-icons/cg";
import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  className = "py-2.5 lg:py-2  px-5 md:px-4",
  icon: Icon, // optional left icon
  showArrow = false, // new prop for right arrow
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-amber font-medium hover:bg-amber/90 text-navy hover:text-navy  rounded-md cursor-pointer tracking-wide text-[0.95rem] flex items-center justify-center capitalize gap-1.5 ${className}`}
    >
      {/* ---- Left Icon (if provided) ---- */}
      {Icon && (
        <span className="flex items-center">
          <Icon size={20} />
        </span>
      )}

      {/* ---- Button Label ---- */}
      <span>{label}</span>

      {/* ---- Right Arrow (Dynamic) ---- */}
      {showArrow && (
        <span className="flex items-center">
          <CgArrowRight size={24} />
        </span>
      )}
    </button>
  );
};

export default Button;
