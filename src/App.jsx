// src/App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ModernNavbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

// ✅ Global LazyImage Component
export const LazyImage = ({ src, alt, className = "", ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy" // native lazy loading
      className={className}
      {...rest}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ModernNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingButtons />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
