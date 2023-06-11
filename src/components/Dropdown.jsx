import React, { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-end">
      <div className="relative" role="button" onClick={() => setOpen(!open)}>
        <a className='cursor-pointer'><i className={`${(open? "fa-solid": "fa-regular")} fa-user text-2xl text-black p-2`}></i>Sign in</a>
      </div>
      {open && (
        <div className="absolute right-8 translate-y-20 bg-white border rounded-xl shadow-lg w-72 p-2">
          <div
            className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg"
            role="button">
            <div className="rounded-full bg-gray-300 h-9 w-9 flex justify-center items-center">
              icon
            </div>
            <span className="text-sm font-semibold">History</span>
          </div>
          <hr className="border border-gray-300 m-2" />
          <div
            className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg"
            role="button">
            <div className="rounded-full bg-gray-300 h-9 w-9 flex justify-center items-center">
              icon
            </div>
            <span className="text-sm font-semibold">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
}
