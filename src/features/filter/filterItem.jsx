import React from "react";
import { useState } from "react";

export default function FilterItem({ item, onClick }) {
  const [click, setClick] = useState(false)
  const handleClickFilterColor = (e) => {
    setClick(!click)
  }
  return (
    <>
      <button
        className={`border px-3 text-left text-sm py-[2px] hover:bg-gray-50 ${click? "border-black": ""}`}
        value={item.id}
        onClick={handleClickFilterColor}
      >
        {item.name}
      </button>
    </>
  );
}
