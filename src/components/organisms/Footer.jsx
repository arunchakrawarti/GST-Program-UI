"use client";
import Image from "next/image";
import { FiYoutube } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#070C1A]">
      <div className="md:pb-20 pb-12 container relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pt-16">

          <div className="text-white col-span-2">
            <Link href="/">
              <Image
                width={170}
                height={0}
                src="/Assets/billbanaologo.png"
                alt="Bill Banao Logo"
                className="-mt-3 -ml-2"
              />
            </Link>

            <p className="mt-6 text-[1rem] leading-relaxed text-gray-medium">
              Bill Banao is a complete GST platform to manage <strong>E-Way Bills, E-Invoices,</strong> purchase & sales invoices, order tracking, receipts, and business accounting — all in one place.
            </p>

            <button className="bg-navy py-2.5 px-4 rounded-lg my-6 text-white text-[0.9rem]">
              Simplify GST. Save Time.
            </button>

            <p className="font-semibold text-white text-[1rem] pb-2">Email Us</p>
            <a
              href="mailto:support@Bill Banao.co"
              className="hover:text-amber transition-all duration-300 text-sm text-gray-medium"
            >
              billbanao3@gmail.com
            </a>
          </div>
          
          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-white text-[1rem]">Our Services</li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                E-Way Bill
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                E-Invoice
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                Issue Purchase/Sales Invoice
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                14 Days Free Trial
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                Order Tracking
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                Editing Self-Employment Receipts
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                Current Account Tracking
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                Collection & Payment Tracking
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                Cash & Bank Transaction Tracking
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                Inventory Tracking
              </li>
            </ul>
          </div>

          {/* --- About Company --- */}
          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-white text-[1rem]">About Bill Banao</li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                <Link href="/gst-feature">Features</Link>
              </li>
              {/* <li className="text-gray-medium hover:text-amber transition-all duration-300">
                <Link href="/markets">What You Get</Link>
              </li> */}
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                <Link href="/transparency-policy">Transparency Policy</Link>
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="text-gray-medium hover:text-amber transition-all duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* --- Follow Us --- */}
          <div className="flex lg:justify-end">
            <ul className="space-y-3">
              <li className="font-semibold text-white text-[1rem]">Follow Us</li>
              <li>
                <a
                  href="https://www.youtube.com/@Bill Banao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[0.95rem] flex items-center"
                >
                  <FiYoutube className="text-[1.3rem]" />
                  <span className="ml-2 text-gray-medium hover:text-amber transition-all duration-300">
                    YouTube
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/Bill Banao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[0.95rem] flex items-center"
                >
                  <LuInstagram className="text-[1.3rem]" />
                  <span className="ml-2 text-gray-medium hover:text-amber transition-all duration-300">
                    Instagram
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Bill Banao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[0.95rem] flex items-center"
                >
                  <PiTelegramLogo className="text-[1.2rem]" />
                  <span className="ml-2 text-gray-medium hover:text-amber transition-all duration-300">
                    Telegram
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917000020000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[0.95rem] flex items-center"
                >
                  <BsWhatsapp className="text-[1.2rem]" />
                  <span className="ml-2 text-gray-medium hover:text-amber transition-all duration-300">
                    WhatsApp
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Regulatory Section --- */}
      <div className=" py-8 px-5 md:px-10 lg:px-28 border-t border-gray-dark">
        <p className="text-gray-medium text-sm leading-relaxed max-w-5xl mx-auto text-center">
          Bill Banao is a product of XYZ Tech Services Pvt Ltd. GST Registered — GSTIN: 27ABCDE1234F1Z5. CIN: U12345MH2020PTC123456. Registered Office: B/404, Marathon Innova, Ganpatrao Kadam Marg, Lower Parel, Mumbai 400013.
        </p>
      </div>

      {/* --- Bottom Copyright --- */}
      <p className="md:p-6 p-4 text-gray-medium text-center text-[0.85rem] border-t border-gray-dark tracking-wide">
        © {new Date().getFullYear()} Bill Banao. All Rights Reserved | GST Registered | Simplifying Business Compliance
      </p>
    </footer>
  );
};

export default Footer;
