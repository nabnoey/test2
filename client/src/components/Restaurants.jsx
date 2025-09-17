import React from "react";
import Card from "./Card";
import { useAuthContext } from "../context/auth.context"; // Import the AuthContext to access user information
const Restaurants = ({ restaurants }) => {
  const { user } = useAuthContext(); 
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
      {restaurants && Array.isArray(restaurants) && user &&
          restaurants.map((restaurants) => {
            return (
              <Card
                key={restaurants.id}
                id={restaurants.id}
                title={restaurants.title}
                type={restaurants.type}
                imageUrl={restaurants.imageUrl}
              />
            );
          })}
          {!user && <div>You don't have premission to access this content</div>}
          {!restaurants && <div>You don't have premission to access this contentx</div>}
      </div>
    </div>
  );
};

export default Restaurants;
