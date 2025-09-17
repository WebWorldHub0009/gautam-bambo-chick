// src/components/Product.jsx
import React from "react";
import { Link } from "react-router-dom";

import bambooJafhari from "../assets/home/b2.jpg";
import bg from "../assets/home/sbg.jpg";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const products = [
  { title: "Bamboo Jafhari", slug: "bamboo-jafhari", imgSrc: bambooJafhari, description: "High-quality bamboo jafhari for strong and durable construction." },
  { title: "Design Wali Chick", slug: "design-wali-chick", imgSrc: bambooJafhari, description: "Elegant design wali chick to enhance aesthetics and functionality." },
  { title: "Kabutar Jali", slug: "kabutar-jali", imgSrc: bambooJafhari, description: "Premium kabutar jali to protect your poultry while ensuring ventilation." },
  { title: "Roller Blind", slug: "roller-blind", imgSrc: bambooJafhari, description: "Durable roller blinds for versatile and efficient shading solutions." },
  { title: "Bamboo Huts", slug: "bamboo-huts", imgSrc: bambooJafhari, description: "Sturdy bamboo huts perfect for outdoor setups and farm usage." },
  { title: "Bird Net & Fancy Chick Maker", slug: "bird-net-fancy-chick-maker", imgSrc: bambooJafhari, description: "Eco-friendly bird nets and fancy chick makers for secure and organized farming." },
];

export default function Product() {
  return (
    <section
      className="relative py-16 text-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <h2
          className="uppercase tracking-wider text-sm font-bold"
          style={{ color: colors.brightRed }}
        >
          Our <span style={{ color: colors.orangeGold }}>Products</span>
        </h2>
        <h3
          className="text-3xl sm:text-5xl font-bold mt-3"
          style={{ color: colors.whitePure }}
        >
          Trusted{" "}
          <span style={{ color: colors.leafGreen }}>Bamboo Solutions</span> by
          Gautam Bamboo Chick Maker.
        </h3>
        <p className="text-gray-100 max-w-3xl mx-auto mt-5 mb-8">
          Explore our premium bamboo products designed for durability,
          functionality, and elegance. Click any product below for full details.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="relative bg-white bg-opacity-95 shadow-xl rounded-2xl p-5 w-80 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              {/* Image with lazy loading */}
              {product.imgSrc && (
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-52 object-cover rounded-xl shadow-md"
                />
              )}

              <h4 className="text-lg uppercase font-bold text-gray-800 mt-6">
                {product.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-2">
                {product.description}
              </p>
              <Link
                to={`/products/${product.slug}`}
                className="px-6 py-2 rounded-full text-whitePure font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${colors.deepBlue}, ${colors.darkGreen})`,
                }}
              >
                Show More
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-100">
          Don’t wait, contact us for more products and inquiries.{" "}
          <Link
            to={"/contact"}
            className="underline font-medium"
            style={{ color: colors.brightRed }}
          >
            Book Online
          </Link>
        </p>
      </div>
    </section>
  );
}
