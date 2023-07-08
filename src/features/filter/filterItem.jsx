import React from "react";

export default function FilterItem({ item, onClick }) {
  console.log(item);
  return (
    <>
      <button
        className="border px-3 text-left text-sm py-[2px]"
        value={item.id}
      >
        {item.name}
      </button>
    </>
  );
}
