import React, { useState } from "react";
import {
  FaLeaf,
  FaRecycle,
  FaHome,
  FaSmileBeam,
  FaMoneyCheckAlt,
  FaTruck,
  FaStar,
  FaAngleDown,
} from "react-icons/fa";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const features = [
  {
    title: "Eco-Friendly Crafting",
    icon: FaRecycle,
    color: colors.leafGreen,
    short: "Handmade with sustainable bamboo.",
    description:
      "At Gaurav Bamboo Chick Maker, every product is crafted with eco-conscious methods that respect nature and promote sustainability.",
    animation: "animate-bounce",
  },
  {
    title: "Fast & Reliable Delivery",
    icon: FaTruck,
    color: colors.darkGreen,
    short: "We bring bamboo elegance to your door.",
    description:
      "Our team ensures hassle-free delivery and installation of bamboo chicks, giving you a premium experience without delays.",
    animation: "animate-spin-slow",
  },
  {
    title: "Fair & Transparent Pricing",
    icon: FaMoneyCheckAlt,
    color: colors.orangeGold,
    short: "Luxury bamboo at the best price.",
    description:
      "We provide fair, transparent, and competitive pricing while ensuring the finest craftsmanship in every product.",
    animation: "jump-rotate",
  },
  {
    title: "Trusted Craftsmanship",
    icon: FaHome,
    color: colors.deepBlue,
    short: "Decorating homes with elegance.",
    description:
      "From traditional bamboo curtains to modern chick blinds, our designs are trusted by thousands of families and businesses.",
    animation: "animate-bounce",
  },
  {
    title: "Sustainable Lifestyle",
    icon: FaLeaf,
    color: colors.leafGreen,
    short: "Eco-living through bamboo.",
    description:
      "Every installation reduces reliance on artificial materials, helping you embrace a lifestyle closer to nature.",
    animation: "animate-spin-slow",
  },
  {
    title: "Customer Satisfaction",
    icon: FaSmileBeam,
    color: colors.brightRed,
    short: "We value your happiness.",
    description:
      "With premium service, friendly staff, and high-quality bamboo, customer satisfaction is always our top priority.",
    animation: "animate-bounce",
  },
];

// Custom animations
const styles = `
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 6s linear infinite;
  }

  @keyframes jump-rotate {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(15deg); }
  }
  .jump-rotate {
    animation: jump-rotate 2.5s infinite ease-in-out;
  }

  @keyframes float-blink {
    0%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(5px);
      opacity: 0.5;
    }
  }
  .float-blink {
    animation: float-blink 1.8s infinite ease-in-out;
  }
`;

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{styles}</style>

      <section className="relative py-10 px-6 lg:px-20 bg-gradient-to-br from-[#ffffff] via-[#f9f9f9] to-[#f4f4f4] text-gray-800 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-[220px] h-[220px] bg-[#2BA44A22] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#234A8A22] rounded-full blur-3xl"></div>

        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
            Why Choose{" "}
            <span style={{ color: colors.leafGreen }}>
              Gaurav Bamboo Chick Maker?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            We create bamboo chick blinds that are elegant, eco-friendly, and
            built to last. Here’s why families and businesses trust our
            craftsmanship.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer p-6 bg-white border border-gray-200 hover:border-[#2BA44A] rounded-2xl shadow-md hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                {/* Down arrow */}
                {!isOpen && (
                  <FaAngleDown
                    className="absolute top-4 right-4 text-lg md:text-xl float-blink"
                    style={{ color: colors.orangeGold }}
                  />
                )}

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`p-4 rounded-full border-2 border-dashed shadow-sm ${item.animation}`}
                    style={{ borderColor: item.color, background: "#f9f9f9" }}
                  >
                    <Icon
                      className="text-2xl"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: colors.blackPure }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-sm text-gray-600">{item.short}</p>

                {/* Full Description */}
                <div
                  className={`text-sm mt-3 transition-all duration-500 leading-relaxed ${
                    isOpen
                      ? "max-h-60 opacity-100 text-gray-700"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
