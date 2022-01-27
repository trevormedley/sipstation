import React from "react";
import NavBar from "../Components/Navigation/NavBar";
import NavLeft from "../Components/Navigation/NavLeft";

function Social() {
  return (
    <div>
      <NavBar />
      <div className="relative min-h-screen flex">
        <NavLeft />
        <div className="w-full">

        </div>
      </div>
    </div>
  );
}

export default Social;