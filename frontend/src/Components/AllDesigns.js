import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "./images/2 coneected.jpg";

// Import additional design images (replace with your actual images)
import design1Img from "./images/background.jpg";
import design2Img from "./images/background.jpg";
import design3Img from "./images/background.jpg";
import design4Img from "./images/background.jpg";
import design5Img from "./images/background.jpg";
import design6Img from "./images/background.jpg";

export default function AllDesigns() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const designs = [
    {
      id: 1,
      title: "Modern Minimalist Villa",
      category: "Residential",
      location: "Runda, Nairobi",
      image: design1Img || img,
      description: "A stunning minimalist villa featuring clean lines, open spaces, and floor-to-ceiling windows that maximize natural light.",
      features: ["4 Bedrooms", "5 Bathrooms", "Infinity Pool", "Smart Home"],
      area: "450 sqm",
      completionTime: "8 months",
      price: "KES 45M",
      designer: "Arch. Michael Otieno",
      tags: ["Modern", "Luxury", "Eco-Friendly"],
      rating: 4.9
    },
    {
      id: 2,
      title: "Contemporary Office Space",
      category: "Commercial",
      location: "Westlands, Nairobi",
      image: design2Img || img,
      description: "Innovative office design with open-plan workspaces, collaborative zones, and biophilic elements for enhanced productivity.",
      features: ["Open Plan", "Meeting Rooms", "Breakout Areas", "Green Walls"],
      area: "1200 sqm",
      completionTime: "6 months",
      price: "KES 28M",
      designer: "Arch. Sarah Wanjiku",
      tags: ["Commercial", "Modern", "Sustainable"],
      rating: 4.8
    },
    {
      id: 3,
      title: "Coastal Retreat",
      category: "Luxury Villa",
      location: "Diani Beach, Mombasa",
      image: design3Img || img,
      description: "Beachfront paradise with Swahili architecture influences, featuring natural materials and seamless indoor-outdoor living.",
      features: ["5 Bedrooms", "Beach Access", "Private Pool", "Staff Quarters"],
      area: "600 sqm",
      completionTime: "10 months",
      price: "KES 78M",
      designer: "Arch. James Mwangi",
      tags: ["Beachfront", "Luxury", "Tropical"],
      rating: 5.0
    },
    {
      id: 4,
      title: "Urban Loft Apartment",
      category: "Residential",
      location: "Kilimani, Nairobi",
      image: design4Img || img,
      description: "Industrial-chic loft design with exposed concrete, high ceilings, and modern finishes perfect for urban living.",
      features: ["2 Bedrooms", "Open Kitchen", "Rooftop Terrace", "Gym Access"],
      area: "180 sqm",
      completionTime: "4 months",
      price: "KES 18M",
      designer: "Arch. David Kimani",
      tags: ["Urban", "Industrial", "Modern"],
      rating: 4.7
    },
    {
      id: 5,
      title: "Eco-Friendly School",
      category: "Educational",
      location: "Thika, Kiambu",
      image: design5Img || img,
      description: "Sustainable educational facility with rainwater harvesting, solar panels, and natural ventilation systems.",
      features: ["12 Classrooms", "Library", "Playground", "Solar Power"],
      area: "3000 sqm",
      completionTime: "14 months",
      price: "KES 95M",
      designer: "Arch. Grace Nduta",
      tags: ["Educational", "Eco-Friendly", "Sustainable"],
      rating: 4.9
    },
    {
      id: 6,
      title: "Wellness Spa & Retreat",
      category: "Hospitality",
      location: "Limuru, Kiambu",
      image: design6Img || img,
      description: "Tranquil wellness center designed for relaxation, featuring natural stone, water elements, and therapeutic spaces.",
      features: ["Treatment Rooms", "Yoga Studio", "Sauna", "Meditation Garden"],
      area: "850 sqm",
      completionTime: "9 months",
      price: "KES 52M",
      designer: "Arch. Peter Omondi",
      tags: ["Wellness", "Spa", "Nature-Inspired"],
      rating: 4.8
    },
    {
      id: 7,
      title: "Modern Minimalist Villa II",
      category: "Residential",
      location: "Karen, Nairobi",
      image: design1Img || img,
      description: "Another stunning minimalist villa with enhanced features and modern amenities.",
      features: ["5 Bedrooms", "6 Bathrooms", "Infinity Pool", "Home Theater"],
      area: "550 sqm",
      completionTime: "10 months",
      price: "KES 65M",
      designer: "Arch. Michael Otieno",
      tags: ["Modern", "Luxury", "Smart Home"],
      rating: 4.9
    },
    {
      id: 8,
      title: "Riverside Commercial Plaza",
      category: "Commercial",
      location: "Riverside Drive, Nairobi",
      image: design2Img || img,
      description: "Premium commercial space with modern architecture and prime location.",
      features: ["20 Offices", "Conference Hall", "Restaurant", "Rooftop Terrace"],
      area: "2500 sqm",
      completionTime: "18 months",
      price: "KES 150M",
      designer: "Arch. Sarah Wanjiku",
      tags: ["Commercial", "Premium", "Modern"],
      rating: 4.9
    },
    {
      id: 9,
      title: "Mountain View Lodge",
      category: "Hospitality",
      location: "Aberdares, Nyeri",
      image: design3Img || img,
      description: "Cozy mountain lodge with breathtaking views and eco-friendly design.",
      features: ["12 Suites", "Fireplace", "Hiking Trails", "Restaurant"],
      area: "1200 sqm",
      completionTime: "12 months",
      price: "KES 85M",
      designer: "Arch. James Mwangi",
      tags: ["Eco-Friendly", "Mountain", "Lodge"],
      rating: 4.8
    }
  ];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half">½⭐</span>);
    }
    
    return stars;
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-28 overflow-hidden">
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
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">OUR COLLECTION</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              All Our
            </span>
            <br />
            <span className="text-white">Designs</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Explore our complete collection of architectural designs, from residential to commercial projects
          </p>
        </div>

        {/* Designs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setSelectedDesign(design.id)}
              onMouseLeave={() => setSelectedDesign(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onClick={() => openModal(design.image)}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                  <span className="text-[#FF9306] text-xs font-semibold">{design.category}</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF9306]/90 to-[#FF6A00]/90 rounded-lg px-3 py-1.5">
                  <span className="text-black text-xs font-bold flex items-center gap-1">
                    <span>⭐</span> {design.rating}
                  </span>
                </div>

                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button 
                    onClick={() => openModal(design.image)}
                    className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#FF9306] transition-colors line-clamp-1">
                    {design.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                  <svg className="w-3 h-3 text-[#FF9306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{design.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#FF9306] text-xs font-bold">{design.price}</span>
                  <span className="text-gray-600 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{design.area}</span>
                </div>

                {/* Expanded Details on Hover */}
                <div className={`overflow-hidden transition-all duration-300 ${selectedDesign === design.id ? 'max-h-32' : 'max-h-0'}`}>
                  <p className="text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">
                    {design.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {design.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-xs">{renderStars(design.rating)}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-[#FF9306] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-[#FF9306] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-12">
          <Link to="/designs">
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View All Designs
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#FF9306] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={modalImage}
              alt="Design preview"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}