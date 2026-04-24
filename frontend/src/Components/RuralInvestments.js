import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { 
  faTree, 
  faTractor, 
  faChartLine, 
  faUsers,
  faArrowRight,
  faLandmark,
  faSeedling,
  faHandHoldingUsd,
  faCheckCircle,
  faMapMarkerAlt,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

export default function RuralInvestments() {
  const features = [
    {
      icon: faTree,
      title: "Prime Rural Locations",
      description: "Access to affordable land in growing rural areas with high appreciation potential",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: faTractor,
      title: "Agricultural Integration",
      description: "Combine real estate investment with agricultural opportunities for dual income",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: faChartLine,
      title: "Steady Appreciation",
      description: "Rural properties show consistent value growth as urban areas expand",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: faUsers,
      title: "Community Development",
      description: "Be part of transforming rural communities through strategic investments",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const investmentOptions = [
    {
      title: "Raw Land Acquisition",
      description: "Purchase undeveloped land for future development or resale",
      roi: "15-25%",
      timeframe: "3-5 years"
    },
    {
      title: "Agricultural Land",
      description: "Income-generating farmland with existing crops or livestock",
      roi: "10-20%",
      timeframe: "1-3 years"
    },
    {
      title: "Mixed-Use Development",
      description: "Combine residential, commercial, and agricultural use",
      roi: "20-30%",
      timeframe: "5-7 years"
    },
    {
      title: "Eco-Tourism Ventures",
      description: "Sustainable tourism projects in scenic rural locations",
      roi: "25-35%",
      timeframe: "3-5 years"
    }
  ];

  const locations = [
    "Kisii Highlands - Tea region with high appreciation",
    "Sotik - Growing town near major transport routes",
    "Kericho - Established agricultural zone",
    "Homa Bay - Lake Victoria waterfront properties"
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
            <span className="text-xs font-medium text-gray-300 tracking-wider">INVESTMENT OPPORTUNITIES</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Rural Investments
            </span>
            <br />
            <span className="text-white">Secure Your Future</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Discover unique opportunities for long-term growth and wealth creation in Kenya's growing rural markets
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              15-35%
            </div>
            <p className="text-gray-400 text-xs mt-1">Average ROI</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              10+
            </div>
            <p className="text-gray-400 text-xs mt-1">Locations Available</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              500+
            </div>
            <p className="text-gray-400 text-xs mt-1">Investors Served</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              100%
            </div>
            <p className="text-gray-400 text-xs mt-1">Legal Compliance</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Overview */}
          <div className="space-y-8">
            {/* Investment Overview Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLandmark} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Investment Overview</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Rural investments offer unique opportunities for long-term growth and wealth creation. 
                As urbanization continues to expand, rural areas near major towns are experiencing significant 
                appreciation in land values. Tibos Limited identifies prime rural locations with high growth 
                potential, making rural investment a smart choice for diversified portfolios.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${feature.color} rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group hover:scale-[1.02]`}
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-[#FF9306] text-xl mb-2" />
                  <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Prime Locations */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9306]" />
                Prime Investment Locations
              </h3>
              <ul className="space-y-2">
                {locations.map((location, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-400 text-xs">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#FF9306] text-xs" />
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Investment Options */}
          <div className="space-y-8">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandHoldingUsd} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Investment Options</h2>
              </div>
              
              <div className="space-y-4">
                {investmentOptions.map((option, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold text-sm">{option.title}</h3>
                      <div className="text-right">
                        <span className="text-[#FF9306] font-bold text-sm">{option.roi}</span>
                        <p className="text-gray-500 text-xs">ROI</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs mb-2">{option.description}</p>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faClock} className="text-gray-500 text-xs" />
                      <span className="text-gray-500 text-xs">Timeframe: {option.timeframe}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Invest Card */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faSeedling} className="text-[#FF9306]" />
                Why Invest in Rural Properties?
              </h3>
              <ul className="space-y-2">
                {[
                  "Lower entry costs compared to urban areas",
                  "Higher appreciation potential as cities expand",
                  "Dual income opportunities (agriculture + real estate)",
                  "Tax advantages for agricultural investments",
                  "Portfolio diversification benefits"
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
              <p className="text-gray-400 text-xs mb-2">Limited opportunities available</p>
              <p className="text-white font-semibold text-sm">Schedule a consultation to view available properties</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Your Rural Investment Portfolio?</h3>
            <p className="text-gray-400 mb-6">Let our investment experts guide you to the best opportunities</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Request More Information
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            All investments are subject to due diligence. Tibos Limited provides guidance and facilitates legal acquisition processes.
          </p>
        </div>
      </div>
    </section>
  );
}


