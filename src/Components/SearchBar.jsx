import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";

function SearchBar({ popularHandler, filterToggle }) {
  return (
    <div className="flex flex-row justify-between mb-8 text-white items-center">
      <div className="flex flex-row">
        <select name="sort" id="sort" className="px-2 py-2 bg-[#42454B] rounded-lg mr-4">
            <option value="recent">Recently Added</option>
            <option value="popular">Popular</option>
            <option value="random">Random</option>
        </select>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Find a Drink"
          className="px-4 py-2 bg-[#42454B] rounded-lg mr-4"
        />
        <button className="text-xs bg-zinc-700 px-4 p-2 rounded-lg flex flex-row items-center mr-4">
          <FiSearch className="mr-2" />
          Search
        </button>
        <button onClick={popularHandler} className="text-white text-xs bg-zinc-700 px-4 p-2 rounded-lg flex flex-row items-center">
          Popular Drinks
        </button>
      </div>
      <FiFilter onClick={filterToggle} className="hover: cursor-pointer"/>
    </div>
  );
}

export default SearchBar;
