import React from "react";

function FilterRow({ name, push, test }) {
  return (
    <div className="p-2 mb-1 hover:bg-zinc-600 rounded-lg hover: cursor-pointer" onClick={test}>
      <p className="text-xs">{name}</p>
    </div>
  );
}

export default FilterRow;
