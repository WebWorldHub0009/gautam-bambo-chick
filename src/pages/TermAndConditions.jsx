// src/pages/TermsAndConditions.jsx
import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="bg-[#f5ede3] py-16 px-6 md:px-20 font-[Raleway] text-[#000]">
      {/* ✅ Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#234A8A] font-['Italiana']">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-[#555] max-w-2xl mx-auto font-['Zen_Dots']">
          Please read these terms carefully before using our products or
          services. By engaging with{" "}
          <span className="text-[#E8452D] font-semibold">
            Gautam Bamboo Chick Maker
          </span>
          , you agree to abide by the following terms.
        </p>
      </div>

      {/* ✅ Content */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#E8452D] font-['Orbitron']">
            1. Product Usage
          </h2>
          <p className="mt-2 leading-relaxed">
            Our bamboo chick blinds are designed for residential and commercial
            use. They should be installed and used only for their intended
            purpose. We are not responsible for misuse or damage caused by
            improper handling.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#2BA44A] font-['Orbitron']">
            2. Orders & Payments
          </h2>
          <p className="mt-2 leading-relaxed">
            All orders must be confirmed with an advance payment. Prices are
            subject to change without prior notice. Full payment must be
            completed before delivery or installation, unless agreed otherwise.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#234A8A] font-['Orbitron']">
            3. Delivery & Installation
          </h2>
          <p className="mt-2 leading-relaxed">
            We provide Pan-India delivery. Installation services may be
            available depending on the location. Delivery timelines are
            approximate and may vary due to unforeseen circumstances.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#F4A300] font-['Orbitron']">
            4. Returns & Replacements
          </h2>
          <p className="mt-2 leading-relaxed">
            Since our products are handcrafted and often customized, returns are
            not accepted unless the product is defective or damaged during
            delivery. Replacement will be considered only after proper
            inspection.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#E8452D] font-['Orbitron']">
            5. Warranty
          </h2>
          <p className="mt-2 leading-relaxed">
            Our bamboo blinds are built for durability. However, natural wear
            and tear, exposure to harsh weather, or improper use are not covered
            under warranty.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#2BA44A] font-['Orbitron']">
            6. Intellectual Property
          </h2>
          <p className="mt-2 leading-relaxed">
            All designs, images, and branding under Gautam Bamboo Chick Maker
            are our intellectual property. Unauthorized reproduction or resale
            is strictly prohibited.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#234A8A] font-['Orbitron']">
            7. Governing Law
          </h2>
          <p className="mt-2 leading-relaxed">
            These terms shall be governed by and construed in accordance with
            the laws of India. Any disputes shall be subject to the jurisdiction
            of the local courts.
          </p>
        </div>
      </div>

      {/* ✅ Footer Note */}
      <div className="text-center mt-12 text-sm text-[#555] font-['Zen_Dots']">
        © {new Date().getFullYear()} Gautam Bamboo Chick Maker. All rights
        reserved.
      </div>
    </section>
  );
}
