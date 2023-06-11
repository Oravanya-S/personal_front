import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ModelForm from './ModelForm'
import { deleteModel, modelListAsync } from '../../auth/slice/admin-slice'

export default function ModelItem({item, nameType}) {
    const [isEditMode, setIsEditMode] = useState(false)
    const dispatch = useDispatch()
    const handleClickDeleteBox = () => {
        dispatch(deleteModel(item.id))
    };

    useEffect(() => {
      dispatch(modelListAsync())
    },[]) 

    const display = (isEditMode)? "block" : "hidden"
    return (
        <div key={item.id}>
          <div className='flex flex-col w-full gap-4'>
                  <div className='flex flex-col text-lg rounded-3xl border font-medium'>
                      {!isEditMode? <div className='flex justify-between items-center px-4 py-2'>
                          <p className='flex text-xl'>Model name: {item.name}</p>
                          <div className='flex items-center gap-4'>
                            <div onClick={(e)=> { 
                                e.stopPropagation();
                                setIsEditMode(true)
                            }}>
                            <i className="fa-solid fa-pen text-black cursor-pointer"></i>
                            </div>
                            <div onClick={handleClickDeleteBox}>
                                <i className="fa-regular fa-trash-can text-2xl text-black p-2 cursor-pointer"></i>
                            </div>
                          </div>
                      </div> :    
                      <div className={`flex flex-col gap-6 text-lg ${display}`}>        
                        <ModelForm textConFirm={`Edit`} onIsAddMode={setIsEditMode} oldModel={item} nameType={nameType}/>
                    </div>}
                  </div>
          </div>
        </div>
)}

