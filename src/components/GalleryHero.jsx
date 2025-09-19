// src/components/GalleryHero.jsx
import React, { useState, useEffect } from "react";
import bg from "../assets/product/hut.jpg";
import { Link } from "react-router-dom";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

export default function GalleryHero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.loading = "lazy"; // ✅ lazy load
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: bgLoaded ? `url(${bg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000", // fallback color before image loads
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-10">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
          }}
        >
          Timeless Craft,{" "}
          <span style={{ color: colors.orangeGold }}>Modern Elegance</span>
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed mx-auto mb-10"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.whitePure,
          }}
        >
          Experience the beauty of{" "}
          <span style={{ color: colors.leafGreen }}>
            handcrafted bamboo chicks
          </span>{" "}
          — where tradition meets innovation.  
          At{" "}
          <b style={{ color: colors.brightRed }}>
            Gautam Bamboo Chick Maker
          </b>
          , every piece reflects{" "}
          <span style={{ color: colors.deepBlue }}>
            craftsmanship, sustainability, and elegance
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Go to Contact Page */}
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full font-semibold border-2 transition-transform hover:scale-105"
            style={{
              borderColor: colors.orangeGold,
              color: colors.orangeGold,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            Get Your Custom Design
          </Link>
        </div>
      </div>

      {/* Hidden lazy-loaded image */}
      <img
        src={bg}
        alt="Background bamboo craft"
        loading="lazy"
        className="hidden"
      />
    </section>
  );
}
