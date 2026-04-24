import React, { useState, useEffect } from "react";
import img from "./images/Apartment.jpg";

// Additional testimonial images - replace with your actual images
import client1Img from "./images/homedp.png";
import client2Img from "./images/homedp2.png";
import client3Img from "./images/image1.jpg";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mwangi",
      location: "Zuri House, Tuala, Kajiado County",
      text: "Mjengoman transformed our vision into reality. The attention to detail and quality of work exceeded our expectations. From concept to completion, their team was professional, communicative, and delivered ahead of schedule.",
      rating: 5,
      image: client1Img,
      project: "Residential Villa"
    },
    {
      id: 2,
      name: "James Ochieng",
      location: "Crest House, Karen, Nairobi County",
      text: "Working with Tibosltd by Mjengoman was a game-changer for our commercial space. Their innovative design solutions and expert craftsmanship created an environment that our clients love. Highly recommended!",
      rating: 5,
      image: client2Img,
      project: "Commercial Complex"
    },
    {
      id: 3,
      name: "Dr. Elizabeth Kamau",
      location: "Residence at Olkeri, Ngong, Kajiado County",
      text: "The team at Mjengoman listened to our needs and delivered a stunning luxury home that perfectly balances elegance and functionality. Their after-service support has been exceptional.",
      rating: 5,
      image: client3Img,
      project: "Luxury Villa"
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-14 overflow-hidden">
      {/* Background decorative elements - matching ProjectShowcase */}
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
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">CLIENT FEEDBACK</span>
          </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Testimonials
            </span>
            <br />
            <span className="text-white">from Satisfied Clients</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Real stories from homeowners and businesses who trusted us with their dreams
          </p>
        </div>

        {/* Desktop View - Alternating Layout */}
        <div className="hidden lg:block space-y-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10 p-8 md:p-10 ${
                index % 2 === 0 ? 'md:translate-x-4' : 'md:-translate-x-4'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Section - Alternates sides */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left side - Image */}
                    <div className="relative group/image">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 rounded-2xl blur-xl group-hover/image:blur-2xl transition-all duration-500" />
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={testimonial.image || img}
                          alt={testimonial.name}
                          className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-700 group-hover/image:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      
                      {/* Quote Badge */}
                      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full p-4 shadow-xl">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FF9306] fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="pt-4">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FF9306] transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#FF9306] text-sm font-medium">{testimonial.location}</p>
                        <p className="text-gray-500 text-sm mt-2">{testimonial.project}</p>
                      </div>

                      {/* Signature line */}
                      <div className="flex items-center gap-3 pt-4">
                        <div className="w-12 h-px bg-gradient-to-r from-[#FF9306] to-transparent" />
                        <span className="text-gray-500 text-xs tracking-wider">SATISFIED CLIENT</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side - Content */}
                    <div className="space-y-5 order-2 md:order-1">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FF9306] fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="pt-4">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FF9306] transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#FF9306] text-sm font-medium">{testimonial.location}</p>
                        <p className="text-gray-500 text-sm mt-2">{testimonial.project}</p>
                      </div>

                      {/* Signature line */}
                      <div className="flex items-center gap-3 pt-4">
                        <div className="w-12 h-px bg-gradient-to-r from-[#FF9306] to-transparent" />
                        <span className="text-gray-500 text-xs tracking-wider">SATISFIED CLIENT</span>
                      </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative group/image order-1 md:order-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 rounded-2xl blur-xl group-hover/image:blur-2xl transition-all duration-500" />
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={testimonial.image || img}
                          alt={testimonial.name}
                          className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-700 group-hover/image:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      
                      {/* Quote Badge */}
                      <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full p-4 shadow-xl">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 p-6">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={testimonials[activeIndex].image || img}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FF9306] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-base leading-relaxed italic mb-6">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-white mb-1">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-[#FF9306] text-xs font-medium">{testimonials[activeIndex].location}</p>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 h-2 bg-[#FF9306] rounded-full"
                      : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                98%
              </div>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                150+
              </div>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                4.9
              </div>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                100%
              </div>
              <p className="text-gray-400 text-sm">On-Time Delivery</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="group relative bg-white/5 backdrop-blur-sm border border-[#FF9306]/30 px-8 py-3 text-white font-semibold rounded-lg hover:bg-[#FF9306]/10 hover:border-[#FF9306] transition-all duration-300">
            <Link to='/blog'>
            <span className="relative z-10 flex items-center gap-2">
              Read More Success Stories
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span></Link>
          </button>
        </div>
      </div>
    </section>
  );
}