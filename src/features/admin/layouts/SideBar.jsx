import React from "react";
import { AddIcon, BagIcon, BagIcon2, CategoryIcon, ColorIcon, DashboardIcon, DetailIcon, DropdownIcon, LogoutIcon, ModelIcon, OnePersonIcon, OrderIcon, SittingIcon, UpdateIcon } from "../../../icons";
import { logout } from "../../auth/slice/auth-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SideBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full justify-between border-r bg-white text-black">
      <div className="px-4">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <div
            
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2"
          >
            <SittingIcon />
            <span className="text-xl font-medium">General</span>
          </div>
          <Link to="/admin/dashboard"
            className="flex items-center gap-2 rounded-lg px-4 py-2"
          >
            <DashboardIcon />
            <span className="text-lg font-medium">Dashboard</span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <CategoryIcon />
                <span className="text-lg font-medium"> Categories </span>
              </div>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <DropdownIcon />
                </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <div
                className="flex items-center gap-2 cursor-pointer rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                onClick={()=> navigate("/admin/color")}
              >
                <ColorIcon />
                <span className="text-base font-medium"> Colors</span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                onClick={()=> navigate("/admin/bagtypes")}
              >
                <BagIcon2 />
                <span className="text-base font-medium"> Bag types</span>
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
                <DropdownIcon />
              </span>
            </summary>
            

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4"> 
              <Link to='/admin/update'
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AddIcon/>
                <span className="text-base font-medium"> Add products </span>
              </Link>

              <Link to='/admin/order'
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <OrderIcon />
                <span className="text-base font-medium"> Orders</span>
              </Link>
            </nav>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <OnePersonIcon />

                <span className="text-lg font-medium"> Account </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <DropdownIcon />
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
