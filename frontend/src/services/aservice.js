// frontend/src/services/aservice.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'; // Adjust if your backend runs on a different port

export const apiService = {
  register: async (fullName, email, password) => {
    const response = await axios.post(`${API_URL}/register`, {
      fullName,
      email,
      password,
    });
    return response.data;
  },
};
