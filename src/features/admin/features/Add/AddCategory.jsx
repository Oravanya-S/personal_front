import React, { useState } from 'react'
import Form from './Form'

export default function AddCategory({category = "", nameType = ""}) {
    const [isAddMode, setIsAddMode] = useState(false)
  return (
    <div className=''>
        {(isAddMode)? (
        <Form textConFirm={`Add`} onIsAddMode={setIsAddMode} nameType={nameType}/>) : (
        <div className='flex gap-2 items-center cursor-pointer group hover:border-black text-xl rounded-lg px-3 py-2 border min-h-[65px]' onClick={() => setIsAddMode(true)}>
            <div className='text-xl w-6 h-6 rounded-full flex justify-center items-center group-hover:bg-black group-hover:text-white'>
                +
            </div>
            <div className='text-xl text-gray-500 group-hover:text-black'>
                Add {category}
            </div>
        </div>)}
    </div>
  )
}
