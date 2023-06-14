import React from 'react'
// import SubDetails from './SubDetails'
export default function ProductDetail({item, onClose}) {
  
  return (
    <div className='flex flex-col p-6'>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-[72px]'>
                <div className='flex flex-col gap-[72px]'>
                    <div className='flex flex-col gap-2 text-lg'>
                      <p className='font-medium'>Meterial</p>
                      <p className=''>{item.meterial}</p>
                    </div>
                      
                    <div className='flex flex-col gap-2 text-base'>
                        <p className='font-medium'>Description</p>
                        <p>{item.description}</p>
                    </div>
                    <div className='flex justify-end text-base top-6 right-6 absolute'>
                        <div className='text-gray-500 font-semibold hover:text-gray-600 transform hover:rotate-90 transition duration-500 ease-in-out' role='button' onClick={onClose}>&#10005;</div>
                    </div>
                </div>
              
                {/* <SubDetails onOpen={onOpen}/> */}
            </div>
        </div>
    </div>
  )
}
