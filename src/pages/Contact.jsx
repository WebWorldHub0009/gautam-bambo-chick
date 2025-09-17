// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import ContactHero from "../components/ContactHero";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import MapSection from "../components/MapSection";

// Product options
const products = [
  { title: "Bamboo Jafhari", slug: "bamboo-jafhari" },
  { title: "Design Wali Chick", slug: "design-wali-chick" },
  { title: "Kabutar Jali", slug: "kabutar-jali" },
  { title: "Roller Blind", slug: "roller-blind" },
  { title: "Bamboo Huts", slug: "bamboo-huts" },
  { title: "Bird Net & Fancy Chick Maker", slug: "bird-net-fancy-chick-maker" },
];

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const Contact = () => {
  // 🔥 Lazy load background image
  const [bg, setBg] = useState(null);
  useEffect(() => {
    import("../assets/home/b3.jpg").then((image) => setBg(image.default));
  }, []);

  return (
    <>
      <ContactHero />

      {/* Contact Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F7F5F2] text-[#1C1C1C] mt-1 font-[Raleway]">
        {/* Left Panel: Info */}
        <div className="w-full lg:w-1/2 bg-[#faf7f7] px-8 py-16 shadow-2xl">
          <h2
            className="text-4xl font-bold mb-6 pb-3 inline-block border-b-4"
            style={{ borderColor: colors.orangeGold, color: colors.orangeGold }}
          >
            Let’s Connect
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "#5E5E5E" }}
          >
            We at{" "}
            <span
              style={{
                color: colors.leafGreen,
                fontWeight: "600",
                fontFamily: "Orbitron",
              }}
            >
              Gautam Bamboo Chick Maker
            </span>{" "}
            are here to provide eco-friendly, durable, and customized bamboo
            solutions for homes, farms, and commercial spaces.
          </p>

          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <h4
                className="font-semibold mb-1"
                style={{ color: colors.orangeGold }}
              >
                Contact Persons
              </h4>
              <p>👤 Gautam Kumar</p>
              <p>📞 +91 78387 88389</p>
              <p>📞 +91 93153 93747</p>
              <p>📞 +91 98113 67632</p>
            </div>

            <div>
              <h4
                className="font-semibold mb-1"
                style={{ color: colors.orangeGold }}
              >
                Emails
              </h4>
              <p>✉️ gautambamboochickmaker@gmail.com</p>
              <p>✉️ info@gautambamboochickmaker.in</p>
            </div>

            <div>
              <h4
                className="font-semibold mb-1"
                style={{ color: colors.orangeGold }}
              >
                Office Address
              </h4>
              <p className="leading-relaxed font-Orbitron">
                Plot No. 17, Ground Floor, Tech Zone IV, <br />
                Nearby D-Mart, Amrapali Dream Valley, <br />
                Greater Noida, Uttar Pradesh - 201318
              </p>
              {/* 🆕 Added New Address */}
              <p className="leading-relaxed font-Orbitron mt-4">
                Shop No. FG8M+464, Ground Floor, Swarn Nagari, <br />
                Block B, Swarn Nagari, Sector 31, <br />
                Greater Noida, Uttar Pradesh - 201315
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl text-[#4B4B4B]">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:scale-110 transition transform duration-300 cursor-pointer"
                  style={{ color: colors.deepBlue }}
                />
              )
            )}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
          {/* Background Image with lazy load */}
          {bg ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          )}
          <div className="absolute inset-0 bg-black/80" />

          {/* Form */}
          <form
            action="https://formsubmit.co/gautambamboochickmaker@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3
              className="text-2xl font-bold mb-6 border-b-2 inline-block"
              style={{
                borderColor: colors.orangeGold,
                color: colors.orangeGold,
                fontFamily: "Zen Dots",
              }}
            >
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#F4A300] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#F4A300] outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#F4A300] outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#F4A300] outline-none"
              />

              {/* Products Dropdown */}
              <select
                name="product"
                required
                className="bg-transparent border-b border-gray-400 text-white py-2 focus:border-[#F4A300] outline-none"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select Product
                </option>
                {products.map((p, i) => (
                  <option key={i} value={p.slug} className="text-black">
                    {p.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#F4A300] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-full transition duration-300 shadow-lg"
              style={{
                backgroundColor: colors.orangeGold,
                color: colors.blackPure,
                fontFamily: "Orbitron",
              }}
            >
              Send Message
            </button>

            {/* Formsubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.gautambamboochickmaker.in/"
            />
          </form>
        </div>
      </section>

      <MapSection />
    </>
  );
};

export default Contact;
