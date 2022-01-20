import React from "react";
import { FiBookmark } from "react-icons/fi";

function DrinkCard({ name, category, image }) {
  return (
    <div>
      <img
        className="rounded-md object-cover object-center h-40 w-full mb-3"
        src={image}
        alt="drinkphoto"
      />
      <div className="flex flex-row justify-between mb-2">
        <div>
          <p className="text-white text-base">{name}</p>
          <p className="text-stone-400 text-sm">{category}</p>
        </div>
        <FiBookmark />
      </div>
      <div className="flex flex-row">
        <p className="text-white text-xs bg-indigo-500 py-1 px-2 rounded-lg mr-2">Refreshing</p>
        <p className="text-white text-xs bg-emerald-500 py-1 px-2 rounded-lg">Fruity</p>
      </div>
    </div>
  );
}

export default DrinkCard;