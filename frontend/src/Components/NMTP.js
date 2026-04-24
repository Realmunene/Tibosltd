import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBoxes, 
  faTruck, 
  faPercent, 
  faCheckCircle,
  faArrowRight,
  faPeopleGroup,
  faWarehouse,
  faChartLine,
  faCalendarAlt,
  faCoins,
  faHandshake,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export default function NMTP() {
  const [activeTab, setActiveTab] = useState('materials');

  const materials = [
    { name: "Cement (50kg)", normalPrice: "650", bulkPrice: "520", savings: "20%" },
    { name: "Steel Bars (12mm)", normalPrice: "850", bulkPrice: "680", savings: "20%" },
    { name: "Roofing Sheets", normalPrice: "450", bulkPrice: "360", savings: "20%" },
    { name: "Timber (2x4)", normalPrice: "380", bulkPrice: "304", savings: "20%" },
    { name: "Ballast (per ton)", normalPrice: "2500", bulkPrice: "2000", savings: "20%" },
    { name: "River Sand (per ton)", normalPrice: "1800", bulkPrice: "1440", savings: "20%" }
  ];

  const benefits = [
    {
      icon: faBoxes,
      title: "Bulk Purchasing",
      description: "Save 20-40% on cement, steel, roofing, and other materials",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: faTruck,
      title: "Shared Logistics",
      description: "Reduce transportation costs through consolidated delivery",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: faPercent,
      title: "Flexible Payment Plans",
      description: "Installment options for registered members",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: faCheckCircle,
      title: "Quality Assurance",
      description: "All materials sourced from verified suppliers",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const stats = [
    { number: "20-40%", label: "Average Savings" },
    { number: "500+", label: "Active Members" },
    { number: "50M+", label: "KES Saved" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const steps = [
    { number: "01", title: "Register Free", desc: "Sign up as an NMTP member - no fees" },
    { number: "02", title: "Submit Requirements", desc: "List your material needs" },
    { number: "03", title: "Pool Orders", desc: "Combine with other members" },
    { number: "04", title: "Bulk Pricing", desc: "Get wholesale rates" },
    { number: "05", title: "Start Building", desc: "Save significantly on costs" }
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
            <span className="text-xs font-medium text-gray-300 tracking-wider">COMMUNITY POWER</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Nunua Materials
            </span>
            <br />
            <span className="text-white">Tujenge Pamoja (NMTP)</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Buy Materials, Build Together - Collective Construction Power that saves you 20-40% on building materials
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
                  <FontAwesomeIcon icon={faPeopleGroup} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Program Overview</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                NMTP is an innovative community-based program that leverages bulk purchasing power to 
                reduce construction material costs by 20-40%. Members pool resources to buy materials 
                together, benefiting from wholesale prices and shared logistics.
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

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20">
              <div className="flex items-center gap-2 mb-2">
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-sm" />
              </div>
              <p className="text-gray-400 text-xs italic">
                "Joined NMTP and saved over 30% on my building materials. The collective buying power is incredible!"
              </p>
              <p className="text-white font-semibold text-xs mt-2">— Peter O., Happy Homeowner</p>
            </div>
          </div>

          {/* Right Column - Materials & Process */}
          <div className="space-y-8">
            {/* Material Savings Table */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWarehouse} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Sample Savings</h2>
              </div>
              
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === 'materials'
                      ? 'bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Materials
                </button>
                <button
                  onClick={() => setActiveTab('process')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === 'process'
                      ? 'bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Process
                </button>
              </div>

              {activeTab === 'materials' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="text-gray-500 border-b border-white/10">
                      <tr>
                        <th className="text-left py-2">Material</th>
                        <th className="text-left py-2">Normal</th>
                        <th className="text-left py-2">NMTP</th>
                        <th className="text-left py-2">Save</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materials.map((material, idx) => (
                        <tr key={idx} className="border-b border-white/5">
                          <td className="py-2 text-white">{material.name}</td>
                          <td className="py-2 text-gray-400">KES {material.normalPrice}</td>
                          <td className="py-2 text-[#FF9306]">KES {material.bulkPrice}</td>
                          <td className="py-2 text-green-400">{material.savings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="space-y-3">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center text-[#FF9306] font-bold text-sm">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{step.title}</h4>
                        <p className="text-gray-400 text-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Why Join NMTP */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faHandshake} className="text-[#FF9306]" />
                Why Join NMTP?
              </h3>
              <ul className="space-y-2">
                {[
                  "No membership fees - completely free to join",
                  "Access to wholesale prices normally reserved for large buyers",
                  "Quality guaranteed from verified suppliers",
                  "Flexible payment options available",
                  "Community support and shared knowledge"
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
              <p className="text-gray-400 text-xs mb-2">Join over 500 happy members</p>
              <p className="text-white font-semibold text-sm">Start saving on your construction materials today</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Save on Your Construction Materials?</h3>
            <p className="text-gray-400 mb-6">Join NMTP today and start building smarter with collective buying power</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Join NMTP Program
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            NMTP is a community initiative by Tibos Limited to make quality construction materials accessible and affordable for all.
          </p>
        </div>
      </div>
    </section>
  );
}