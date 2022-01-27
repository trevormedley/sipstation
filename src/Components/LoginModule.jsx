import React from "react";
import { FaGlassWhiskey, FaGoogle } from "react-icons/fa";
import { signInWithGoogle,} from "../firebase-config";

function LoginModule() {
  return (
    <div className="text-white bg-zinc-800 p-16 rounded-xl">
      <h1 className="text-white font-black italic mb-8 flex flex-row items-center">
        <FaGlassWhiskey className="mr-1" />
        SipStation
      </h1>
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold">Welcome to Sip Station</h1>
        <h3 className="text-zinc-400">Enter your info to get started</h3>
      </div>
      <div className="flex flex-col">
        <button
          onClick={signInWithGoogle}
          className="bg-[#DB4437] py-2 rounded-lg mb-4 text-sm flex flex-row items-center justify-center"
        >
          <FaGoogle className="mr-2" />
          Sign up with Google
        </button>
      </div>
      <div className="flex flex-row items-center justify-between my-4">
        <div className="h-1 w-1/3 bg-zinc-600"></div>
        <p className="text-sm">OR</p>
        <div className="h-1 w-1/3 bg-zinc-600"></div>
      </div>
      <form className="flex flex-col">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full py-1 px-2 bg-zinc-600 rounded-lg mt-1 mb-4"
        />
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full py-1 px-2 bg-zinc-600 rounded-lg mt-1 mb-4"
        />
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full py-1 px-2 bg-zinc-600 rounded-lg mt-1 mb-4"
        />
        <button className="p-2 rounded-lg bg-emerald-700">
          Create my Account
        </button>
      </form>
    </div>
  );
}

export default LoginModule;
