import axios from "axios";

const API_URL = "http://localhost:5000/api";

// VrstaSJ servisi
export const vrstaSJAPI = {
  getAll: () => axios.get(`${API_URL}/vrstasj`),
  getById: (id) => axios.get(`${API_URL}/vrstasj/${id}`),
  create: (data) => axios.post(`${API_URL}/vrstasj`, data),
  update: (id, data) => axios.put(`${API_URL}/vrstasj/${id}`, data),
  delete: (id) => axios.delete(`${API_URL}/vrstasj/${id}`),
};

// BrojSJ servisi
export const brojSJAPI = {
  getAll: () => axios.get(`${API_URL}/brojsj`),
  getById: (id) => axios.get(`${API_URL}/brojsj/${id}`),
  create: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/brojsj`, data);
      return response;
    } catch (error) {
      console.error("API error:", error.response?.data || error);
      throw error;
    }
  },
  update: (id, data) => axios.put(`${API_URL}/brojsj/${id}`, data),
  delete: (id) => axios.delete(`${API_URL}/brojsj/${id}`),
};

// Upload API
export const uploadAPI = {
  uploadImage: async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  },
};
