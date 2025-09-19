// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// 🎨 Brand Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// 🌿 Fresh Testimonials for Bamboo Chick Maker
const testimonials = [
  {
    name: "Anil Mehra",
    title: "Homeowner, Jaipur",
    text: "The bamboo chicks gave my home a natural cooling effect. Perfect blend of beauty and eco-friendliness!",
  },
  {
    name: "Simran Kaur",
    title: "Interior Designer, Delhi",
    text: "Their bamboo blinds added warmth and elegance to my project. My clients were amazed by the craftsmanship.",
  },
  {
    name: "Rahul Verma",
    title: "Café Owner, Chandigarh",
    text: "I wanted a rustic, earthy vibe for my café. Their bamboo products transformed the space completely!",
  },
  {
    name: "Priya Nair",
    title: "Architect, Bangalore",
    text: "We used their bamboo solutions for a sustainable project — lightweight, durable, and simply stunning.",
  },
  {
    name: "Arvind Sharma",
    title: "Resort Owner, Rishikesh",
    text: "Guests love the natural feel of bamboo shades. It adds charm while keeping the interiors cool.",
  },
  {
    name: "Neha Patel",
    title: "Teacher, Ahmedabad",
    text: "Affordable, eco-conscious, and stylish! Their bamboo chicks brought a fresh, airy look to my classroom.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-14 bg-gradient-to-b from-white via-[#FDFDFD] to-[#F7F7F7] px-4 md:px-10 font-[Raleway] overflow-hidden">
      {/* ✨ Background Overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(90deg, ${colors.leafGreen}20, transparent, ${colors.deepBlue}20)`,
          }}
        ></div>
        <div
          className="absolute top-10 right-20 w-64 h-64 blur-3xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.leafGreen}40` }}
        ></div>
        <div
          className="absolute bottom-10 left-20 w-72 h-72 blur-2xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.deepBlue}25` }}
        ></div>
      </div>

      {/* 🌟 Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2
          className="text-3xl md:text-5xl font-bold drop-shadow-sm"
          style={{ fontFamily: "Italiana, serif", color: colors.deepBlue }}
        >
          What Our <span style={{ color: colors.orangeGold }}>Clients Say</span>
        </h2>
        <p
          className="italic mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "Orbitron, sans-serif", color: colors.blackPure }}
        >
          “Trusted for generations to deliver eco-friendly bamboo solutions —
          bringing style, tradition, and sustainability to every space.”
        </p>
      </div>

      {/* 🌿 Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative rounded-2xl p-8 h-full bg-white 
              border border-gray-200 text-[#1C1C1C] shadow-md
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Floating Badge */}
              <span
                className="absolute -top-5 left-5 text-xs font-bold px-3 py-1 rounded-full shadow-md"
                style={{
                  backgroundColor: colors.darkGreen,
                  color: colors.whitePure,
                  fontFamily: "Zen Dots, sans-serif",
                }}
              >
                ★ Verified Client
              </span>

              <FaQuoteLeft
                className="text-3xl mb-4"
                style={{ color: colors.deepBlue }}
              />
              <p
                className="mb-6 italic leading-relaxed"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  color: "#555555",
                }}
              >
                "{item.text}"
              </p>
              <div>
                <p
                  className="font-semibold text-lg"
                  style={{ color: colors.leafGreen }}
                >
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
