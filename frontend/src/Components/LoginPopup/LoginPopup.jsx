import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const endpoint =
      currState === "Login" ? "/api/user/login" : "/api/user/register";
    try {
      const response = await axios.post(`${url}${endpoint}`, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        toast.success(
          `Successfully ${currState === "Login" ? "logged in" : "registered"}`
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(`Error during ${currState.toLowerCase()}:`, error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={onLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <button onClick={() => setShowLogin(false)}>
            <img src={assets.cross_icon} alt="Close" className="h-6" />
          </button>
        </div>
        <div className="space-y-4">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <input type="checkbox" required className="h-4 w-4" />
          <p className="text-sm text-gray-600">
            I agree to the terms of use & privacy policy
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded-md mt-4 hover:bg-primary-dark"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <p className="text-center text-sm mt-4">
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-primary cursor-pointer"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-primary cursor-pointer"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
