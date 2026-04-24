import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faSignOutAlt, 
  faEnvelope, 
  faHandshake, 
  faCalendarAlt, 
  faFileAlt,
  faNewspaper,
  faBuilding,
  faSpinner,
  faEye,
  faTrash,
  faReply,
  faCheckCircle,
  faTimesCircle,
  faUser,
  faPhone,
  faComment,
  faClock,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

// API Base URL - Update with your Rails backend URL
const API_BASE_URL = "http://localhost:3000/api/v1";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("estimates");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    estimates: 0,
    consultations: 0,
    newsletters: 0,
    partners: 0,
    messages: 0
  });

  // Fetch all counts from respective endpoints
  const fetchAllCounts = useCallback(async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      // Fetch estimates count
      const estimatesRes = await fetch(`${API_BASE_URL}/admin/estimates`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (estimatesRes.ok) {
        const data = await estimatesRes.json();
        setStats(prev => ({ ...prev, estimates: Array.isArray(data) ? data.length : data.total || 0 }));
      }

      // Fetch consultations count
      const consultationsRes = await fetch(`${API_BASE_URL}/admin/consultations`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (consultationsRes.ok) {
        const data = await consultationsRes.json();
        setStats(prev => ({ ...prev, consultations: Array.isArray(data) ? data.length : data.total || 0 }));
      }

      // Fetch newsletters count
      const newslettersRes = await fetch(`${API_BASE_URL}/admin/newsletters`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (newslettersRes.ok) {
        const data = await newslettersRes.json();
        setStats(prev => ({ ...prev, newsletters: Array.isArray(data) ? data.length : data.total || 0 }));
      }

      // Fetch partners count
      const partnersRes = await fetch(`${API_BASE_URL}/admin/partners`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (partnersRes.ok) {
        const data = await partnersRes.json();
        setStats(prev => ({ ...prev, partners: Array.isArray(data) ? data.length : data.total || 0 }));
      }

      // Fetch messages count
      const messagesRes = await fetch(`${API_BASE_URL}/admin/contact_messages`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (messagesRes.ok) {
        const data = await messagesRes.json();
        setStats(prev => ({ ...prev, messages: Array.isArray(data) ? data.length : data.total || 0 }));
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  }, [navigate]);

  useEffect(() => {
    fetchAllCounts();
    setLoading(false);
  }, [fetchAllCounts]);

  const tabs = [
    { id: "estimates", name: "Estimate Requests", icon: faFileAlt, count: stats.estimates },
    { id: "consultations", name: "Consultations", icon: faCalendarAlt, count: stats.consultations },
    { id: "newsletters", name: "Newsletter Subs", icon: faNewspaper, count: stats.newsletters },
    { id: "partners", name: "Partner Requests", icon: faHandshake, count: stats.partners },
    { id: "messages", name: "Get in Touch", icon: faEnvelope, count: stats.messages }
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminRole");
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminSessionData");
    navigate("/admin/login");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] flex items-center justify-center">
        <div className="text-center">
          <FontAwesomeIcon icon={faSpinner} className="text-[#FF9306] text-4xl animate-spin" />
          <p className="text-gray-400 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 border-b border-white/10 sticky top-0 z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] flex items-center justify-center">
                <FontAwesomeIcon icon={faBuilding} className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Tibos Limited</h1>
                <p className="text-xs text-gray-400">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleBackToHome}
                className="px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FontAwesomeIcon icon={faHome} />
                <span className="hidden sm:inline">Home</span>
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                activeTab === tab.id
                  ? "border-[#FF9306] bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20"
                  : "border-white/10 hover:border-[#FF9306]/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs">{tab.name}</p>
                  <p className="text-2xl font-bold text-white mt-1">{tab.count}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF9306]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={tab.icon} className="text-[#FF9306] text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="border-b border-white/10">
            <nav className="flex overflow-x-auto scrollbar-thin">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-b-2 border-[#FF9306] text-[#FF9306] bg-white/5"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="text-sm" />
                  <span>{tab.name}</span>
                  <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-white/10">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "estimates" && <EstimateRequests />}
            {activeTab === "consultations" && <ConsultationRequests />}
            {activeTab === "newsletters" && <NewsletterSubscribers />}
            {activeTab === "partners" && <PartnerRequests />}
            {activeTab === "messages" && <ContactMessages />}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== ESTIMATE REQUESTS COMPONENT ====================
const EstimateRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [updating, setUpdating] = useState(false);

  const fetchRequests = useCallback(async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      const response = await fetch(`${API_BASE_URL}/admin/estimates`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Estimates data:", data);
        setRequests(Array.isArray(data) ? data : data.estimates || data.data || []);
      }
    } catch (error) {
      console.error("Error fetching estimate requests:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleMarkAsRead = async (id) => {
    const token = localStorage.getItem("adminToken");
    setUpdating(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/estimates/${id}/mark_as_read`, {
        method: "PATCH",
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        setRequests(requests.map(req => 
          req.id === id ? { ...req, status: "read" } : req
        ));
      }
    } catch (error) {
      console.error("Error marking as read:", error);
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${API_BASE_URL}/admin/estimates/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        setRequests(requests.filter(req => req.id !== id));
      }
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  if (loading) {
    return <div className="text-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9306] mx-auto"></div><p className="text-gray-400 mt-2">Loading...</p></div>;
  }

  if (requests.length === 0) {
    return (
      <div className="text-center py-12">
        <FontAwesomeIcon icon={faFileAlt} className="text-gray-600 text-5xl mb-4" />
        <h3 className="text-white font-semibold text-lg mb-2">No Estimate Requests</h3>
        <p className="text-gray-500 text-sm">No estimate requests have been submitted yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div
          key={request.id}
          className={`bg-white/5 rounded-xl border transition-all duration-300 overflow-hidden ${
            request.status === "pending" || !request.status ? "border-[#FF9306]/50" : "border-white/10"
          }`}
        >
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold">{request.name}</h3>
                  {(request.status === "pending" || !request.status) && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-[#FF9306]/20 text-[#FF9306]">New</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                    {request.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faPhone} className="text-xs" />
                    {request.phone}
                  </span>
                  <span className="text-xs">{formatDate(request.created_at)}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {(request.status === "pending" || !request.status) && (
                  <button
                    onClick={() => handleMarkAsRead(request.id)}
                    disabled={updating}
                    className="px-3 py-1 text-xs rounded-lg bg-[#FF9306]/20 text-[#FF9306] hover:bg-[#FF9306]/30 transition"
                  >
                    Mark Read
                  </button>
                )}
                <button
                  onClick={() => setSelectedRequest(selectedRequest === request.id ? null : request.id)}
                  className="px-3 py-1 text-xs rounded-lg bg-white/10 text-gray-400 hover:text-white transition"
                >
                  Details
                </button>
                <button
                  onClick={() => handleDelete(request.id)}
                  className="px-3 py-1 text-xs rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-3">
              <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                {request.project_type || "N/A"}
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                {request.project_size || "N/A"}
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                {request.budget || "N/A"}
              </span>
            </div>

            {selectedRequest === request.id && (
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300 text-sm mb-3">{request.message}</p>
                <div className="flex gap-3">
                  <a 
                    href={`mailto:${request.email}?subject=Estimate Request - ${request.project_type}&body=Dear ${request.name},%0D%0A%0D%0AThank you for your estimate request.%0D%0A%0D%0AWe will get back to you shortly with a detailed quote.%0D%0A%0D%0ABest regards,%0D%0ATibos Limited Team`}
                    className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FF9306] text-white font-medium"
                  >
                    Send Quote via Email
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// ==================== CONSULTATION REQUESTS COMPONENT ====================
const ConsultationRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchRequests = useCallback(async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      const response = await fetch(`${API_BASE_URL}/admin/consultations`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Consultations data:", data);
        setRequests(Array.isArray(data) ? data : data.consultations || data.data || []);
      }
    } catch (error) {
      console.error("Error fetching consultations:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleConfirm = async (id) => {
    const token = localStorage.getItem("adminToken");
    setUpdating(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/consultations/${id}/confirm`, {
        method: "PATCH",
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        setRequests(requests.map(req =>
          req.id === id ? { ...req, status: "confirmed" } : req
        ));
        alert("Consultation confirmed!");
      }
    } catch (error) {
      console.error("Error confirming consultation:", error);
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this consultation request?")) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${API_BASE_URL}/admin/consultations/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        setRequests(requests.filter(req => req.id !== id));
      }
    } catch (error) {
      console.error("Error deleting consultation:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="text-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9306] mx-auto"></div><p className="text-gray-400 mt-2">Loading...</p></div>;
  }

  if (requests.length === 0) {
    return (
      <div className="text-center py-12">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600 text-5xl mb-4" />
        <h3 className="text-white font-semibold text-lg mb-2">No Consultation Requests</h3>
        <p className="text-gray-500 text-sm">No consultation requests have been submitted yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div
          key={request.id}
          className={`bg-white/5 rounded-xl border p-5 transition-all duration-300 ${
            request.status === "pending" ? "border-[#FF9306]/50" : "border-white/10"
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold">{request.name}</h3>
                {request.status === "pending" && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#FF9306]/20 text-[#FF9306]">Pending</span>
                )}
                {request.status === "confirmed" && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Confirmed</span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  {request.email}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faPhone} className="text-xs" />
                  {request.phone}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {request.status === "pending" && (
                <button
                  onClick={() => handleConfirm(request.id)}
                  disabled={updating}
                  className="px-3 py-1 text-xs rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition"
                >
                  Confirm
                </button>
              )}
              <button
                onClick={() => handleDelete(request.id)}
                className="px-3 py-1 text-xs rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
            <div>
              <p className="text-gray-500 text-xs">Preferred Date</p>
              <p className="text-white">{formatDate(request.preferred_date)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Preferred Time</p>
              <p className="text-white">{request.preferred_time || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Type</p>
              <p className="text-white capitalize">{request.consultation_type || "virtual"}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Requested</p>
              <p className="text-white">{formatDate(request.created_at)}</p>
            </div>
          </div>

          {request.message && (
            <div className="mt-3 p-3 bg-white/5 rounded-lg">
              <p className="text-gray-400 text-sm">{request.message}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ==================== NEWSLETTER SUBSCRIBERS COMPONENT ====================
const NewsletterSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchSubscribers = useCallback(async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      const response = await fetch(`${API_BASE_URL}/admin/newsletters`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Newsletters data:", data);
        setSubscribers(Array.isArray(data) ? data : data.newsletters || data.subscribers || data.data || []);
      }
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]);

  const handleAddSubscriber = async (e) => {
    e.preventDefault();
    if (!newEmail) return;

    setSubmitting(true);
    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(`${API_BASE_URL}/admin/newsletters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ email: newEmail })
      });

      if (response.ok) {
        const newSub = await response.json();
        setSubscribers([newSub, ...subscribers]);
        setNewEmail("");
        alert("Subscriber added successfully!");
      } else {
        alert("Failed to add subscriber");
      }
    } catch (error) {
      console.error("Error adding subscriber:", error);
      alert("Error adding subscriber");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to remove this subscriber?")) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${API_BASE_URL}/admin/newsletters/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        setSubscribers(subscribers.filter(sub => sub.id !== id));
      }
    } catch (error) {
      console.error("Error deleting subscriber:", error);
    }
  };

  const handleExport = async () => {
    setExporting(true);
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${API_BASE_URL}/admin/newsletters/export`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "newsletter_subscribers.csv";
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Error exporting subscribers:", error);
    } finally {
      setExporting(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9306] mx-auto"></div><p className="text-gray-400 mt-2">Loading...</p></div>;
  }

  return (
    <div>
      <div className="mb-6 p-4 bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl border border-[#FF9306]/20">
        <h3 className="text-white font-semibold text-sm mb-3">Add New Subscriber</h3>
        <form onSubmit={handleAddSubscriber} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter email address"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF9306] transition-colors"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FF9306] text-white font-medium disabled:opacity-50"
          >
            {submitting ? "Adding..." : "Add Subscriber"}
          </button>
        </form>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-400 text-sm">Total subscribers: {subscribers.length}</p>
        <button
          onClick={handleExport}
          disabled={exporting || subscribers.length === 0}
          className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FF9306] text-white font-medium disabled:opacity-50"
        >
          {exporting ? "Exporting..." : "Export CSV"}
        </button>
      </div>

      {subscribers.length === 0 ? (
        <div className="text-center py-12">
          <FontAwesomeIcon icon={faNewspaper} className="text-gray-600 text-5xl mb-4" />
          <h3 className="text-white font-semibold text-lg mb-2">No Subscribers</h3>
          <p className="text-gray-500 text-sm">No newsletter subscribers yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-white/10">
              <tr>
                <th className="pb-3 text-gray-400 text-sm font-medium">Email</th>
                <th className="pb-3 text-gray-400 text-sm font-medium">Subscribed Date</th>
                <th className="pb-3 text-gray-400 text-sm font-medium">Status</th>
                <th className="pb-3 text-gray-400 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {subscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-white/5">
                  <td className="py-3 text-white">{sub.email}</td>
                  <td className="py-3 text-gray-400">{new Date(sub.created_at).toLocaleDateString()}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Active</span>
                  </td>
                  <td className="py-3">
                    <button onClick={() => handleDelete(sub.id)} className="text-red-400 hover:text-red-300 transition">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// ==================== PARTNER REQUESTS COMPONENT ====================
const PartnerRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchRequests = useCallback(async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      const response = await fetch(`${API_BASE_URL}/admin/partners`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Partners data:", data);
        setRequests(Array.isArray(data) ? data : data.partners || data.data || []);
      }
    } catch (error) {
      console.error("Error fetching partners:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleApprove = async (id) => {
    const token = localStorage.getItem("adminToken");
    setUpdating(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/partners/${id}/approve`, {
        method: "PATCH",
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        setRequests(requests.map(req =>
          req.id === id ? { ...req, status: "approved" } : req
        ));
        alert("Partner approved!");
      }
    } catch (error) {
      console.error("Error approving partner:", error);
    } finally {
      setUpdating(false);
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Are you sure you want to reject this partner request?")) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${API_BASE_URL}/admin/partners/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        setRequests(requests.filter(req => req.id !== id));
      }
    } catch (error) {
      console.error("Error rejecting partner:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9306] mx-auto"></div><p className="text-gray-400 mt-2">Loading...</p></div>;
  }

  if (requests.length === 0) {
    return (
      <div className="text-center py-12">
        <FontAwesomeIcon icon={faHandshake} className="text-gray-600 text-5xl mb-4" />
        <h3 className="text-white font-semibold text-lg mb-2">No Partner Requests</h3>
        <p className="text-gray-500 text-sm">No partner registration requests yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div
          key={request.id}
          className={`bg-white/5 rounded-xl border p-5 transition-all duration-300 ${
            request.status === "pending" ? "border-[#FF9306]/50" : "border-green-500/30"
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold">{request.supplier_name || request.business_name || "N/A"}</h3>
                {request.status === "pending" && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#FF9306]/20 text-[#FF9306]">Pending</span>
                )}
                {request.status === "approved" && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Approved</span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faBuilding} className="text-xs" />
                  {request.supplier_type || "N/A"}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faUser} className="text-xs" />
                  {request.contact_person || "N/A"}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  {request.email || "N/A"}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {request.status === "pending" && (
                <>
                  <button
                    onClick={() => handleApprove(request.id)}
                    disabled={updating}
                    className="px-3 py-1 text-xs rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="px-3 py-1 text-xs rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>

          {request.description && (
            <div className="mt-3 p-3 bg-white/5 rounded-lg">
              <p className="text-gray-400 text-sm">{request.description}</p>
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
            <span>📍 {request.city || "N/A"}</span>
            <span>📞 {request.mobile || "N/A"}</span>
            <span>📅 Requested: {new Date(request.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// ==================== CONTACT MESSAGES COMPONENT ====================
const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchMessages = useCallback(async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      const response = await fetch(`${API_BASE_URL}/admin/contact_messages`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Messages data:", data);
        setMessages(Array.isArray(data) ? data : data.contact_messages || data.messages || data.data || []);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleMarkAsRead = async (id) => {
    const token = localStorage.getItem("adminToken");
    setUpdating(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/contact_messages/${id}/mark_as_read`, {
        method: "PATCH",
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        setMessages(messages.map(msg =>
          msg.id === id ? { ...msg, status: "read" } : msg
        ));
      }
    } catch (error) {
      console.error("Error marking as read:", error);
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${API_BASE_URL}/admin/contact_messages/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        setMessages(messages.filter(msg => msg.id !== id));
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9306] mx-auto"></div><p className="text-gray-400 mt-2">Loading...</p></div>;
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-12">
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 text-5xl mb-4" />
        <h3 className="text-white font-semibold text-lg mb-2">No Messages</h3>
        <p className="text-gray-500 text-sm">No contact messages have been received yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`bg-white/5 rounded-xl border p-5 transition-all duration-300 ${
            message.status === "unread" ? "border-[#FF9306]/50" : "border-white/10"
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold">{message.name}</h3>
                {message.status === "unread" && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#FF9306]/20 text-[#FF9306]">New</span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  {message.email}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faPhone} className="text-xs" />
                  {message.phone || "N/A"}
                </span>
                <span className="text-xs">{new Date(message.created_at).toLocaleString()}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {message.status === "unread" && (
                <button
                  onClick={() => handleMarkAsRead(message.id)}
                  disabled={updating}
                  className="px-3 py-1 text-xs rounded-lg bg-[#FF9306]/20 text-[#FF9306] hover:bg-[#FF9306]/30 transition"
                >
                  Mark Read
                </button>
              )}
              <a
                href={`mailto:${message.email}?subject=Re: Your message to Tibos Limited&body=Dear ${message.name},%0D%0A%0D%0AThank you for contacting Tibos Limited.%0D%0A%0D%0AWe will get back to you shortly.%0D%0A%0D%0ABest regards,%0D%0ATibos Limited Team`}
                className="px-3 py-1 text-xs rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition"
              >
                Reply
              </a>
              <button
                onClick={() => handleDelete(message.id)}
                className="px-3 py-1 text-xs rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="mt-3 p-3 bg-white/5 rounded-lg">
            <p className="text-gray-300 text-sm">{message.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};