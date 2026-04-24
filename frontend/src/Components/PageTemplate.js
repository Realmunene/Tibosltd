import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function PageTemplate({ title, subtitle, children, backLink = "/" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-[#FF9306] text-white py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to={backLink} 
            className="inline-flex items-center text-white mb-6 hover:text-gray-200 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-100">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          {children}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Need More Information?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306] text-2xl" />
              <div>
                <p className="font-semibold">Email Us</p>
                <a href="mailto:info@tiboslimited.com" className="text-gray-600 hover:text-[#FF9306]">
                  info@tiboslimited.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-[#FF9306] text-2xl" />
              <div>
                <p className="font-semibold">Call Us</p>
                <a href="tel:+254700000000" className="text-gray-600 hover:text-[#FF9306]">
                  +254 700 000 000
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#FF9306] text-2xl" />
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}