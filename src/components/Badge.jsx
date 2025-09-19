// src/components/WeSecureBadge.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLeaf,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaCertificate,
  FaPagelines,
} from "react-icons/fa";

export default function WeSecureBadge() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] py-6 px-6 md:px-16 font-[Poppins] relative overflow-hidden">
      {/* Subtle glowing particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-3 h-3 bg-[#9acd32] rounded-full absolute animate-ping"
          style={{ top: "20%", left: "18%" }}
        ></div>
        <div
          className="w-2 h-2 bg-[#32cd32] rounded-full absolute animate-pulse"
          style={{ top: "45%", left: "75%" }}
        ></div>
        <div
          className="w-2 h-2 bg-[#9acd32] rounded-full absolute animate-pulse"
          style={{ top: "75%", left: "35%" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-[#1a1a1a]/90 border border-[#32cd32]/40 shadow-2xl rounded-2xl px-8 lg:px-14 py-6 backdrop-blur-md relative z-10 gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-3xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-cursive2 font-bold text-[#9acd32] tracking-wide flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
            <span className="flex items-center gap-2">
              <FaShieldAlt /> Durable
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <FaLeaf /> Eco-Friendly
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <FaStar /> Premium Bamboo Craft
            </span>
          </h3>

          {/* Premium Lines */}
          <p className="text-gray-300 text-sm sm:text-base font-raleway leading-relaxed">
            At{" "}
            <span className="font-cursive1 text-[#9acd32]">
              Gautam Bamboo Chicks Maker
            </span>
            , we don’t just make products — we craft{" "}
            <span className="text-[#9acd32] font-cursive1">heritage in bamboo</span>.  
            Every chick, net, and hut is designed to blend{" "}
            <span className="text-[#9acd32] font-cursive1">strength</span>,{" "}
            <span className="text-[#9acd32] font-cursive1">sustainability</span>, 
            and <span className="text-[#9acd32] font-cursive1">style</span>, trusted by
            homes and businesses across India.
          </p>

         
        </div>

        {/* Right CTA Button */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <Link
            to="/contact"
            className="px-10 py-3 text-base sm:text-lg font-body rounded-full bg-gradient-to-r from-[#9acd32] to-[#32cd32] text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
          >
            Get Your Bamboo Solution
          </Link>
        </div>
      </div>
    </section>
  );
}
