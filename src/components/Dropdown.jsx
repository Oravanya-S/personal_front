import React, { useState } from "react";
import { LogoutIcon, OrderIcon } from "../icons";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/slice/auth-slice";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dropdown({user}) {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate() 
  return (
    <div className="flex justify-end">
      <div className="relative" role="button" onClick={() => setOpen(!open)}>
        <div className='cursor-pointer text-lg text-black p-2'>{user.firstName}</div>
      </div>
      {open && (
        <div className="z-20 absolute translate-y-14 bg-white border border-black shadow-xl w-48 p-2 border-b-[12px]">
          <Link to={`/orders/${user.id}`}
            className="flex gap-4 items-center mx-1 p-2 hover:bg-gray-100 rounded-lg"
            role="button" onClick={() => setOpen(false)}>
            <div className="rounded-full flex justify-center items-center">
              <OrderIcon />
            </div>
            <span className="text-base">History</span>
          </Link>
          <hr className="border border-gray-300 m-2" />
          <Link to='/' 
            className="flex gap-4 items-center mx-1 p-2 hover:bg-gray-100 rounded-lg text-red-900"
            role="button"
            onClick={() => dispatch(logout())}>
            <div className="flex justify-center items-center">
              <LogoutIcon />
            </div>
            <span className="text-base font-semibold">Log Out</span>
          </Link>
        </div>
      )}
    </div>
  );
}
