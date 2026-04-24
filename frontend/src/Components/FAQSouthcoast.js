import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronDown, 
  faChevronUp,
  faHardHat,
  faBuilding,
  faHammer,
  faRuler,
  faHandshake,
  faClock,
  faPhone,
  faEnvelope,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "What areas does Tibos Limited serve?",
    answer: "We are headquartered in Chebilat along the Kisii-Sotik Road and proudly serve clients across Kisii, Sotik, Kericho, Homa Bay, Migori, Nairobi, Kisumu, Nakuru, and surrounding regions.",
    category: "General"
  },
  {
    question: "What types of construction services do you offer?",
    answer: "We offer comprehensive construction services including residential construction (homes, apartments, gated communities), commercial development (office blocks, malls), industrial projects (warehouses, factories), renovations, interior finishing, and infrastructure development (roads, drainage, landscaping).",
    category: "Services"
  },
  {
    question: "How long have you been in the construction industry?",
    answer: "Tibos Limited has over 10 years of experience in the construction industry, with a proven track record of delivering quality projects across Kenya.",
    category: "Company"
  },
  {
    question: "Do you handle both small and large-scale projects?",
    answer: "Yes, we handle projects of all sizes - from small residential renovations to large-scale commercial and industrial developments. Every project receives our full attention and commitment to quality.",
    category: "Services"
  },
  {
    question: "What is your project completion timeline?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed project schedules during consultation and are committed to delivering on time. Typical residential projects take 3-8 months, while commercial projects may take 6-12 months.",
    category: "Process"
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Tibos Limited is fully licensed, insured, and compliant with all Kenyan construction regulations and safety standards. We maintain proper certifications for all our services.",
    category: "Company"
  },
  {
    question: "Do you provide free quotes and consultations?",
    answer: "Yes, we offer free initial consultations and no-obligation quotes. Contact us to schedule a site visit and discuss your project requirements.",
    category: "Process"
  },
  {
    question: "What materials do you use for construction?",
    answer: "We use only high-quality, durable materials from reputable suppliers. Our commitment to quality ensures that your structure stands the test of time. We also offer eco-friendly and sustainable building options.",
    category: "Quality"
  },
  {
    question: "Do you handle permits and approvals?",
    answer: "Yes, we manage all necessary permits, approvals, and regulatory compliance for your project, ensuring a hassle-free construction process from start to finish.",
    category: "Process"
  },
  {
    question: "How can I get a quote for my project?",
    answer: "You can contact us via email, phone, or visit our office in Chebilat. We'll schedule a site visit, understand your requirements, and provide a detailed, transparent quote within 3-5 business days.",
    category: "Contact"
  },
  {
    question: "What is your payment structure?",
    answer: "We offer flexible payment plans tailored to your project. Typically, we require a deposit to commence work, with milestone-based payments throughout the project timeline. Contact us for detailed payment terms.",
    category: "Process"
  },
  {
    question: "Do you offer post-construction support?",
    answer: "Yes, we provide excellent after-construction support including maintenance services, warranty coverage, and ongoing assistance to ensure your complete satisfaction.",
    category: "Support"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "General", "Services", "Company", "Process", "Quality", "Contact", "Support"];
  
  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-5 overflow-hidden">
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
            <span className="text-xs font-medium text-gray-300 tracking-wider">KNOWLEDGE BASE</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Frequently Asked
            </span>
            <br />
            <span className="text-white">Questions</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Find answers to common questions about our construction services, process, and how we can help bring your vision to life
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

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <div className="flex items-start gap-4 pr-4">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9306] group-hover:scale-150 transition-transform"></div>
                  </div>
                  <span className="text-white font-medium text-base md:text-lg group-hover:text-[#FF9306] transition-colors">
                    {faq.question}
                  </span>
                </div>
                <FontAwesomeIcon 
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="h-5 w-5 text-[#FF9306] transition-transform duration-300 flex-shrink-0"
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-10 pr-4">
                    <div className="h-px bg-gradient-to-r from-[#FF9306]/30 to-transparent mb-4"></div>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                    {/* Category Badge */}
                    <div className="mt-3">
                      <span className="text-xs bg-white/10 text-gray-500 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No FAQs found for this category.</p>
          </div>
        )}

        {/* Still Have Questions Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl border border-[#FF9306]/20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FontAwesomeIcon icon={faHandshake} className="text-[#FF9306] text-2xl" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Still Have Questions?</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Please contact our team for personalized assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+254700123456"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-6 py-2.5 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <FontAwesomeIcon icon={faPhone} />
              Call Us Now
            </a>
            <a
              href="mailto:info@tiboslimited.com"
              className="inline-flex items-center gap-2 border border-[#FF9306]/50 px-6 py-2.5 text-white font-semibold rounded-lg hover:bg-[#FF9306]/10 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Email Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 px-6 py-2.5 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Visit Our Office
            </a>
          </div>
        </div>

        {/* Quick Contact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-3 text-center">
            <FontAwesomeIcon icon={faClock} className="text-[#FF9306] text-xl" />
            <div>
              <p className="text-white font-semibold">Response Time</p>
              <p className="text-gray-500 text-xs">Within 24 hours</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-center">
            <FontAwesomeIcon icon={faHardHat} className="text-[#FF9306] text-xl" />
            <div>
              <p className="text-white font-semibold">Expert Team</p>
              <p className="text-gray-500 text-xs">Certified Professionals</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-center">
            <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306] text-xl" />
            <div>
              <p className="text-white font-semibold">Free Consultation</p>
              <p className="text-gray-500 text-xs">No obligation quotes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;