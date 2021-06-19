import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { formContext } from "../Contexts";


//logIn component
const Login = () => {
  // const [UserName, setUserName] = useState("");
  // const [Password, setPassword] = useState("");
  // const { isSignedIn, setIsSignedIn } = useContext(formContext);
  // const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="flex flex-col items-center h-screen bg-gray-100 md:flex-row">
      <div className="relative  w-full h-screen  lg:block md:w-1/3 lg:w-2/3">
          <img
            src="landscape.jpg"
            alt=""
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="flex w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
          <div className="w-full py-32 lg:py-6 lg:h-200">
            <div className="flex justify-center">
              <h1 className="  hover:bg-red-400 text-center mt-35 flex font-semibold justify-center items-center text-white bg-green-500 py-2 w-40   rounded-md">
                Welcome Back
              </h1>
            </div>
            <form className="mt-40" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                  User Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your User Name "
                  className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-red-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-red-500 ring-offset-2"
                  autoFocus
                  autoComplete="true"
                  required
                // value={UserName}
                // onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Your Password"
                  minLength="6"
                  className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-red-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-red-500 ring-offset-2"
                  required
                // value={Password}
                // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-red-700 focus:text-black-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-green-500 rounded-lg hover:bg-red-400 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
              >
                Log In
              </button>
            </form>
            <p className="mt-8 text-center">
              New Collector? Please
              <Link
                to="/signup"
                className="font-semibold text-black-500 hover:text-red-400"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;