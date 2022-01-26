import React from "react";
import { FiBookmark } from "react-icons/fi";

function DrinkCard({ id, name, category, image, tags, modalToggle, setModalId }) {

  const handleClick = id => {
    modalToggle();
    setModalId(id);
  }
  
  return (
    <div className="group hover:cursor-pointer" onClick={() => handleClick(id)}>
      <img
        className="rounded-md object-cover object-center h-40 w-full mb-3 group-hover:ease-in-out duration-300 group-hover:saturate-150"
        src={image}
        alt="drinkphoto"
      />
      <div className="flex flex-row justify-between mb-2">
        <div>
          <p className="text-white text-base">{name}</p>
          <p className="text-stone-400 text-sm">{category}</p>
        </div>
        <FiBookmark className="text-stone-400 hover:text-white cursor-pointer" />
      </div>
      <div className="flex flex-row mb-4">
        {tags != null ? tags.split(',').slice(0, 3).map((tag) => (
          <p className="text-white text-xs bg-zinc-700 py-1 px-2 rounded-lg mr-2">
            {tag}
          </p>
        )) : null}
        
      </div>
    </div>
  );
}

export default DrinkCard;
