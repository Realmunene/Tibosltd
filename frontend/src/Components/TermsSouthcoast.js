import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronDown, 
  faChevronUp,
  faFileContract,
  faHandshake,
  faCreditCard,
  faClock,
  faCalendarXmark,
  faShieldAlt,
  faGavel,
  faPenClip,
  faScaleBalanced,
  faBuilding,
  faUserShield,
  faFileSignature,
  faBalanceScale
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const terms = [
  {
    title: "Acceptance of Terms",
    icon: faFileContract,
    content: "By engaging Tibos Limited for construction services, clients agree to abide by these Terms and Conditions. These terms apply to all projects, consultations, and services provided by Tibos Limited. Continued engagement constitutes acceptance of any updates to these terms.",
    category: "General"
  },
  {
    title: "Contract Agreement",
    icon: faHandshake,
    content: "All projects require a signed written contract before commencement. The contract outlines scope of work, timeline, payment schedule, and specifications. No verbal agreements shall be binding unless confirmed in writing by both parties.",
    category: "Contract"
  },
  {
    title: "Payment Terms",
    icon: faCreditCard,
    content: "Payment structure is outlined in the contract, typically requiring a 30% deposit upon signing. Progress payments are tied to project milestones. Final payment of 10% is due upon project completion and client acceptance. All payments are due within 7 days of invoice.",
    category: "Financial"
  },
  {
    title: "Project Timeline & Delivery",
    icon: faClock,
    content: "Project timelines are estimates based on current conditions. Delays may occur due to weather, material availability, client-requested changes, or unforeseen site conditions. We strive to complete all projects within agreed timeframes and communicate any delays promptly.",
    category: "Project"
  },
  {
    title: "Cancellation & Termination",
    icon: faCalendarXmark,
    content: "Either party may terminate the contract with 30 days written notice. Client cancellation before construction begins forfeits the deposit. Cancellation during construction requires payment for all work completed plus materials ordered. Tibos Limited reserves the right to terminate for non-payment or breach of terms.",
    category: "Contract"
  },
  {
    title: "Quality Assurance",
    icon: faShieldAlt,
    content: "We guarantee workmanship for 2 years and structural integrity for 10 years from project completion. Defects arising from faulty workmanship will be rectified at no cost. This warranty does not cover normal wear and tear, misuse, or unauthorized modifications.",
    category: "Quality"
  },
  {
    title: "Variation Orders",
    icon: faPenClip,
    content: "Any changes to the original scope must be approved through a variation order. Variations are implemented only after written approval and agreement on cost and timeline adjustments. Verbal change requests are not binding.",
    category: "Project"
  },
  {
    title: "Site Access & Safety",
    icon: faUserShield,
    content: "Clients must provide safe site access. Construction sites have safety protocols - unauthorized access is prohibited. Clients assume responsibility for their safety and that of their representatives when visiting active construction sites.",
    category: "Safety"
  },
  {
    title: "Materials & Substitutions",
    icon: faBuilding,
    content: "Materials specified in the contract will be used. If specified materials become unavailable, we will propose suitable alternatives for client approval. Any cost differences will be adjusted accordingly.",
    category: "Quality"
  },
  {
    title: "Liability & Insurance",
    icon: faGavel,
    content: "Tibos Limited maintains comprehensive liability insurance. We are not liable for indirect damages or losses beyond the contract value. Clients are responsible for securing their own insurance for property and contents during construction.",
    category: "Legal"
  },
  {
    title: "Dispute Resolution",
    icon: faBalanceScale,
    content: "Disputes shall first be addressed through good faith negotiation. Unresolved disputes will proceed to mediation. If mediation fails, arbitration through the Kenya Building and Construction Industry Arbitration Centre shall be binding.",
    category: "Legal"
  },
  {
    title: "Governing Law",
    icon: faScaleBalanced,
    content: "These Terms and Conditions are governed by the laws of Kenya. Any legal proceedings shall be conducted in Kenyan courts. The parties submit to the exclusive jurisdiction of Kenyan courts.",
    category: "Legal"
  },
  {
    title: "Confidentiality",
    icon: faFileSignature,
    content: "Both parties agree to keep confidential all project details, plans, pricing, and business information. Confidentiality survives termination of the contract.",
    category: "Legal"
  },
  {
    title: "Force Majeure",
    icon: faClock,
    content: "Neither party shall be liable for delays caused by circumstances beyond reasonable control including natural disasters, government actions, material shortages, or labor disputes. Timelines will be extended accordingly.",
    category: "General"
  }
];

const TermsSouthcoast = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "General", "Contract", "Financial", "Project", "Quality", "Safety", "Legal"];
  
  const filteredTerms = activeCategory === "All" 
    ? terms 
    : terms.filter(term => term.category === activeCategory);

  const toggleTerm = (index) => {
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
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">LEGAL AGREEMENT</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Terms & 
            </span>
            <br />
            <span className="text-white">Conditions</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Please review these terms carefully before engaging our construction services
          </p>
        </div>

        {/* Last Updated Notice */}
        <div className="text-center mb-8">
          <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
            Last Updated: January 2024
          </span>
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

        {/* Terms Accordion */}
        <div className="space-y-4">
          {filteredTerms.map((term, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleTerm(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <div className="flex items-start gap-4 pr-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={term.icon} className="text-[#FF9306] text-sm" />
                  </div>
                  <span className="text-white font-medium text-base md:text-lg group-hover:text-[#FF9306] transition-colors">
                    {term.title}
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
                      {term.content}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs bg-white/10 text-gray-500 px-2 py-1 rounded-full">
                        {term.category}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No terms found for this category.</p>
          </div>
        )}

        {/* Important Notice Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-2xl border border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faGavel} className="text-amber-500" />
            </div>
            <div>
              <h3 className="text-amber-500 font-semibold mb-2">Important Legal Notice</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                These Terms and Conditions constitute a legally binding agreement between Tibos Limited and our clients. 
                By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these terms. 
                If you do not agree with any part of these terms, please do not proceed with our services.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Have questions about our Terms & Conditions?
            <br />
            <a href="/contact" className="text-[#FF9306] hover:underline font-medium">
              <Link to="/contact">Contact our legal team →</Link>
            </a>
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8  border-t border-white/10">
        </div>
      </div>
    </section>
  );
};

export default TermsSouthcoast;