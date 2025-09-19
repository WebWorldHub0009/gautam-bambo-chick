// src/components/VisionMission.jsx
import React from "react";

// 🎨 Brand Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

export default function VisionMission() {
  return (
    <section className="relative w-full py-10 bg-gradient-to-b from-white via-[#FDFDFD] to-[#F7F7F7] px-6 md:px-12 font-[Raleway] overflow-hidden">
      {/* ✨ Background Glow Elements */}
      <div className="absolute inset-0 -z-0">
        <div
          className="absolute top-10 left-20 w-64 h-64 blur-3xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.leafGreen}40` }}
        ></div>
        <div
          className="absolute bottom-10 right-20 w-72 h-72 blur-3xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.deepBlue}30` }}
        ></div>
      </div>

      {/* 🌟 Section Heading */}
      <div className="relative text-center mb-16 z-10">
        <h2
          className="text-3xl md:text-5xl font-bold drop-shadow-sm"
          style={{ fontFamily: "Italiana, serif", color: colors.deepBlue }}
        >
          Our <span style={{ color: colors.orangeGold }}>Vision & Mission</span>
        </h2>
        <p
          className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "Orbitron, sans-serif", color: "#444" }}
        >
          At Gautam Bamboo Chick Maker, we combine{" "}
          <span style={{ color: colors.leafGreen }}>heritage craftsmanship</span>{" "}
          with <span style={{ color: colors.brightRed }}>modern design</span>,
          ensuring every creation adds sustainability, elegance, and warmth to
          your spaces.
        </p>
      </div>

      {/* 🌿 Vision & Mission Cards */}
      <div className="relative grid md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10">
        {/* Vision Card */}
        <div
          className="group relative rounded-3xl p-10 shadow-xl transition-all duration-500 
          hover:-translate-y-3 hover:shadow-2xl bg-white border border-gray-200"
        >
          <div className="absolute -top-6 left-6 px-5 py-2 rounded-full text-sm font-bold shadow-md"
            style={{ backgroundColor: colors.orangeGold, color: colors.whitePure, fontFamily: "Zen Dots, sans-serif" }}
          >
            ✨ Vision
          </div>

          <h3
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "Italiana, serif", color: colors.deepBlue }}
          >
            Building a Sustainable Tomorrow
          </h3>
          <p
            className="leading-relaxed"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#555" }}
          >
            Our vision is to revive traditional{" "}
            <span style={{ color: colors.leafGreen }}>bamboo artistry</span> and
            bring it into every home and business. We aim to create interiors
            that are eco-friendly, elegant, and timeless — making sustainability
            a lifestyle, not just a choice.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="group relative rounded-3xl p-10 shadow-xl transition-all duration-500 
          hover:-translate-y-3 hover:shadow-2xl bg-white border border-gray-200"
        >
          <div className="absolute -top-6 left-6 px-5 py-2 rounded-full text-sm font-bold shadow-md"
            style={{ backgroundColor: colors.leafGreen, color: colors.whitePure, fontFamily: "Zen Dots, sans-serif" }}
          >
            🌿 Mission
          </div>

          <h3
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "Italiana, serif", color: colors.deepBlue }}
          >
            Crafting With Care, Serving With Pride
          </h3>
          <p
            className="leading-relaxed"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#555" }}
          >
            Our mission is to deliver{" "}
            <span style={{ color: colors.orangeGold }}>quality bamboo
            solutions</span> that blend tradition with innovation. From durable
            blinds to stylish interiors, we are committed to serving customers
            with honesty, passion, and precision — making every product a mark
            of excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
