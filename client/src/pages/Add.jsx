import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import restaurantService from "../services/restaurant.service";

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await restaurantService.insertRestaurant(restaurant);

      if (response.status === 200) {
        Swal.fire({
          title: "Restaurant Added Successfully",
          text: "Success",
          icon: "success",
        });
        setRestaurant({ title: "", type: "", imageUrl: "" });
        navigate("/");
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error adding restaurant",
          text: errorData.message || "Something went wrong!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error during add:", error);
      Swal.fire({
        title: "Error adding restaurant",
        text: error.message || "Something went wrong!",
        icon: "error",
      });
    }
  };

  // Render image safely (local or hosted URL)
  const renderImage = (img) => {
    if (!img) return null;
    const src = img.startsWith("http") ? img : `/images/${img}`;
    return <img className="h-32" src={src} alt="Restaurant Preview" />;
  };

  return (
    <div className="container mx-auto">
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add Item
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter title"
                className="w-full input input-bordered"
                name="title"
                value={restaurant.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Enter type"
                className="w-full input input-bordered"
                name="type"
                value={restaurant.type}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Image URL / Local Filename</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered grow"
                placeholder="Restaurant Img"
                name="imageUrl"
                value={restaurant.imageUrl}
                onChange={handleChange}
              />
              <div className="flex items-center gap-2 mt-2">
                {renderImage(restaurant.imageUrl)}
              </div>
            </div>

            <div className="flex justify-center items-center my-6 space-x-4">
              <button type="submit" className="btn bg-green-500 text-white px-6">
                Add
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn bg-red-500 text-white px-6"
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

export default Add;
