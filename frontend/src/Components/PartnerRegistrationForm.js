import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faXmark, 
  faBuilding, 
  faUser, 
  faPhone, 
  faEnvelope, 
  faLock, 
  faMapMarkerAlt,
  faFileAlt,
  faCity,
  faHome,
  faArrowRight,
  faArrowLeft,
  faHandshake,
  faKey,
  faCheckCircle,
  faHardHat,
  faTruck,
  faHammer,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import logo from "./images/IMG-20251008-WA0008logo0.png";
import { Link, useNavigate } from "react-router-dom";

// Use the direct Rails server URL - NOT the proxy
const API_BASE_URL = "http://localhost:3000/api/v1";

export default function PartnerRegistrationForm({ onClose }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    supplierType: "",
    supplierName: "",
    mobile: "",
    email: "",
    contactPerson: "",
    password: "",
    confirmPassword: "",
    description: "",
    city: "",
    address: "",
    agree: false,
  });

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginView, setLoginView] = useState("login");
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  const supplierTypes = [
    { value: "construction", label: "Construction Materials Supplier", icon: faHardHat },
    { value: "transport", label: "Transport & Logistics Provider", icon: faTruck },
    { value: "contractor", label: "Subcontractor", icon: faHammer },
    { value: "architect", label: "Architectural Firm", icon: faBuilding },
    { value: "engineering", label: "Engineering Services", icon: faStar },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const resetAllStates = () => {
    setForm({
      supplierType: "",
      supplierName: "",
      mobile: "",
      email: "",
      contactPerson: "",
      password: "",
      confirmPassword: "",
      description: "",
      city: "",
      address: "",
      agree: false,
    });
    setLoginForm({ email: "", password: "" });
    setShowLogin(false);
    setLoginView("login");
    setForgotSent(false);
    setForgotEmail("");
    setLoading(false);
    setLoginLoading(false);
    setForgotLoading(false);
  };

  const handleClose = () => {
    resetAllStates();
    navigate('/');
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!form.agree) {
      alert("Please accept the Terms and Conditions");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        supplier_type: form.supplierType,
        supplier_name: form.supplierName,
        mobile: form.mobile,
        email: form.email,
        contact_person: form.contactPerson,
        password: form.password,
        description: form.description,
        city: form.city,
        address: form.address,
      };

      // Direct fetch to Rails backend - no proxy
      const res = await fetch(`${API_BASE_URL}/partners`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ partner: payload }),
      });

      // Check if response is OK before parsing JSON
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server error response:", errorText);
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful! Our team will review your application and contact you shortly.");
        resetAllStates();
        navigate('/');
        
        if (typeof onClose === 'function') {
          onClose();
        }
      } else {
        alert(data.errors ? data.errors.join(", ") : data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong. Please make sure the server is running and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/partners/login`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(loginForm),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      if (res.ok) {
        if (data.token) {
          localStorage.setItem("partnerToken", data.token);
        }
        alert("Login successful!");
        resetAllStates();
        navigate('/');
        
        if (typeof onClose === 'function') {
          onClose();
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setLoginView("forgot");
  };

  const handleBackToLogin = () => {
    setLoginView("login");
    setForgotSent(false);
    setForgotEmail("");
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setForgotLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/partners/forgot-password`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email: forgotEmail }),
      });

      if (response.ok) {
        setForgotSent(true);
      } else {
        alert("Failed to send recovery email. Please try again.");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setForgotLoading(false);
    }
  };

  const renderLoginForm = () => (
    <>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306] text-sm" />
            Email Address
          </label>
          <div className="relative">
            <input
              name="email"
              type="email"
              placeholder="partner@tibos.com"
              value={loginForm.email}
              onChange={handleLoginChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
              required
              disabled={loginLoading}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 text-sm" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
            <FontAwesomeIcon icon={faLock} className="text-[#FF9306] text-sm" />
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={loginForm.password}
              onChange={handleLoginChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
              required
              disabled={loginLoading}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faLock} className="text-gray-500 text-sm" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loginLoading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
            loginLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-[#FF6A00] to-[#FF9306] hover:shadow-lg hover:shadow-amber-500/20"
          }`}
        >
          {loginLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Signing In...</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faArrowRight} />
              <span>Sign In to Partner Portal</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-6 text-center space-y-3">
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-[#FF9306] hover:text-[#FF6A00] text-sm font-medium transition-colors"
          disabled={loginLoading}
        >
          Forgot your password?
        </button>
        
        <div className="border-t border-white/10 pt-4">
          <p className="text-gray-400 text-sm">
            Not a partner yet?{" "}
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="text-[#FF9306] hover:text-[#FF6A00] font-semibold underline transition-colors"
            >
              Join our network
            </button>
          </p>
        </div>
      </div>
    </>
  );

  const renderForgotPasswordForm = () => (
    <>
      <div className="space-y-6">
        {forgotSent ? (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">Check your email</h3>
            
            <div className="text-left bg-white/5 p-5 rounded-xl border border-white/10">
              <p className="text-gray-300 text-sm mb-3">
                We've sent you instructions to reset your password.
              </p>
              
              <p className="text-xs text-gray-500">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </div>
            
            <button
              type="button"
              onClick={handleBackToLogin}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9306] flex items-center justify-center gap-3"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Return to login</span>
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-[#FF9306]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <FontAwesomeIcon icon={faKey} className="text-[#FF9306] text-xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Password Recovery</h3>
              <p className="text-gray-400 text-xs">
                Enter your email to reset your password
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306]" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="partner@tibos.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                    required
                    disabled={forgotLoading}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 text-sm" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="flex-1 py-3 rounded-xl font-semibold text-gray-300 bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  disabled={forgotLoading}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Back
                </button>
                
                <button
                  type="submit"
                  disabled={forgotLoading}
                  className={`flex-1 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    forgotLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#FF6A00] to-[#FF9306]"
                  }`}
                >
                  {forgotLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faKey} />
                      <span>Continue</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="w-full max-w-5xl bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandshake} className="text-white text-xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Tibos Limited</h1>
                  <p className="text-gray-400 text-sm">Partner Registration Portal</p>
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Back to Home"
              >
                <FontAwesomeIcon icon={faXmark} className="text-gray-400 text-xl group-hover:text-white transition-colors" />
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-white mb-2">Partner Registration</h2>
              <p className="text-gray-400">Join our network of trusted construction partners</p>
              <div className="mt-2 px-4 py-1 bg-amber-500/20 rounded-full inline-block">
                <p className="text-amber-500 text-xs font-medium">
                  This portal is for construction partners and service providers only
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 max-h-[70vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rest of your form JSX remains the same */}
              {/* Supplier Type */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306]" />
                  Partner Type
                </label>
                <select
                  name="supplierType"
                  value={form.supplierType}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                >
                  <option value="" className="bg-[#020617]">Select partner type</option>
                  {supplierTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-[#020617]">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Business Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306]" />
                  Business Name
                </label>
                <input
                  name="supplierName"
                  placeholder="Enter your business name"
                  value={form.supplierName}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faUser} className="text-[#FF9306]" />
                  Contact Person
                </label>
                <input
                  name="contactPerson"
                  placeholder="Full name of contact person"
                  value={form.contactPerson}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faPhone} className="text-[#FF9306]" />
                  Mobile Number
                </label>
                <input
                  name="mobile"
                  placeholder="+254 712 345 678"
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306]" />
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="business@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faCity} className="text-[#FF9306]" />
                  City
                </label>
                <input
                  name="city"
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faLock} className="text-[#FF9306]" />
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a secure password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                  minLength="6"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faLock} className="text-[#FF9306]" />
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                  required
                  minLength="6"
                />
              </div>

              {/* Business Address */}
              <div className="md:col-span-2 space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#FF9306]" />
                  Business Address
                </label>
                <input
                  name="address"
                  placeholder="Enter your complete business address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                />
              </div>

              {/* Business Description */}
              <div className="md:col-span-2 space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <FontAwesomeIcon icon={faFileAlt} className="text-[#FF9306]" />
                  Business Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your business services and expertise"
                  value={form.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300 resize-none"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="md:col-span-2 flex items-start gap-3 mt-2 p-4 bg-white/5 rounded-xl border border-white/10">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="h-5 w-5 text-[#FF9306] focus:ring-[#FF9306] border-white/20 rounded bg-white/10 mt-0.5"
                  required
                />
                <label className="text-sm text-gray-400">
                  I accept the{" "}
                  <Link to="/terms" className="text-[#FF9306] hover:text-[#FF6A00] font-semibold underline">
                    Terms and Conditions
                  </Link>{" "}
                  and agree to the processing of my business information
                </label>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center mt-4 space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#FF6A00] to-[#FF9306] hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02]"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing Registration...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faHandshake} />
                      <span>Become a Partner</span>
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    Already have a partner account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setShowLogin(true);
                        setLoginView("login");
                      }}
                      className="text-[#FF9306] hover:text-[#FF6A00] font-semibold transition-colors"
                    >
                      Sign In to Partner Portal
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[60] p-4">
          <div className="bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-white/10">
            <div className="bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 p-5 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] flex items-center justify-center">
                    <FontAwesomeIcon icon={loginView === "login" ? faHandshake : faKey} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {loginView === "login" ? "Partner Login" : "Password Recovery"}
                    </h2>
                    <p className="text-gray-400 text-xs">
                      {loginView === "login" ? "Access your partner account" : "Reset your password"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowLogin(false);
                    setLoginView("login");
                    setForgotSent(false);
                  }}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-gray-400 text-sm hover:text-white" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={loginView === "login" ? handleLoginSubmit : handleForgotSubmit}>
                {loginView === "login" ? renderLoginForm() : renderForgotPasswordForm()}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}