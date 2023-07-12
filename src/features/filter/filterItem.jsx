import React from "react";
import { useState } from "react";

export default function FilterItem({ item, status, onClick, width = "120px" }) {
  return (
    <>
      <div className={`flex items-center border pl-2 hover:bg-gray-50 cursor-pointer ${status? "border-black": ""}`}>
        {item.hexcode ? <div className="w-[13px] h-3 rounded-full border" style={{backgroundColor: `${item.hexcode}`}}></div> : <></>}
        <button
          style={{width: `${width}`}}
          className={`pl-2 text-left text-sm py-[2px]`}
          value={item.id}
          name={item.name}
          onClick={onClick}
        >
          {item.name}
        </button>
      </div>
    </>
  );
}
