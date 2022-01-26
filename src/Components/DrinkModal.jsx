import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaGlassMartiniAlt, FaYoutube } from "react-icons/fa";
import { FiBookmark, FiXCircle } from "react-icons/fi";

function DrinkModal({
  modalToggle,
  currentDrink,
  image,
  tags,
  name,
  category,
  glass,
  instructions,
  video,
}) {
  return (
    <div className="w-full h-full p-28 fixed flex flex-col drop-shadow-xl bg-zinc-700 bg-opacity-80 z-50 overflow-scroll">
      <FiXCircle
        className="text-zinc-300 text-4xl absolute left-24 top-24 bg-zinc-800 rounded-full hover:cursor-pointer"
        onClick={modalToggle}
      />
      <div className="bg-zinc-900 rounded-xl w-3/4 p-8 flex flex-row">
        <div className="w-1/3 mr-8">
          <img
            src={image}
            alt={currentDrink.strDrink}
            className="w-full rounded-xl mb-4"
          />
          <div className="flex flex-row flex-wrap mb-2">
            {tags != null
              ? tags
                  .split(",")
                  .map((tag) => (
                    <p className="text-white text-xs bg-zinc-700 py-1 px-2 rounded-lg mr-2 mb-2">
                      {tag}
                    </p>
                  ))
              : null}
          </div>
          <div>
            <div className="flex flex-row items-center text-zinc-300">
              <BiCategoryAlt className="mr-2" />
              <p>{category}</p>
            </div>
            <div className="flex flex-row items-center text-zinc-300">
              <FaGlassMartiniAlt className="mr-2" />
              <p>{glass}</p>
            </div>
            {video != null ? (
              <div className="flex flex-row items-center text-zinc-300">
                <FaYoutube className="mr-2" />
                <a href={video} target="_blank" rel="noopener noreferrer">
                  <p>Tutorial</p>
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-3/4">
          <div className="mb-3 flex flex-row items-center justify-between">
            <h1 className="text-white text-4xl">{name}</h1>
            <button className="py-2 px-4 text-white bg-emerald-600 text-xs rounded-md flex flex-row items-center">
              <FiBookmark className="mr-1" />
              Bookmark
            </button>
          </div>
          <p className="text-zinc-500">{instructions}</p>
          <div className="mt-4">
            <div className="flex flex-col">
              <h3 className="text-zinc-300 mb-2">Ingredients</h3>
              <div className="flex flex-col text-zinc-500">
                <p>
                  {currentDrink.strMeasure1} {currentDrink.strIngredient1}
                </p>
                <p>
                  {currentDrink.strMeasure2} {currentDrink.strIngredient2}
                </p>
                <p>
                  {currentDrink.strMeasure3} {currentDrink.strIngredient3}
                </p>
                <p>
                  {currentDrink.strMeasure4} {currentDrink.strIngredient4}
                </p>
                <p>
                  {currentDrink.strMeasure5} {currentDrink.strIngredient5}
                </p>
                <p>
                  {currentDrink.strMeasure6} {currentDrink.strIngredient6}
                </p>
                <p>
                  {currentDrink.strMeasure7} {currentDrink.strIngredient7}
                </p>
                <p>
                  {currentDrink.strMeasure8} {currentDrink.strIngredient8}
                </p>
                <p>
                  {currentDrink.strMeasure9} {currentDrink.strIngredient9}
                </p>
                <p>
                  {currentDrink.strMeasure10} {currentDrink.strIngredient10}
                </p>
                <p>
                  {currentDrink.strMeasure11} {currentDrink.strIngredient11}
                </p>
                <p>
                  {currentDrink.strMeasure12} {currentDrink.strIngredient12}
                </p>
                <p>
                  {currentDrink.strMeasure13} {currentDrink.strIngredient13}
                </p>
                <p>
                  {currentDrink.strMeasure14} {currentDrink.strIngredient14}
                </p>
                <p>
                  {currentDrink.strMeasure15} {currentDrink.strIngredient15}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkModal;
