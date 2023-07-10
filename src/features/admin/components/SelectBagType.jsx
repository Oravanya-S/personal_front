import React from "react";
import { useSelector } from "react-redux";

export default function SelectBagType({ valueId, onChange }) {
  const bagType = useSelector((state) => state.admin.bagTypeList);

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="bagTypeId" className="dark:text-white font-medium">
        Bagtype:
      </label>
      <select
        className="min-w-[100px] py-[1px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
        name="bagTypeId"
        id="bagTypeId"
        value={valueId}
        onChange={onChange}
      >
        <option disabled hidden value={""}>
          Select type
        </option>
        {bagType.map((el) =>
          el.id === valueId ? (
            <option selected value={el.id} key={el.id}>
              {el.name}
            </option>
          ) : (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          )
        )}
      </select>
    </div>
  );
}
