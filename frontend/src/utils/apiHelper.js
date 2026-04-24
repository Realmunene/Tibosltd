// backend/frontend/src/utils/apiHelper.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('adminToken');
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    },
  };
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `API request failed: ${response.status}`);
  }
  
  return response.json();
};

// Specific API calls
export const api = {
  // Public
  submitEstimate: (data) => apiRequest('/estimates', { method: 'POST', body: JSON.stringify(data) }),
  submitConsultation: (data) => apiRequest('/consultations', { method: 'POST', body: JSON.stringify(data) }),
  subscribeNewsletter: (email) => apiRequest('/newsletters', { method: 'POST', body: JSON.stringify({ email }) }),
  registerPartner: (data) => apiRequest('/partners', { method: 'POST', body: JSON.stringify(data) }),
  sendContactMessage: (data) => apiRequest('/contact_messages', { method: 'POST', body: JSON.stringify(data) }),
  
  // Admin Auth
  adminLogin: (credentials) => apiRequest('/admin/login', { method: 'POST', body: JSON.stringify(credentials) }),
  adminLogout: () => apiRequest('/admin/logout', { method: 'DELETE' }),
  getAdminProfile: () => apiRequest('/admin/profile'),
  getAdminStats: () => apiRequest('/admin/stats'),
  
  // Admin Resources
  getEstimates: () => apiRequest('/admin/estimates'),
  deleteEstimate: (id) => apiRequest(`/admin/estimates/${id}`, { method: 'DELETE' }),
  markEstimateRead: (id) => apiRequest(`/admin/estimates/${id}/mark_as_read`, { method: 'PATCH' }),
  
  getConsultations: () => apiRequest('/admin/consultations'),
  deleteConsultation: (id) => apiRequest(`/admin/consultations/${id}`, { method: 'DELETE' }),
  confirmConsultation: (id) => apiRequest(`/admin/consultations/${id}/confirm`, { method: 'PATCH' }),
  
  getNewsletters: () => apiRequest('/admin/newsletters'),
  deleteNewsletter: (id) => apiRequest(`/admin/newsletters/${id}`, { method: 'DELETE' }),
  addNewsletter: (email) => apiRequest('/admin/newsletters', { method: 'POST', body: JSON.stringify({ email }) }),
  
  getPartners: () => apiRequest('/admin/partners'),
  deletePartner: (id) => apiRequest(`/admin/partners/${id}`, { method: 'DELETE' }),
  approvePartner: (id) => apiRequest(`/admin/partners/${id}/approve`, { method: 'PATCH' }),
  
  getMessages: () => apiRequest('/admin/contact_messages'),
  deleteMessage: (id) => apiRequest(`/admin/contact_messages/${id}`, { method: 'DELETE' }),
  markMessageRead: (id) => apiRequest(`/admin/contact_messages/${id}/mark_as_read`, { method: 'PATCH' }),
};