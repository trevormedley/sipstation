import React, { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import axios from "axios";
import SearchBar from "./SearchBar";
import DrinkModal from "./DrinkModal";
import DrinkFilter from "./DrinkFilter";

function DrinkList() {
  const [drinks, setDrinks] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState("");

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
    axios
      .get(`${baseUrl}${apiKey}/popular.php`)
      .then((response) => setDrinks(response.data.drinks));
  };

  // const clickHandler = (name) => {
  //   <DrinkModal name={name} />;
  //   console.log(`This drink is ${name}`);
  // };

  const toggleHandler = () => {
    setFilterVisible(!filterVisible);
  };

  const modalToggle = () => {
    setModalVisible(!modalVisible);
  };

  const currentDrink = modalId ? drinks.find((drink) => drink.idDrink === modalId) : null

  return (
    <div>
      <div className="w-full">
        {modalVisible ? <DrinkModal modalToggle={modalToggle} currentDrink={currentDrink} /> : null}
      </div>
      <div className="bg-black p-12">
        <h1 className="text-white text-4xl mb-8">Explore</h1>
        <div className="w-full h-full bg-[#27292C] rounded-2xl p-8">
          <SearchBar
            popularHandler={popularHandle}
            filterToggle={toggleHandler}
          />
          {filterVisible ? <DrinkFilter /> : null}
          <div className="grid grid-cols-3 gap-4">
            {drinks.map((drink) => (
              <DrinkCard
                key={drink.idDrink}
                id={drink.idDrink}
                name={drink.strDrink}
                category={drink.strCategory}
                image={drink.strDrinkThumb}
                // onClick={() => {
                //   clickHandler(drinks.strDrink);
                // }}
                tags={drink.strTags}
                modalToggle={modalToggle}
                setModalId={setModalId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkList;
