"use client";
import React from "react";

const TermsConditions = () => {
  return (
    <div
      style={{
        background: "linear-gradient(270deg, #004857 5%, #040B1C 50%)",
      }}
      className="min-h-screen"
    >
      <main className="container py-10 md:py-16 lg:py-20">
        <header className="mb-6 mt-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-white">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-medium">Dhan Trade</p>
        </header>

        {sections.map((section) => (
          <article id={section.id} key={section.id} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-white">
              {section.title}
            </h2>

            {(section.content || []).map((c, idx) => (
              <p key={idx} className="mb-3 text-gray-medium leading-relaxed">
                {c}
              </p>
            ))}

            {section.children &&
              section.children.map((child, i) => (
                <div key={i} className="pl-4 mb-3">
                  {child.subtitle && (
                    <h3 className="text-lg font-medium mb-2 text-gray-medium">
                      {child.subtitle}
                    </h3>
                  )}
                  {child.bullets && (
                    <ul className="list-disc list-inside space-y-2 text-gray-medium">
                      {child.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </article>
        ))}
      </main>
    </div>
  );
};

export default TermsConditions;

const sections = [
  {
    id: "intro",
    title: "Terms & Conditions — Dhan Trade",
    content: [
      `*Last Updated:* October 31, 2025`,
      `By using Dhan Trade (“Platform”, “we”, “our”), you agree to comply with these Terms and Conditions. Please read them carefully before using our services.`,
    ],
  },
  {
    id: "services",
    title: "1. Description of Services",
    children: [
      {
        bullets: [
          "Dhan Trade provides a smart trading and investment platform that allows users to execute, analyze, and automate trading strategies.",
          "We offer tools, charts, and analytics for trading but do not provide investment advice or portfolio management services.",
          "Users connect their brokerage accounts through authorized APIs to access Dhan Trade features.",
        ],
      },
    ],
  },
  {
    id: "risk",
    title: "2. Risk Disclaimer",
    children: [
      {
        bullets: [
          "Trading and investing in the stock market involves substantial risk of loss.",
          "Past performance is not indicative of future results.",
          "Dhan Trade does not guarantee profits and shall not be responsible for any trading losses incurred by users.",
        ],
      },
    ],
  },
  {
    id: "responsibilities",
    title: "3. User Responsibilities",
    children: [
      {
        bullets: [
          "Users must provide accurate, up-to-date, and valid account information.",
          "You are solely responsible for maintaining the confidentiality of your login credentials.",
          "Dhan Trade must not be used for illegal, fraudulent, or unauthorized activities.",
        ],
      },
    ],
  },
  {
    id: "fees",
    title: "4. Fees and Payments",
    children: [
      {
        bullets: [
          "Certain features of Dhan Trade may require subscription or service fees.",
          "Users are responsible for paying all applicable charges on time.",
          "All payments are subject to our Refund and Cancellation Policy.",
        ],
      },
    ],
  },
  {
    id: "availability",
    title: "5. Platform Availability",
    children: [
      {
        bullets: [
          "We aim to ensure uninterrupted access to Dhan Trade but do not guarantee constant availability.",
          "Temporary downtime may occur due to updates, maintenance, or unforeseen technical issues.",
          "We reserve the right to modify, enhance, or suspend platform features at any time without notice.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    children: [
      {
        bullets: [
          "Dhan Trade and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.",
          "All content and services are provided on an “as is” and “as available” basis.",
        ],
      },
    ],
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    children: [
      {
        bullets: [
          "All trademarks, logos, software, and content related to Dhan Trade are owned or licensed by us.",
          "Unauthorized reproduction or distribution of our intellectual property is strictly prohibited.",
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy Policy",
    children: [
      {
        bullets: [
          "Your privacy is important to us. Please refer to our Privacy Policy for detailed information on data handling and security.",
          "By using Dhan Trade, you consent to the collection and use of your information as outlined in our policy.",
        ],
      },
    ],
  },
  {
    id: "amendments",
    title: "9. Amendments",
    children: [
      {
        bullets: [
          "We may update or modify these Terms at any time without prior notice.",
          "Continued use of Dhan Trade after any changes indicates your acceptance of the revised Terms.",
        ],
      },
    ],
  },
  {
    id: "law",
    title: "10. Governing Law & Jurisdiction",
    children: [
      {
        bullets: [
          "These Terms shall be governed by and construed in accordance with the laws of India.",
          "All disputes shall be subject to the exclusive jurisdiction of the courts in Faridabad, Haryana, India.",
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: [
      "If you have any questions or concerns about these Terms, please contact our support team:",
      <>
        📧 Email:{" "}
        <a
          href="mailto:support@dhantrade.com"
          className="text-blue-300 underline"
        >
          support@dhantrade.com
        </a>
      </>,
      <>
        📞 Mobile:{" "}
        <a href="tel:+919876543210" className="text-blue-300 underline">
          +91 98765 43210
        </a>
      </>,
      "🏢 Address: Faridabad, Haryana, India",
    ],
  },
];
