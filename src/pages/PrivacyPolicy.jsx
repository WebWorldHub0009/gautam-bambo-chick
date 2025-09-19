// src/pages/PrivacyPolicy.jsx
import React from "react";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-[#F9F9F9] py-16 px-6 font-[Raleway]">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-200">
        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          style={{ color: colors.deepBlue }}
        >
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            At <span className="font-semibold">Gautam Bamboo Chick Maker</span>, we respect your privacy
            and are committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: colors.leafGreen }}>
            1. Information We Collect
          </h2>
          <p>
            We may collect personal details such as your name, phone number, email address,
            and location when you contact us or use our services. Additionally, non-personal
            data like browser type, device information, and website usage may be collected.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: colors.leafGreen }}>
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our products and services.</li>
            <li>To respond to your inquiries and customer support requests.</li>
            <li>To send updates, offers, or promotional materials (only if you consent).</li>
            <li>To ensure website security and functionality.</li>
          </ul>

          <h2 className="text-xl font-semibold" style={{ color: colors.leafGreen }}>
            3. Data Sharing
          </h2>
          <p>
            We do not sell or rent your personal data to third parties. We may share information
            only with trusted service providers who assist in our operations, subject to strict confidentiality.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: colors.leafGreen }}>
            4. Data Security
          </h2>
          <p>
            We take appropriate technical and organizational measures to protect your data
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: colors.leafGreen }}>
            5. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or request deletion of your personal information.
            You may also opt out of receiving promotional communications at any time.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: colors.leafGreen }}>
            6. Updates to this Policy
          </h2>
          <p>
            We may update this Privacy Policy occasionally to reflect changes in our practices.
            Any updates will be posted on this page with the revised date.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: colors.leafGreen }}>
            7. Contact Us
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us at:
          </p>
          <p className="font-semibold">
            📧 Email: gautambamboochickmaker@gmail.com <br />
            📞 Phone: +91 93153 93747 / +91 78387 88389
          </p>
        </div>
      </div>
    </section>
  );
}
