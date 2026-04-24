import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { 
  faArrowLeft, 
  faLocationDot, 
  faCalendarAlt, 
  faRuler,
  faCheckCircle,
  faShare,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

// Import your project images
import zuriHouseBefore from "./images/2 connected room.jpg";
import zuriHouseAfter from "./images/2 connected.jpg";
import crestHouseBefore from "./images/2BA.jpg";
import crestHouseAfter from "./images/Larger A.jpg";
import residenceOlkeriBefore from "./images/LargerApartment.jpg";
import residenceOlkeriAfter from "./images/flower.jpg";

const projectsData = {
  1: {
    id: 1,
    title: "Zuri House",
    location: "Tuala, Kajiado County",
    category: "Residential",
    beforeImage: zuriHouseBefore,
    afterImage: zuriHouseAfter,
    description: "Modern residential transformation with eco-friendly materials and sustainable design.",
    features: ["4 Bedrooms", "3 Bathrooms", "Modern Kitchen", "Landscaped Garden"],
    area: "250 sqm",
    yearCompleted: "2023",
    architect: "Arch. Michael Otieno",
    timeline: "8 months",
    fullDescription: "Zuri House represents a stunning transformation of a traditional home into a modern masterpiece. The project involved complete renovation of the existing structure, addition of new living spaces, and integration of sustainable building practices. The result is a perfect blend of contemporary design and eco-friendly living."
  },
  2: {
    id: 2,
    title: "Crest House",
    location: "Karen, Nairobi County",
    category: "Commercial",
    beforeImage: crestHouseBefore,
    afterImage: crestHouseAfter,
    description: "Commercial space renovation featuring contemporary architecture and premium finishes.",
    features: ["Open Plan", "Conference Rooms", "Executive Offices", "Parking"],
    area: "500 sqm",
    yearCompleted: "2022",
    architect: "Arch. Sarah Wanjiku",
    timeline: "12 months",
    fullDescription: "Crest House was transformed from an outdated office block into a modern commercial hub. The renovation included structural improvements, modern amenities, and energy-efficient systems. Today, it stands as a landmark commercial property in Karen."
  },
  3: {
    id: 3,
    title: "Residence at Olkeri",
    location: "Ngong, Kajiado County",
    category: "Luxury Villa",
    beforeImage: residenceOlkeriBefore,
    afterImage: residenceOlkeriAfter,
    description: "Luxury villa construction with breathtaking views and custom craftsmanship.",
    features: ["5 Bedrooms", "5 Bathrooms", "Infinity Pool", "Home Theater"],
    area: "450 sqm",
    yearCompleted: "2023",
    architect: "Arch. James Mwangi",
    timeline: "14 months",
    fullDescription: "This luxury villa was designed and built from scratch, featuring panoramic views of the Ngong Hills. Every detail was carefully crafted to provide an unparalleled living experience, from the infinity pool to the state-of-the-art home theater."
  }
};

export default function ProjectCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("after");
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-[#FF9306] hover:underline"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

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

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-[#FF9306] transition-colors mb-6 group"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">{project.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9306] text-sm" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FF9306] text-sm" />
              Completed: {project.yearCompleted}
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faRuler} className="text-[#FF9306] text-sm" />
              {project.area}
            </span>
          </div>
        </div>

        {/* Before/After Image Section */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src={viewMode === "after" ? project.afterImage : project.beforeImage}
              alt={`${project.title} - ${viewMode === "after" ? "After" : "Before"}`}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Before/After Toggle Overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-black/70 backdrop-blur-md rounded-full p-1 flex gap-1">
                <button
                  onClick={() => setViewMode("before")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    viewMode === "before"
                      ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  BEFORE
                </button>
                <button
                  onClick={() => setViewMode("after")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    viewMode === "after"
                      ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  AFTER
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.fullDescription || project.description}
            </p>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Project Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Project Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Architect</span>
                  <span className="text-white">{project.architect}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Timeline</span>
                  <span className="text-white">{project.timeline}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Total Area</span>
                  <span className="text-white">{project.area}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Year Completed</span>
                  <span className="text-white">{project.yearCompleted}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-[#FF6A00] to-[#FF9306] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                <Link to='/request-estimate'>Request Similar Quote</Link>
              </button>
              <button className="px-4 py-3 rounded-lg border border-white/20 text-gray-400 hover:text-white hover:border-[#FF9306] transition-all duration-300">
                <FontAwesomeIcon icon={faShare} />
              </button>
              <button className="px-4 py-3 rounded-lg border border-white/20 text-gray-400 hover:text-red-500 hover:border-red-500 transition-all duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}