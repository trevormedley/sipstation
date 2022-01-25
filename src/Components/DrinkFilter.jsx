import React, { useState } from "react";
import axios from "axios";
import FilterRow from "./FilterRow";

function DrinkFilter() {
  const [ingredients, setInredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const apiKey = "9973533";
  const baseUrl = "https://www.thecocktaildb.com/api/json/v2/";

  axios
    .get(`${baseUrl}${apiKey}/list.php?i=list`)
    .then((response) => setInredients(response.data.drinks));

  return (
    <div className="mb-8">
      <form className="grid grid-cols-2 gap-4 text-white">
        <div className="bg-zinc-700 p-4 rounded-lg h-48 overflow-scroll">
          <input
            type="text"
            placeholder="search"
            className="w-full py-2 px-4 bg-zinc-600 text-white mb-2 sticky rounded-lg"
            onChange={event => {setSearchTerm(event.target.value)}}
          />
          {/* {ingredients.map((drink) => (
            <FilterRow name={drink.strIngredient1} key={drink.key}/>
          ))} */}
        </div>
        <div className="bg-zinc-700 p-4 rounded-lg h-48 overflow-scroll flex flex-col justify-between">
          <div>
            <p className="text-white">hello</p>
          </div>
          <div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DrinkFilter;
