import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronDown, 
  faChevronUp,
  faClock,
  faCreditCard,
  faCalendarXmark,
  faChildren,
  faPaw,
  faBellSlash,
  faSwimmer,
  faFileShield,
  faLeaf,
  faLock,
  faHardHat,
  faHandshake,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";

const policies = [
  {
    title: "Project Commencement Policy",
    icon: faClock,
    content: "All projects begin with a signed contract and initial deposit. Project timelines are clearly outlined in the agreement. Site preparation and mobilization fees are payable before construction commences.",
    category: "Project"
  },
  {
    title: "Payment Terms & Schedule",
    icon: faCreditCard,
    content: "We offer flexible payment terms based on project milestones. Typically, payments are structured as: 30% deposit upon contract signing, followed by milestone payments during construction phases, with final 10% payable upon project completion and handover.",
    category: "Financial"
  },
  {
    title: "Project Cancellation Policy",
    icon: faCalendarXmark,
    content: "Cancellations made before project commencement receive a full refund minus mobilization costs. Cancellations during active construction will be charged for work completed plus material costs. Written notice of 30 days is required for cancellation.",
    category: "Project"
  },
  {
    title: "Safety & Site Conduct",
    icon: faHardHat,
    content: "All construction sites maintain strict safety protocols including mandatory PPE, regular safety briefings, and site access restrictions. Unauthorized personnel are not permitted on active construction sites without proper supervision.",
    category: "Safety"
  },
  {
    title: "Quality Assurance Policy",
    icon: faShieldAlt,
    content: "We guarantee quality workmanship using premium materials. All projects undergo regular inspections at key milestones. We provide a structural warranty of 10 years and a workmanship warranty of 2 years on all completed projects.",
    category: "Quality"
  },
  {
    title: "Materials & Sourcing Policy",
    icon: faLeaf,
    content: "We source high-quality, durable materials from verified suppliers. Where possible, we prioritize local suppliers and sustainable materials. All materials meet Kenyan construction standards and specifications.",
    category: "Quality"
  },
  {
    title: "Variation & Change Order Policy",
    icon: faFileShield,
    content: "Any changes to the original scope of work must be documented as a variation order. Changes are implemented only after written approval and agreement on cost and timeline adjustments.",
    category: "Project"
  },
  {
    title: "Delay & Extension Policy",
    icon: faClock,
    content: "Unforeseen circumstances such as weather delays, material shortages, or client-requested changes may extend project timelines. We maintain transparent communication about any schedule adjustments.",
    category: "Project"
  },
  {
    title: "Dispute Resolution Policy",
    icon: faHandshake,
    content: "Any disputes arising from our services shall first be addressed through amicable negotiation. If unresolved, matters will be referred to arbitration as per Kenyan construction industry standards.",
    category: "Legal"
  },
  {
    title: "Confidentiality & Data Protection",
    icon: faLock,
    content: "Client information, project plans, and business details are treated with strict confidentiality. We comply with Kenyan data protection laws and do not share client information without explicit consent.",
    category: "Legal"
  },
  {
    title: "Environmental Compliance Policy",
    icon: faLeaf,
    content: "We are committed to environmentally responsible construction practices including proper waste management, dust control, and adherence to NEMA regulations. We promote eco-friendly building solutions where feasible.",
    category: "Environmental"
  },
  {
    title: "Subcontractor & Partner Policy",
    icon: faHandshake,
    content: "Specialized work may be assigned to vetted, qualified subcontractors who adhere to our quality and safety standards. All partners are fully licensed and insured.",
    category: "Operations"
  }
];

const Policies = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Project", "Financial", "Safety", "Quality", "Legal", "Environmental", "Operations"];
  
  const filteredPolicies = activeCategory === "All" 
    ? policies 
    : policies.filter(policy => policy.category === activeCategory);

  const togglePolicy = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">OUR COMMITMENT</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Company
            </span>
            <br />
            <span className="text-white">Policies & Standards</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Transparent policies that govern our operations, ensuring quality, safety, and trust in every project
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black shadow-lg"
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Policy Accordion */}
        <div className="space-y-4">
          {filteredPolicies.map((policy, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300"
            >
              <button
                onClick={() => togglePolicy(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <div className="flex items-start gap-4 pr-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={policy.icon} className="text-[#FF9306] text-sm" />
                  </div>
                  <span className="text-white font-medium text-base md:text-lg group-hover:text-[#FF9306] transition-colors">
                    {policy.title}
                  </span>
                </div>
                <FontAwesomeIcon 
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="h-5 w-5 text-[#FF9306] transition-transform duration-300 flex-shrink-0"
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-12 pr-4">
                    <div className="h-px bg-gradient-to-r from-[#FF9306]/30 to-transparent mb-4"></div>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {policy.content}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs bg-white/10 text-gray-500 px-2 py-1 rounded-full">
                        {policy.category}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPolicies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No policies found for this category.</p>
          </div>
        )}

        {/* Policy Highlights Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faHandshake} className="text-[#FF9306] text-xl" />
            </div>
            <h3 className="text-white font-semibold mb-2">Transparent Process</h3>
            <p className="text-gray-500 text-xs">Clear communication at every stage</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faShieldAlt} className="text-[#FF9306] text-xl" />
            </div>
            <h3 className="text-white font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-500 text-xs">10-year structural warranty</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faLock} className="text-[#FF9306] text-xl" />
            </div>
            <h3 className="text-white font-semibold mb-2">Data Protection</h3>
            <p className="text-gray-500 text-xs">Your information is secure</p>
          </div>
        </div>

        {/* Contact for Policy Questions */}
        <div className="mt-10 p-6 bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl border border-[#FF9306]/20 text-center">
          <p className="text-gray-300 text-sm">
            Have questions about our policies or need clarification?
            <a href="/contact" className="text-[#FF9306] hover:underline ml-1 font-medium">
              Contact our team for assistance →
            </a>
          </p>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            Last updated: January 2024 | Tibos Limited is committed to maintaining these standards
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policies;