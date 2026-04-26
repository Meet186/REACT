
import axios from 'axios';
// https://69edab21af4ff533142bd434.mockapi.io/Employee
const api = axios.create({
  baseURL: 'https://69edab21af4ff533142bd434.mockapi.io/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});


export default api;