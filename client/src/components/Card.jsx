import React, { use } from "react";
import restaurantService from "../services/restaurant.service"; // import เพื่อให้มันลบได้ ติดตั้งนาน
import { useAuthContext } from "../context/auth.context"; // Import the AuthContext to access user information

const Card = (props) => {

  const { user } = useAuthContext(); 
  console.log("Card user:", user.authorities);
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this restaurant?");
    if (!isConfirmed) return;


    try {
      // Use the deleteRestaurant function from your service
      await restaurantService.deleteRestaurant(id);
      
      alert("Restaurant deleted successfully!");
      // Reload the page after successful deletion
      window.location.reload();
    } catch (error) {
      console.log(error);
      // You should handle errors more gracefully here
      alert("Failed to delete the restaurant.");
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm bg-pink-100">
      <figure>
        <img src={props.imageUrl} alt="Restaurant" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold text-gray-800">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.type}</p>

{user && user?.authorities.includes("ROLES_ADMIN") && (
   <div className="card-actions justify-end text-black-600">
  {/* Admin: Delete + Edit */}
      <button
        onClick={() => handleDelete(props.id)}
        className="btn btn-soft btn-error"
      >
        Delete
      </button>
      <a href={"/update/" + props.id} className="btn btn-soft btn-warning">
        Edit
      </a>
    </div>
  )}

  {/* Moderator: Edit */}
  {user && user?.authorities.includes ("ROLES_MODERATOR")  &&  (
    <a href={"/update/" + props.id} className="btn btn-soft btn-warning">
      Edit
    </a>
  )}
</div>
   
  
  </div>
  );
};  
export default Card;     
