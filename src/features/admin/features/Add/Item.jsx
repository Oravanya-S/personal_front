import React, { useState } from 'react'
import Form from './Form'

export default function Item({item, nameType}) {
    const [isEditMode, setIsEditMode] = useState(false)
  return (
    <div key={item.id}>
    {isEditMode? <Form textConFirm={`Edit`} onIsAddMode={setIsEditMode} oldColor={item} nameType={nameType}/> : (
    <div className='flex items-center gap-8 text-xl border-b px-3 h-[65px]'>
            {(nameType=="Color")? (
                <>
                    <div className='flex items-center gap-2'>
                        <p>Group color:</p>
                        <p className='min-w-[100px] p-1'>{item.GroupColor.name}</p>
                    </div>
                    
                    <div className='flex items-center gap-2'>
                        <div className='w-20'>Shade:</div>
                            <div className='w-6 h-6 rounded-full border' style={{backgroundColor: `${item.hexcode}`}}>
                        </div>
                    </div>
                </>
            ): ""}
            <div className='flex items-center gap-2 flex-1' >
                <label>Name {nameType}:</label>
                <div className=''>
                    <p>{item.name}</p>
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
                <div>
                    <i className="fa-regular fa-trash-can text-2xl text-black p-2 cursor-pointer"></i>
                </div>
            </div>
    </div>)}
    </div>
  )
}
