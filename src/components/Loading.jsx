import { LoaderIcon } from "../icons";

export default function Loading() {
  return (
    <>
      {/* <div className="fixed inset-0 bg-black opacity-30 z-40"></div> */}
      <div className="fixed inset-0 top-[120px] z-50">
        <div className="flex justify-center items-center min-h-full">
          <i className="fa-solid fa-spinner text-blue-800 text-5xl animate-spin"></i>
        </div>
      </div>
    </>
  );
}
