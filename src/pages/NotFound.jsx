import React from "react";
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div class="grid h-screen px-4 bg-white place-content-center">
        <h1 class="tracking-widest text-gray-500 uppercase text-[54px]">
          404 | Not Found
        </h1>
        <div className="mx-auto">
          <Link
            to='/'
            class="flex px-6 py-4 mt-6 text-xl font-medium text-white w-fit bg-black rounded hover:bg-white hover:text-black border-2 border-black duration-200 ease-in-out"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
