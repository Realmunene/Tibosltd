import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEye, 
  faEyeSlash, 
  faEnvelope, 
  faLock, 
  faShield, 
  faUserShield, 
  faArrowLeft, 
  faKey, 
  faCheckCircle,
  faTimes,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import logo from "./images/IMG-20251008-WA0008logo0.png";

const LoginForm = ({ onAdminLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [view, setView] = useState("login");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryLoading, setRecoveryLoading] = useState(false);
  const [recoverySent, setRecoverySent] = useState(false);

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const checkExistingSession = () => {
      try {
        const logoutTimestamp = localStorage.getItem("adminLastLogout");
        const now = new Date().getTime();
        
        if (logoutTimestamp && (now - parseInt(logoutTimestamp) < 5 * 60 * 1000)) {
          localStorage.removeItem("adminLastLogout");
          return;
        }

        const sessionData = localStorage.getItem("adminSessionData");
        
        if (sessionData) {
          const parsedData = JSON.parse(sessionData);
          const now = new Date().getTime();
          
          if (parsedData.expiry && now < parsedData.expiry) {
            setEmail(parsedData.email || "");
            setRememberMe(true);
          } else {
            localStorage.removeItem("adminSessionData");
          }
        }
      } catch (error) {
        console.error("Error checking existing session:", error);
        localStorage.removeItem("adminSessionData");
      }
    };

    checkExistingSession();
  }, [navigate, onAdminLogin]);

  const clearSessionData = () => {
    localStorage.removeItem("adminSessionData");
    localStorage.removeItem("adminLastLogout");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const responseText = await response.text();
      let data;

      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        throw new Error("Server returned an invalid response.");
      }

      if (response.ok) {
        const admin = data.admin;
        const token = data.token;

        if (!admin || !token) {
          throw new Error("Invalid response from server");
        }

        localStorage.setItem("adminToken", token);
        localStorage.setItem("adminEmail", admin.email);
        localStorage.setItem("adminRole", admin.role || "admin");
        localStorage.setItem("adminName", admin.name || admin.email.split('@')[0]);

        if (rememberMe) {
          const now = new Date().getTime();
          const twelveHoursInMs = 12 * 60 * 60 * 1000;
          const expiryTime = now + twelveHoursInMs;
          
          const sessionData = {
            token,
            email: admin.email,
            role: admin.role || "admin",
            name: admin.name || admin.email.split('@')[0],
            expiry: expiryTime,
            timestamp: now
          };
          
          localStorage.setItem("adminSessionData", JSON.stringify(sessionData));
        } else {
          clearSessionData();
        }
        
        localStorage.removeItem("adminLastLogout");

        const adminData = {
          email: admin.email,
          role: admin.role || "admin",
          name: admin.name || admin.email.split('@')[0],
          token: token
        };

        if (typeof onAdminLogin === "function") {
          onAdminLogin(adminData);
        }

        alert("Admin login successful!");

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 100);
      } else {
        alert(data.error || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      
      if (err.message.includes("Failed to fetch")) {
        alert("Cannot connect to server. Please check your internet connection.");
      } else if (err.message.includes("Server returned an invalid response")) {
        alert("Server error: The backend is not responding properly.");
      } else {
        alert("Login failed: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setView("forgot");
  };

  const handleBackToLogin = () => {
    setView("login");
    setRecoverySent(false);
    setRecoveryEmail("");
  };

  const handleRecoverySubmit = async (e) => {
    e.preventDefault();
    setRecoveryLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/admin/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: recoveryEmail }),
      });

      if (response.ok) {
        setRecoverySent(true);
      } else {
        const error = await response.json();
        alert(error.message || "Failed to send recovery email.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setRecoveryLoading(false);
    }
  };

  const renderLoginForm = () => (
    <>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FontAwesomeIcon icon={faUserShield} className="text-[#FF9306] text-2xl" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Admin Sign In</h2>
        <p className="text-gray-400 text-sm">
          Enter your credentials to access the admin dashboard
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306] text-sm" />
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
              required
              disabled={loading}
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
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
              required
              disabled={loading}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faLock} className="text-gray-500 text-sm" />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-[#FF9306] transition-colors"
              disabled={loading}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-[#FF9306] focus:ring-[#FF9306] border-white/20 rounded bg-white/10"
              disabled={loading}
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
              Remember me (12 hours)
            </label>
          </div>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-[#FF9306] hover:text-[#FF6A00] font-medium transition-colors"
            disabled={loading}
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-[#FF6A00] to-[#FF9306] hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02]"
          }`}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Signing In...</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faShield} />
              <span>Sign In to Dashboard</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 p-3 bg-[#FF9306]/10 rounded-xl border border-[#FF9306]/20">
        <div className="flex items-start gap-2">
          <FontAwesomeIcon icon={faUserShield} className="text-[#FF9306] text-sm mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-[#FF9306]">Session Information</p>
            <p className="text-xs text-gray-500 mt-1">
              {rememberMe 
                ? "Session remembered for 12 hours" 
                : "Session expires when browser closes"}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const renderForgotPasswordForm = () => (
    <>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FontAwesomeIcon icon={faKey} className="text-[#FF9306] text-2xl" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Password Recovery</h2>
        <p className="text-gray-400 text-sm">
          Enter your admin email to reset your password
        </p>
      </div>

      {recoverySent ? (
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
              Check your inbox and follow the steps there.
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
        <form onSubmit={handleRecoverySubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9306] text-sm" />
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="admin@example.com"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-all duration-300"
                required
                disabled={recoveryLoading}
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
              disabled={recoveryLoading}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back
            </button>
            
            <button
              type="submit"
              disabled={recoveryLoading}
              className={`flex-1 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                recoveryLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#FF6A00] to-[#FF9306]"
              }`}
            >
              {recoveryLoading ? (
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
        </form>
      )}

      <div className="mt-6 p-3 bg-[#FF9306]/10 rounded-xl border border-[#FF9306]/20">
        <div className="flex items-start gap-2">
          <FontAwesomeIcon icon={faUserShield} className="text-[#FF9306] text-sm mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-[#FF9306]">Secure Recovery</p>
            <p className="text-xs text-gray-500 mt-1">
              Reset links expire in 1 hour for security
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Close Button - Top Right */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleGoHome}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Back to Home"
          >
            <FontAwesomeIcon icon={faTimes} className="text-gray-400 text-lg group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header Section */}
          <div className="relative bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 p-6 border-b border-white/10">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] flex items-center justify-center">
                <FontAwesomeIcon icon={faUserShield} className="text-white text-xl" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Tibos Limited</h1>
                <p className="text-gray-400 text-sm">Admin Portal</p>
              </div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full mx-auto mt-4"></div>
          </div>

          {/* Form Section */}
          <div className="p-6">
            {view === "login" ? renderLoginForm() : renderForgotPasswordForm()}
          </div>

          {/* Footer */}
          <div className="bg-white/5 px-6 py-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Tibos Limited
              </p>
              <button
                onClick={handleGoHome}
                className="text-xs text-gray-500 hover:text-[#FF9306] transition-colors flex items-center gap-1"
              >
                Back to Home
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;