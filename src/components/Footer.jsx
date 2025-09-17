// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgFooter from "../assets/home/a.jpg"; // Add a professional footer background image

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
  softGray: "#D9D9D9",
};

const products = [
  { title: "Bamboo Jafhari", slug: "bamboo-jafhari" },
  { title: "Design Wali Chick", slug: "design-wali-chick" },
  { title: "Kabutar Jali", slug: "kabutar-jali" },
  { title: "Roller Blind", slug: "roller-blind" },
  { title: "Bamboo Huts", slug: "bamboo-huts" },
  { title: "Bird Net & Fancy Chick Maker", slug: "bird-net-fancy-chick-maker" },
];

export default function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="relative pt-16 pb-16 px-6 md:px-16 font-[Zen Dots] overflow-hidden text-whitePure">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgFooter})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <p
            className="text-3xl md:text-5xl font-bold tracking-wide"
            style={{ color: colors.leafGreen, fontFamily: "'Italiana', serif" }}
          >
            Gautam Bamboo Chick Maker
          </p>
          <p className="leading-relaxed text-whitePure text-lg mt-2">
            Premium bamboo products and chick makers for secure, eco-friendly,
            and aesthetic farming solutions.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=919815397632&text=Hello%20Gautam%20Bamboo%20Chick%20Maker",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-leafGreen hover:bg-orangeGold text-blackPure transition duration-300 shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Email Button */}
          <div className="mt-4">
            <a
              href="mailto:gautambamboochickmaker@gmail.com"
              className="inline-flex items-center gap-2 bg-leafGreen text-blackPure px-4 py-2 rounded-lg font-semibold hover:bg-orangeGold transition duration-300 shadow-md"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Products", "/products", <FaTruckMoving />],
              ["Contact Us", "/contact", <FaContao />],
              ["Certificates", "/certificate", <FaCertificate />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-whitePure hover:text-leafGreen transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="text-3xl font-semibold mt-6 mb-2" style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}>
            Business Info
          </h4>
          <ul className="space-y-2 text-whitePure">
            <li>UDYAM: **********</li>
            <li>GSTIN: **********</li>
            <li>License No: **********</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}>
            Products
          </h4>
          <ul className="space-y-3">
            {products.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving style={{ color: colors.leafGreen }} />
                <Link
                  to={`/products/${slug}`}
                  className="text-whitePure hover:text-leafGreen transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Emails */}
          <div className="mt-6">
            <h5 className="text-xl font-semibold mb-2" style={{ color: colors.orangeGold }}>
              Email
            </h5>
            {[
              "Info@gautambamboochickmaker.in",
              "gautambamboochickmaker@gmail.com",
            ].map((email, i) => (
              <p key={i} className="text-sm mb-2 flex items-center gap-2">
                <FaEnvelope style={{ color: colors.leafGreen }} />
                <a href={`mailto:${email}`} className="hover:text-leafGreen transition duration-300">
                  {email}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}>
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4">
            Plot No. 17 Ground Floor, Tech Zone IV, Nearby D-Mart, Amrapali Dream
            Valley, Greater Noida, Uttar Pradesh 201318
          </address>

          {["+91 9811367632", "+91 9315393747"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2">
              <FaPhoneAlt style={{ color: colors.leafGreen }} />
              <a href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-leafGreen transition duration-300">
                {num}
              </a>
            </p>
          ))}

          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt style={{ color: colors.leafGreen }} /> Owner: Gautam Kumar
          </p>

          <div className="mb-4 flex justify-start items-center">
            <Translator />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-xs text-whitePure border-t border-gray-400 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Gautam Bamboo Chick Maker. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-leafGreen transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
