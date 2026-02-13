"use client";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="askedquestion" className="pb-24 md:pb-28 lg:pb-44 container">
      <p className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.7rem] font-medium text-black text-center mx-auto w-full leading-tight mt-10">
        Frequently Asked Questions
      </p>
      <p className="text-center text-gray-medium text-[1rem] mt-2">
        Have questions about Bill Banao GST? We’ve got all your answers here!
      </p>
      <div className="w-full md:w-8/12 lg:w-10/12 mx-auto mt-10 md:mt-11 lg:mt-12">
        {faqs.map(({ question, answer }, index) => (
          <div key={index} className="border-b border-gray-medium/30 p-4 h-fit">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-start w-full text-left focus:outline-none"
            >
              <p className="text-[1rem] font-normal text-gray-dark flex items-start gap-1">
                {question}
              </p>
              <span className="text-2xl text-gray-medium font-semibold transform transition-transform duration-300">
                {openIndex === index ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-medium">{answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

const faqs = [
  {
    question: "What is Bill Banao?",
    answer:
      "Bill Banao is an advanced GST billing and return-filing platform designed for businesses, accountants, and tax professionals. It simplifies GST filing, e-invoicing, e-way bills, and compliance with powerful automation tools.",
  },
  {
    question: "How do I create an account on Bill Banao?",
    answer:
      "You can create an account in minutes using your mobile number, email, PAN, and business GSTIN. Once verified, you can instantly start filing GST returns and generating invoices.",
  },
  {
    question: "Does Bill Banao support automated GST filing?",
    answer:
      "Yes! Bill Banao offers 100% automated GST filing with auto-import of GSTR-2A/2B, reconciliation, error detection, and one-click filing. It saves hours of manual work.",
  },
  {
    question: "Can Bill Banao generate e-Invoicing and e-Way Bills?",
    answer:
      "Absolutely. Bill Banao directly integrates with the Government IRP portal to generate e-Invoices and e-Way Bills instantly, without switching between multiple systems.",
  },
  {
    question: "Is my GST data safe on Bill Banao?",
    answer:
      "Yes, Bill Banao uses bank-grade encryption, secure cloud servers, and multi-layer authentication to ensure your financial and GST data always stays protected.",
  },
  {
    question: "Can I use Bill Banao on mobile and desktop?",
    answer:
      "Yes! Bill Banao works on web, desktop, and mobile. You can manage invoices, track returns, and monitor compliance anytime, anywhere.",
  },
  {
    question: "Does Bill Banao provide customer support?",
    answer:
      "Yes, Bill Banao provides priority support via live chat, WhatsApp, email, and phone. CA support is also available for advanced GST queries.",
  },
];

