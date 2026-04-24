import React from "react";
import worker1 from "./images/homedp.png";
import worker2 from "./images/homedp2.png";
import site from "./images/Larger A.jpg";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#020617]">
      {/* ===== BACKGROUND SPLIT WITH TILT ===== */}
      {/* Dark side (left) */}
      <div className="absolute inset-0 bg-[#020617] z-0" />
      
      {/* White side (right) with tilt - hidden on mobile, visible on lg */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[55%] origin-top-left hidden lg:block z-0"
        style={{
          transform: "skewX(-8deg)",
          transformOrigin: "top left",
          marginRight: "-2%"
        }}
      >
        <div className="absolute inset-0 bg-white" />
        
        {/* Subtle mesh pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FF9306 1px, transparent 1px),
              linear-gradient(to bottom, #FF9306 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent" />
      </div>

      {/* ===== MESH PATTERN OVERLAY (dark side) ===== */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,147,6,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,147,6,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* ===== GRADIENT ATMOSPHERE ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-0" />

      {/* ===== DIVIDING LINE (visible on desktop) ===== */}
      <div 
        className="absolute top-0 bottom-0 w-px z-10 hidden lg:block"
        style={{
          left: "50%",
          transform: "skewX(-8deg) translateX(-50%)",
          transformOrigin: "top left",
          background: "linear-gradient(to bottom, transparent, #FF9306, #FF6A00, #FF9306, transparent)"
        }}
      />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* ===== LEFT COLUMN - TEXT CONTENT ===== */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* BADGE */}
          <div className="w-full flex justify-start">
            <div className="inline-flex mx-auto lg:mx-0 items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9306] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9306]"></span>
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wide">SINCE 2010</span>
            </div>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.15] md:leading-[1.1] tracking-[-0.02em] font-bold text-white">
              Transforming Ideas
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                into Stunning Structures
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              From concept to completion, we deliver quality construction services
              for homes, businesses, and communities worldwide.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                <Link to='/portfolio'><span className="relative z-10">Explore Our Projects</span></Link>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="border border-[#FF9306]/60 px-8 py-3.5 text-white font-semibold rounded-lg hover:bg-[#FF9306]/10 hover:border-[#FF9306] transition-all duration-300 backdrop-blur-sm">
                <Link to='/request-estimate'>Get a Free Quote →</Link>
              </button>
            </div>

            {/* FEATURE BLOCK */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 justify-center lg:justify-start">
              {/* IMAGE CIRCLE */}
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF9306]/40 to-[#FF6A00]/40 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-[#FF9306] overflow-hidden shadow-xl">
                  <img 
                    src={site} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="Construction site" 
                  />
                </div>
              </div>

              {/* STATS / TAG */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="bg-white/5 backdrop-blur-md rounded-full px-6 py-2.5 border border-[#FF9306]/30">
                  <span className="text-[#FF9306] font-bold text-lg">250+</span>
                  <span className="text-white/80 text-sm ml-2">Projects Completed</span>
                </div>
                <div className="text-gray-400 text-xs mt-2 hidden sm:block">Trusted by industry leaders</div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN - VISUAL CONTENT ===== */}
          <div className="relative flex justify-center items-end min-h-[400px] md:min-h-[500px] lg:min-h-[560px] mt-12 lg:mt-0">
            {/* DECORATIVE BACKGROUND ELEMENTS */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-amber-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#FF9306]/10 rounded-full blur-2xl" />

            {/* BACK IMAGE (depth) */}
            <div className="absolute right-0 bottom-0 w-[260px] md:w-[320px] lg:w-[360px] opacity-90 pointer-events-none">
              <img
                src={worker2}
                className="w-full object-contain drop-shadow-2xl"
                alt="Worker background"
                style={{ filter: "brightness(0.95) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent mix-blend-overlay lg:opacity-0"></div>
            </div>

            {/* FRONT IMAGE (hero) */}
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF9306]/20 via-transparent to-transparent rounded-3xl blur-2xl -z-10"></div>
              <img
                src={worker1}
                className="w-[280px] md:w-[360px] lg:w-[420px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                alt="Construction worker"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-8 left-0 md:-left-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-3 md:p-4 max-w-[180px] md:max-w-[220px] animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF9306] to-[#FF6A00] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Quality Guaranteed</p>
                  <p className="font-bold text-gray-800 text-sm">ISO 9001:2024</p>
                </div>
              </div>
            </div>

            {/* RATING BADGE */}
            <div className="absolute top-8 right-4 md:right-8 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 border border-white/20 hidden sm:flex items-center gap-2">
              <span className="text-amber-400 text-sm md:text-base">★★★★★</span>
              <span className="text-white text-xs md:text-sm font-medium">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20 animate-bounce">
        <span className="text-gray-400 text-xs tracking-wider">SCROLL</span>
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS or Tailwind config for the float animation
// @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
// .animate-float { animation: float 4s ease-in-out infinite; }