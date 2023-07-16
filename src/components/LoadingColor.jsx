import React from "react";

export default function LoadingColor() {
  return (
    <>
      <div className="flex items-center gap-8 text-lg border-b px-3 h-[70px] justify-between">
        <div className="flex gap-8">
          <div className="rounded-full bg-slate-200 h-6 w-56"></div>
          <div className="rounded-full bg-slate-200 h-6 w-56"></div>
          <div className="rounded-full bg-slate-200 h-6 w-56"></div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        </div>
      </div>
    </>
  );
}
