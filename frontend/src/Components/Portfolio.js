import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEye, 
  faCalendarAlt, 
  faLocationDot,
  faBuilding,
  faRuler,
  faCheckCircle,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

// Import your project images here
import project1Img from "./images/2 coneected.jpg";
import project2Img from "./images/2 connected room.jpg";
import project3Img from "./images/2 connected.jpg";
import project4Img from "./images/2BA.jpg";
import project5Img from "./images/Apartment.jpg";
import project6Img from "./images/Executive 2.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Serenity Heights Apartments",
      category: "Residential",
      location: "Kisii Town, Kisii County",
      image: project1Img,
      description: "A modern 12-unit apartment complex featuring spacious layouts, premium finishes, and secure parking. Completed within 10 months with 100% occupancy rate.",
      completionDate: "December 2023",
      area: "2,500 sqm",
      client: "Privately Owned",
      features: ["12 Units", "Underground Parking", "Rooftop Garden", "Solar Water Heating"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Green Valley Mall",
      category: "Commercial",
      location: "Sotik, Bomet County",
      image: project2Img,
      description: "A modern shopping complex with retail spaces, food court, and entertainment area. Serves as a major commercial hub for the region.",
      completionDate: "June 2023",
      area: "3,200 sqm",
      client: "Green Valley Investments",
      features: ["25 Retail Units", "Food Court", "Banking Hall", "Ample Parking"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Excel Industries Warehouse",
      category: "Industrial",
      location: "Kericho Town, Kericho County",
      image: project3Img,
      description: "Large-scale warehouse facility with loading bays, office spaces, and advanced security systems. Designed for optimal logistics efficiency.",
      completionDate: "March 2023",
      area: "5,000 sqm",
      client: "Excel Industries Ltd",
      features: ["Loading Bays", "Office Block", "24/7 Security", "Fire Suppression"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Lakeview Executive Residences",
      category: "Residential",
      location: "Homa Bay Town, Homa Bay County",
      image: project4Img,
      description: "Luxury lakefront villas with breathtaking views, private gardens, and high-end finishes. A premier residential development in the region.",
      completionDate: "August 2023",
      area: "1,800 sqm",
      client: "Lakeview Developers",
      features: ["8 Villas", "Private Pools", "Landscaped Gardens", "Staff Quarters"],
      status: "Completed"
    },
    {
      id: 5,
      title: "Tech Hub Kisii",
      category: "Commercial",
      location: "Kisii Town, Kisii County",
      image: project5Img,
      description: "Modern office complex designed for tech companies, featuring flexible workspaces, conference facilities, and high-speed internet infrastructure.",
      completionDate: "October 2023",
      area: "2,200 sqm",
      client: "Kisii County Government",
      features: ["Co-working Spaces", "Conference Rooms", "Cafeteria", "Backup Power"],
      status: "Completed"
    },
    {
      id: 6,
      title: "Migori Industrial Park",
      category: "Industrial",
      location: "Migori Town, Migori County",
      image: project6Img,
      description: "Multi-purpose industrial park housing manufacturing units, storage facilities, and administrative offices. Promotes local industry growth.",
      completionDate: "February 2024",
      area: "8,000 sqm",
      client: "Migori County Government",
      features: ["Manufacturing Units", "Storage Facilities", "Administrative Block", "Security System"],
      status: "Completed"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "500K+", label: "Sq Ft Built" }
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-8 overflow-hidden">
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
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">OUR WORK</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Our Portfolio
            </span>
            <br />
            <span className="text-white">Projects That Define Excellence</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Explore our completed projects showcasing quality craftsmanship, innovative design, and client satisfaction
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                {stat.number}
              </div>
              <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black shadow-lg"
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                  <span className="text-[#FF9306] text-xs font-semibold">{project.category}</span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-md rounded-lg px-3 py-1.5">
                  <span className="text-white text-xs font-bold">{project.status}</span>
                </div>

                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                    <FontAwesomeIcon icon={faEye} className="text-sm" />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#FF9306] transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9306] text-xs" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FF9306] text-xs" />
                    <span>{project.completionDate}</span>
                  </div>
                </div>

                {/* Expanded Details */}
                <div className={`overflow-hidden transition-all duration-300 ${selectedProject === project.id ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <FontAwesomeIcon icon={faRuler} className="text-[#FF9306]" />
                    <span className="text-gray-500">Area: {project.area}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500">Client: {project.client}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                    <span className="text-gray-500 text-xs">Quality Assured</span>
                  </div>
                  <button className="text-[#FF9306] text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {selectedProject === project.id ? "Show Less" : "View Details"}
                    <FontAwesomeIcon icon={faArrowRight} className={`text-xs transition-transform ${selectedProject === project.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Have a Project in Mind?</h3>
            <p className="text-gray-400 mb-6">Let's turn your vision into reality with our expert construction services</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;