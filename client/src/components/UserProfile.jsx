import React from "react";
import { useAuthContext } from "../context/auth.context";

const UserProfile = () => {
    const {logout} = useAuthContext();  
    const handleLogout = () => {
        logout();
    }
    return (
  <div className="flex gap-2">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-1/471757719_1659994828246516_4556105283823206561_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=dh71Aa6Rn9IQ7kNvwFUhPi2&_nc_oc=AdkPdyr43hBo3NWlMaCgxmGVZdVrUBYfzug1UhfmgIfP8cox79bCSw0hoMC1eZF9uGKnPX7hZrVViPyj7owkJw2e&_nc_zt=24&_nc_ht=scontent.fbkk9-2.fna&_nc_gid=cr60h3PYL6kx3owdrTYAeA&oh=00_AfWSvmw6C4UozdXL7dYN1RexYIqedrFdoO31_0g9uGmXkw&oe=68A8C2D7" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a   href="/profile"  className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
    );
}





export default UserProfile;