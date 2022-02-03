import React from "react";
import { FaGlassWhiskey } from "react-icons/fa";
import { auth } from "../../firebase-config";

function NavBar() {
  return (
    <div className="w-full bg-[#27292C]  p-8 flex flex-row items-center justify-between sticky top-0 z-10">
      <div>
        <h2 className="text-white font-black text-2xl flex flex-row items-center italic">
          <FaGlassWhiskey className="mr-1" />
          SipStation
        </h2>
      </div>
      <div className="flex flex-row items-center">
        <p className="text-neutral-400 font-light">{`Hello, ${auth.currentUser.displayName}`}</p>
         {auth.currentUser.photoURL != null ? (
          <img
            src={auth.currentUser.photoURL}
            alt="userimage"
            className="w-12 h-12 rounded-full ml-4"
          /> 
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
