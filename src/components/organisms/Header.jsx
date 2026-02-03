"use client";
import Button from "../atoms/Button";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Text from "../atoms/Text";
import { navItems } from "../../data/headerData.js";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //  Toggle only on mobile
  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        isScrolled ? "bg-[#0A233F]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between h-15 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-5 md:space-x-4 lg:space-x-8">
            <Link href="/">
              <Image width={120} height={0} src="/Assets/billbanaologo.png" alt="logo" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-5 md:space-x-4 lg:space-x-9 items-center capitalize">
              {navItems.map(({ lebal, path }, index) => (
                <div key={index} className="relative group">
                  <Text
                    content={lebal}
                    href={path}
                    className="text-white text-[0.91rem] font-normal tracking-wide hover:text-white transition-all duration-400"
                  />
                </div>
              ))}
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin">
              <Button
                label="Login"
                className="bg-transparent hover:bg-amber border border-white hover:border-amber text-white hover:text-navy py-2.5 lg:py-2  px-5 md:px-4"
              />
            </Link>

            <Link href="/open-account">
              <Button label="Signup" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          style={{
            background: "linear-gradient(270deg, #004857 5%, #040B1C 50%)",
          }}
          className="md:hidden text-white px-4 pb-6 space-y-4 transition-all duration-500 pt-4"
        >
          {navItems.map(({ lebal, path }, index) => (
            <div
              key={index}
              className="relative  border-b border-gray-medium/50 pb-2"
            >
              <Text
                content={lebal}
                href={path}
                className="text-white-medium text-[0.91rem] font-normal tracking-wide hover:text-white transition-all duration-400"
              />
            </div>
          ))}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/signin">
              <Button
                label="Login"
                className="bg-transparent hover:bg-amber border border-white hover:border-amber text-white hover:text-navy py-2.5 lg:py-2  px-5 md:px-4"
              />
            </Link>
            <Link href="/open-account">
              <Button label="Open Account" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
