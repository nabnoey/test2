
import api from "./api.js";

const RESTO_API = import.meta.env.VITE_RESTO_API;



//get all restaurant
const getAllRestaurant = async () => {
  return await api.get(RESTO_API);
};
//get byid

const getRestaurantById = async (id) => {
  return await api.get(`${RESTO_API}/${id}`);
};

//update byid

const editRestaurantById = async (id, restaurant) => {
  return await api.put(`${RESTO_API}/${id}`, restaurant);
};

//add restaurant

const insertRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

const deleteRestaurant = async (id) => api.delete(`${RESTO_API}/${id}`);
//delete restaurant

const restaurantService = {
  getAllRestaurant,
  getRestaurantById,
  editRestaurantById,
  deleteRestaurant,
  insertRestaurant,
};

export default restaurantService;
