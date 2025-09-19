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
    iframe: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112094.62845467823!2d77.36402049174231!3d28.601062595981663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef005e960105%3A0x9db5f1e0c899c84!2sGround%20Floor%2C%20Plot%20No.%2017%2C%20Tech%20Zone%20IV%2C%20Amrapali%20Dream%20Valley%2C%20Ithaira%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201318!3m2!1d28.6010875!2d77.44642189999999!5e0!3m2!1sen!2sin!4v1758273531674!5m2!1sen!2sin",
    address: "JC2W+CHM, Tech Zone IV, Amrapali Dream Valley, Ithaira, Greater Noida, Uttar Pradesh - 201318",
    link: "https://share.google/lqbbWsBV8wbIwbNyl",
  },
  {
    title: "Branch Office",
    iframe: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112140.03926906537!2d77.29418349009339!3d28.55846311987194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce58327536053%3A0x25494a4d4e893c93!2sShop%20No%2C%20B%20-%2036%2C%2037%2C%20Second%20floor%20%2C%20Gali%20no%20%2C%2006%2C%20Rajput%20Colony%2C%20Hindon%20Vihar%2C%20Baraula%2C%20Sector%2049%2C%20Noida%2C%20Uttar%20Pradesh%20201307!3m2!1d28.558487999999997!2d77.3765849!5e0!3m2!1sen!2sin!4v1758273737581!5m2!1sen!2sin",
    address: "Shop No. B - 36, 37, Second Floor, Gali No. 06, Rajput Colony, Hindon Vihar, Baraula, Sector 49, Noida, Uttar Pradesh - 201307",
    link: "https://share.google/P8RSHPQrx3eM8Bofl",
  },
  {
    title: "Branch Office 2",
    iframe: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56070.220622309374!2d77.39932724578784!3d28.558085770417886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef9e4857bc2d%3A0x64cb9cafea0874b5!2sShop%20No.%2015%2C%20Rudra%20Bamboo%20chick%20Maker%2C%20Fist%20Floor%2C%20near%20Arihant%20Ambar%2C%20Sector%201%2C%20Aimnabad%2C%20Bisrakh%20Jalalpur%2C%20Noida%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201318!3m2!1d28.5580166!2d77.44052719999999!5e0!3m2!1sen!2sin!4v1758273825675!5m2!1sen!2sin",
    address: "Shop No. 15, First Floor, near Arihant Ambar, Sector 1, Aimnabad, Bisrakh Jalalpur, Noida, Greater Noida, Uttar Pradesh - 201318",
    link: "https://share.google/oFScKOgR2cAdmLqPj",
  },
  {
    title: "Workshop",
    iframe: "https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d28058.211244035116!2d77.5144408!3d28.4712214!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cc1006bfb0d9f%3A0x7ea863c28c72ce4!2sFG8M%2B464%20Bamboo%20Chick%20maker%2C%20Swarn%20Nagari%2C%20Block%20B%2C%20Swarn%20Nagari%2C%20Sector%2031%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201315!3m2!1d28.4652653!2d77.5330881!5e0!3m2!1sen!2sin!4v1758273867184!5m2!1sen!2sin",
    address: "Shop No. FG8M+464, Ground Floor, Swarn Nagari, Block B, Swarn Nagari, Sector 31, Greater Noida, Uttar Pradesh - 201315",
    link: "https://maps.app.goo.gl/Q855xtbpJotjX16Q7",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
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
