import React, { useState, useEffect } from "react";
import img from "./images/2 connected room.jpg";
import { Link } from "react-router-dom";

// Import additional project images (replace with your actual images)
import project1Img from "./images/apartment1.jpg";
import project2Img from "./images/gateC.jpg";
import project3Img from "./images/comercial.jpg";
import project4Img from "./images/rental.jpg";
import project5Img from "./images/images (3).jpg";
import project6Img from "./images/image4.jpg";

export default function CurrentProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentProjects = [
    {
      id: 1,
      title: "Serenity Heights",
      location: "Kisii, Kisii Town",
      type: "Luxury Apartment Complex",
      progress: 85,
      completionDate: "October 2026",
      image: project1Img || img,
      description: "A 20-story luxury apartment complex featuring modern amenities, rooftop gardens, and sustainable energy solutions.",
      features: ["20 Stories", "120 Units", "Rooftop Pool", "Solar Powered"],
      status: "In Progress"
    },
    {
      id: 2,
      title: "Green Valley Estate",
      location: "Kiambu Road, Kiambu",
      type: "Gated Community",
      progress: 55,
      completionDate: "August 2025",
      image: project2Img || img,
      description: "Exclusive gated community with 50 luxury villas, clubhouse, and landscaped gardens in a serene environment.",
      features: ["50 Villas", "Clubhouse", "Security System", "Landscaped Gardens"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Tech Hub Towers",
      location: "Upper Hill, Nairobi",
      type: "Commercial Complex",
      progress: 10,
      completionDate: "December 2024",
      image: project3Img || img,
      description: "State-of-the-art commercial tower designed for modern businesses with flexible office spaces and conference facilities.",
      features: ["30 Floors", "Smart Offices", "Parking", "Conference Center"],
      status: "Almost Complete"
    },
    {
      id: 4,
      title: "Annex Complex",
      location: "Chebilat Center, Kisii",
      type: "Retail Development",
      progress: 30,
      completionDate: "October 2025",
      image: project4Img || img,
      description: "Modern shopping mall featuring retail spaces, food court, entertainment zone, and ample parking.",
      features: ["50+ Stores", "Food Court", "Cinema", "Kids Area"],
      status: "In Progress"
    },
    {
      id: 5,
      title: "Coastal Resort & Spa",
      location: "Diani Beach, Mombasa",
      type: "Hospitality",
      progress: 80,
      completionDate: "June 2025",
      image: project5Img || img,
      description: "Beachfront resort with luxury suites, spa facilities, restaurants, and conference amenities.",
      features: ["80 Suites", "Spa", "Pool", "Beach Access"],
      status: "In Progress"
    },
    {
      id: 6,
      title: "Industrial Park Phase 1",
      location: "Athiriver, Machakos",
      type: "Industrial",
      progress: 95,
      completionDate: "December 2025",
      image: project6Img || img,
      description: "Large-scale industrial park with warehouses, manufacturing units, and logistics facilities.",
      features: ["Warehouses", "Manufacturing", "Logistics Hub", "24/7 Security"],
      status: "Just Started"
    },
  ];

  // Auto-rotate featured project
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentProjects.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-12 overflow-hidden">
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
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="w-full flex justify-start">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">ONGOING DEVELOPMENTS</span>
          </div>
          </div>
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Tibos
            </span>
            <br />
            <span className="text-white">Current Projects</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Shaping the future through innovative construction and exceptional craftsmanship
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="mb-20">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <img
                  src={currentProjects[currentSlide].image}
                  alt={currentProjects[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-lg px-4 py-2">
                  <span className="text-black font-bold text-sm">FEATURED PROJECT</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#FF9306] text-sm font-semibold">{currentProjects[currentSlide].type}</span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-400 text-sm">{currentProjects[currentSlide].location}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {currentProjects[currentSlide].title}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {currentProjects[currentSlide].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProjects[currentSlide].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Construction Progress</span>
                    <span className="text-[#FF9306] font-semibold">{currentProjects[currentSlide].progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full transition-all duration-1000"
                      style={{ width: `${currentProjects[currentSlide].progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Started: Q1 2024</span>
                    <span>Est. Completion: {currentProjects[currentSlide].completionDate}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-6 py-2.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 w-fit">
                  <span className="relative z-10 flex items-center gap-2">
                    View Project Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {currentProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 h-2 bg-[#FF9306] rounded-full"
                      : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Progress Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                  <span className="text-[#FF9306] text-xs font-semibold">{project.progress}% Complete</span>
                </div>

                {/* Status Tag */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-lg px-3 py-1">
                  <span className="text-black text-xs font-bold">{project.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#FF9306] transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <svg className="w-3 h-3 text-[#FF9306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{project.location}</span>
                </div>

                <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                  {project.type}
                </p>

                {/* Progress Bar Mini */}
                <div className="mb-3">
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                <div className={`overflow-hidden transition-all duration-300 ${selectedProject === project.id ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                  <p className="text-gray-400 text-xs leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10">
                  <span className="text-gray-500 text-xs">Est. {project.completionDate}</span>
                  <button className="text-[#FF9306] text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {selectedProject === project.id ? "Show Less" : "Learn More"}
                    <svg className={`w-3 h-3 transition-transform ${selectedProject === project.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="group relative bg-white/5 backdrop-blur-sm border border-[#FF9306]/30 px-8 py-3 text-white font-semibold rounded-lg hover:bg-[#FF9306]/10 hover:border-[#FF9306] transition-all duration-300">
            <Link to='/portfolio'><span className="relative z-10 flex items-center gap-2">
              View All Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span></Link>
          </button>
        </div>

        {/* Statistics Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                6+
              </div>
              <p className="text-gray-400 text-sm mt-1">Active Projects</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                500+
              </div>
              <p className="text-gray-400 text-sm mt-1">Jobs Created</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                100K+
              </div>
              <p className="text-gray-400 text-sm mt-1">Sq Ft Under Construction</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                15+
              </div>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}