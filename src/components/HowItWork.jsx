// src/components/HowItWorks.jsx
import React from "react";
import { FaBug, FaShieldAlt, FaHandHoldingMedical, FaLeaf } from "react-icons/fa";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const steps = [
  {
    id: 1,
    title: "Identify the Requirement",
    description:
      "We assess your bamboo needs with precision, understanding the products and designs you require.",
    icon: <FaLeaf size={28} />,
  },
  {
    id: 2,
    title: "Customized Design Plan",
    description:
      "Tailored bamboo solutions designed specifically for your farm or home setup, ensuring efficiency and aesthetics.",
    icon: <FaShieldAlt size={28} />,
  },
  {
    id: 3,
    title: "Eco-Friendly Execution",
    description:
      "Our sustainable methods ensure high-quality bamboo installations while keeping the environment safe.",
    icon: <FaHandHoldingMedical size={28} />,
  },
  {
    id: 4,
    title: "Follow-Up & Maintenance",
    description:
      "We provide ongoing support and maintenance advice to keep your bamboo structures strong and lasting.",
    icon: <FaLeaf size={28} />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(to bottom, #F0FFF4, #E6FAE9, #F9FAF6)" }}>
      {/* Subtle floating shapes */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="100" fill={colors.leafGreen} />
        {/* <circle cx="300" cy="200" r="150" fill={colors.leafGreen} /> */}
        <circle cx="800" cy="100" r="120" fill={colors.leafGreen} />
        {/* <circle cx="600" cy="400" r="200" fill={colors.leafGreen} /> */}
      </svg>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blackPure">
          How <span style={{ color: colors.brightRed }}>Gautam Bamboo</span> Works
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          A professional 4-step bamboo process that ensures durable, eco-friendly, and aesthetic solutions for your home or farm.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-whitePure border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Floating Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-md"
              style={{ backgroundColor: colors.leafGreen, color: colors.whitePure }}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-blackPure mb-3">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
