import React, { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import axios from "axios";

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

  console.log(drinks);

  return (
    <div className="bg-black w-full p-12">
      <h1 className="text-white text-4xl mb-8">Explore</h1>
      <div className="grid grid-cols-3 gap-4 w-full h-full bg-[#27292C] rounded-2xl p-8">
        {drinks.slice(0,9).map((drinks) => (
          <DrinkCard
            key={drinks.idDrink}
            name={drinks.strDrink}
            category={drinks.strCategory}
            image={drinks.strDrinkThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default DrinkList;
