import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faBuilding, 
  faComment,
  faArrowRight,
  faCheckCircle,
  faTimes,
  faHome,
  faHardHat,
  faRuler,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "http://127.0.0.1:3000/api/v1";

export default function RequestEstimate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectSize: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE_URL}/estimates`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          estimate: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            project_size: formData.projectSize,
            budget: formData.budget,
            message: formData.message,
            status: "pending"
          }
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          projectSize: '',
          budget: '',
          message: ''
        });
        
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(data.errors?.join(', ') || data.message || "Failed to submit estimate request");
      }
    } catch (err) {
      console.error("Error submitting estimate:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    navigate('/');
  };

  const benefits = [
    { icon: faClock, text: "Response within 24 hours" },
    { icon: faHardHat, text: "Detailed cost breakdown" },
    { icon: faRuler, text: "Site visit included" },
    { icon: faHome, text: "Free consultation" }
  ];

  const projectTypes = [
    { value: "residential", label: "Residential Construction" },
    { value: "commercial", label: "Commercial Development" },
    { value: "renovation", label: "Renovation & Remodeling" },
    { value: "industrial", label: "Industrial Project" },
    { value: "landscape", label: "Landscaping" },
    { value: "other", label: "Other" }
  ];

  const projectSizes = [
    { value: "small", label: "Small (Under 100 m²)" },
    { value: "medium", label: "Medium (100-300 m²)" },
    { value: "large", label: "Large (300-500 m²)" },
    { value: "extra-large", label: "Extra Large (500+ m²)" }
  ];

  const budgets = [
    { value: "under-1m", label: "Under KES 1 Million" },
    { value: "1m-5m", label: "KES 1M - 5 Million" },
    { value: "5m-10m", label: "KES 5M - 10 Million" },
    { value: "10m-20m", label: "KES 10M - 20 Million" },
    { value: "over-20m", label: "Over KES 20 Million" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Close Button - Top Right */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClose}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Back to Home"
          >
            <FontAwesomeIcon icon={faTimes} className="text-gray-400 text-xl group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 p-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] flex items-center justify-center">
                <FontAwesomeIcon icon={faBuilding} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Request an Estimate</h1>
                <p className="text-gray-400 text-sm">Get a detailed quote for your project within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="m-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
              <div>
                <p className="text-green-400 font-semibold">Estimate Request Submitted!</p>
                <p className="text-gray-400 text-sm">We'll review your request and get back to you within 24 hours. Redirecting to home...</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="m-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faTimes} className="text-white text-sm" />
              </div>
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Column - Info */}
            <div className="p-6 md:p-8 bg-white/5 border-r border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Why Request an Estimate?</h2>
              <ul className="space-y-3 mb-6">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#FF9306]/20 flex items-center justify-center">
                      <FontAwesomeIcon icon={benefit.icon} className="text-[#FF9306] text-sm" />
                    </div>
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-4 border border-[#FF9306]/20">
                <p className="text-white font-semibold text-sm mb-2">What's Included in Your Estimate?</p>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li>• Detailed material breakdown</li>
                  <li>• Labor cost estimation</li>
                  <li>• Timeline projection</li>
                  <li>• Professional fees</li>
                  <li>• Permit and approval costs</li>
                  <li>• Contingency allocation</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-xs">
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  Most estimates are delivered within 24-48 hours
                </p>
              </div>

              {/* Back to Home Link */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-[#FF9306] text-sm transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="rotate-180" />
                  Back to Home
                </button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faUser} className="text-[#FF9306] text-sm" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306] text-sm" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Phone Number */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faPhone} className="text-[#FF9306] text-sm" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 712 345 678"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306] text-sm" />
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <option value="" className="bg-[#020617]">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#020617]">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Size */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faRuler} className="text-[#FF9306] text-sm" />
                    Project Size (Approximate)
                  </label>
                  <select
                    name="projectSize"
                    value={formData.projectSize}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <option value="" className="bg-[#020617]">Select approximate size</option>
                    {projectSizes.map((size) => (
                      <option key={size.value} value={size.value} className="bg-[#020617]">
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faClock} className="text-[#FF9306] text-sm" />
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <option value="" className="bg-[#020617]">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget.value} value={budget.value} className="bg-[#020617]">
                        {budget.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Project Details */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faComment} className="text-[#FF9306] text-sm" />
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project in detail..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300 resize-none"
                    disabled={isSubmitting}
                  ></textarea>
                  <p className="text-gray-500 text-xs mt-1">Include project location, timeline expectations, and any specific requirements</p>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#FF6A00] to-[#FF9306] hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Submit Estimate Request</span>
                    </>
                  )}
                </button>

                <p className="text-gray-500 text-xs text-center mt-4">
                  By submitting, you agree to our <a href="/terms" className="text-[#FF9306] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#FF9306] hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}