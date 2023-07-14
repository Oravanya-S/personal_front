import React from "react";

export default function DashboardItem({
  children,
  bgColor,
  title,
  result = 0,
}) {
  return (
    <div className="bg-white rounded-md w-full">
      <div className="flex gap-3 max-w-sm py-2 px-4 border-[1px] border-gray-100 rounded-lg shadow hover:border hover:border-black">
        <div
          className={`rounded-sm w-[70px] h-[70px] flex justify-center items-center bg-${bgColor}`}
        >
          {children}
        </div>
        <div className="flex flex-col gap justify-center">
          <div className="text-2xl font-medium">{Number(result).toLocaleString()}</div>
          <div className="font-medium text-gray-500 ">{title}</div>
        </div>
      </div>
    </div>
  );
}
