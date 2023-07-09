import React from "react";
import { useState } from "react";

export default function FilterItem({ item, status, onClick }) {

  return (
    <>
      <button
        className={`border px-3 text-left text-sm py-[2px] hover:bg-gray-50 ${status? "border-black": ""}`}
        value={item.id}
        name={item.name}
        onClick={onClick}
      >
        {item.name}
      </button>
    </>
  );
}
