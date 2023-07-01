import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, rememberMe, handleCheckboxChange } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
     login();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="card flex rounded-xl overflow-hidden shadow-lg">
        <div className="left flex flex-col px-16 py-28 gap-20 flex-1 bg-gray-800">
          <h1 className="text-4xl font-bold text-white">Hello Again!</h1>
          <p className="text-2xl font-semibold text-white">
            Get back in the loop. <br /> Login to discover, engage, and share.
          </p>
          <div className="flex gap-3">
            <span className="text-gray-400">Don't have an account yet?</span>
            <button className="text-blue-300 font-semibold">
              <Link to={"/register"}>Sign Up</Link>
            </button>
          </div>
        </div>
        <div className="right flex flex-col px-16 py-28 gap-20 flex-1 bg-white">
          <h1 className="text-4xl font-bold text-gray-800">Login</h1>
          <form className="flex flex-col gap-6">
            <input
              className="login-input"
              type="text"
              placeholder="Username"
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
            />
            <label>
              <input
                type="checkbox"
                className="mr-1 text-gray-400"
                checked={rememberMe}
                onChange={handleCheckboxChange}
              />
              <span className="text-sm text-gray-400 font-semibold">
                Remember Me
              </span>
            </label>
            <button
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
