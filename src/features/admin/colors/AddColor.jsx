import React, { useState } from 'react'
import ColorForm from './ColorForm'

export default function AddColor({category = "", nameType = ""}) {
    const [isAddMode, setIsAddMode] = useState(false)

  return (
    <div className='bg-white'>
        {(isAddMode)? (
        <div>
            <ColorForm textConFirm={`Add`} onIsAddMode={setIsAddMode} nameType={nameType}/>
        </div>
        ) : (
        <div className='flex gap-2 items-center cursor-pointer group hover:border-black text-xl px-3 py-2 min-h-[70px] border rounded-lg' onClick={() => setIsAddMode(true)}>
            <div className='text-xl w-6 h-6 rounded-full pt-[2px] flex justify-center items-center text-gray-500 group-hover:bg-black group-hover:text-white'>
                +
            </div>
            <div className='text-lg text-gray-500 group-hover:text-black font-medium'>
                Add {category}
            </div>
        </div>)}
    </div>
  )
}