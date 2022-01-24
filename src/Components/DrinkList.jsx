import React, { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import axios from "axios";
import SearchBar from "./SearchBar";
import DrinkModal from "./DrinkModal";

function DrinkList() {
  const [drinks, setDrinks] = useState([]);

  const apiKey = "9973533";
  const baseUrl = "https://www.thecocktaildb.com/api/json/v2/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`${baseUrl}${apiKey}/recent.php`)
        .then((response) => setDrinks(response.data.drinks));
      return request;
    }
    fetchData();
  }, []);

  const popularHandle = () => {
    axios.get(`${baseUrl}${apiKey}/popular.php`)
    .then((response) => setDrinks(response.data.drinks))
  }

  return (
    <div className="bg-black p-12">
      <h1 className="text-white text-4xl mb-8">Explore</h1>
      <div className="w-full h-full bg-[#27292C] rounded-2xl p-8">
        <SearchBar popularHandler={popularHandle}/>
        <DrinkModal />
        <div className="grid grid-cols-3 gap-4">
          {drinks.map((drinks) => (
            <DrinkCard
              key={drinks.idDrink}
              name={drinks.strDrink}
              category={drinks.strCategory}
              image={drinks.strDrinkThumb}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrinkList;
