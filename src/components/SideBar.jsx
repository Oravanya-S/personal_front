import React from "react";
import { AddIcon, BagIcon, CategoryIcon, DetailIcon, LogoutIcon, OnePersonIcon, OrderIcon, SittingIcon, UpdateIcon } from "../icons";
import { logout } from "../features/auth/slice/auth-slice";
import { useDispatch } from "react-redux";

export default function SideBar() {

  const dispatch = useDispatch();
  return (
    <div class="flex flex-col h-screen justify-between border-e bg-white shadow-lg text-black">
      <div class="px-4">
        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
          <a
            href="#"
            class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2"
          >
            <SittingIcon />
            <span class="text-xl font-medium"> General </span>
          </a>

          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div class="flex items-center gap-2">
                <CategoryIcon />
                <span class="text-lg font-medium"> Categories </span>
              </div>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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

            <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <UpdateIcon />
                <span class="text-base font-medium"> Update categories </span>
              </a>
            </nav>
          </details>

          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div class="flex items-center gap-2">
                <BagIcon />
                <span class="text-lg font-medium"> Product </span>
              </div>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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

            <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AddIcon/>
                <span class="text-base font-medium"> Add products </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <OrderIcon />
                <span class="text-base font-medium"> Orders</span>
              </a>
            </nav>
          </details>

          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
              <div class="flex items-center gap-2">
                <OnePersonIcon />

                <span class="text-lg font-medium"> Account </span>
              </div>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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

            <nav aria-label="Account Nav" class="mt-2 flex flex-col px-4">
              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <DetailIcon />
                <span class="text-base font-medium"> Details </span>
              </a>

                <button
                  type="submit"
                  class="flex w-full items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-100"
                  onClick={() => dispatch(logout())}
                >
                  <LogoutIcon />
                  <span class="text-base font-medium text-gray-500"> Logout </span>
                </button>
            </nav>
          </details>
        </nav>
      </div>

      
    </div>
  );
}
