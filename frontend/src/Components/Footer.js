import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import logo from "./images/IMG-20251008-WA0008logo0.png";
import { Link } from "react-router-dom";

const API_BASE_URL = "http://127.0.0.1:3000/api/v1";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      setNewsletterError("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError("Please enter a valid email address");
      return;
    }
    setNewsletterSubmitting(true);
    setNewsletterError("");
    setNewsletterSuccess(false);
    try {
      const response = await fetch(`${API_BASE_URL}/newsletters`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          email: newsletterEmail 
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setNewsletterSuccess(true);
        setNewsletterEmail("");
        // Clear success message after 5 seconds
        setTimeout(() => setNewsletterSuccess(false), 5000);
      } else {
        setNewsletterError(data.errors?.join(', ') || data.message || "Subscription failed. Please try again.");
        // Clear error message after 5 seconds
        setTimeout(() => setNewsletterError(""), 5000);
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setNewsletterError("Network error. Please check your connection and try again.");
      setTimeout(() => setNewsletterError(""), 5000);
    } finally {
      setNewsletterSubmitting(false);
    }
  };
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, rgba(255,147,6,0.03) 0px, rgba(255,147,6,0.03) 1px, transparent 1px, transparent 60px),
              repeating-linear-gradient(0deg, rgba(255,147,6,0.03) 0px, rgba(255,147,6,0.03) 1px, transparent 1px, transparent 60px)
            `,
          }}
        />
      </div>
      {/* Gradient orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand & Contact */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Tibos Infrastructure Logo"
                className="h-14 object-contain mb-2"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering quality construction services for homes, businesses, and communities across Kenya.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF9306] hover:to-[#FF6A00] hover:text-black transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4 text-gray-400 group-hover:text-black transition" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF9306] hover:to-[#FF6A00] hover:text-black transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-4 w-4 text-gray-400 group-hover:text-black transition" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF9306] hover:to-[#FF6A00] hover:text-black transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4 text-gray-400 group-hover:text-black transition" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF9306] hover:to-[#FF6A00] hover:text-black transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4 text-gray-400 group-hover:text-black transition" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF9306] hover:to-[#FF6A00] hover:text-black transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-4 w-4 text-gray-400 group-hover:text-black transition" />
              </a>
            </div>
            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <a
                href="tel:+254795841227"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF9306] transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FF9306] group-hover:to-[#FF6A00] transition-all duration-300">
                  <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-gray-400 group-hover:text-black" />
                </div>
                <span>+254 795 841 227</span>
              </a>
              <a
                href="mailto:info@tibosltd.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF9306] transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FF9306] group-hover:to-[#FF6A00] transition-all duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-gray-400 group-hover:text-black" />
                </div>
                <span>info@tibosltd.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 text-gray-400" />
                </div>
                <span>Chebilat along Kisii-sotik Road, Kisii, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5 text-gray-400" />
                </div>
                <span>Mon-Fri: 8AM - 6PM</span>
              </div>
            </div>
          </div>
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 pb-2 border-b border-[#FF9306]/30 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/designs" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Designs Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 pb-2 border-b border-[#FF9306]/30 inline-block">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/policy" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-[#FF9306] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FF9306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter & CTA */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 pb-2 border-b border-[#FF9306]/30 inline-block">
              Stay Updated
            </h3>
            
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest projects and design inspiration.
            </p>
            
            {/* Newsletter Success Message */}
            {newsletterSuccess && (
              <div className="mb-3 p-2 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400 text-xs">
                <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
                <span>Successfully subscribed!</span>
              </div>
            )}
            
            {/* Newsletter Error Message */}
            {newsletterError && (
              <div className="mb-3 p-2 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400 text-xs">
                <FontAwesomeIcon icon={faTimesCircle} className="text-sm" />
                <span>{newsletterError}</span>
              </div>
            )}
            
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF9306] transition-colors"
                disabled={newsletterSubmitting}
              />
              <button 
                type="submit"
                disabled={newsletterSubmitting}
                className="w-full bg-gradient-to-r from-[#FF6A00] to-[#FF9306] text-white font-semibold py-2.5 rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {/* CTA Buttons */}
            <div className="mt-6 space-y-3">
              <Link
                to="/contact"
                className="block border border-[#FF9306]/50 text-center px-4 py-2.5 rounded-lg text-white hover:bg-[#FF9306] hover:text-black transition-all duration-300 text-sm font-medium"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/partnership"
                className="block border border-white/20 text-center px-4 py-2.5 rounded-lg text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Tibos Limited. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <Link to="/policy" className="text-gray-500 hover:text-[#FF9306] text-xs transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#FF9306] text-xs transition-colors">
                Terms
              </Link>
              <Link to="/loginform" className="text-gray-500 hover:text-[#FF9306] text-xs transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;