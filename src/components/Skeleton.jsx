import LoadingColor from "./LoadingColor";

export default function Skeleton() {
  return (
    <>
      <div class="w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div className="flex flex-col w-full gap-6 overflow-auto flex-1">
            <div className="bg-slate-200 h-[110px]"></div>
            <div className="flex flex-col mx-8 gap-6">
              <div className="bg-white h-[80px] rounded-md -mt-16 flex items-center mb-0">
                <p className="text-2xl font-semibold px-6"></p>
              </div>
            </div>
            <div className="flex flex-col gap-6 mx-8">
              <div>
                <div className="w-full flex justify-end relative">
                  <div class="rounded-full bg-slate-200 h-8 w-56"></div>
                </div>
              </div>
              <div className="rounded-lg flex flex-col h-[700px] w-full overflow-hidden p-6 bg-white">
                <LoadingColor />
                <LoadingColor />
                <LoadingColor />
                <LoadingColor />
                <LoadingColor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
