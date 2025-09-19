// src/components/Showcase.jsx
import React, { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Media assets (images only)
import img1 from "../assets/gallery/g1.jpg";
import img2 from "../assets/gallery/g2.jpg";
import img3 from "../assets/gallery/g3.jpg";
import img4 from "../assets/gallery/g4.jpg";
import img5 from "../assets/gallery/g5.jpg";
import img6 from "../assets/gallery/g6.jpg";
import img7 from "../assets/gallery/g7.jpg";
import img8 from "../assets/gallery/g8.jpg";
import img9 from "../assets/gallery/g9.jpg";
import img10 from "../assets/gallery/g10.jpg";

import img11 from "../assets/gallery/g11.jpg";
import img12 from "../assets/gallery/g12.jpg";
import img13 from "../assets/gallery/g13.jpg";
import img14 from "../assets/gallery/g14.jpg";
import img15 from "../assets/gallery/g15.jpg";
import img16 from "../assets/gallery/g16.jpg";
import img17 from "../assets/gallery/g17.jpg";
import img18 from "../assets/gallery/g18.jpg";
// import img19 from "../assets/gallery/g19.jpg";
import img20 from "../assets/gallery/g20.jpg";


import img21 from "../assets/product/about.jpg";
import img22 from "../assets/product/contact.jpg";
import img23 from "../assets/product/dchick.jpg";
import img24 from "../assets/product/fchick.jpg";
import img25 from "../assets/product/hut.jpg";
import img26 from "../assets/product/jaf.jpg";

import img27 from "../assets/product/pigeon.jpg";
import img28 from "../assets/product/product.jpg";
import img29 from "../assets/product/roller.jpg";

import GalleryHero from "../components/GalleryHero";

// Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// Media array (images only now)
const media = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  // { src: img19 },
  { src: img20 },

  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
  { src: img25 },
  { src: img26 },
  { src: img27 },
  { src: img28 },
  { src: img29 },
];

// Grid spans
const gridStyles = [
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-4 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-4 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-4 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
];

const Showcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openMedia = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevMedia = () =>
    setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextMedia = () =>
    setSelectedIndex((prev) => (prev + 1) % media.length);

  return (
    <>
      {/* Hero */}
      <GalleryHero />

      {/* Gallery */}
      <section
        id="gallery-section"
        className="relative bg-gradient-to-b from-white via-[#fdfdfd] to-[#fafafa] px-4 md:px-10 py-8 font-[Poppins]"
      >
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.deepBlue }}
          >
            Our Timeless <span style={{ color: colors.orangeGold }}>Craft</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-3 rounded-full"
            style={{ background: colors.brightRed }}
          ></div>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Experience the{" "}
            <span className="font-semibold" style={{ color: colors.darkGreen }}>
              heritage
            </span>{" "}
            of{" "}
            <span className="font-semibold" style={{ color: colors.deepBlue }}>
              Gautam Bamboo Chick Maker
            </span>{" "}
            through our elegant showcase. From handcrafted{" "}
            <span style={{ color: colors.orangeGold }}>bamboo artistry</span> to
            modern innovations, our gallery celebrates a legacy of{" "}
            <span
              className="font-semibold"
              style={{ color: colors.brightRed }}
            >
              durability, design, and trust
            </span>
            .
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          id="gallery"
          className="grid grid-cols-1 sm:grid-cols-6 auto-rows-[220px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[250px] gap-5"
        >
          {media.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer border border-gray-200 hover:border-[${colors.leafGreen}] shadow-md hover:shadow-xl transition-all duration-500 group col-span-1 ${gridStyles[i]}`}
              onClick={() => openMedia(i)}
            >
              <img
                src={item.src}
                alt={`Gallery ${i + 1}`}
                loading="lazy" // ✅ Lazy load thumbnails
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 flex items-center justify-center transition duration-300"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 backdrop-blur-md bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={media[selectedIndex].src}
                alt="Enlarged"
                loading="lazy" // ✅ Lazy load enlarged image
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Close */}
              <button
                className="absolute top-3 right-3 text-white text-xl bg-[#234A8A]/80 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#E8452D] hover:to-[#F4A300] transition"
                onClick={closeModal}
              >
                <FaTimes />
              </button>

              {/* Prev */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl bg-[#2BA44A]/80 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#234A8A] hover:to-[#F4A300] transition"
                onClick={prevMedia}
              >
                <FaArrowLeft />
              </button>

              {/* Next */}
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl bg-[#2BA44A]/80 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#234A8A] hover:to-[#F4A300] transition"
                onClick={nextMedia}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Showcase;
