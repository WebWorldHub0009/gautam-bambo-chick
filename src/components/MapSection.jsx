// src/components/MapSection.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const MapSection = () => {
  return (
    <section className="relative w-full bg-[#F9F9F9] py-12 font-[Raleway]">
      {/* Section Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2BA44A] to-[#234A8A] px-8 py-3 rounded-full shadow-2xl z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 tracking-wide">
          <FaMapMarkerAlt className="text-[#F4A300] text-2xl" />
          Find Us on Map
        </h2>
      </div>

      {/* Map Container */}
      <div className="w-full max-w-7xl mx-auto relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] border-4 border-[#2BA44A]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.92823213425!2d77.43053755!3d28.60104415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffb4d43d88d%3A0xb46e9184160a95c4!2sTechzone%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726310782732!5m2!1sen!2sin"
          width="100%"
          height="480"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Info Card Overlay */}
        <div className="absolute bottom-6 right-6 bg-[#1C1C1C]/90 text-white p-6 rounded-2xl max-w-sm shadow-2xl backdrop-blur-md">
          <h3
            className="text-xl font-extrabold mb-3"
            style={{ color: colors.leafGreen, fontFamily: "Zen Dots" }}
          >
            Gautam Bamboo Chick Maker
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Plot No. 17, Ground Floor, Tech Zone IV, <br />
            Nearby D-Mart, Amrapali Dream Valley, <br />
            Greater Noida, Uttar Pradesh - 201318
          </p>
          <a
            href="https://goo.gl/maps/Q6eNRYBRM2L2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-[#2BA44A] to-[#234A8A] text-white px-5 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
