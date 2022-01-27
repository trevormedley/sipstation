import React from "react";

function FilterRow({ name, push }) {
  return (
    <div className="p-2 mb-2 hover:bg-zinc-600 rounded-lg hover: cursor-pointer" onClick={push}>
      <p className="text-xs">{name}</p>
    </div>
  );
}

export default FilterRow;
