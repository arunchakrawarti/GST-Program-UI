"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        background: "linear-gradient(270deg, #004857 5%, #040B1C 50%)",
      }}
      className="min-h-screen"
    >
      <main className="container py-10 md:py-16 lg:py-20 ">
        <header className="mb-6 mt-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-medium">
            Dhan Trade — Smart & Secure Trading Platform
          </p>
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
                    <h3 className="text-lg font-medium mb-2 text-purple-muted">
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

export default PrivacyPolicy;

const sections = [
  {
    id: "intro",
    title: "Privacy Policy — Dhan Trade",
    content: [
      `*Last Updated:* October 31, 2025`,
      `Dhan Trade (“we”, “our”, “us”, “Platform”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform or related services.`,
    ],
  },
  {
    id: "info-collect",
    title: "1. Information We Collect",
    content: ["We may collect the following types of information:"],
    children: [
      {
        subtitle: "A. Personal Information",
        bullets: [
          "Your name, email address, phone number, and billing information.",
        ],
      },
      {
        subtitle: "B. Account Information",
        bullets: [
          "Brokerage account details (connected via secure APIs only upon your authorization).",
          "Login credentials or API keys that you voluntarily provide for connecting trading services.",
        ],
      },
      {
        subtitle: "C. Technical Information",
        bullets: [
          "Device information, IP address, browser details, and usage data.",
          "Cookies and analytics data to improve user experience.",
        ],
      },
    ],
  },
  {
    id: "how-use",
    title: "2. How We Use Your Information",
    content: [
      "Your data helps us deliver a smooth and secure trading experience.",
    ],
    children: [
      {
        bullets: [
          "To operate and maintain the Dhan Trade platform.",
          "To process transactions and trading instructions securely.",
          "To provide customer support and resolve queries.",
          "To analyze user behavior for improving our products and services.",
          "To comply with legal, financial, or regulatory obligations.",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "3. Information Sharing",
    content: [],
    children: [
      {
        bullets: [
          "We do not sell, rent, or trade your personal information to any third parties.",
          "We may share limited information with trusted partners (e.g., payment gateways, cloud servers) who follow strict privacy compliance.",
          "Information may be disclosed if required by law, court order, or regulatory authorities.",
        ],
      },
    ],
  },
  {
    id: "protect",
    title: "4. Data Security",
    content: [
      "We implement industry-standard encryption and secure storage technologies to protect your information.",
      "While we strive for complete security, no method of internet transmission is entirely risk-free, and we cannot guarantee absolute protection against breaches.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies and Tracking Technologies",
    content: [
      "Dhan Trade uses cookies and analytics tools to enhance functionality and user experience.",
      "You can manage or disable cookies in your browser settings, though some features may not function properly without them.",
    ],
  },
  {
    id: "rights",
    title: "6. Your Data Rights",
    content: ["As a user, you have the right to:"],
    children: [
      {
        bullets: [
          "Access, update, or request deletion of your personal information.",
          "Withdraw consent for data collection or marketing communication.",
          "Contact our support team to exercise any of these rights.",
        ],
      },
    ],
  },
  {
    id: "retention",
    title: "7. Data Retention Policy",
    content: [
      "We retain your data only as long as necessary to provide our services, fulfill legal obligations, or resolve disputes.",
      "Once the retention period ends, data is securely deleted or anonymized.",
    ],
  },
  {
    id: "children",
    title: "8. Children’s Privacy",
    content: [
      "Dhan Trade is designed for individuals 18 years and older.",
      "We do not knowingly collect personal data from minors. If you believe a minor has provided us information, please contact us immediately for deletion.",
    ],
  },
  {
    id: "updates",
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements.",
      "We encourage you to review this page periodically to stay informed about how we protect your information.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      "If you have questions, concerns, or complaints regarding this Privacy Policy, feel free to reach us at:",
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
