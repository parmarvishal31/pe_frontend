import axios from "axios";
// const PORT = "http://localhost:8000";
const PORT = import.meta.env.VITE_API_KEY;

export const getAllProducts = async (queryParams) => {
  return axios.get(`${PORT}/api/v1/product`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: queryParams,
  });
};

export const getProductById = async (id, token) => {
  return axios.get(`${PORT}/api/v1/product/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
