import React from "react";

function DrinkModal({ modalToggle, currentDrink }) {
  return (
    <div className="w-full h-full p-28 fixed flex flex-col drop-shadow-xl bg-zinc-800 bg-opacity-90 z-50" onClick={modalToggle}>
      <div className="bg-zinc-400 rounded-xl w-3/4 h-3/4 p-8">
        <h1 className="text-white text-xl font-semibold">{currentDrink.strAlcoholic}</h1>
        <button onClick={modalToggle}>close</button>
      </div>
    </div>
  );
}

export default DrinkModal;
