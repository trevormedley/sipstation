import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import FilterRow from "./FilterRow";

function DrinkFilter({ setFilterString, filterSearch }) {
  const [ingredients, setInredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIngredient, setFilterIngredient] = useState([]);
  const isMounted = useRef(true);

  const apiKey = "9973533";
  const baseUrl = "https://www.thecocktaildb.com/api/json/v2/";

  useEffect(() => {
    axios.get(`${baseUrl}${apiKey}/list.php?i=list`).then((response) => {
      if (isMounted.current) {
        setInredients(response.data.drinks);
      }
    });
    return () => (isMounted.current = false);
  }, []);

  const clickHandler = (event) => {
    const value = event.target.innerText;
    setFilterIngredient((filterIngredient) => [...filterIngredient, value]);
    setFilterString(filterIngredient.toString().replace(/\s/g, "_"));
  };

  const clearList = (e) => {
    e.preventDefault();
    setFilterIngredient([]);
  };


  return (
    <div className="mb-8 h-48">
      <form className="grid grid-cols-2 gap-4 text-white">
        <div className="bg-zinc-700 p-4 rounded-lg h-48 overflow-scroll">
          <input
            type="text"
            placeholder="search"
            className="w-full py-2 px-4 bg-zinc-600 text-white mb-2 sticky rounded-lg"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          {ingredients
            .filter((drink) => {
              if (searchTerm === "") {
                return drink;
              } else if (
                drink.strIngredient1
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return drink;
              }
            })
            .map((drink) => (
              <FilterRow
                name={drink.strIngredient1}
                key={drink.strIngredient1}
                test={clickHandler}
              />
            ))}
        </div>
        <div className="flex flex-col justify-between">
          <div className="bg-zinc-700 p-4 rounded-lg h-32 overflow-scroll flex flex-col justify-between">
            <div>
              {filterIngredient.map((drink) => (
                <div className="p-2 mb-1 hover:bg-zinc-600 rounded-lg">
                  <p className="text-xs">{drink}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white grid grid-cols-2 gap-2">
            <button
              className="bg-green-600 py-2 rounded-lg"
              onClick={filterSearch}
            >
              Search
            </button>
            <button className="bg-red-600 py-2 rounded-lg" onClick={clearList}>
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DrinkFilter;
