// src/components/CertificateHero.jsx
import React from "react";
import certBg from "../assets/product/hut.jpg"; // background image

export default function CertificateHero() {
  return (
    <section
      className="relative w-full h-[75vh] flex items-center justify-center text-white font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${certBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug">
          Certified & Trusted <br />
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#ffce54] bg-clip-text text-transparent">
            Bamboo Craft Experts
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          At{" "}
          <span className="text-[#D4AF37] font-semibold">
            Gautam Bamboo Chick Maker
          </span>
          , our certifications stand as proof of{" "}
          <span className="text-[#ffce54] font-semibold">
            quality, tradition, and eco-friendly excellence
          </span>{" "}
          trusted by countless homes & businesses.
        </p>

        {/* ✅ Updated CTA */}
        <a
          href="/contact"
          className="inline-block px-8 py-3 text-lg font-semibold rounded-full 
          bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-black 
          shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Contact Us for Verification
        </a>
      </div>
    </section>
  );
}
