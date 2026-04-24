import './App.css'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

// 🧩 Components
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Topcon from './Components/Topcon';
import ContactSection from './Components/ContactSection';
// import LoginPopup from './Components/LoginPopup';
import FaqSouthcoast from "./Components/FAQSouthcoast";
import PolicySouthcoast from "./Components/PolicySouthcoast";
import TermsSouthcoast from "./Components/TermsSouthcoast";
import ScrollToTop from './Components/ScrollToTop';
import LoginForm from './Components/LoginForm';
// import MyBookings from './Components/MyBookings';
// import PackagePage from './Components/PackagePage';
import AdminDashboard from './Components/AdminDashboard';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import RequestEstimate from './Components/RequestEstimate';
import ScheduleConsultation from './Components/ScheduleConsultation';
import RuralInvestments from './Components/RuralInvestments';
import UrbanInvestments from './Components/UrbanInvestments';
import BackyardRenaissance from './Components/BackyardRenaissance';
import JointVenture from './Components/JointVenture';
import NMTP from './Components/NMTP';
import SPI from './Components/SPI';
import MaisonetteCost from './Components/MaisonetteCost';
import WeekChallenge from './Components/WeekChallenge';
import PerimeterWallCalculator from './Components/PerimeterWallCalculator';
import PartnerRegistrationForm from './Components/PartnerRegistrationForm';
import Testimonials from './Components/Testimonials';
import Services from './Components/Services';
import Designs from './Components/Designs';
import AllDesigns from './Components/AllDesigns';
import ProjectCard from './Components/ProjectCard';
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showLogin, setShowLogin] = useState(false);

  // Persist user to localStorage so the logged-in state survives refresh
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Called when a component requires login
  const handleRequireLogin = () => setShowLogin(true);

  // Called after login success
  const handleLoginSuccess = (loggedUser) => {
    setUser(loggedUser);
    setShowLogin(false);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
  };

  const [admin, setAdmin] = useState(null);

  // Check for existing admin session on component mount
  useEffect(() => {
    const checkAdminSession = () => {
      const adminToken = localStorage.getItem('adminToken');
      const adminEmail = localStorage.getItem('adminEmail');
      const adminRole = localStorage.getItem('adminRole');
      const adminName = localStorage.getItem('adminName');
      
      if (adminToken && adminEmail) {
        setAdmin({
          email: adminEmail,
          role: adminRole || 'admin',
          name: adminName || adminEmail.split('@')[0],
          token: adminToken
        });
      } else {
        setAdmin(null);
      }
    };

    // Check immediately
    checkAdminSession();
    
    // Also check when the route changes
    const interval = setInterval(checkAdminSession, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleAdminLogin = (adminData) => {
    console.log("handleAdminLogin called with:", adminData);
    setAdmin(adminData);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminRole');
    localStorage.removeItem('adminName');
    setAdmin(null);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLoginModal = () => {
    setShowLogin(false);
  };

  const handleUserLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleUserLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Protected Route Component for Admin
  const ProtectedAdminRoute = ({ children }) => {
    const adminToken = localStorage.getItem('adminToken');
    return adminToken ? children : <Navigate to="/admin/login" replace />;
  };

  return (
    <BrowserRouter basename="/Tibosltd">
      <ScrollToTop />
      <div className="App flex flex-col min-h-screen">
        {/* 🔝 Top Bar & Navigation */}
        <Topcon />
        <Navbar
          user={user}
          onLoginClick={() => setShowLogin(true)}
          onLogout={handleLogout}
          onPartnerClick={() => setActiveSection("partner")}
          setActiveSection={setActiveSection}
          admin={admin}
          onAdminLogout={handleAdminLogout}
        />

        {/* 🏡 Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* 🏠 Default Home Route */}
            <Route
              path="/"
              element={
                <>
                  {activeSection === "home" && (
                    <>
                      <div id="home">
                        <Home 
                          user={user} 
                          onRequireLogin={handleRequireLogin}
                        />
                      </div>
                    </>
                  )}

                </>
              }
            />

            {/* 🧭 Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FaqSouthcoast />} />
            <Route path="/policy" element={<PolicySouthcoast />} />
            <Route path="/terms" element={<TermsSouthcoast />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/request-estimate" element={<RequestEstimate />} />
            <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
            <Route path="/rural-investments" element={<RuralInvestments />} />
            <Route path="/urban-investments" element={<UrbanInvestments />} />
            <Route path="/backyard-renaissance" element={<BackyardRenaissance />} />
            <Route path="/joint-venture" element={<JointVenture />} />
            <Route path="/nmtp" element={<NMTP />} />
            <Route path="/spi" element={<SPI />} />
            <Route path="/maisonette-cost" element={<MaisonetteCost />} />
            <Route path="/52-week-challenge" element={<WeekChallenge />} />
            <Route path="/perimeter-wall-calculator" element={<PerimeterWallCalculator />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/services' element={<Services/>}/>
            <Route path='/designs' element={<Designs/>}/>
            <Route path='/alldesigns' element={<AllDesigns/>}/>
            <Route path="/project/:id" element={<ProjectCard/>}/>
            <Route path='/partnership' element={<PartnerRegistrationForm />} />
            <Route path='/loginform' 
            onAdminLogin= {handleAdminLogin}
            element={<LoginForm />} />
          
            {/* <Route path='/firstlogin' element={<LoginPopup/>}/> */}
            <Route path='/admin/dashboard' element ={<AdminDashboard/>}/>
            {/* ✅ MyBookings Route with user prop */}
            {/* <Route 
              path="/mybookings" 
              element={<MyBookings user={user} />} 
            /> */}
          </Routes>

          {/* 🪟 Login Popup */}
          {/* {showLogin && (
            <LoginPopup
              onClose={() => setShowLogin(false)}
              onLoginSuccess={handleLoginSuccess}
            />
          )} */}
        </main>

        {/* 🦶 Footer */}
        <Footer setActiveSection={setActiveSection} />
      </div>
    </BrowserRouter>
  );
};

export default App;