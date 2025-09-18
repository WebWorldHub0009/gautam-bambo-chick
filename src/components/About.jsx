// src/components/About.jsx
import React from "react";
import { FaLeaf, FaHammer, FaPaintBrush, FaGlobeAsia } from "react-icons/fa";
import aboutImg from "../assets/home/b3.jpg";
import { Link } from "react-router-dom";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  orangeGold: "#F4A300",
  blackPure: "#000000",
};

const features = [
  {
    icon: <FaLeaf className="text-2xl text-[#2BA44A]" />,
    title: "Eco-Friendly Materials",
    desc: "100% natural bamboo, safe & sustainable.",
  },
  {
    icon: <FaHammer className="text-2xl text-[#F4A300]" />,
    title: "Handcrafted Excellence",
    desc: "Skilled artisans for unmatched detailing.",
  },
  {
    icon: <FaPaintBrush className="text-2xl text-[#E8452D]" />,
    title: "Custom Designs",
    desc: "Personalized blinds to match your interiors.",
  },
  {
    icon: <FaGlobeAsia className="text-2xl text-[#234A8A]" />,
    title: "Pan India Reach",
    desc: "Delivering quality across every corner of India.",
  },
];

const stats = [
  { number: "10+", label: "Years of Craftsmanship", color: "#234A8A" },
  { number: "500+", label: "Projects Delivered", color: "#E8452D" },
  { number: "100%", label: "Customer Satisfaction", color: "#2BA44A" },
  { number: "Pan India", label: "Trusted Presence", color: "#F4A300" },
];

export default function About() {
  return (
    <section className="relative bg-[#f5ede3] py-16 px-6 md:px-16 font-[Raleway] overflow-hidden">
      {/* ✅ Watermark */}
      <h1 className="absolute top-20 inset-0 text-[6rem] md:text-[10rem] font-extrabold tracking-widest opacity-5 text-black text-center select-none pointer-events-none">
        GAUTAM
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* ✅ Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#234A8A] font-['Italiana']">
            Crafting Elegance with Bamboo
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[#000] font-['Zen_Dots']">
            Blending tradition with innovation — delivering handcrafted bamboo
            chick blinds that are sustainable, stylish, and built to last.
          </p>
        </div>

        {/* ✅ 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-semibold text-[#E8452D] font-['Orbitron']">
              Who We Are
            </h3>
            <p className="mt-4 leading-relaxed text-[#000]">
              At Gautam Bamboo Chick Maker, we specialize in designing and
              crafting premium bamboo blinds that bring natural elegance into
              homes, offices, and commercial spaces. Each product is carefully
              handcrafted to ensure durability, beauty, and eco-friendliness.
              With years of expertise, we continue to set benchmarks in quality,
              innovation, and customer satisfaction.
            </p>
            <Link to="/about">
              <button className="mt-4 px-6 py-2 rounded-md shadow-md bg-[#234A8A] text-white font-['Orbitron'] hover:bg-blue-800 transition">
                Learn More
              </button>
            </Link>
          </div>

          {/* Middle (Image) */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="Gautam Bamboo Chick Maker"
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-xl object-cover w-full md:w-[90%]"
            />
          </div>

          {/* Right (Features) */}
          <div className="space-y-6">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <p className="font-semibold text-[#000]">{item.title}</p>
                  <p className="text-[#555] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md bg-white"
              style={{ borderTop: `4px solid ${stat.color}` }}
            >
              <h3
                className="text-3xl font-bold font-['Orbitron']"
                style={{ color: stat.color }}
              >
                {stat.number}
              </h3>
              <p className="mt-2 text-sm text-[#000] font-['Zen_Dots']">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
