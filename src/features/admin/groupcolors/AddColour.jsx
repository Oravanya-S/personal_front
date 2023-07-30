import React, { useState } from 'react'
import ColourForm from './ColourForm'

export default function AddColour({category = "", nameType = "", idGroupColour}) {
    const [isAddMode, setIsAddMode] = useState(false)

  return (
    <div className='bg-white'>
        {(isAddMode)? (
        <div className='pl-8'>
            <ColourForm textConFirm={`Add`} onIsAddMode={setIsAddMode} groupColorId={idGroupColour} nameType={nameType}/>
        </div>
        ) : (
        <div className='flex gap-2 items-center cursor-pointer group hover:border-black text-xl px-1 py-2 min-h-[70px] rounded-lg' onClick={() => setIsAddMode(true)}>
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