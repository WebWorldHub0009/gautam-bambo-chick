// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "./product"; // ✅ adjust path
import { FaCheckCircle, FaLeaf, FaHammer } from "react-icons/fa";
import WeSecureBadge from "../components/Badge";
import ServiceSlider from "../components/ServiceSlider";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-700 text-xl">
        ❌ Product not found
      </div>
    );
  }

  return (
    <>
      <div className="font-[Raleway] text-gray-900 relative">
        {/* Hero Section */}
        <section
          className="relative h-[65vh] flex items-end bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${product.imgSrc})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          {/* Hero Text */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
            <h1
              className="text-4xl md:text-6xl font-extrabold"
              style={{ color: colors.whitePure }}
            >
              {product.title}
            </h1>
            <p
              className="mt-3 text-lg md:text-xl italic font-medium"
              style={{ color: colors.orangeGold }}
            >
              {product.quote}
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={product.imgSrc}
                alt={product.title}
                loading="lazy"
                className="rounded-xl shadow-md w-full h-[400px] object-cover border-4"
                style={{ borderColor: colors.deepBlue }}
              />
            </div>
            <div className="space-y-5">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: colors.deepBlue }}
              >
                {product.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features & Uses */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            {/* Features */}
            <div>
              <h3
                className="text-2xl font-semibold mb-5 flex items-center gap-2"
                style={{ color: colors.brightRed }}
              >
                <FaCheckCircle /> Key Features
              </h3>
              <ul className="space-y-3 text-gray-700">
                {product.features.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg text-base shadow-sm border-l-4"
                    style={{ borderColor: colors.brightRed }}
                  >
                    <span style={{ color: colors.brightRed }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Uses */}
            <div>
              <h3
                className="text-2xl font-semibold mb-5 flex items-center gap-2"
                style={{ color: colors.leafGreen }}
              >
                <FaHammer /> Best Uses
              </h3>
              <ul className="space-y-3 text-gray-700">
                {product.uses.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-gray-50 p-3 text-base rounded-lg shadow-sm border-l-4"
                    style={{ borderColor: colors.leafGreen }}
                  >
                    <span style={{ color: colors.leafGreen }}>➤</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: colors.orangeGold }}
            >
              Why Choose Us?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {product.whyChooseUs}
            </p>
          </div>
        </section>
      </div>

      {/* Static Sections */}
      <WeSecureBadge />
      <ServiceSlider />
    </>
  );
}
