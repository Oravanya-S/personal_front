export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 top-[120px] z-50">
        <div className="flex justify-center items-center min-h-full">
          <i className="fa-solid fa-spinner text-black text-5xl animate-spin"></i>
        </div>
      </div>
    </>
  );
}
