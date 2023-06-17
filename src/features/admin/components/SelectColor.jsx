import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorListAsync } from "../../auth/slice/admin-slice";

export default function SelectColor({ valueId, onChange}) {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.admin.colorList);
  useEffect(() => {
    dispatch(colorListAsync());
  }, []);

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="colorId" className="dark:text-white font-medium w-[60px]">
        Color:
      </label>
      <select
        className="min-w-[160px]  m-0 text-lg rounded-lg border border-gray-400 text-gray-700 font-normal"
        name="colorId"
        id="colorId"
        onChange={onChange}
      >
        <option disabled selected value>Select color</option>
        {color.map((el) =>
          el.id == valueId ? (
            <option selected value={el.id}>
              {el.name}
            </option>
          ) : (
            <option value={el.id}>
                {el.name}
            </option>
          )
        )}
      </select>
    </div>
  );
}

