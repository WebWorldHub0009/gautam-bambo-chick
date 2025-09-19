// src/components/FeaturedSection.jsx
import React from "react";
import { motion } from "framer-motion";
import model from "../assets/home/b4.jpg"; // left showcase image
import product from "../assets/home/b2.jpg"; // right showcase image
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

// Color Palette
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const FeaturedSection = () => {
  return (
    <section className="relative w-full py-14 px-6 overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="bamboo-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect width="40" height="40" fill={colors.whitePure} />
              <path
                d="M10 0v40M30 0v40"
                stroke={colors.leafGreen}
                strokeWidth="2"
                opacity="0.6"
              />
              <circle cx="20" cy="20" r="6" fill={colors.orangeGold} opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bamboo-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* Left Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md"
        >
          <img
            src={model}
            alt="Craftsman working"
            className="rounded-2xl h-[500px] md:h-[420px] shadow-2xl object-cover w-full"
          />
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm font-semibold text-gray-800">
            <FaLeaf className="text-[#2BA44A]" />
            <span className="text-[13px] font-['Orbitron']">
              100% Eco-Friendly
            </span>
          </div>
        </motion.div>

        {/* Center Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-xl"
        >
          {/* Section Heading with Quote */}
          <div className="mb-6">
            <h3
              className="text-lg italic tracking-wide"
              style={{
                fontFamily: "Italiana, serif",
                color: colors.darkGreen,
              }}
            >
              “Blending Nature with Craftsmanship”
            </h3>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              fontFamily: "Italiana, serif",
              color: colors.deepBlue,
            }}
          >
            Crafting{" "}
            <span style={{ color: colors.orangeGold }}>Elegance</span> with{" "}
            <span style={{ color: colors.leafGreen }}>Sustainability</span>
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed tracking-wide mb-8"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: "#444",
            }}
          >
            At{" "}
            <b style={{ color: colors.brightRed }}>Gautam Bamboo Chick Maker</b>,
            we merge{" "}
            <span style={{ color: colors.deepBlue }}>heritage artistry</span>{" "}
            with{" "}
            <span style={{ color: colors.orangeGold }}>
              modern-day innovation
            </span>
            . Each bamboo chick is{" "}
            <span style={{ color: colors.leafGreen }}>eco-conscious</span>,
            durable, and infused with the warmth of{" "}
            <span style={{ color: colors.brightRed }}>trust</span>. From
            sun-shading solutions to interior elegance, our creations redefine{" "}
            <span style={{ color: colors.darkGreen }}>sustainable luxury</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <Link to="/gallery">
              <button
                className="px-7 py-3 cursor-pointer border-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  borderColor: colors.deepBlue,
                  color: colors.deepBlue,
                  fontFamily: "Zen Dots, sans-serif",
                }}
              >
                View Our Craft
              </button>
            </Link>

            <Link to="/contact">
              <button
                className="px-7 py-3 rounded-full cursor-pointer font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.orangeGold,
                  color: colors.whitePure,
                  fontFamily: "Zen Dots, sans-serif",
                }}
              >
                Get Your Custom Bamboo Design
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-sm"
        >
          <img
            src={product}
            alt="Premium Bamboo Chick"
            className="rounded-2xl h-[320px] shadow-xl object-cover w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
