import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagTypeListAsync } from "../features/auth/slice/admin-slice";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";
import { setModelId } from "../features/auth/slice/model-slice";

export default function Menu() {
  const bagType = useSelector((state) => state.admin.bagTypeList);
  const modelId = useSelector((state) => state.model.modelId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bagTypeListAsync());
  }, []);

const location = useLocation()

  return (
    <div className="flex gap-12 flex-1 justify-center text-lg">
      {bagType.map((el) => (
        <MenuItem
          className="text-lg cursor-pointer hover:underline hover:underline-offset-8"
          menu={el}
          key={el.id}
          to={`/models/${el.id}`}
          active={location.pathname === `/models/${el.id}`}
          onclick= {() => dispatch(setModelId(el.id))}
        />
      ))}
    </div>
  );
}

