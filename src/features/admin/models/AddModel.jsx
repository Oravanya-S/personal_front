import React, { useState } from 'react'
import ModelForm from './ModelForm'

export default function AddModel({category = "", nameType = ""}) {
    const [isAddMode, setIsAddMode] = useState(false)

  return (
    <div className='mb-4'>
        {(isAddMode)? (
            <div className='flex flex-col w-full gap-4'>
                <div className='flex flex-col text-lg rounded-3xl border'>
                    <ModelForm textConFirm={`Add`} onIsAddMode={setIsAddMode} nameType={nameType}/>
                </div>
            </div>) : (
        <div className='flex gap-2 items-center cursor-pointer group hover:border-black text-xl px-3 py-2 min-h-[65px] border rounded-lg bg-white' onClick={() => setIsAddMode(true)}>
            <div className='text-xl w-6 h-6 pt-[2px] rounded-full flex justify-center items-center text-gray-500 group-hover:bg-black group-hover:text-white'>
                +
            </div>
            <div className='text-lg text-gray-500 group-hover:text-black font-medium'>
                Add {category}
            </div>
        </div>)}
    </div>
  )
}