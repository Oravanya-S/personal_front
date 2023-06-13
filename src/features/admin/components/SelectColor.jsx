import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorListAsync } from "../../auth/slice/admin-slice";

export default function SelectColor({ valueId, onChangeColor }) {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.admin.colorList);
  useEffect(() => {
    dispatch(colorListAsync());
  }, []);

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="colors" className="dark:text-white font-medium w-[60px]">
        Color:
      </label>
      <select
        className="min-w-[160px] py-[1px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
        name="colors"
        id="colors"
        onChange={onChangeColor}
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

