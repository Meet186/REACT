import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY ;
const api = axios.create({
  baseURL: `https://${API_KEY}.mockapi.io/`,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

export default api;