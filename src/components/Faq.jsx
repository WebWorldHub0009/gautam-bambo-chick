// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBug, FaLeaf, FaShieldAlt, FaPhoneAlt, FaPlus } from "react-icons/fa";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const faqCategories = {
  "Our Products": {
    icon: <FaLeaf className="text-leafGreen text-xl" style={{ color: colors.leafGreen }} />,
    faqs: [
      {
        question: "What bamboo products do you offer?",
        answer:
          "We provide bamboo jafhari, bird nets, bamboo huts, roller blinds, and more premium bamboo solutions for your farm or home.",
      },
      {
        question: "Are your bamboo products eco-friendly?",
        answer:
          "Absolutely. All our bamboo products are sustainable, biodegradable, and crafted with eco-conscious methods.",
      },
      {
        question: "Can I customize the design?",
        answer:
          "Yes, we offer fully customizable bamboo products to match your space, style, and functional requirements.",
      },
    ],
  },
  "Process & Quality": {
    icon: <FaShieldAlt className="text-deepBlue text-xl" style={{ color: colors.deepBlue }} />,
    faqs: [
      {
        question: "How is the quality ensured?",
        answer:
          "Our team inspects each bamboo product thoroughly and uses durable, high-quality bamboo for long-lasting results.",
      },
      {
        question: "Do you provide installation services?",
        answer:
          "Yes, we offer installation services for selected bamboo structures to ensure proper setup and safety.",
      },
      {
        question: "What is the process from order to delivery?",
        answer:
          "After discussing your requirements, we craft the products, quality-check them, and deliver/install them at your location.",
      },
    ],
  },
  "Pricing & Support": {
    icon: <FaBug className="text-orangeGold text-xl" style={{ color: colors.orangeGold }} />,
    faqs: [
      {
        question: "Are your products affordable?",
        answer:
          "We offer premium bamboo solutions at competitive prices, tailored for farms, homes, and commercial setups.",
      },
      {
        question: "Do you offer bulk discounts?",
        answer:
          "Yes, we provide discounts for bulk orders and recurring customers. Contact us to know more.",
      },
      {
        question: "How can I contact support?",
        answer:
          "You can reach us via phone, email, or WhatsApp for inquiries, custom orders, and after-sales support.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Our Products");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-8 px-4 md:px-10 text-black overflow-hidden font-raleway"
      style={{
        background: `linear-gradient(to bottom, ${colors.whitePure}, #f9fff9, ${colors.whitePure})`,
      }}
      aria-labelledby="faq-heading"
    >
      {/* Heading */}
      <div className="text-center pb-12">
        <h2
          id="faq-heading"
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ color: colors.orangeGold }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
          Clear answers to common questions about{" "}
          <span style={{ color: colors.deepBlue, fontWeight: "600" }}>
            Gautam Bamboo Chick Maker
          </span>{" "}
          products and services.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        {/* Left Tabs */}
        <div
          className="md:w-1/3 p-6 flex flex-col gap-4"
          style={{ backgroundColor: colors.leafGreen }}
        >
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              className={`text-left w-full px-5 py-4 rounded-2xl flex items-center gap-3 font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === category
                  ? "bg-white text-black shadow-lg"
                  : "bg-leafGreen text-white hover:bg-orange-100 hover:text-black"
              }`}
              aria-selected={activeTab === category}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Right Questions */}
        <div
          id="faq-content"
          className="md:w-2/3 p-6 sm:p-10 bg-white rounded-r-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-4">
                  <button
                    className="w-full flex cursor-pointer justify-between items-center text-left font-medium text-base sm:text-lg hover:bg-gray-50 transition-colors duration-300 px-3 py-2 rounded-md"
                    onClick={() =>
                      setOpenIndex(index === openIndex ? null : index)
                    }
                    aria-expanded={openIndex === index}
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-bold"
                      style={{ color: colors.brightRed }}
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 mt-3 text-sm leading-relaxed overflow-hidden px-3"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
