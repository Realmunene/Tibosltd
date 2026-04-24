import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuilding,
  faStar,
  faCheckCircle,
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faPeopleGroup,
  faHardHat,
  faTrowel,
  faRuler,
  faHammer,
  faToolbox,
  faHandshake,
  faShieldAlt,
  faUsers,
  faAward,
  faChartLine,
  faHome,
  faCity,
  faPaintRoller,
  faWater,
  faRoad
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-6 overflow-hidden">
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

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        Header Section
        <div className="text-center mb-16">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">ABOUT US</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Tibos Limited
            </span>
            <br />
            <span className="text-white">Building Dreams, Constructing Excellence</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Your trusted partner in quality construction and infrastructure development across Kenya
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">10+</div>
            <p className="text-gray-400 text-xs mt-1">Years of Excellence</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">250+</div>
            <p className="text-gray-400 text-xs mt-1">Projects Completed</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">100%</div>
            <p className="text-gray-400 text-xs mt-1">Client Satisfaction</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">24/7</div>
            <p className="text-gray-400 text-xs mt-1">Project Support</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-10">
          {/* Company Overview */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306] text-lg" />
              </div>
              <h2 className="text-2xl font-bold text-white">Who We Are</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-[#FF9306]">Tibos Limited</strong> is a premier building and construction company headquartered in <strong className="text-[#FF9306]">Chebilat, along the Kisii-Sotik Road</strong>. With over a decade of experience in the construction industry, we have established ourselves as a trusted partner for quality infrastructure development across Kenya.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our strategic location in Chebilat allows us to serve clients across Kisii, Sotik, and surrounding regions effectively. We specialize in residential, commercial, and industrial construction, delivering projects that stand the test of time.
            </p>
          </div>

          {/* Our Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To deliver exceptional construction solutions that exceed client expectations through innovation, integrity, and unwavering commitment to quality.
              </p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become Kenya's most trusted construction partner, renowned for excellence, innovation, and sustainable building practices.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faAward} className="text-[#FF9306] text-lg" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Quality First", desc: "We never compromise on materials or workmanship" },
                { title: "Integrity", desc: "Honest, transparent dealings with all stakeholders" },
                { title: "Innovation", desc: "Embracing modern construction techniques" },
                { title: "Safety", desc: "Prioritizing worker and site safety at all times" },
                { title: "Timely Delivery", desc: "Completing projects on schedule, every time" },
                { title: "Client Focus", desc: "Your satisfaction is our ultimate goal" }
              ].map((value, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF9306] text-sm mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{value.title}</h4>
                    <p className="text-gray-400 text-xs">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services We Offer */}
          <div className="group relative bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl overflow-hidden border border-[#FF9306]/20 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faToolbox} className="text-[#FF9306] text-lg" />
              </div>
              <h2 className="text-2xl font-bold text-white">Services We Offer</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: faHome, title: "Residential Construction", desc: "Homes, apartments, and gated communities" },
                { icon: faCity, title: "Commercial Development", desc: "Office blocks, malls, and business parks" },
                { icon: faBuilding, title: "Industrial Projects", desc: "Warehouses, factories, and industrial parks" },
                { icon: faHammer, title: "Renovations", desc: "Modern upgrades and remodeling" },
                { icon: faPaintRoller, title: "Interior Finishing", desc: "Premium interior solutions" },
                { icon: faRoad, title: "Infrastructure", desc: "Roads, drainage, and landscaping" }
              ].map((service, idx) => (
                <div key={idx} className="text-center p-4 bg-white/5 rounded-xl hover:scale-105 transition-transform duration-300">
                  <FontAwesomeIcon icon={service.icon} className="text-[#FF9306] text-2xl mb-2" />
                  <h4 className="text-white font-semibold text-sm">{service.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandshake} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Why Choose Tibos Limited?</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Experienced team of certified professionals",
                  "Use of high-quality, durable materials",
                  "Competitive pricing with transparent quotes",
                  "Strict adherence to safety standards",
                  "Timely project completion guarantee",
                  "Excellent after-construction support"
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 w-4" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location & Service Area */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Our Location</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-[#FF9306]">Head Office:</strong> Chebilat, along Kisii-Sotik Road
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-[#FF9306]">Service Areas:</strong> We proudly serve clients across:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kisii", "Sotik", "Kericho", "Homa Bay", "Migori", "Nairobi", "Kisumu", "Nakuru"].map((area, idx) => (
                  <span key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">📍 {area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-[#FF9306] text-lg" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Expert Team</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Tibos Limited, we pride ourselves on having a dedicated team of architects, engineers, project managers, and skilled craftsmen. Each team member brings years of experience and a passion for excellence to every project. We invest in continuous training to ensure our team stays updated with the latest construction technologies and best practices.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Get In Touch</h2>
              <div className="space-y-3">
                <a href="mailto:info@tiboslimited.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF9306] transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306]" />
                  <span>info@tiboslimited.com</span>
                </a>
                <a href="tel:+254700123456" className="flex items-center gap-3 text-gray-300 hover:text-[#FF9306] transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="text-[#FF9306]" />
                  <span>+254 700 123 456</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9306]" />
                  <span>Chebilat, along Kisii-Sotik Road, Kenya</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faClock} className="text-[#FF9306]" />
                  <span>Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl overflow-hidden border border-[#FF9306]/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Start Your Project Today</h3>
              <p className="text-gray-300 mb-4">Let's discuss your construction needs</p>
              <div className="flex justify-center gap-1 mb-4">
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-lg" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-lg" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-lg" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-lg" />
                <FontAwesomeIcon icon={faStar} className="text-[#FF9306] text-lg" />
              </div>
              <button className="bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-6 py-2.5 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get a Free Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;