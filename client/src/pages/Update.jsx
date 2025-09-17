import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import restaurantService from "../services/restaurant.service";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    imageUrl: "",
  });

  // Fetch restaurant by ID
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await restaurantService.getRestaurantById(id);
        if (response.status === 200) {
          setRestaurant(response.data);
        } else {
          Swal.fire({
            title: "Restaurant Not Found",
            text: `No restaurant found with ID: ${id}`,
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error fetching restaurant",
          text: "Could not retrieve restaurant data.",
          icon: "error",
        });
        console.error(error);
      }
    };

    fetchRestaurant();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // Submit update
  const handleSubmit = async () => {
    try {
      const response = await restaurantService.editRestaurantById(id, restaurant);
      if (response.status === 200) {
        Swal.fire({
          title: "Restaurant Updated Successfully",
          text: "Success",
          icon: "success",
        });
        navigate("/"); // redirect to home
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error Updating Restaurant",
        text: error.message || "Something went wrong",
        icon: "error",
      });
    }
  };

  // Render image safely (local or hosted URL)
  const renderImage = (img) => {
    if (!img) return null;
    const src = img.startsWith("http") ? img : `/images/${img}`; // local fallback
    return <img className="h-32" src={src} alt="Restaurant" />;
  };

  return (
    <div className="container mx-auto">
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Update Item
          </h1>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={restaurant.title}
                placeholder="Enter title"
                className="w-full input input-bordered"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Type</span>
              </label>
              <input
                type="text"
                name="type"
                value={restaurant.type}
                placeholder="Enter type"
                className="w-full input input-bordered"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                value={restaurant.imageUrl}
                placeholder="Restaurant Img"
                className="w-full input input-bordered grow"
                onChange={handleChange}
              />
              <div className="flex items-center gap-2 mt-2">
                {renderImage(restaurant.imageUrl)}
              </div>
            </div>

            <div className="flex justify-center items-center my-6 space-x-4">
              <button
                type="button"
                className="btn bg-green-500 text-white px-6"
                onClick={handleSubmit}
              >
                Update
              </button>
              <button
                type="button"
                className="btn bg-red-500 text-white px-6"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
