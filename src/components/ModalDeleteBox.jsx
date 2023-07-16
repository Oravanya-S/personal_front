import React from 'react'
import { createPortal } from 'react-dom';
import { WarningIcon } from '../icons';

export default function ModalDeleteBox({children, width = 28, open, onClose, confirm }) {

  return createPortal((
      <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white opacity-70 z-30"></div>
          <div className="fixed inset-0 z-30" onMouseUp={onClose}>
            <div className="flex justify-center items-center min-h-full p-4">
              <div className='w-[350px]'></div>
              <div
                style={{ maxWidth: `${width}rem` }}
                className="bg-white rounded-lg w-full shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]"
                onMouseUp={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b text-xl  bg-black">
                  <div className="invisible">&#10005;</div>
                  <div className="font-semibold text-white">Confirm deletion</div>
                  <div
                    className="text-white font-semibold hover:text-gray-200 text-base"
                    role="button"
                    onClick={onClose}
                  >
                    &#10005;
                  </div>
                </div>
                <div className="p-6 overflow-auto">
                  <div className="flex flex-col gap-8">
                  <div className="flex gap-3 items-center justify-center">
                      <div><WarningIcon /></div>
                      <div>Are you sure you want to remove this item?</div> 
                  </div>
                  <div className="flex gap-4 justify-end px-2">
                      <div className="bg-black text-base text-white px-2 py-[6px] rounded-md border-[1px] border-black min-w-[90px] text-center cursor-pointer" onClick={confirm}>confirm</div>
                      <div className="px-2 py-[6px] rounded-md border-[1px] min-w-[90px] border-black text-base text-center cursor-pointer" onClick={onClose}>cancel</div>
                  </div>
                </div> 
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      </>
    ), document.getElementById("modal")
  );
}
