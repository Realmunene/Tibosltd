import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./images/IMG-20251008-WA0008logo0.png";
import {
  faHouse,
  faUmbrellaBeach,
  faGlobe,
  faHandshake,
  faUser,
  faBars,
  faXmark,
  faChevronDown,
  faCalendarCheck,
  faReceipt,
  faFileInvoiceDollar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({
  onLoginClick,
  onPartnerClick,
  setActiveSection,
  user,
  onLogout,
  admin,
  onAdminLogout,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  // State for dropdown menus
  const [showBuildNow, setShowBuildNow] = useState(false);
  const [showEstimators, setShowEstimators] = useState(false);
  const buildNowTimeoutRef = useRef(null);
  const estimatorsTimeoutRef = useRef(null);
  const buildNowHoverRef = useRef(null);
  const estimatorsHoverRef = useRef(null);

  // --- Helper to get user display name ---
  const getDisplayName = (u) => {
    if (!u) return null;
    if (u.first_name?.trim()) return u.first_name;
    if (u.name?.trim()) return u.name.split(" ")[0];
    if (u.email) return u.email.split("@")[0];
    return "User";
  };
  const displayName = getDisplayName(user);

  // --- Helper to get admin display name ---
  const getAdminDisplayName = (admin) => {
    if (!admin) return null;
    return admin.name || admin.email.split('@')[0];
  };
  const adminDisplayName = getAdminDisplayName(admin);

  // --- Close user menu if clicked outside ---
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Navigation handlers ---
  const handleHomeClick = () => {
    setActiveSection("home");
    setShowMenu(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMyBookings = () => {
    setShowUserMenu(false);
    setShowMenu(false);
    navigate("/mybookings");
  };

  const handleAdminDashboard = () => {
    setShowUserMenu(false);
    setShowMenu(false);
    navigate("/admin/dashboard");
  };

  // --- Logout handler for regular users ---
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken") || (user && user.token);
      
      const response = await fetch("http://127.0.0.1:3000/api/v1/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token ? `Bearer ${token}` : "",
        },
      });

      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      
      window.dispatchEvent(new CustomEvent('userLoggedOut'));
      
      if (typeof onLogout === "function") {
        onLogout();
      }
      
      setShowUserMenu(false);
      setShowMenu(false);
      
      console.log("Logout successful");
      alert("✅ Logged out successfully!");
      navigate("/");

    } catch (error) {
      console.error("Logout error:", error);
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      window.dispatchEvent(new CustomEvent('userLoggedOut'));
      
      if (typeof onLogout === "function") {
        onLogout();
      }
      setShowUserMenu(false);
      setShowMenu(false);
      
      alert("✅ Logged out successfully!");
      navigate("/");
    }
  };

  // --- Admin logout handler ---
  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminRole");
    localStorage.removeItem("adminName");
    
    if (typeof onAdminLogout === "function") {
      onAdminLogout();
    }
    setShowUserMenu(false);
    setShowMenu(false);
    alert("✅ Admin logged out successfully!");
    navigate("/");
  };

  // Dropdown handlers with delay - FIXED for desktop
  const handleBuildNowMouseEnter = () => {
    if (buildNowTimeoutRef.current) clearTimeout(buildNowTimeoutRef.current);
    setShowBuildNow(true);
  };

  const handleBuildNowMouseLeave = () => {
    buildNowTimeoutRef.current = setTimeout(() => {
      setShowBuildNow(false);
    }, 200);
  };

  const handleEstimatorsMouseEnter = () => {
    if (estimatorsTimeoutRef.current) clearTimeout(estimatorsTimeoutRef.current);
    setShowEstimators(true);
  };

  const handleEstimatorsMouseLeave = () => {
    estimatorsTimeoutRef.current = setTimeout(() => {
      setShowEstimators(false);
    }, 200);
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (buildNowTimeoutRef.current) clearTimeout(buildNowTimeoutRef.current);
      if (estimatorsTimeoutRef.current) clearTimeout(estimatorsTimeoutRef.current);
    };
  }, []);

  // Navigation handlers for dropdown items
  const handleBuildNowItemClick = (path) => {
    setShowBuildNow(false);
    setShowMenu(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEstimatorItemClick = (path) => {
    setShowEstimators(false);
    setShowMenu(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePortfolioClick = () => {
    setShowMenu(false);
    navigate("/portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    setShowMenu(false);
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBlogClick = () => {
    setShowMenu(false);
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRequestEstimate = () => {
    setShowMenu(false);
    navigate("/request-estimate");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScheduleConsultation = () => {
    setShowMenu(false);
    navigate("/schedule-consultation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-white/75 backdrop-blur-sm shadow-lg border-b border-gray-200 z-50">
      {/* Main Navbar Container */}
      <div className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between z-40">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="flex items-center space-x-3 focus:outline-none group"
            onClick={() => {
              setActiveSection("home");
              setShowMenu(false);
            }}
          >
            <img
              src={logo}
              alt="Tibos Logo"
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-900 bg-clip-text text-transparent hidden sm:inline-block">
              Tibos Limited
            </span>
          </Link>
        </div>

        {/* Center Menu - Desktop */}
        <div className="hidden lg:flex space-x-8 font-medium">
          {/* Build Now Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleBuildNowMouseEnter}
            onMouseLeave={handleBuildNowMouseLeave}
          >
            <button className="hover:text-[#FF9306] transition-colors duration-200 py-2">
              Build Now
            </button>

            {showBuildNow && (
              <div className="absolute left-0 bg-white shadow-lg mt-2 p-4 w-64 rounded-lg z-50 border border-gray-100">
                <div onClick={() => handleBuildNowItemClick("/rural-investments")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Rural Investments</div>
                <div onClick={() => handleBuildNowItemClick("/urban-investments")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Urban Investments</div>
                <div onClick={() => handleBuildNowItemClick("/backyard-renaissance")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Backyard Renaissance</div>
                <div onClick={() => handleBuildNowItemClick("/joint-venture")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Joint Venture Development</div>
                <div onClick={() => handleBuildNowItemClick("/nmtp")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Nunua Materials Tujenge Pamoja (NMTP)</div>
                <div onClick={() => handleBuildNowItemClick("/spi")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Small Parks Initiative (SPI)</div>
              </div>
            )}
          </div>

          {/* Estimators Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleEstimatorsMouseEnter}
            onMouseLeave={handleEstimatorsMouseLeave}
          >
            <button className="hover:text-[#FF9306] transition-colors duration-200 py-2">
              Building Costs & Estimators
            </button>

            {showEstimators && (
              <div className="absolute left-0 bg-white shadow-lg mt-2 p-4 w-80 rounded-lg z-50 border border-gray-100">
                <div onClick={() => handleEstimatorItemClick("/maisonette-cost")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Tibos Maisonette Cost Distribution</div>
                <div onClick={() => handleEstimatorItemClick("/52-week-challenge")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Tibos 52 Week Housing Challenge</div>
                <div onClick={() => handleEstimatorItemClick("/perimeter-wall-calculator")} className="hover:text-[#FF9306] cursor-pointer py-1 transition-colors duration-200">Tibos Perimeter Wall Cost Calculator</div>
              </div>
            )}
          </div>

          <div onClick={handlePortfolioClick} className="hover:text-[#FF9306] cursor-pointer transition-colors duration-200 py-2">Portfolio</div>
          <div onClick={handleAboutClick} className="hover:text-[#FF9306] cursor-pointer transition-colors duration-200 py-2">About Us</div>
          <div onClick={handleBlogClick} className="hover:text-[#FF9306] cursor-pointer transition-colors duration-200 py-2">Blog</div>
        </div>

        {/* Right Buttons - Desktop */}
        <div className="hidden lg:flex">
          <div className="flex">
            {/* Request Estimate Button */}
            <button 
              onClick={handleRequestEstimate}
              className="flex flex-col items-center justify-center bg-[#FF6B00] text-black px-6 py-3 hover:bg-[#FF5500] transition-colors duration-200 min-w-[120px]"
            >
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-2xl mb-2" />
              <span className="text-xs font-semibold tracking-wide">REQUEST</span>
              <span className="text-xs font-semibold tracking-wide">ESTIMATE</span>
            </button>

            {/* Schedule Consultation Button */}
            <button 
              onClick={handleScheduleConsultation}
              className="flex flex-col items-center justify-center bg-[#FF9306] text-black px-6 py-3 hover:bg-[#FF7A00] transition-colors duration-200 min-w-[120px]"
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl mb-2" />
              <span className="text-xs font-semibold tracking-wide">SCHEDULE</span>
              <span className="text-xs font-semibold tracking-wide">CONSULTATION</span>
            </button>
          </div>
        </div>

        {/* HAMBURGER MENU - MOBILE */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden text-gray-700 focus:outline-none w-12 h-12 bg-[#FF9306] rounded-full flex items-center justify-center hover:bg-[#FF7A00] transition-colors"
        >
          <FontAwesomeIcon 
            icon={showMenu ? faXmark : faBars} 
            className="text-black text-xl" 
          />
        </button>
      </div>

      {/* MOBILE MENU CONTENT */}
      {showMenu && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-xl">
          <div className="flex flex-col p-6 space-y-4">
            {/* Build Now Mobile Section */}
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => setShowBuildNow(!showBuildNow)}
                className="flex items-center justify-between text-gray-700 hover:text-[#FF9306] font-medium py-2"
              >
                <span>Build Now</span>
                <FontAwesomeIcon icon={faChevronDown} className={`text-gray-400 transition-transform duration-200 ${showBuildNow ? 'rotate-180' : ''}`} />
              </button>
              {showBuildNow && (
                <div className="pl-4 space-y-2 border-l-2 border-[#FF9306]">
                  <div onClick={() => handleBuildNowItemClick("/rural-investments")} className="hover:text-[#FF9306] cursor-pointer py-1">Rural Investments</div>
                  <div onClick={() => handleBuildNowItemClick("/urban-investments")} className="hover:text-[#FF9306] cursor-pointer py-1">Urban Investments</div>
                  <div onClick={() => handleBuildNowItemClick("/backyard-renaissance")} className="hover:text-[#FF9306] cursor-pointer py-1">Backyard Renaissance</div>
                  <div onClick={() => handleBuildNowItemClick("/joint-venture")} className="hover:text-[#FF9306] cursor-pointer py-1">Joint Venture Development</div>
                  <div onClick={() => handleBuildNowItemClick("/nmtp")} className="hover:text-[#FF9306] cursor-pointer py-1">Nunua Materials Tujenge Pamoja (NMTP)</div>
                  <div onClick={() => handleBuildNowItemClick("/spi")} className="hover:text-[#FF9306] cursor-pointer py-1">Small Parks Initiative (SPI)</div>
                </div>
              )}
            </div>

            {/* Estimators Mobile Section */}
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => setShowEstimators(!showEstimators)}
                className="flex items-center justify-between text-gray-700 hover:text-[#FF9306] font-medium py-2"
              >
                <span>Building Costs & Estimators</span>
                <FontAwesomeIcon icon={faChevronDown} className={`text-gray-400 transition-transform duration-200 ${showEstimators ? 'rotate-180' : ''}`} />
              </button>
              {showEstimators && (
                <div className="pl-4 space-y-2 border-l-2 border-[#FF9306]">
                  <div onClick={() => handleEstimatorItemClick("/maisonette-cost")} className="hover:text-[#FF9306] cursor-pointer py-1">Tibos Maisonette Cost Distribution</div>
                  <div onClick={() => handleEstimatorItemClick("/52-week-challenge")} className="hover:text-[#FF9306] cursor-pointer py-1">Tibos 52 Week Housing Challenge</div>
                  <div onClick={() => handleEstimatorItemClick("/perimeter-wall-calculator")} className="hover:text-[#FF9306] cursor-pointer py-1">Tibos Perimeter Wall Cost Calculator</div>
                </div>
              )}
            </div>

            <div onClick={handlePortfolioClick} className="hover:text-[#FF9306] cursor-pointer font-medium py-2">Portfolio</div>
            <div onClick={handleAboutClick} className="hover:text-[#FF9306] cursor-pointer font-medium py-2">About Us</div>
            <div onClick={handleBlogClick} className="hover:text-[#FF9306] cursor-pointer font-medium py-2">Blog</div>

            {/* Mobile Action Buttons */}
            <div className="flex pt-4 border-t border-gray-200">
              <button 
                onClick={handleRequestEstimate}
                className="flex flex-col items-center justify-center bg-[#FF6B00] text-black px-4 py-3 hover:bg-[#FF5500] transition-colors duration-200 flex-1"
              >
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-xl mb-2" />
                <span className="text-xs font-semibold tracking-wide">REQUEST</span>
                <span className="text-xs font-semibold tracking-wide">ESTIMATE</span>
              </button>

              <button 
                onClick={handleScheduleConsultation}
                className="flex flex-col items-center justify-center bg-[#FF9306] text-black px-4 py-3 hover:bg-[#FF7A00] transition-colors duration-200 flex-1"
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="text-xl mb-2" />
                <span className="text-xs font-semibold tracking-wide">SCHEDULE</span>
                <span className="text-xs font-semibold tracking-wide">CONSULTATION</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}