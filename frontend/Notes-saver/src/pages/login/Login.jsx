import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PasswordInput from "../../components/input/PasswordInput";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input type="text" placeholder="Email" className="input-box" />

              <PasswordInput />

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              not registered yet ?
              <Link to="/Signup" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
