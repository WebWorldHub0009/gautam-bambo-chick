// src/components/OurTeam.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const teamMembers = [
  { name: "Gautam", position: "Founder & Visionary", linkedin: "#" },
  { name: "Gaurav", position: "Operations Head", linkedin: "#" },
  { name: "Kanchan", position: "Creative Designer", linkedin: "#" },
  { name: "Anjali", position: "Finance & Accounts", linkedin: "#" },
  { name: "Rudra", position: "Quality Supervisor", linkedin: "#" },
  { name: "Prachi", position: "Customer Relations", linkedin: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatAnimation = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export default function OurTeam() {
  return (
    <section
      className="py-10 px-4 md:px-20 relative overflow-hidden font-[Poppins]"
      style={{
        background: `linear-gradient(135deg, ${colors.whitePure}, #f4f4f4, ${colors.leafGreen}15)`,
        color: colors.blackPure,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full mx-auto text-center"
      >
        <motion.h4
          variants={itemVariants}
          className="font-semibold mb-2 text-md uppercase tracking-wider"
          style={{ color: colors.brightRed }}
        >
          Crafted with Passion
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-[Great_Vibes] mb-4"
          style={{ color: colors.deepBlue }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-8 text-lg"
          style={{ color: colors.blackPure }}
        >
          The artisans and professionals at{" "}
          <span style={{ color: colors.orangeGold, fontWeight: "600" }}>
            Gautam Bamboo Chick Maker
          </span>{" "}
          combine tradition with innovation, ensuring every product reflects
          elegance, durability, and eco-friendly craftsmanship.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <Link to="/contact">
            <button
              className="px-7 py-3 rounded-full transition text-lg shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${colors.orangeGold}, ${colors.brightRed})`,
                color: colors.whitePure,
              }}
            >
              Contact Us
            </button>
          </Link>
          <Link to="/products">
            <button
              className="px-7 py-3 rounded-full border transition text-lg shadow-lg"
              style={{
                borderColor: colors.deepBlue,
                color: colors.deepBlue,
              }}
            >
              Explore Products
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <ProfileCard member={member} colors={colors} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Laptop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} colors={colors} />
        ))}
      </div>
    </section>
  );
}

function ProfileCard({ member, colors }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
      className="flex flex-col items-center space-y-3"
    >
      <motion.div
        {...floatAnimation}
        className="w-28 h-28 rounded-full shadow-xl flex items-center justify-center"
        style={{
          border: `2px solid ${colors.orangeGold}`,
          backgroundColor: `${colors.leafGreen}15`,
        }}
      >
        <FaUserCircle className="text-6xl" style={{ color: colors.brightRed }} />
      </motion.div>
      <h4
        className="font-semibold text-2xl"
        style={{ color: colors.deepBlue }}
      >
        {member.name}
      </h4>
      <p className="text-base" style={{ color: colors.blackPure }}>
        {member.position}
      </p>
      <div
        className="flex gap-6 text-2xl transition"
        style={{ color: colors.deepBlue }}
      >
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#E8452D]" />
        </a>
      </div>
    </motion.div>
  );
}
