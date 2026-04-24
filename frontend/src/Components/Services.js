import React, { useState } from "react";
import img from "./images/2 connected.jpg";

// Import additional service images (replace with your actual images)
import service1Img from "./images/IMG-20251007-WA0013.jpg";
import service2Img from "./images/adfasdf.jpg";
import service3Img from "./images/background.jpg";
import service4Img from "./images/ensuite.jpg";
import service5Img from "./images/2BA (2).jpg";
import service6Img from "./images/project.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "Custom home building, renovations, and extensions with premium materials and expert craftsmanship.",
      icon: "🏠",
      image: service1Img || img,
      features: ["Custom Design", "Quality Materials", "Timely Delivery"],
      category: "Residential"
    },
    {
      id: 2,
      title: "Commercial Development",
      description: "Office buildings, retail spaces, and industrial complexes designed for functionality and impact.",
      icon: "🏢",
      image: service2Img || img,
      features: ["Project Management", "Safety Compliance", "Cost Effective"],
      category: "Commercial"
    },
    {
      id: 3,
      title: "Interior Finishing",
      description: "Premium interior solutions including flooring, cabinetry, painting, and custom fixtures.",
      icon: "🛋️",
      image: service3Img || img,
      features: ["Modern Design", "Quality Finishes", "Attention to Detail"],
      category: "Interior"
    },
    {
      id: 4,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern upgrades, structural changes, and aesthetic improvements.",
      icon: "🔨",
      image: service4Img || img,
      features: ["Space Optimization", "Modern Upgrades", "Value Addition"],
      category: "Renovation"
    },
    {
      id: 5,
      title: "Landscaping & External Works",
      description: "Beautiful outdoor spaces including gardens, driveways, fencing, and compound development.",
      icon: "🌳",
      image: service5Img || img,
      features: ["Sustainable Design", "Expert Execution", "Maintenance Support"],
      category: "External"
    },
    {
      id: 6,
      title: "Project Consultation",
      description: "Expert advice on planning, budgeting, permits, and project management for successful outcomes.",
      icon: "📋",
      image: service6Img || img,
      features: ["Expert Guidance", "Budget Planning", "Permit Assistance"],
      category: "Consulting"
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-10 md:py-12 overflow-hidden">
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
      <div className="absolute top-40 right-20 w-80 h-80 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="w-full flex justify-start">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">WHAT WE OFFER</span>
          </div>
          </div>
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Tibos Infrastructure
            </span>
            <br />
            <span className="text-white">Development Services</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Comprehensive construction solutions tailored to your needs, delivered with excellence and integrity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-xl p-2.5 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                  <span className="text-[#FF9306] text-xs font-semibold">{service.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FF9306] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List - appears on hover */}
                <div className={`overflow-hidden transition-all duration-300 ${activeService === service.id ? 'max-h-32 mb-4' : 'max-h-0'}`}>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#FF9306]/10 text-[#FF9306] px-2 py-1 rounded-full border border-[#FF9306]/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#FF9306]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#FF9306]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                    </div>
                    <span className="text-gray-500 text-xs">Expert Service</span>
                  </div>
                  <button className="text-[#FF9306] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    <Link to='/blog'> 
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-3 pt-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">Simple Process</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to completion, we make your construction journey seamless
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your vision and requirements" },
              { step: "02", title: "Planning", desc: "Detailed design and budget planning" },
              { step: "03", title: "Execution", desc: "Professional construction management" },
              { step: "04", title: "Delivery", desc: "Quality handover and support" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00] mb-3">
                  {item.step}
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-[#FF9306] to-transparent mx-auto my-3" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                
                {/* Connecting Line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#FF9306]/50 to-transparent">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF9306]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 border border-[#FF9306]/20 p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #FF9306 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Let's discuss your vision and turn it into reality with our expert team
            </p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <Link to='/schedule-consultation'>
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF9306]/10 flex items-center justify-center">
              <span className="text-[#FF9306] text-xl">✓</span>
            </div>
            <div>
              <p className="text-white font-semibold">Licensed & Insured</p>
              <p className="text-gray-500 text-xs">Fully Certified</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF9306]/10 flex items-center justify-center">
              <span className="text-[#FF9306] text-xl">💎</span>
            </div>
            <div>
              <p className="text-white font-semibold">Quality Guaranteed</p>
              <p className="text-gray-500 text-xs">Premium Materials</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF9306]/10 flex items-center justify-center">
              <span className="text-[#FF9306] text-xl">⏱️</span>
            </div>
            <div>
              <p className="text-white font-semibold">On-Time Delivery</p>
              <p className="text-gray-500 text-xs">Project Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}