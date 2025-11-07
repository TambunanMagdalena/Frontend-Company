import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const cityAPI = {
  getCities: (page = 1, pageSize = 10) =>
    api.get(`/cities?page=${page}&page_size=${pageSize}`),

  getCity: (id) => api.get(`/cities/${id}`),

  createCity: (cityData) => api.post("/cities", cityData),

  updateCity: (id, cityData) => api.put(`/cities/${id}`, cityData),

  deleteCity: (id) => api.delete(`/cities/${id}`),
};

export default api;
