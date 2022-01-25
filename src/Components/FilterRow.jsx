import React from "react";

function FilterRow({ name }) {
  return (
    <div className="p-2 mb-2 hover:bg-zinc-600 rounded-lg hover: cursor-pointer">
      <p className="text-xs">{name}</p>
    </div>
  );
}

export default FilterRow;
