import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faRuler, 
  faDollarSign, 
  faClock,
  faArrowRight,
  faTree,
  faBuilding,
  faCheckCircle,
  faRulerCombined,
  faChartLine,
  faHandHoldingUsd,
  faPeopleArrows
} from '@fortawesome/free-solid-svg-icons';

export default function BackyardRenaissance() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectTypes = [
    {
      title: "Studio Apartments",
      icon: faHome,
      desc: "Self-contained units perfect for rental income",
      roi: "15-20%",
      timeframe: "3-4 months",
      cost: "KES 800K - 1.5M",
      features: ["Private entrance", "Kitchenette", "Bathroom", "Parking space"]
    },
    {
      title: "Guest Houses",
      icon: faBuilding,
      desc: "Spacious accommodation for extended family or Airbnb",
      roi: "12-18%",
      timeframe: "4-6 months",
      cost: "KES 1.5M - 3M",
      features: ["2 bedrooms", "Living area", "Full kitchen", "Private garden"]
    },
    {
      title: "Home Offices",
      icon: faRulerCombined,
      desc: "Professional workspaces in your backyard",
      roi: "10-15%",
      timeframe: "2-3 months",
      cost: "KES 400K - 800K",
      features: ["Soundproofing", "High-speed wiring", "AC unit", "Storage"]
    },
    {
      title: "Outdoor Kitchens",
      icon: faTree,
      desc: "Entertainment spaces with cooking facilities",
      roi: "8-12%",
      timeframe: "1-2 months",
      cost: "KES 300K - 700K",
      features: ["Built-in grill", "Sink", "Seating area", "Lighting"]
    },
    {
      title: "Garden Studios",
      icon: faPeopleArrows,
      desc: "Creative spaces for artists, yoga, or hobbies",
      roi: "10-15%",
      timeframe: "2-3 months",
      cost: "KES 500K - 1M",
      features: ["Natural light", "Insulated", "Climate control", "Storage"]
    }
  ];

  const stats = [
    { number: "15-20%", label: "Average ROI" },
    { number: "3-6", label: "Months to Complete" },
    { number: "100+", label: "Projects Done" },
    { number: "95%", label: "Client Satisfaction" }
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
            <span className="text-xs font-medium text-gray-300 tracking-wider">PROPERTY TRANSFORMATION</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Backyard
            </span>
            <br />
            <span className="text-white">Renaissance</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Transform your underutilized backyard into a profitable asset with our expert development solutions
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

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Overview */}
          <div className="space-y-8">
            {/* Program Overview Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandHoldingUsd} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Program Overview</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                The Backyard Renaissance program helps homeowners maximize their property's potential by 
                developing underutilized backyard spaces. Whether it's adding a rental unit, creating a 
                garden oasis, or building an accessory dwelling unit (ADU), we turn your backyard into a 
                valuable asset.
              </p>
            </div>

            {/* Key Benefits Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group hover:scale-[1.02]">
                <FontAwesomeIcon icon={faChartLine} className="text-[#FF9306] text-xl mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Increase Property Value</h3>
                <p className="text-gray-400 text-xs">Add 20-30% to your home's value</p>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group hover:scale-[1.02]">
                <FontAwesomeIcon icon={faDollarSign} className="text-[#FF9306] text-xl mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Generate Rental Income</h3>
                <p className="text-gray-400 text-xs">Earn KES 15K-50K monthly</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group hover:scale-[1.02]">
                <FontAwesomeIcon icon={faClock} className="text-[#FF9306] text-xl mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Quick ROI</h3>
                <p className="text-gray-400 text-xs">Recoup investment in 2-3 years</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group hover:scale-[1.02]">
                <FontAwesomeIcon icon={faRuler} className="text-[#FF9306] text-xl mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Maximize Space</h3>
                <p className="text-gray-400 text-xs">Utilize every square foot</p>
              </div>
            </div>

            {/* Success Story Placeholder */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20">
              <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                Success Story
              </h3>
              <p className="text-gray-400 text-xs italic">
                "Turned my unused backyard into a 2-bedroom guest house. Now earning KES 35,000 monthly in passive income!"
              </p>
              <p className="text-gray-500 text-xs mt-2">— James M., Nairobi</p>
            </div>
          </div>

          {/* Right Column - Project Types */}
          <div className="space-y-8">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Popular Backyard Projects</h2>
              </div>
              
              <div className="space-y-3">
                {projectTypes.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={project.icon} className="text-[#FF9306] text-base" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-white font-semibold text-sm">{project.title}</h3>
                          <span className="text-[#FF9306] text-xs font-bold">{project.roi} ROI</span>
                        </div>
                        <p className="text-gray-400 text-xs mb-2">{project.desc}</p>
                        <div className={`overflow-hidden transition-all duration-300 ${selectedProject === idx ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.features.map((feature, fIdx) => (
                              <span key={fIdx} className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Cost: {project.cost}</span>
                            <span className="text-gray-500">Timeline: {project.timeframe}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF9306]" />
                Why Choose Tibos for Your Backyard Project?
              </h3>
              <ul className="space-y-2">
                {[
                  "Free initial consultation and design",
                  "Permit approval assistance",
                  "Quality materials and workmanship",
                  "Project management from start to finish",
                  "1-year warranty on all work"
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-400 text-xs">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
              <p className="text-gray-400 text-xs mb-2">Limited availability for 2024</p>
              <p className="text-white font-semibold text-sm">Book your free backyard assessment today</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Backyard?</h3>
            <p className="text-gray-400 mb-6">Get a free consultation and discover the potential of your property</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Schedule Backyard Consultation
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            Most backyard projects pay for themselves within 2-3 years through rental income or increased property value.
          </p>
        </div>
      </div>
    </section>
  );
}