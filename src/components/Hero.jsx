// src/components/HeroSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import img1 from "../assets/home/b1.jpg";
import img2 from "../assets/home/b2.jpg";
import img3 from "../assets/home/b3.jpg";
import img4 from "../assets/home/b4.jpg";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const slides = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

const highlights = [
  { id: 1, tag: "Exclusive Design", title: "Premium Bamboo Chicks", desc: "Handcrafted with precision, offering durability & elegance." },
  { id: 2, tag: "Eco-Friendly", title: "Sustainable Craftsmanship", desc: "Made with natural bamboo, safe for your home & the planet." },
  { id: 3, tag: "Affordable Luxury", title: "Best Price Guarantee", desc: "Top-notch quality at prices that fit your budget." },
  { id: 4, tag: "Customizable", title: "Tailored For You", desc: "Get custom sizes & styles to match your interiors." },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Main Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt="Bamboo Chick Maker" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight" style={{ color: colors.whitePure, fontFamily: "'Italiana', serif", fontWeight: 700 }}>
                Gautam <span style={{ color: colors.brightRed, fontFamily: "'Orbitron', sans-serif" }}>Bamboo</span>{" "}
                <span style={{ color: colors.leafGreen, fontFamily: "'Orbitron', sans-serif" }}>Chick</span> Maker
              </h1>
              <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-xs sm:max-w-md md:max-w-2xl" style={{ color: colors.whitePure, fontFamily: "'Zen Dots', sans-serif" }}>
                Highest Quality Affordable Price — Crafted with tradition, designed for modern living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-lg font-semibold shadow-lg w-full sm:w-auto" style={{ background: colors.deepBlue, color: colors.whitePure, fontFamily: "'Orbitron', sans-serif" }}>
                  Explore Products
                </button>
                <button className="px-6 py-3 rounded-lg font-semibold shadow-lg border w-full sm:w-auto" style={{ borderColor: colors.orangeGold, color: colors.orangeGold, fontFamily: "'Orbitron', sans-serif" }}>
                  Contact Us
                </button>
              </div>
            </div>

            {/* Bottom Highlights */}
            {/* Desktop Grid */}
            <div className="hidden md:grid absolute bottom-0 w-full px-16 py-6 grid-cols-4 gap-6 bg-black/70 backdrop-blur text-left">
              {highlights.map((item) => (
                <div key={item.id}>
                  <p className="uppercase text-sm mb-2 tracking-wide" style={{ color: colors.orangeGold, fontFamily: "'Orbitron', sans-serif" }}>{item.tag}</p>
                  <h3 className="text-xl font-bold mb-1" style={{ color: colors.whitePure, fontFamily: "'Italiana', serif" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: colors.whitePure, fontFamily: "'Zen Dots', sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Swiper */}
            <div className="md:hidden absolute bottom-0 w-full py-4 bg-black/70 backdrop-blur">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1.2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="px-4"
              >
                {highlights.map((item) => (
                  <SwiperSlide key={item.id} className="bg-black/50 p-4 rounded-lg">
                    <p className="uppercase text-xs mb-1 tracking-wide" style={{ color: colors.orangeGold, fontFamily: "'Orbitron', sans-serif" }}>{item.tag}</p>
                    <h3 className="text-lg font-bold mb-1" style={{ color: colors.whitePure, fontFamily: "'Italiana', serif" }}>{item.title}</h3>
                    <p className="text-xs" style={{ color: colors.whitePure, fontFamily: "'Zen Dots', sans-serif" }}>{item.desc}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Social Icons - Vertical on Mobile */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 flex flex-col gap-4 z-50 md:flex-col lg:left-6 lg:-translate-x-0">
        {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
          <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-blue-800 text-blue-800 hover:bg-white/30 transition">
            <Icon />
          </a>
        ))}
      </div>

      {/* Custom Pagination */}
      <div className="custom-pagination absolute top-1/2 -translate-y-1/2 right-6 flex flex-col gap-3 z-50"></div>
    </section>
  );
}
