import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
import TokenService from "./token.servise";

const instance = axios.create({
  baseURL: baseURL, // มาจาก .env เพื่อที่เราจะได้ไม่ต้องเขียน url ซ้ำๆ
  headers: {
    "Content-Type": "application/json",
  },
});


instance.interceptors.request.use(
  (config) => {
    
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
