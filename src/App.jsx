import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModernNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import CertificatePage from "./pages/Certificates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermAndConditions";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Global LazyImage Component
export const LazyImage = ({ src, alt, className = "", ...rest }) => (
  <img src={src} alt={alt} loading="lazy" className={className} {...rest} />
);

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <ModernNavbar />

      {/* Suspense wrapper shows fallback while pages load */}
      <Suspense fallback={<div className="text-center py-20 text-xl text-gray-700">Loading...</div>}>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
           <Route path="/term&condition" element={<TermsAndConditions />} />
        </Routes>
      </Suspense>

      <FloatingButtons />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
