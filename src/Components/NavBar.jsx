import React from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

function NavBar() {
  return (
    <div className="w-full bg-[#27292C]  p-8 flex flex-row items-center justify-between sticky top-0 z-10">
      <div>
        <h2 className="text-white font-extrabold">SipStation</h2>
      </div>
      <div className="flex flex-row items-center">
        <button className="flex flex-row items-center bg-violet-500 text-white px-4 py-2 rounded-lg mr-8">
          <GiPerspectiveDiceSixFacesRandom className="mr-2" />
          Random Drink
        </button>
        <p className="text-neutral-400 font-light">Hello, Trevor</p>
        <div className="w-12 h-12 bg-amber-600 rounded-full ml-4"></div>
      </div>
    </div>
  );
}

export default NavBar;
