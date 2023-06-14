import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagTypeListAsync } from "../features/auth/slice/admin-slice";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

export default function Menu() {
  const bagType = useSelector((state) => state.admin.bagTypeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bagTypeListAsync());
  }, []);

const location = useLocation()

  return (
    <div className="flex gap-8">
      {bagType.map((el) => (
        <MenuItem
          className="text-lg cursor-pointer hover:underline hover:underline-offset-8"
          menu={el}
          key={el.id}
          to={`/models/${el.id}`}
          active={location.pathname === `/models/${el.id}`}
        />
      ))}
    </div>
  );
}

