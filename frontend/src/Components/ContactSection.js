import React, { useState } from "react";
import InstantMessage from "./InstantMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPhoneAlt, 
  faHeadset, 
  faEnvelope, 
  faComments,
  faClock,
  faShieldAlt,
  faRocket,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-12 overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-6">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">GET IN TOUCH</span>
          </div> */}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Let's Connect
            </span>
            <br />
            <span className="text-white">We're Here to Help</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Whether you have questions about our services or ready to start your project, 
            our dedicated team is here to support you every step of the way.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Talk to Sales Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10">
            {/* Decorative gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00]"></div>
            
            <div className="p-8">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-[#FF9306] text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Talk to Sales</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full"></div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 text-base leading-relaxed">
                Interested in our construction services? Speak directly with our experienced sales team 
                to discuss your project requirements, timelines, and budget.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:+254729491343"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#FF9306] transition-all duration-300 group/item"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-[#FF9306]/20 transition-colors">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-[#FF9306] text-base" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Call us at</div>
                    <div className="text-base font-semibold group-hover/item:translate-x-1 transition-transform">
                      +254 729 491 343
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@tibosconstruction.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#FF9306] transition-all duration-300 group/item"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-[#FF9306]/20 transition-colors">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306] text-base" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Send us an email</div>
                    <div className="text-base font-semibold group-hover/item:translate-x-1 transition-transform">
                      info@tibosconstruction.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Customer Support Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10">
            {/* Decorative gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00]"></div>
            
            <div className="p-8">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faHeadset} className="text-[#FF9306] text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Customer Support</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full"></div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 text-base leading-relaxed">
                Need assistance? Our friendly support team is available 24/7 to answer your questions 
                and provide guidance on our services and processes.
              </p>

              <div className="space-y-6">
                <button 
                  onClick={handleOpen}
                  className="w-full group/btn relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FontAwesomeIcon icon={faComments} className="text-white text-lg group-hover/btn:scale-110 transition-transform" />
                    <span>Start Live Chat</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </button>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-500 text-xs font-medium">Online</span>
                    </div>
                    <span className="text-gray-600 text-xs">•</span>
                    <p className="text-gray-500 text-sm">
                      Avg. response: <span className="font-semibold text-[#FF9306]">&lt; 2 minutes</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12">
          <div className="relative bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 md:p-10 border border-[#FF9306]/20 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #FF9306 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">Tibos Infrastructure?</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faClock} className="text-[#FF9306] text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">24/7 Support</p>
                    <p className="text-gray-500 text-xs">Round-the-clock assistance</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faRocket} className="text-[#FF9306] text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Fast Response</p>
                    <p className="text-gray-500 text-xs">Quick turnaround time</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-[#FF9306] text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Quality Guaranteed</p>
                    <p className="text-gray-500 text-xs">Certified professionals</p>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF9306] text-sm" />
                  <span className="text-gray-400 text-xs">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF9306] text-sm" />
                  <span className="text-gray-400 text-xs">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF9306] text-sm" />
                  <span className="text-gray-400 text-xs">500+ Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Message Popup */}
      {showPopup && <InstantMessage onClose={handleClose} />}
    </section>
  );
};

export default ContactSection;