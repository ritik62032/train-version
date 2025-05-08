import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const apiService = {
  // Authentication
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Registration
  register: async (fullName, email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        email,
        full_name: fullName,
        password
      });
      return response.data;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error);
      throw error.response?.data?.detail || 'Registration failed. Please check your inputs and try again.';
    }
  },

  // User operations
  getCurrentUser: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/me`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  updateUser: async (userData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/me`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Recommendation operations
  getTripRecommendations: async (skip = 0, limit = 10) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/recommendations/trips`, {
        params: { skip, limit }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getActivityRecommendations: async (destination, category, duration) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/recommendations/activities`, {
        params: { destination, category, duration }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Scheduling operations
  scheduleActivity: async (activityId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/scheduling/activity/${activityId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  optimizeSchedule: async (tripId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/scheduling/optimize/${tripId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getScheduleConflicts: async (tripId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/scheduling/conflicts/${tripId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Trip CRUD
  createTrip: async (tripData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/trips`, tripData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getTrips: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trips`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getTrip: async (tripId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trips/${tripId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  updateTrip: async (tripId, tripData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/trips/${tripId}`, tripData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  deleteTrip: async (tripId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/trips/${tripId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Activity management within a trip
  getActivities: async (tripId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trips/${tripId}/activities`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  createActivity: async (tripId, activityData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/trips/${tripId}/activities`, activityData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  deleteActivity: async (tripId, activityId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/trips/${tripId}/activities/${activityId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};
