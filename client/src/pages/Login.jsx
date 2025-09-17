import React, { useState, useEffect, use } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";
import { useAuthContext } from "../context/auth.context";
import Swal from "sweetalert2";

const Login = () => {
  // 1. Initialize state for login form data
  const [login, setLogin] = useState({ username: "", password: "" });

  // 2. Hook for programmatic navigation
  const navigate = useNavigate();

  const {login: loginFn, user} = useAuthContext();
  
 useEffect(() => {
    if (user) {
      navigate("/"); // Redirect if user is already logged in
    }
  }, [user, navigate]);
  
  // 3. Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  // 4. Handle form submission
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior (page reload)
    e.preventDefault();
    try {
      const currentUser = await AuthService.login(
        login.username,
        login.password
      );

      // Check for a successful login based on the response status
      if (currentUser.status === 200) {
        Swal.fire({
          icon: "success",
          title: "User Login",
          text: "Login successfully!",
        }).then(() => {

          // Call the login function from context to update user state
          loginFn(currentUser.data);
          navigate("/"); // Navigate to the home page after successful login

          // Navigate to the home page after successful login
          navigate("/");
        });
      }
    } catch (error) {
      // Handle login errors
      // console.error("Login failed:", error);
      Swal.fire({
        icon: "error",
        title: "User Login",
        text: error?.response?.data?.message || "An unknown error occurred.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body space-y-4"> {/* <-- Corrected here */}
          <h2 className="text-4xl font-bold text-center text-primary">
            เข้าสู่ระบบ
          </h2>
          <p className="text-center text-gray-500">
            กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ
          </p>

          {/* Username */}
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">ชื่อผู้ใช้</span>
            </label>
            <input
              type="text"
              name="username"
              value={login.username}
              onChange={handleChange}
              placeholder="username"
              className="input"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label font-medium">
              <span className="label-text">รหัสผ่าน</span>
            </label>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="input"
            />
          </div>

          {/* Action Buttons */}
          <form className="form-control mt-6 space-y-3"  onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary w-full">
              เข้าสู่ระบบ
            </button>
            <button
              type="button"
              className="btn btn-outline btn-error w-full"
              onClick={() => setLogin({ username: "", password: "" })}
            >
              ยกเลิก
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;