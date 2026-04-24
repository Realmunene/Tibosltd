import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTimes, 
  faPaperPlane, 
  faEnvelope, 
  faComment,
  faHeadset,
  faClock,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const API_BASE_URL = "http://127.0.0.1:3000/api/v1";

export default function InstantMessage({ onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/contact_messages`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          contact_message: { 
            name, 
            email, 
            phone, 
            message,
            status: "unread"
          } 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setError(data.errors?.join(", ") || "Please check your information and try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Could not send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10" onClick={onClose} />
      
      <div className="relative bg-gradient-to-br from-[#020617] to-[#0a0f2c] rounded-2xl shadow-2xl w-[90vw] max-w-md overflow-hidden border border-[#FF9306]/20">
        <div className="relative bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 p-5 border-b border-[#FF9306]/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Live Support</h2>
                <p className="text-gray-400 text-xs">We typically respond in &lt;2 minutes</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faTimes} className="text-gray-400 text-sm hover:text-white" />
            </button>
          </div>
          <div className="absolute bottom-2 right-5 flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-500 text-xs font-medium">Online</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {success && (
            <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <FontAwesomeIcon icon={faComment} className="text-[#FF9306] text-sm" />
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9306] focus:border-transparent transition-all duration-300"
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306] text-sm" />
              Email Address
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9306] focus:border-transparent transition-all duration-300"
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <FontAwesomeIcon icon={faClock} className="text-[#FF9306] text-sm" />
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              placeholder="+254 700 123 456"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9306] focus:border-transparent transition-all duration-300"
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <FontAwesomeIcon icon={faComment} className="text-[#FF9306] text-sm" />
              Your Message
            </label>
            <textarea
              placeholder="Tell us how we can help you today..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="3"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9306] focus:border-transparent transition-all duration-300 resize-none"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 overflow-hidden group relative ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#FF6A00] to-[#FF9306] hover:shadow-lg hover:shadow-amber-500/20"
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-white group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </>
              )}
            </span>
          </button>

          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
              <span className="text-gray-500 text-xs">24/7 Support</span>
            </div>
            <div className="w-px h-3 bg-gray-600"></div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="text-[#FF9306] text-xs" />
              <span className="text-gray-500 text-xs">Quick Response</span>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs">
            We'll never share your information with third parties.
          </p>
        </form>

        <div className="h-1 bg-gradient-to-r from-[#FF9306] to-[#FF6A00]"></div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}