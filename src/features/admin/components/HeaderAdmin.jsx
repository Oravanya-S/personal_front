import React from 'react'

export default function HeaderAdmin({topic}) {
  return (
    <>
        <div className='bg-[#7D6352] h-[110px]'></div>
            <div className='flex flex-col mx-8 gap-6'>
                <div className='bg-white h-[80px] rounded-md -mt-16 flex items-center mb-0'>
                    <p className='text-2xl font-semibold px-6'>{topic}</p>
                </div>
            </div>
    </>
  )
}
