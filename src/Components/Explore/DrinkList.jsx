import React, { useState, useEffect } from "react";
import DrinkCard from "../DrinkCard";
import axios from "axios";
import DrinkModal from "../DrinkModal";
import DrinkFilter from "./DrinkFilter";
import { FiFilter, FiSearch } from "react-icons/fi";

function DrinkList() {
  const [drinks, setDrinks] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  const apiKey = "9973533";
  const baseUrl = "https://www.thecocktaildb.com/api/json/v2/";

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${baseUrl}${apiKey}/recent.php`)
        .then((response) => setDrinks(response.data.drinks));
    }
    fetchData();
  }, []);

  const popularHandle = () => {
    axios
      .get(`${baseUrl}${apiKey}/popular.php`)
      .then((response) => setDrinks(response.data.drinks));
  };

  const toggleHandler = () => {
    setFilterVisible(!filterVisible);
  };

  const modalToggle = () => {
    setModalVisible(!modalVisible);
  };

  const currentDrink = modalId
    ? drinks.find((drink) => drink.idDrink === modalId)
    : null;

  const searchHandle = () => {
    axios
      .get(`${baseUrl}${apiKey}/search.php?s=${searchTerm}`)
      .then((response) => setDrinks(response.data.drinks));
  };

  return (
    <div>
      <div className="w-full">
        {modalVisible ? (
          <DrinkModal
            modalToggle={modalToggle}
            currentDrink={currentDrink}
            image={currentDrink.strDrinkThumb}
            tags={currentDrink.strTags}
            name={currentDrink.strDrink}
            category={currentDrink.strCategory}
            alcoholic={currentDrink.strAcloholic}
            glass={currentDrink.strGlass}
            instructions={currentDrink.strInstructions}
            video={currentDrink.strVideo}
          />
        ) : null}
      </div>
      <div className="bg-black p-12">
        <h1 className="text-white text-4xl mb-8">Explore</h1>
        <div className="w-full h-full bg-[#27292C] rounded-2xl p-8">
          <div className="flex flex-row justify-between mb-8 text-white items-center">
            <div className="flex flex-row">
              <select
                name="sort"
                id="sort"
                className="px-2 py-2 bg-[#42454B] rounded-lg mr-4"
              >
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
                onChange={(e) => {setSearchTerm(e.target.value)}}
              />
              <button
                className="text-xs bg-zinc-700 px-4 p-2 rounded-lg flex flex-row items-center mr-4"
                onClick={searchHandle}
              >
                <FiSearch className="mr-2" />
                Search
              </button>
              <button onClick={popularHandle} className="text-white text-xs bg-zinc-700 px-4 p-2 rounded-lg flex flex-row items-center">
                Popular Drinks
              </button>
            </div>
            <FiFilter onClick={toggleHandler} className="hover: cursor-pointer" />
          </div>
          {filterVisible ? <DrinkFilter /> : null}
          <div className="grid grid-cols-3 gap-4"> 
          {drinks !== null ? drinks.map((drink) => (
            <DrinkCard 
              key={drinks.idDrink}
              id={drink.idDrink}
              name={drink.strDrink}
              category={drink.strCategory}
              image={drink.strDrinkThumb}
              tags={drink.strTags}
              modalToggle={modalToggle}
              setModalId={setModalId}
            />))
          : (<div>
            <h1 className="text-white text-center">No Results! Search something else (:</h1>
          </div>)}      
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkList;
