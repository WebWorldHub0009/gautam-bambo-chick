// src/components/Product.jsx
import React from "react";
import { Link } from "react-router-dom";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const services = [
  { title: "Bamboo Jafhari", slug: "bamboo-jafhari", description: "High-quality bamboo jafhari for strong and durable construction." },
  { title: "Design Wali Chick", slug: "design-wali-chick", description: "Elegant design wali chick to enhance aesthetics and functionality." },
  { title: "Kabutar Jali", slug: "kabutar-jali", description: "Premium kabutar jali to protect your poultry while ensuring ventilation." },
  { title: "Roller Blind", slug: "roller-blind", description: "Durable roller blinds for versatile and efficient shading solutions." },
  { title: "Bamboo Huts", slug: "bamboo-huts", description: "Sturdy bamboo huts perfect for outdoor setups and farm usage." },
  { title: "Bird Net & Fancy Chick Maker", slug: "bird-net-fancy-chick-maker", description: "Eco-friendly bird nets and fancy chick makers for secure and organized farming." },
];

export default function Product() {
  return (
    <section className="relative py-16 bg-whitePure font-[Poppins]">
      <div className="px-4 max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2
          className="uppercase tracking-wider text-sm font-bold text-center"
          style={{ color: colors.brightRed }}
        >
          Our <span style={{ color: colors.orangeGold }}>Services</span>
        </h2>
        <h3
          className="text-3xl sm:text-5xl font-bold mt-3 text-center"
          style={{ color: colors.blackPure }}
        >
          Explore{" "}
          <span style={{ color: colors.leafGreen }}>Premium Solutions</span> by
          Gautam Bamboo Chick Maker
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mt-5 mb-10 text-center">
          Navigate through our range of bamboo-based services. Click any service
          below to view detailed information and explore our craftsmanship.
        </p>

        {/* Services Slider/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-r from-[#f9f9f9] to-[#ffffff] shadow-lg border border-gray-200 rounded-2xl p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h4 className="text-xl uppercase font-bold text-gray-800 mb-3">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mb-5 text-center">
                {service.description}
              </p>
              <Link
                to={`/products/${service.slug}`}
                className="px-6 py-2 rounded-full text-white font-semibold shadow-md"
                style={{
                  background: `linear-gradient(90deg, ${colors.deepBlue}, ${colors.darkGreen})`,
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-700 text-center">
          Looking for custom solutions?{" "}
          <Link
            to={"/contact"}
            className="underline font-medium"
            style={{ color: colors.brightRed }}
          >
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
}
