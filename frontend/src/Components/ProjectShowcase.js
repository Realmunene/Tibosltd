import React, { useState } from "react";
import podCityLogo from "./images/2 coneected.jpg";
import zuriHouseBefore from "./images/2 connected room.jpg";
import zuriHouseAfter from "./images/2 connected.jpg";
import crestHouseBefore from "./images/2BA.jpg";
import crestHouseAfter from "./images/Larger A.jpg";
import residenceOlkeriBefore from "./images/LargerApartment.jpg";
import residenceOlkeriAfter from "./images/flower.jpg";
import { Link } from "react-router-dom";

export default function ProjectShowcase() {
  const [viewMode, setViewMode] = useState("day");
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Zuri House",
      location: "Tuala, Kajiado County",
      category: "Residential",
      beforeImage: zuriHouseBefore,
      afterImage: zuriHouseAfter,
      description: "Modern residential transformation with eco-friendly materials and sustainable design.",
    },
    {
      id: 2,
      title: "Crest House",
      location: "Karen, Nairobi County",
      category: "Commercial",
      beforeImage: crestHouseBefore,
      afterImage: crestHouseAfter,
      description: "Commercial space renovation featuring contemporary architecture and premium finishes.",
    },
    {
      id: 3,
      title: "Residence at Olkeri",
      location: "Ngong, Kajiado County",
      category: "Luxury Villa",
      beforeImage: residenceOlkeriBefore,
      afterImage: residenceOlkeriAfter,
      description: "Luxury villa construction with breathtaking views and custom craftsmanship.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-14 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
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
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF9306]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          {/* Logo/Brand Badge */}
          <div className="w-full flex justify-start">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">PREMIUM CONSTRUCTION</span>
          </div>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Tibosltd (by Mjengoman)
            </span>
            <br />
            <span className="text-white">has done this before</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Transforming visions into reality with exceptional craftsmanship and attention to detail
          </p>
        </div>
        {/* Day/Night Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10 inline-flex gap-2">
            <button
              onClick={() => setViewMode("day")}
              className={`px-8 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === "day"
                  ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-white shadow-lg shadow-[#FF9306]/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>☀️</span> Day
            </button>
            <button
              onClick={() => setViewMode("night")}
              className={`px-8 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === "night"
                  ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-white shadow-lg shadow-[#FF9306]/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>🌙</span> Night
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Image Container with Before/After effect */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Main Image */}
                <img
                  src={viewMode === "day" ? project.afterImage : project.beforeImage}
                  alt={`${project.title} - ${viewMode === "day" ? "After" : "Before"}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                  <span className="text-[#FF9306] text-xs font-semibold">{project.category}</span>
                </div>

                {/* Before/After Badge */}
                <div className="absolute top-4 right-4 bg-[#FF9306]/90 backdrop-blur-md rounded-lg px-3 py-1.5">
                  <span className="text-black text-xs font-bold">
                    {viewMode === "day" ? "AFTER" : "BEFORE"}
                  </span>
                </div>

                {/* Floating action on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black font-semibold px-6 py-2.5 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                   View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#FF9306] transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <svg className="w-4 h-4 text-[#FF9306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{project.location}</span>
                </div>

                {/* Description - appears on hover */}
                <div className={`overflow-hidden transition-all duration-300 ${activeProject === project.id ? 'max-h-24 mt-3' : 'max-h-0'}`}>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FF9306]/20 flex items-center justify-center">
                      <span className="text-[#FF9306] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-500 text-xs">Quality Assured</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#FF9306] text-sm font-medium">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-10 py-4 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Link to='/portfolio'>View All Projects</Link>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF9306]/10 flex items-center justify-center">
              <span className="text-[#FF9306] text-xl">🏆</span>
            </div>
            <div>
              <p className="text-white font-semibold">250+</p>
              <p className="text-gray-500 text-xs">Projects Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF9306]/10 flex items-center justify-center">
              <span className="text-[#FF9306] text-xl">⭐</span>
            </div>
            <div>
              <p className="text-white font-semibold">4.9/5</p>
              <p className="text-gray-500 text-xs">Client Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF9306]/10 flex items-center justify-center">
              <span className="text-[#FF9306] text-xl">🔧</span>
            </div>
            <div>
              <p className="text-white font-semibold">10+ Years</p>
              <p className="text-gray-500 text-xs">Of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}