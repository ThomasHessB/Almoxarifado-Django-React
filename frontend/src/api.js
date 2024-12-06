import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Ajuste conforme necessário

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/token/`, { username, password });
  return response.data; 
};

export const getProdutos = async (token) => {
  const response = await axios.get(`${API_URL}/produtos/`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const createProduto = async (token, produto) => {
  const response = await axios.post(`${API_URL}/produtos/`, produto, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const updateProduto = async (token, id, produto) => {
  const response = await axios.put(`${API_URL}/produtos/${id}/`, produto, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const deleteProduto = async (token, id) => {
  const response = await axios.delete(`${API_URL}/produtos/${id}/`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const registerUser = async (username, password, email, contato) => {
  const response = await axios.post(`${API_URL}/register/`, { username, password, email, contato });
  return response.data;
};

