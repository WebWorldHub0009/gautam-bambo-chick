// src/components/ProductHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/home/b2.jpg"; // 👉 replace with your bg

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

export default function ProductHero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ✨ Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Title */}
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-6"
          style={{ fontFamily: "Italiana, serif", color: colors.whitePure }}
        >
          Discover the{" "}
          <span style={{ color: colors.orangeGold }}>Elegance</span> of{" "}
          <span style={{ color: colors.leafGreen }}>Bamboo Creations</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "Orbitron, sans-serif", color: "#EDEDED" }}
        >
          Handcrafted bamboo chicks, blinds, and décor — blending{" "}
          <span style={{ color: colors.orangeGold }}>tradition</span> with{" "}
          <span style={{ color: colors.deepBlue }}>modern design</span> for a
          sustainable lifestyle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Shop Now -> Contact */}
          <Link to="/contact">
            <button
              className="cursor-pointer px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
              style={{
                backgroundColor: colors.orangeGold,
                color: colors.whitePure,
                fontFamily: "Zen Dots, sans-serif",
              }}
            >
              🛒 Shop Now
            </button>
          </Link>

          {/* View Gallery */}
          <Link to="/gallery">
            <button
              className="cursor-pointer px-8 py-3 rounded-full text-lg font-semibold border shadow-lg transition-all duration-300 transform hover:bg-white hover:text-black hover:scale-110"
              style={{
                borderColor: colors.whitePure,
                color: colors.whitePure,
                fontFamily: "Zen Dots, sans-serif",
              }}
            >
              ✨ View Our Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
