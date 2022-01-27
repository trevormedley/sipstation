import React from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import {FaGlassWhiskey} from "react-icons/fa"

function NavBar() {
  const username = window.localStorage.getItem('name');
  const profilePic = window.localStorage.getItem('profilePic');

  return (
    <div className="w-full bg-[#27292C]  p-8 flex flex-row items-center justify-between sticky top-0 z-10">
      <div>
        <h2 className="text-white font-black text-2xl flex flex-row items-center italic">
          <FaGlassWhiskey className="mr-1" />
          SipStation
        </h2>
      </div>
      <div className="flex flex-row items-center">
        <button className="flex flex-row items-center bg-violet-500 text-white px-4 py-2 rounded-lg mr-8">
          <GiPerspectiveDiceSixFacesRandom className="mr-2" />
          Random Drink
        </button>
        <p className="text-neutral-400 font-light">{`Hello, ${username}`}</p>
        <img src={profilePic} alt="userimage" className="w-12 h-12 rounded-full ml-4"/>
      </div>
    </div>
  );
}

export default NavBar;