import React from "react";
import { AddIcon, BagIcon, CategoryIcon, DetailIcon, LogoutIcon, ModelIcon, OnePersonIcon, OrderIcon, SittingIcon, UpdateIcon } from "../../../icons";
import { logout } from "../../auth/slice/auth-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SideBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full justify-between border-e bg-white shadow-lg text-black">
      <div className="px-4">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2"
          >
            <SittingIcon />
            <span className="text-xl font-medium">General</span>
          </a>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <CategoryIcon />
                <span className="text-lg font-medium"> Categories </span>
              </div>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4" onClick={()=> navigate("/admin")}>
              <div
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <UpdateIcon />
                <span className="text-base font-medium"> Update categories </span>
              </div>
            </nav>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <BagIcon />
                <span className="text-lg font-medium"> Product </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4"> 
              <Link to='/admin/update'
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AddIcon/>
                <span className="text-base font-medium"> Add products </span>
              </Link>

              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <OrderIcon />
                <span className="text-base font-medium"> Orders</span>
              </a>
            </nav>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <OnePersonIcon />

                <span className="text-lg font-medium"> Account </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <DetailIcon />
                <span className="text-base font-medium"> Details </span>
              </a>

                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-100"
                  onClick={() => dispatch(logout())}
                >
                  <LogoutIcon />
                  <span className="text-base font-medium text-gray-500"> Logout </span>
                </button>
            </nav>
          </details>
        </nav>
      </div>

      
    </div>
  );
}
