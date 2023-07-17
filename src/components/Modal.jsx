import {createPortal} from 'react-dom'
  export default function Modal({children, open, onClose, width = '5/12', position = 'justify-end', ptpx = '110px', z='30'}) {

  return createPortal((
      <>
      {/* {open && (  */}
        <div className={`${open? "block": "hidden"}`}>
          <div className={`fixed inset-0 bg-white opacity-50 z-30 shadow-lg`}></div>
          <div className={`fixed inset-0 z-${z}`} onMouseUp={onClose}>
          <div className={`flex ${position} min-h-full duration-2000 transform ease-in-out ${open ? 'animate-slideInRight' : 'animate-slideOutRight'}`}>
            <div 
            style={{paddingTop: `${ptpx}`}}
            className={`bg-white shadow-lg flex flex-col overflow-hidden max-h-screen w-5/12 relative px-14 xl:px-20`}
            onMouseUp={e => e.stopPropagation()}>
              <div className='flex justify-end text-xl top-[110px] right-14 absolute xl:right-20'>
                  <div className='text-gray-500 font-semibold hover:text-gray-600 transform hover:rotate-90 transition duration-500 ease-in-out' role='button' onClick={onClose}>&#10005;</div>
              </div>
                <div className='overflow-auto'>
                {children}
              </div>
            </div>
        </div>
        </div>
        </div>
      {/* )} */}
      </>
    ), document.getElementById("modal")
  );
}
