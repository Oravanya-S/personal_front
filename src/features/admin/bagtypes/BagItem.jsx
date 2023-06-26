import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import BagForm from './BagForm';
import { deleteBagtype } from '../../auth/slice/admin-slice'


export default function BagItem({item, nameType}) {
    const [isEditMode, setIsEditMode] = useState(false)
    const dispatch = useDispatch()
    const handleClickDeleteBox = () => {
        dispatch(deleteBagtype(item.id))
    };
  return (
    <div key={item.id}>
    {isEditMode? <BagForm textConFirm={`Edit`} onIsAddMode={setIsEditMode} oldBagType={item} nameType={nameType}/> : (
    <div className='flex items-center gap-8 text-lg border-b px-3 min-h-[70px]'>
            <div className='flex items-center gap-2 flex-1' >
                <div className='flex flex-col'>
                      <label className='font-medium '>Name {nameType}:</label>
                      <div className='py-1'></div>
                </div>
                <div className=''>
                    <p>{item.name}</p>
                    <p className='py-1'></p>

                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div 
                    onClick={(e)=> {
                        // e.stopPropagation();
                        setIsEditMode(true)
                    }}>
                    <i className="fa-solid fa-pen text-black cursor-pointer"></i>
                </div>
                <div onClick={handleClickDeleteBox}>
                    <i className="fa-regular fa-trash-can text-2xl text-black p-2 cursor-pointer"></i>
                </div>
            </div>
    </div>)}
    </div>
  )
}