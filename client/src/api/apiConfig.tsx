import axios from 'axios';
import { BACKEND_URL } from '../config';

const apiClient = axios.create({
  baseURL: `${BACKEND_URL}`, // Your backend URL
  timeout: 10000,
  withCredentials: true, // This enables cookies to be sent with requests
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor for adding token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Directly return the data if successful
    return response.data;
  },
  (error) => {
    // Handle specific error statuses
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized (token expired/invalid)
          break;
        case 403:
          // Handle forbidden (no permission)
          break;
        default:
          // Handle other errors
      }
    }
    
    return Promise.reject(error.response?.data || error.message);
  }
);

export default apiClient;