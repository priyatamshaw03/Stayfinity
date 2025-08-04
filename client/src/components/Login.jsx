import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import SigninwithGoogle from './SigninwithGoogle';
import { assets } from '../assets/assets';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //login logic
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in Successfully");
      window.location.href = "/owner";
      toast.success("Logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50 px-4">
      <div className="bg-white text-gray-500 w-full max-w-sm p-6 rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-1">
          Sign in to Stayfinity
        </h2>
        <p className="text-center text-sm text-gray-500/90 mb-5">
          Welcome back! Please sign in to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center w-full bg-transparent border border-gray-300/60 mt-10 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="text-right py-4">
            <a className="text-blue-600 underline text-sm" href="#">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white font-medium hover:bg-indigo-600 transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      <div className="flex items-center gap-4 w-full my-5">
        <div className="w-full h-px bg-gray-300/90" />
        <p className="text-nowrap text-sm text-gray-500/90">or continue with</p>
        <div className="w-full h-px bg-gray-300/90" />
      </div>

      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-600 hover:bg-gray-100 transition"
      >
        <img className="h-4 w-4" src={assets.googleFavicon} alt="Google Logo" />
        Google
      </button>
      </div>
      <SigninwithGoogle />
    </div>
  );
};

export default Login;
