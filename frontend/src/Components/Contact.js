import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "Select a service",
    "Residential Construction",
    "Commercial Development",
    "Interior Finishing",
    "Renovation & Remodeling",
    "Landscaping",
    "Project Consultation"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", email: "", message: "", service: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-10 md:py-12 overflow-hidden">
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
           <div className="w-full flex justify-start">
  <div className="inline-flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
    <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
    <span className="text-xs font-medium text-gray-300 tracking-wider">
      GET IN TOUCH
    </span>
  </div>
</div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Let's Talk
            </span>
            <br />
            <span className="text-white">About Your Project</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Ready to bring your vision to life? Reach out to us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact <span className="text-[#FF9306]">Information</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#FF9306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+254 795 841 227</p>
                    <p className="text-gray-500 text-xs">Mon-Fri, 8AM - 6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#FF9306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">info@tibosltd.com</p>
                    <p className="text-gray-500 text-xs">24/7 Response</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#FF9306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Office</p>
                    <p className="text-white font-semibold">Chebilat along Kisii - Sotic Road, Kisii, Kenya</p>
                    <p className="text-gray-500 text-xs">Visit by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FF9306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#FF9306] hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#FF9306] hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.598-12.08c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#FF9306] hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#FF9306] hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a <span className="text-[#FF9306]">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tibos ltd"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+254 795 841 227"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tibosltd@gmail.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF9306] transition-colors"
                >
                  {services.map((service, idx) => (
                    <option key={idx} value={service} className="bg-[#020617]">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-colors resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm text-center">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-6 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <p className="text-gray-500 text-xs text-center">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d35.1234567!3d-0.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b4d2e3f4a5b6c%3A0x7d8e9f0a1b2c3d4e!2sSotik%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location - Sotik, Kisii"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Have questions? Call us at{" "}
            <a href="tel:+254700123456" className="text-[#FF9306] hover:underline">
              +254 795 841 227
            </a>{" "}
            or email{" "}
            <a href="mailto:info@tibosconstruction.com" className="text-[#FF9306] hover:underline">
              info@tibosltd.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}