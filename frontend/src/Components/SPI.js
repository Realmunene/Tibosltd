import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTree, 
  faParking, 
  faLeaf, 
  faHeart,
  faArrowRight,
  faLocationDot,
  faPeopleGroup,
  faHandHoldingHeart,
  faChartLine,
  faCheckCircle,
  faSun,
  faWater,
  faChild,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export default function SPI() {
  const [activeLocation, setActiveLocation] = useState(null);

  const benefits = [
    {
      icon: faTree,
      title: "Urban Greening",
      description: "Convert empty lots into beautiful community parks",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: faChartLine,
      title: "Property Value Boost",
      description: "Nearby properties see 10-20% value appreciation",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: faLeaf,
      title: "Environmental Impact",
      description: "Reduce urban heat islands and improve air quality",
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: faHeart,
      title: "Community Wellness",
      description: "Spaces for recreation, exercise, and social gatherings",
      color: "from-rose-500/20 to-pink-500/20"
    }
  ];

  const features = [
    "Landscaped gardens with indigenous plants",
    "Walking paths and exercise equipment",
    "Children's play areas",
    "Benches and picnic areas",
    "Community garden plots",
    "Solar-powered lighting",
    "Rainwater harvesting systems",
    "Native tree species planting"
  ];

  const completedParks = [
    {
      name: "Uhuru Gardens",
      location: "Kisii Town",
      size: "0.8 acres",
      completed: "March 2023",
      features: "Walking paths, playground, community garden"
    },
    {
      name: "Green Valley Park",
      location: "Sotik",
      size: "1.2 acres",
      completed: "August 2023",
      features: "Exercise equipment, picnic areas, indigenous trees"
    },
    {
      name: "Serenity Square",
      location: "Kericho",
      size: "0.5 acres",
      completed: "December 2023",
      features: "Sitting areas, water fountain, flower gardens"
    }
  ];

  const stats = [
    { number: "15+", label: "Parks Completed" },
    { number: "50+", label: "Acres Greened" },
    { number: "3,000+", label: "Trees Planted" },
    { number: "10,000+", label: "Community Members Served" }
  ];

  const partnerOptions = [
    {
      title: "Land Donor",
      icon: faLocationDot,
      description: "Provide underutilized land for park development",
      benefit: "Tax benefits + naming rights"
    },
    {
      title: "Financial Partner",
      icon: faHandHoldingHeart,
      description: "Sponsor park development and maintenance",
      benefit: "Brand recognition + CSR credits"
    },
    {
      title: "Community Partner",
      icon: faPeopleGroup,
      description: "Lead community engagement and events",
      benefit: "Community impact + networking"
    }
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
            <span className="text-xs font-medium text-gray-300 tracking-wider">COMMUNITY INITIATIVE</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Small Parks
            </span>
            <br />
            <span className="text-white">Initiative (SPI)</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Creating green spaces in urban neighborhoods that transform communities and improve quality of life
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
            {/* Initiative Overview Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faSun} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Initiative Overview</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                The Small Parks Initiative transforms underutilized urban spaces into vibrant community parks 
                and recreational areas. SPI enhances property values, improves quality of life, and creates 
                sustainable green spaces in Kenyan neighborhoods.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r ${benefit.color} rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group hover:scale-[1.02]`}
                >
                  <FontAwesomeIcon icon={benefit.icon} className="text-[#FF9306] text-xl mb-2" />
                  <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Impact Story */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20">
              <div className="flex items-center gap-2 mb-2">
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
              </div>
              <p className="text-gray-400 text-xs italic">
                "Our neighborhood park has become the heart of our community. Kids play safely, families gather, and property values have increased significantly."
              </p>
              <p className="text-white font-semibold text-xs mt-2">— Community Member, Kisii</p>
            </div>
          </div>

          {/* Right Column - Features & Parks */}
          <div className="space-y-8">
            {/* SPI Features */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWater} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">SPI Features</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                    <span className="text-gray-400 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Parks */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faTree} className="text-[#FF9306]" />
                Completed Parks
              </h3>
              <div className="space-y-3">
                {completedParks.map((park, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveLocation(activeLocation === idx ? null : idx)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white font-semibold text-sm">{park.name}</h4>
                        <p className="text-gray-500 text-xs">{park.location}</p>
                      </div>
                      <span className="text-[#FF9306] text-xs">{park.size}</span>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${activeLocation === idx ? 'max-h-20 mt-2' : 'max-h-0'}`}>
                      <p className="text-gray-400 text-xs">{park.features}</p>
                      <p className="text-gray-500 text-xs mt-1">Completed: {park.completed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Support */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-[#FF9306]" />
                Ways to Support SPI
              </h3>
              <div className="space-y-3">
                {partnerOptions.map((option, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={option.icon} className="text-[#FF9306] text-xs" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs">{option.title}</h4>
                      <p className="text-gray-400 text-xs">{option.description}</p>
                      <p className="text-[#FF9306] text-xs mt-1">{option.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Bring a Park to Your Neighborhood</h3>
            <p className="text-gray-400 mb-6">Join us in creating green spaces that transform communities</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Support SPI in Your Neighborhood
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            SPI is a community-driven initiative by Tibos Limited in partnership with local governments and community organizations.
          </p>
        </div>
      </div>
    </section>
  );
}