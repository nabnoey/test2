import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        {/* รูปโปรไฟล์ */}
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img
                src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-1/471757719_1659994828246516_4556105283823206561_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=dh71Aa6Rn9IQ7kNvwFUhPi2&_nc_oc=AdkPdyr43hBo3NWlMaCgxmGVZdVrUBYfzug1UhfmgIfP8cox79bCSw0hoMC1eZF9uGKnPX7hZrVViPyj7owkJw2e&_nc_zt=24&_nc_ht=scontent.fbkk9-2.fna&_nc_gid=cr60h3PYL6kx3owdrTYAeA&oh=00_AfWSvmw6C4UozdXL7dYN1RexYIqedrFdoO31_0g9uGmXkw&oe=68A8C2D7"
                alt="Profile"
                className="object-cover"
              />
            </div>
          </div>

          {/* ข้อมูลผู้ใช้ */}
          <h2 className="mt-4 text-3xl font-bold text-gray-800">Nabnoey Y.</h2>
          <p className="text-gray-500 mt-1 mb-4">nabnoey@example.com</p>

          {/* ปุ่มแก้ไข */}
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full sm:w-auto px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
            แก้ไขโปรไฟล์
          </button>
        </div>

        {/* ข้อมูลเพิ่มเติม */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">Username</span>
            <span className="text-gray-500">nabnoey123</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">Phone</span>
            <span className="text-gray-500">+66 123 456 789</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">Location</span>
            <span className="text-gray-500">Bangkok, Thailand</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Member Since</span>
            <span className="text-gray-500">August 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
