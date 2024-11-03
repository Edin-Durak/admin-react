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
      console.log("Sending data to API:", data);
      const response = await axios.post(`${API_URL}/brojsj`, data);
      console.log("API response:", response);
      return response;
    } catch (error) {
      console.error("API error:", error.response || error);
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      console.log("Updating data:", { id, data });
      const response = await axios.put(`${API_URL}/brojsj/${id}`, data);
      console.log("Update response:", response);
      return response;
    } catch (error) {
      console.error("Update error:", error.response || error);
      throw error;
    }
  },
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
