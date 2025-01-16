import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // Replace with your backend URL
});

// Add a request interceptor for token handling if needed
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
