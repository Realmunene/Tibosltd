import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faChartLine, 
  faShieldAlt, 
  faUsers,
  faArrowRight,
  faBuilding,
  faLandmark,
  faMoneyBillWave,
  faCheckCircle,
  faFileContract,
  faHandHoldingHeart,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export default function JointVenture() {
  const [selectedModel, setSelectedModel] = useState(null);

  const partnershipModels = [
    {
      title: "Landowner Partnership",
      icon: faLandmark,
      description: "You provide the land, we handle development",
      details: "Ideal for landowners with prime property but limited development capital. Tibos handles design, approvals, construction, and marketing.",
      profitShare: "60/40 to 70/30",
      timeline: "12-24 months",
      minRequirement: "0.5+ acres",
      roi: "15-25%"
    },
    {
      title: "Capital Investment",
      icon: faMoneyBillWave,
      description: "Fund projects with us as a financial partner",
      details: "Invest capital into our development projects. We manage the entire process and share profits based on investment size.",
      profitShare: "Based on investment",
      timeline: "18-30 months",
      minRequirement: "KES 2M+",
      roi: "12-20%"
    },
    {
      title: "Strategic Collaboration",
      icon: faHandshake,
      description: "Bring expertise, networks, or resources",
      details: "Partner with us through value-add contributions including professional services, materials supply, or market access.",
      profitShare: "Negotiated",
      timeline: "Varies",
      minRequirement: "Value-based",
      roi: "10-18%"
    },
    {
      title: "Public-Private Partnership",
      icon: faBuilding,
      description: "Government and institutional collaborations",
      details: "Partner with Tibos on large-scale infrastructure and housing projects for government agencies and institutions.",
      profitShare: "Structured per project",
      timeline: "24-48 months",
      minRequirement: "Institutional",
      roi: "8-15%"
    }
  ];

  const benefits = [
    {
      icon: faHandshake,
      title: "Flexible Partnership Models",
      desc: "Land equity, capital investment, or profit-sharing arrangements"
    },
    {
      icon: faChartLine,
      title: "Shared Success",
      desc: "Transparent profit sharing based on contribution and risk"
    },
    {
      icon: faShieldAlt,
      title: "Risk Mitigation",
      desc: "Professional project management reduces development risks"
    },
    {
      icon: faUsers,
      title: "Expert Team",
      desc: "Access to architects, engineers, and construction professionals"
    }
  ];

  const stats = [
    { number: "100+", label: "Successful Partnerships" },
    { number: "KES 5B+", label: "Project Value" },
    { number: "15+", label: "Partner Network" },
    { number: "95%", label: "Repeat Partners" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kamau",
      role: "Landowner Partner",
      quote: "Partnering with Tibos transformed my undeveloped land into a profitable residential estate. Their professionalism and transparency made all the difference."
    },
    {
      name: "Mr. James Otieno",
      role: "Investment Partner",
      quote: "The ROI on my capital investment exceeded expectations. Tibos delivered on time and communicated every step of the way."
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
            <span className="text-xs font-medium text-gray-300 tracking-wider">PARTNERSHIP OPPORTUNITIES</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Joint Venture
            </span>
            <br />
            <span className="text-white">Development</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Partner with Tibos Limited for mutually beneficial projects that maximize returns while sharing risks appropriately
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
            {/* Partnership Overview Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Partnership Opportunities</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Tibos Limited welcomes strategic partners for joint venture development projects. 
                Whether you have land, capital, or expertise, we create win-win partnerships that 
                maximize returns while sharing risks appropriately.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <FontAwesomeIcon icon={benefit.icon} className="text-[#FF9306] text-xl mb-2" />
                  <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306]" />
                Partner Testimonials
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-3 last:border-0">
                    <p className="text-gray-400 text-xs italic">"{testimonial.quote}"</p>
                    <p className="text-white font-semibold text-xs mt-2">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Partnership Models */}
          <div className="space-y-8">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faFileContract} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Joint Venture Options</h2>
              </div>
              
              <div className="space-y-3">
                {partnershipModels.map((model, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedModel(selectedModel === idx ? null : idx)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={model.icon} className="text-[#FF9306] text-base" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-white font-semibold text-sm">{model.title}</h3>
                          <span className="text-[#FF9306] text-xs font-bold">{model.roi} ROI</span>
                        </div>
                        <p className="text-gray-400 text-xs mb-2">{model.description}</p>
                        <div className={`overflow-hidden transition-all duration-300 ${selectedModel === idx ? 'max-h-48 mt-2' : 'max-h-0'}`}>
                          <p className="text-gray-400 text-xs leading-relaxed mb-2">{model.details}</p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-gray-500">Profit Share:</span>
                              <p className="text-white text-xs">{model.profitShare}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Timeline:</span>
                              <p className="text-white text-xs">{model.timeline}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Min. Requirement:</span>
                              <p className="text-white text-xs">{model.minRequirement}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Partner With Us */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF9306]" />
                Why Partner With Tibos Limited?
              </h3>
              <ul className="space-y-2">
                {[
                  "Proven track record of successful joint ventures",
                  "Full-service development capabilities",
                  "Transparent profit-sharing arrangements",
                  "Strong legal and regulatory compliance",
                  "Dedicated partnership management team"
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
              <p className="text-gray-400 text-xs mb-2">Limited partnership slots available for 2024</p>
              <p className="text-white font-semibold text-sm">Schedule a confidential partnership discussion</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Explore Partnership Opportunities?</h3>
            <p className="text-gray-400 mb-6">Let's discuss how we can create value together through strategic collaboration</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Discuss Partnership Opportunities
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            All partnership agreements are subject to due diligence and legal review. Tibos Limited values long-term, mutually beneficial relationships.
          </p>
        </div>
      </div>
    </section>
  );
}