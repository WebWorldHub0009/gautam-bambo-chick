// src/components/ContactHero.jsx
import React from "react";
import bg from "../assets/home/b2.jpg"; // static import

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

export default function ContactHero() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[70vh] flex items-center justify-center font-[Italiana]">
      {/* Background */}
      <img
        src={bg}
        alt="Contact Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl sm:max-w-4xl">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-snug"
          style={{ color: colors.whitePure, fontFamily: "Zen Dots" }}
        >
          Get in Touch with{" "}
          <span style={{ color: colors.leafGreen }}>
            Gautam Bamboo Chick Maker
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
          style={{ color: colors.whitePure, fontFamily: "Italiana" }}
        >
          We’re here to help you with sustainable and aesthetic bamboo chick
          solutions. Reach out for consultations, orders, or customized designs
          for your home and farm.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="tel:+919811367632"
            className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold shadow-lg text-center transition-all"
            style={{
              backgroundColor: colors.leafGreen,
              color: colors.whitePure,
            }}
          >
            📞 Call Us
          </a>
          <a
            href="mailto:gautambamboochickmaker@gmail.com"
            className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold shadow-lg text-center transition-all"
            style={{
              backgroundColor: colors.deepBlue,
              color: colors.whitePure,
            }}
          >
            ✉️ Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
