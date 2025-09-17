import api from "./api";
import TokenService from "./token.servise";

const API_URL = import.meta.env.VITE_AUT_API;
console.log(API_URL)

const register = async (username, fullName, email, password) => {
  return await api.post(API_URL + "/signup", {
    username,
    fullName,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await api.post(API_URL + "/signin", { username, password });
  //save uer data to local storage
  if (!response.data.token) {
    return response;
  }

  TokenService.setUser(response.data);
  return response;
};

const logout = () => {
  TokenService.removeUser();
};

const AuthServise = {
  register,
  login,
  logout,
};

export default AuthServise;
