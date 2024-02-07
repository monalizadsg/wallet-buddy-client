import api from "../commons/api";

export const register = async ({ username, password }) => {
  const result = await api.post("/users", {
    username,
    password,
  });
  localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, result.data.token);
};

export const login = async ({ username, password }) => {
  const result = await api.post("/auth", { username, password });
  localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, result.data.token);
  localStorage.setItem("id", result.data.id);
};

export const getToken = () => {
  return localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
};
