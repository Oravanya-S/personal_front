import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelListAsync } from "../../auth/slice/admin-slice";

export default function SelectModel({ valueId, onChangeModel }) {
  const dispatch = useDispatch();
  const model = useSelector((state) => state.admin.modelList);
  useEffect(() => {
    dispatch(modelListAsync());
  }, []);

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="models" className="dark:text-white font-medium w-[60px]">
        Model:
      </label>
      <select
        className="min-w-[160px] py-[1px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
        name="models"
        id="models"
        onChange={onChangeModel}
      >
        <option disabled selected value>Select model</option>
        {model.map((el) =>
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
