import axios from "axios";
import { getToken } from "../auth/authService";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  let accessToken = getToken();
  // console.log(accessToken);
  if (accessToken && accessToken !== "") {
    config.headers["x-auth-token"] = accessToken;
  }
  return config;
});

export default instance;
