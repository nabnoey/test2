const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getLocalAccessToken = () => {
  const user = getUser();
  return user?.token;
};

//เป็น Private
const removeUser = () => {
  localStorage.removeItem("user");
};

// เป้ฯ Public
const TokenService = {
  getLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
