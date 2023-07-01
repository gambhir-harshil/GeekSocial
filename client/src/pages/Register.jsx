import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="card flex flex-row-reverse rounded-xl overflow-hidden shadow-lg">
        <div className="left flex flex-col px-16 py-28 gap-20 flex-1 bg-gray-800">
          <h1 className="text-4xl font-bold text-white">Hey there!</h1>
          <p className="text-2xl font-semibold text-white max-w-md">
            Your social journey starts here. Sign up to explore the
            possibilities !
          </p>
          <div className="flex gap-3">
            <span className="text-gray-400">Already a Member?</span>
            <button className="text-blue-300 font-semibold">
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>
        <div className="right flex flex-col px-16 py-28 gap-10 flex-1 bg-white">
          <h1 className="text-4xl font-bold text-gray-800">Sign Up</h1>
          <form className="flex flex-col gap-6">
            <input
              className="login-input"
              type="text"
              placeholder="Name"
            />
            <input
              className="login-input"
              type="email"
              placeholder="Email"
            />
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

            <button className="login-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
