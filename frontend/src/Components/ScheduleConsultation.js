import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faCalendarAlt, 
  faClock, 
  faComment,
  faArrowRight,
  faCheckCircle,
  faHeadset,
  faVideo,
  faBuilding,
  faHandshake,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "http://127.0.0.1:3000/api/v1";

export default function ScheduleConsultation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    consultation_type: 'virtual',
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
      const response = await fetch(`${API_BASE_URL}/consultations`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          consultation: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            preferred_date: formData.preferred_date,
            preferred_time: formData.preferred_time,
            consultation_type: formData.consultation_type,
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
          preferred_date: '',
          preferred_time: '',
          consultation_type: 'virtual',
          message: ''
        });
        
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(data.errors?.join(', ') || data.message || "Failed to schedule consultation");
      }
    } catch (err) {
      console.error("Error scheduling consultation:", err);
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
    { icon: faHeadset, text: "Free expert consultation" },
    { icon: faVideo, text: "Virtual or in-person options" },
    { icon: faBuilding, text: "Project assessment" },
    { icon: faHandshake, text: "No obligation quote" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
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
                <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Schedule a Consultation</h1>
                <p className="text-gray-400 text-sm">Free project assessment with our experts</p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="m-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
              <div>
                <p className="text-green-400 font-semibold">Consultation Scheduled!</p>
                <p className="text-gray-400 text-sm">We'll contact you shortly to confirm your appointment. Redirecting to home...</p>
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
              <h2 className="text-xl font-bold text-white mb-4">Why Schedule a Consultation?</h2>
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
                <p className="text-white font-semibold text-sm mb-2">What to Expect</p>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li>• 30-45 minute expert consultation</li>
                  <li>• Project requirements discussion</li>
                  <li>• Budget and timeline planning</li>
                  <li>• Site visit (if needed)</li>
                  <li>• Detailed quote within 48 hours</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-xs">
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  Consultation slots are available Mon-Fri, 8 AM - 5 PM
                </p>
              </div>

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
                
                {/* Preferred Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FF9306] text-sm" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferred_date"
                    required
                    value={formData.preferred_date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Preferred Time */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faClock} className="text-[#FF9306] text-sm" />
                    Preferred Time *
                  </label>
                  <select
                    name="preferred_time"
                    required
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <option value="" className="bg-[#020617]">Select time slot</option>
                    <option value="9:00 AM" className="bg-[#020617]">9:00 AM</option>
                    <option value="10:00 AM" className="bg-[#020617]">10:00 AM</option>
                    <option value="11:00 AM" className="bg-[#020617]">11:00 AM</option>
                    <option value="2:00 PM" className="bg-[#020617]">2:00 PM</option>
                    <option value="3:00 PM" className="bg-[#020617]">3:00 PM</option>
                    <option value="4:00 PM" className="bg-[#020617]">4:00 PM</option>
                  </select>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faVideo} className="text-[#FF9306] text-sm" />
                    Consultation Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, consultation_type: 'virtual'})}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        formData.consultation_type === 'virtual'
                          ? 'bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black'
                          : 'bg-white/10 text-gray-400 hover:text-white border border-white/20'
                      }`}
                    >
                      <FontAwesomeIcon icon={faVideo} className="mr-2" />
                      Virtual
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, consultation_type: 'in-person'})}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        formData.consultation_type === 'in-person'
                          ? 'bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black'
                          : 'bg-white/10 text-gray-400 hover:text-white border border-white/20'
                      }`}
                    >
                      <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                      In-Person
                    </button>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faComment} className="text-[#FF9306] text-sm" />
                    Project Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300 resize-none"
                    disabled={isSubmitting}
                  ></textarea>
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
                      <span>Scheduling...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Schedule Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-gray-500 text-xs text-center mt-4">
                  By scheduling, you agree to our <a href="/terms" className="text-[#FF9306] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#FF9306] hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}