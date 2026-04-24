import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCity, 
  faBuilding, 
  faChartLine, 
  faRocket,
  faArrowRight,
  faLandmark,
  faMoneyBillWave,
  faKey,
  faCheckCircle,
  faLocationDot,
  faBuildingCircleCheck
} from '@fortawesome/free-solid-svg-icons';

export default function UrbanInvestments() {
  const features = [
    {
      icon: faCity,
      title: "Strategic Urban Locations",
      description: "Prime properties in Nairobi, Mombasa, Kisumu and other major cities",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: faBuilding,
      title: "High-Density Development",
      description: "Maximize returns through apartments, commercial spaces, and mixed-use developments",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: faChartLine,
      title: "Rapid Appreciation",
      description: "Urban properties benefit from strong demand and limited supply",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: faRocket,
      title: "Immediate Returns",
      description: "Rental income and quick resale opportunities in vibrant urban markets",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const urbanCenters = [
    { city: "Nairobi", roi: "12-18%", growth: "+15% YoY", opportunities: "Apartments, Offices, Retail" },
    { city: "Mombasa", roi: "10-15%", growth: "+12% YoY", opportunities: "Hotels, Residential, Commercial" },
    { city: "Kisumu", roi: "15-20%", growth: "+20% YoY", opportunities: "Mixed-use, Apartments" },
    { city: "Nakuru", roi: "12-16%", growth: "+18% YoY", opportunities: "Residential, Commercial" },
    { city: "Eldoret", roi: "10-14%", growth: "+14% YoY", opportunities: "Student Housing, Retail" },
    { city: "Thika", roi: "13-18%", growth: "+16% YoY", opportunities: "Industrial, Residential" }
  ];

  const investmentTypes = [
    {
      title: "Residential Apartments",
      description: "High-demand rental units in urban centers",
      minInvestment: "KES 2M",
      expectedReturn: "12-15%"
    },
    {
      title: "Commercial Office Spaces",
      description: "Prime office locations for businesses",
      minInvestment: "KES 5M",
      expectedReturn: "10-14%"
    },
    {
      title: "Retail Centers",
      description: "Shopping complexes and retail spaces",
      minInvestment: "KES 10M",
      expectedReturn: "15-18%"
    },
    {
      title: "Mixed-Use Developments",
      description: "Combine residential, commercial, and retail",
      minInvestment: "KES 15M",
      expectedReturn: "18-22%"
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
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">URBAN OPPORTUNITIES</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Urban Investments
            </span>
            <br />
            <span className="text-white">Capitalize on Growth</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Unlock the potential of Kenya's booming urban real estate market with strategic investments
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              10-22%
            </div>
            <p className="text-gray-400 text-xs mt-1">Average ROI</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              6+
            </div>
            <p className="text-gray-400 text-xs mt-1">Major Cities</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              95%
            </div>
            <p className="text-gray-400 text-xs mt-1">Occupancy Rate</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              45+
            </div>
            <p className="text-gray-400 text-xs mt-1">Active Projects</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Overview */}
          <div className="space-y-8">
            {/* Why Urban Investment Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLandmark} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Why Urban Investment?</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Kenya's urban centers are experiencing unprecedented growth, driven by rural-urban migration, 
                a growing middle class, and increased business activities. Urban investments offer higher 
                liquidity, steady rental income, and significant capital appreciation potential.
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

            {/* Urban Centers Table */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9306]" />
                Key Urban Markets
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="text-gray-500 border-b border-white/10">
                    <tr>
                      <th className="text-left py-2">City</th>
                      <th className="text-left py-2">ROI</th>
                      <th className="text-left py-2">Growth</th>
                      <th className="text-left py-2">Opportunities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urbanCenters.map((center, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="py-2 text-white font-medium">{center.city}</td>
                        <td className="py-2 text-[#FF9306]">{center.roi}</td>
                        <td className="py-2 text-green-400">{center.growth}</td>
                        <td className="py-2 text-gray-400 text-xs">{center.opportunities}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Investment Options */}
          <div className="space-y-8">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faBuildingCircleCheck} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Investment Opportunities</h2>
              </div>
              
              <div className="space-y-4">
                {investmentTypes.map((type, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold text-sm">{type.title}</h3>
                      <div className="text-right">
                        <span className="text-[#FF9306] font-bold text-sm">{type.expectedReturn}</span>
                        <p className="text-gray-500 text-xs">Expected ROI</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs mb-2">{type.description}</p>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faMoneyBillWave} className="text-gray-500 text-xs" />
                      <span className="text-gray-500 text-xs">Min. Investment: {type.minInvestment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Advantages Card */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faKey} className="text-[#FF9306]" />
                Key Advantages of Urban Investment
              </h3>
              <ul className="space-y-2">
                {[
                  "Higher rental yields (6-8% annually)",
                  "Stronger property value appreciation (10-15% yearly)",
                  "Better liquidity for resale",
                  "Access to financing and mortgages",
                  "Proven track record of consistent returns"
                ].map((advantage, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-400 text-xs">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
              <p className="text-gray-400 text-xs mb-2">Limited urban opportunities available</p>
              <p className="text-white font-semibold text-sm">Book a consultation to explore available properties</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Invest in Urban Real Estate?</h3>
            <p className="text-gray-400 mb-6">Let our investment experts guide you to the best urban opportunities</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Urban Opportunities
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            All investments are subject to due diligence. Tibos Limited provides comprehensive market analysis and property management services.
          </p>
        </div>
      </div>
    </section>
  );
}