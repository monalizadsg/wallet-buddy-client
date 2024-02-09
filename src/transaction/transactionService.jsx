import api from "../commons/api";

export async function getCategories() {
  const response = await api.get(`/categories`);
  return response.data;
}

export async function getAllTransactions(userId) {
  const response = await api.get(`/transactions/${userId}`);
  return response.data;
}

export async function createTransaction(data) {
  return await api.post(`/transactions`, data);
}

export async function updateTransaction(data, id) {
  return await api.put(`/transactions/${id}`, data);
}

export async function deleteTransaction(id) {
  return await api.delete(`/transactions/${id}`);
}

export default {
  getCategories,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
