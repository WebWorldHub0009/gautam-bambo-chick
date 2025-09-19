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

const locations = [
  {
    title: "Head Office",
    iframe: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112094.62653457954!2d77.36401489174236!3d28.601064395980647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef005e960105%3A0x9db5f1e0c899c84!2sJC2W%2BCHM%2C%20Tech%20Zone%20IV%2C%20Amrapali%20Dream%20Valley%2C%20Ithaira%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201318!3m2!1d28.601089299999998!2d77.4464163!5e0!3m2!1sen!2sin!4v1758251364815!5m2!1sen!2sin",
    address: "Plot No. 17, Tech Zone IV, Amrapali Dream Valley, Greater Noida, UP - 201318",
    link: "https://goo.gl/maps/Q6eNRYBRM2L2",
  },
  {
    title: "Workshop",
    iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28058.211244035116!2d77.5144408!3d28.4712214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1006bfb0d9f%3A0x7ea863c28c72ce4!2sBamboo%20Chick%20maker!5e0!3m2!1sen!2sin!4v1758254399480!5m2!1sen!2sin",
    address: "Sector 63, Noida, Uttar Pradesh - 201301",
    link: "https://goo.gl/maps/abcd1234",
  },
  {
    title: "Branch Office",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.92823213425!2d77.43053755!3d28.60104415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffb4d43d88d%3A0xb46e9184160a95c4!2sTechzone%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726310782732!5m2!1sen!2sin",
    address: "Techzone 4, Greater Noida West, UP - 201318",
    link: "https://goo.gl/maps/xyz5678",
  },
];

const MapSection = () => {
  return (
    <section className="relative w-full bg-[#F9F9F9] py-16 font-[Raleway]">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
          <FaMapMarkerAlt className="text-[#F4A300]" />
          <span style={{ color: colors.deepBlue }}>Find Us On Map</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Visit our offices and workshop located across NCR
        </p>
      </div>

      {/* Grid of Maps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-2 border-[#2BA44A]/60"
          >
            <iframe
              src={loc.iframe}
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              title={loc.title}
            ></iframe>

            {/* Info Card */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-md w-[90%]">
              <h3
                className="text-lg font-semibold text-center"
                style={{ color: colors.leafGreen }}
              >
                {loc.title}
              </h3>
              <p className="text-xs text-gray-700 text-center mt-1">{loc.address}</p>
              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center text-sm font-semibold text-white bg-gradient-to-r from-[#2BA44A] to-[#234A8A] px-4 py-1.5 rounded-full hover:scale-105 transition-all"
              >
                📍 View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapSection;
