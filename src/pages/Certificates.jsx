// src/pages/CertificatePage.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import udyam from "../assets/product/udyam.pdf";
import udyam1 from "../assets/product/udyam1.pdf";
import CertificateHero from "../components/CertificateHero";

const colors = {
  deepBlue: "#234A8A",
  leafGreen: "#2BA44A",
  orangeGold: "#F4A300",
  whitePure: "#FFFFFF",
  darkBg: "#1C1C1C",
};

const certificates = [
  {
    id: 1,
    name: "Udyam Registration 1",
    description:
      "Official government-approved certificate ensuring compliance and customer confidence.",
    file: udyam1,
    tag: "Govt Approved",
  },
  {
    id: 2,
    name: "Udyam Registration",
    description:
      "Udyam Registration Certificate under MSME, validating Gautam Bamboo Chick Maker as a trusted enterprise.",
    file: udyam,
    tag: "MSME Verified",
  },
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* Hero */}
      <CertificateHero />

      {/* Certificates Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f9fafc] to-white py-14 px-6 font-[Raleway]">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16" id="docs">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Verified{" "}
              <span style={{ color: colors.leafGreen }}>Certificates</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              At{" "}
              <span className="font-bold" style={{ color: colors.deepBlue }}>
                Gautam Bamboo Chick Maker
              </span>
              , we believe in{" "}
              <span className="font-semibold" style={{ color: colors.orangeGold }}>
                transparency & trust
              </span>
              . Explore our official documents that validate our compliance and
              quality standards.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {certificates.map(({ id, name, description, file, tag }) => (
              <div
                key={id}
                className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#2BA44A] to-[#234A8A] text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse">
                  {tag}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <HiDocumentText
                    className="text-4xl"
                    style={{ color: colors.orangeGold }}
                  />
                  <h2 className="text-xl font-bold" style={{ color: colors.deepBlue }}>
                    {name}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-base leading-relaxed flex-1">
                  {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <button
                    onClick={() => setPreviewFile(file)}
                    className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#2BA44A] to-[#234A8A] hover:from-[#234A8A] hover:to-[#2BA44A] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition"
                  >
                    <FaEye />
                    View
                  </button>

                  <a
                    href={file}
                    download
                    className="w-full sm:w-auto flex-1 border border-[#F4A300] text-[#F4A300] hover:bg-[#F4A300] hover:text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow transition"
                  >
                    <FaDownload />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section
        className="relative text-white py-20 px-6"
        style={{
          background: `linear-gradient(135deg, ${colors.deepBlue}, ${colors.leafGreen})`,
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-[#F4A300] text-5xl mb-4" />
            <h3 className="text-xl font-bold">Government Approved</h3>
            <p className="mt-2 text-gray-200 text-sm">
              All our certificates are verified and approved by government
              authorities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold">100% Authentic</h3>
            <p className="mt-2 text-gray-200 text-sm">
              Genuine legal documents that ensure transparency and trust.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserTie className="text-[#F4A300] text-5xl mb-4" />
            <h3 className="text-xl font-bold">Trusted Brand</h3>
            <p className="mt-2 text-gray-200 text-sm">
              Serving satisfied customers with credibility for years.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;
