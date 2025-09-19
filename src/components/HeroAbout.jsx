// src/components/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";

// Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// Background image
import bg from "../assets/home/b3.jpg"; // 👉 Replace with your actual about hero bg

export default function AboutHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={bg}
        alt="About Gautam Bamboo Chick Maker"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0.8), rgba(0,0,0,0.5))`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
          }}
        >
          
          <span style={{ color: colors.orangeGold }}>
            Gautam Bamboo Chick Maker
          </span>
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.whitePure,
          }}
        >
          For generations, we’ve been crafting{" "}
          <span style={{ color: colors.leafGreen }}>eco-friendly bamboo chicks </span> 
           that combine{" "}
          <span style={{ color: colors.deepBlue }}>heritage craftsmanship</span>{" "}
          with{" "}
          <span style={{ color: colors.brightRed }}>modern design</span>.  
          Our mission is to bring warmth, style, and sustainability into every
          space we touch.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            to="/gallery"
            className="px-8 py-3 rounded-full font-semibold border-2 transition-transform hover:scale-105"
            style={{
              borderColor: colors.leafGreen,
              color: colors.leafGreen,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            View Our Craft
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
            style={{
              backgroundColor: colors.orangeGold,
              color: colors.whitePure,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            Let’s Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
