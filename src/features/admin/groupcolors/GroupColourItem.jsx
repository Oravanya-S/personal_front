import React from "react";
import AddColour from "./AddColour";
import ColourListWithGroupColor from "./ColourListWithGroupColor";

export default function GroupColourItem({ item }) {
  return (
    <div key={item.id}>
      <div className="flex flex-col w-full border-[1px] border-gray-200 rounded-lg overflow-hidden">
        <div className="flex gap-2 items-center bg-[#D8C9BA] px-6 py-4 text-lg">
          <p className="flex font-medium">Main Color:</p>
          <p>{item.name}</p>
        </div>
        <div className="px-4">
          <AddColour
            category="color"
            idGroupColour={item.id}
          />
          <ColourListWithGroupColor itemList={item?.Colors}/>
        </div>
      </div>
    </div>
  );
}
