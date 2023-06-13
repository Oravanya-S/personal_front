import React, { useState } from 'react'
import ProductForm from './ProductForm'

export default function AddProduct({category = "", nameType = "", idModel, idModelName}) {
    const [isAddMode, setIsAddMode] = useState(false)

  return (
    <div className='border-b'>
        {(isAddMode)? (
            <div className='flex flex-col w-full gap-4 px-4 py-2'>
                <div className='flex flex-col text-lg font-medium'>
                    <ProductForm textConFirm={`Add`} onIsAddMode={setIsAddMode} nameType={nameType} idModel={idModel} idModelName={idModelName}/>
                </div>
            </div>) : (
        <div className='flex gap-2 items-center cursor-pointer group text-xl px-3 py-2 min-h-[65px] rounded-lg' onClick={() => setIsAddMode(true)}>
            <div className='text-xl w-6 h-6 rounded-full flex justify-center items-center group-hover:bg-black group-hover:text-white'>
                +
            </div>
            <div className='text-lg text-gray-500 group-hover:text-black'>
                Add {category}
            </div>
        </div>)}
    </div>
  )
}