import React from "react";
import { FiHome, FiSearch, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavLeft() {
  return (
    <div className="bg-[#27292C] w-1/4 p-6 border-box">
      <Link to={"/"} className="flex flex-row p-4 rounded-lg border-box mb-4 items-center text-white hover:transition-all hover:bg-[#42454B] hover:cursor-pointer">
        <FiHome className="mr-2" />
        <p>Home</p>
      </Link>
      <Link to={"/explore"} className="flex flex-row p-4 rounded-lg border-box mb-4 items-center text-white hover:transition-all hover:bg-[#42454B] hover:cursor-pointer">
        <FiSearch className="mr-2" />
        <p>Explore</p>
      </Link>
      <Link to={"/social"} className="flex flex-row p-4 rounded-lg border-box mb-4 items-center text-white hover:transition-all hover:bg-[#42454B] hover:cursor-pointer">
        <FiUsers className="mr-2" />
        <p>Social</p>
      </Link>
    </div>
  );
}

export default NavLeft;
