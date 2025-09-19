// src/components/StatsSection.jsx
import React, { useEffect, useState } from "react";
import {
  FaLeaf,
  FaSmile,
  FaRegSun,
  FaUsers,
} from "react-icons/fa";
import bg from "../assets/home/b1.jpg"; // bamboo/eco bg image
import logo from "../assets/blogo.png"; 

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

// Counter StatCard Component
const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanTarget = target.trim().toUpperCase();
    let multiplier = 1;

    if (cleanTarget.includes("K")) multiplier = 1000;
    if (cleanTarget.includes("M")) multiplier = 1000000;

    const numericPart = parseFloat(cleanTarget.replace(/[^\d.]/g, ""));
    const finalTarget = Math.floor(numericPart * multiplier);
    const duration = 2000;
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4"
        style={{ backgroundColor: color + "22" }}
      >
        <Icon className="text-3xl" style={{ color }} />
      </div>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "Zen Dots, sans-serif", color: colors.whitePure }}
      >
        {formatCount()}
      </div>
      <p
        className="text-sm mt-2"
        style={{ fontFamily: "Orbitron, sans-serif", color: "#ddd" }}
      >
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-20 text-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-14">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.orangeGold,
          }}
        >
          Gautam Bamboo Chick Maker
        </h2>
        <h3
          className="text-4xl md:text-5xl font-bold leading-snug mb-5"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
          }}
        >
          Blending <span style={{ color: colors.leafGreen }}>Nature</span> with{" "}
          <span style={{ color: colors.orangeGold }}>Elegance</span>
        </h3>
        <p
          className="text-base md:text-lg italic"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: "#ccc",
          }}
        >
          Crafting eco-friendly bamboo chicks that redefine sustainability,
          comfort, and premium living.
        </p>
      </div>

      {/* Brand Statement */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center mb-20 max-w-6xl mx-auto">
        <div className="text-left">
          <h2
            className="text-6xl mb-4"
            style={{ fontFamily: "Zen Dots, sans-serif", color: colors.orangeGold }}
          >
            25+
          </h2>
          <p
            className="leading-relaxed"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#eee" }}
          >
            For over{" "}
            <span className="font-semibold" style={{ color: colors.whitePure }}>
              two decades
            </span>
            , Gautam Bamboo Chick Maker has been delivering handcrafted,
            eco-friendly solutions with{" "}
            <span style={{ color: colors.leafGreen }}>trust</span>,{" "}
            <span style={{ color: colors.orangeGold }}>precision</span>, and{" "}
            <span style={{ color: colors.brightRed }}>style</span>.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 rounded-full shadow-xl border-2"
            style={{ borderColor: colors.orangeGold }}
          />
          <div>
            <p
              className="font-semibold"
              style={{ fontFamily: "Italiana, serif", color: colors.whitePure }}
            >
              Gautam Bamboo
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "Orbitron, sans-serif", color: "#ccc" }}
            >
              Chick Maker
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <StatCard icon={FaLeaf} label="Eco-Friendly Products" target="100+" color={colors.leafGreen} />
        <StatCard icon={FaSmile} label="Happy Clients" target="1200+" color={colors.orangeGold} />
        <StatCard icon={FaRegSun} label="Custom Designs" target="100+" color={colors.deepBlue} />
        <StatCard icon={FaUsers} label="Expert Artisans" target="40+" color={colors.brightRed} />
      </div>
    </section>
  );
};

export default StatsSection;
