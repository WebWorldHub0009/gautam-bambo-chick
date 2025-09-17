// src/components/About.jsx
import React from "react";
import {
  FaLeaf,
  FaHammer,
  FaPaintBrush,
  FaGlobeAsia,
} from "react-icons/fa";
import aboutImg from "../assets/home/b3.jpg";
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

export default function About() {
  return (
    <section className="relative bg-[#f5ede3] py-16 px-6 md:px-16 font-[Raleway] overflow-hidden">
      {/* Watermark */}
      <h1
        className="absolute inset-0 flex top-20 justify-center text-[6rem] md:text-[10rem] font-extrabold tracking-widest select-none pointer-events-none"
        style={{
          opacity: 0.05,
          whiteSpace: "nowrap",
          zIndex: 0,
          fontFamily: "'Orbitron', sans-serif",
          color: colors.blackPure,
        }}
      >
        GAUTAM
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Premium Heading */}
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              color: colors.deepBlue,
              fontFamily: "'Italiana', serif",
            }}
          >
            Crafting Elegance with Bamboo
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{
              color: colors.blackPure,
              fontFamily: "'Zen Dots', sans-serif",
            }}
          >
            Blending tradition with innovation — delivering handcrafted bamboo
            chick blinds that are sustainable, stylish, and built to last.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-4">
            <h3
              className="text-3xl font-semibold"
              style={{
                color: colors.brightRed,
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Who We Are
            </h3>
            <p
              className="leading-relaxed"
              style={{
                color: colors.blackPure,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              At Gautam Bamboo Chick Maker, we specialize in designing and
              crafting premium bamboo blinds that bring natural elegance into
              homes, offices, and commercial spaces. Each product is carefully
              handcrafted to ensure durability, beauty, and eco-friendliness.
              With years of expertise, we continue to set benchmarks in quality,
              innovation, and customer satisfaction.
            </p>
            <Link to={"/about"}>
              <button
                className="px-6 py-2 rounded-md transition shadow-md cursor-pointer hover:bg-blue-800"
                style={{
                  background: colors.deepBlue,
                  color: colors.whitePure,
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Middle Column - Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="Gautam Bamboo Chick Maker"
              loading="lazy"   // ✅ Lazy loading added
              className="rounded-lg shadow-xl object-cover w-full md:w-[90%]"
            />
          </div>

          {/* Right Column - Info List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaLeaf className="text-2xl" style={{ color: colors.leafGreen }} />
              <div>
                <p className="font-semibold" style={{ color: colors.blackPure }}>
                  Eco-Friendly Materials
                </p>
                <p style={{ color: "#555" }}>
                  100% natural bamboo, safe & sustainable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaHammer className="text-2xl" style={{ color: colors.orangeGold }} />
              <div>
                <p className="font-semibold" style={{ color: colors.blackPure }}>
                  Handcrafted Excellence
                </p>
                <p style={{ color: "#555" }}>
                  Skilled artisans for unmatched detailing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPaintBrush className="text-2xl" style={{ color: colors.brightRed }} />
              <div>
                <p className="font-semibold" style={{ color: colors.blackPure }}>
                  Custom Designs
                </p>
                <p style={{ color: "#555" }}>
                  Personalized blinds to match your interiors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGlobeAsia className="text-2xl" style={{ color: colors.deepBlue }} />
              <div>
                <p className="font-semibold" style={{ color: colors.blackPure }}>
                  Pan India Reach
                </p>
                <p style={{ color: "#555" }}>
                  Delivering quality across every corner of India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
          {[
            { number: "10+", label: "Years of Craftsmanship", color: colors.deepBlue },
            { number: "500+", label: "Projects Delivered", color: colors.brightRed },
            { number: "100%", label: "Customer Satisfaction", color: colors.leafGreen },
            { number: "Pan India", label: "Trusted Presence", color: colors.orangeGold },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md"
              style={{
                background: "#fff",
                borderTop: `4px solid ${stat.color}`,
              }}
            >
              <h3
                className="text-3xl font-bold"
                style={{
                  color: stat.color,
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {stat.number}
              </h3>
              <p
                className="mt-2 text-sm"
                style={{
                  color: colors.blackPure,
                  fontFamily: "'Zen Dots', sans-serif",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
