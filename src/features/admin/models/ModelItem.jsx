import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ModelForm from './ModelForm'
import { deleteModel, modelListAsync } from '../../auth/slice/admin-slice'
import ProductListWithModel from '../products/ProductListWithModel'
import AddProduct from '../products/AddProduct'
import { WarningIcon } from '../../../icons'

export default function ModelItem({item, nameType}) {
    const [isEditMode, setIsEditMode] = useState(false)
    const [isClickDeleteBox, setIsClickDeleteBox] = useState(false);
    const dispatch = useDispatch()
    const handleClickDeleteBox = () => {
        dispatch(deleteModel(item.id))
    };

    const display = (isEditMode)? "block" : "hidden"
    return (
        <div key={item.id}>
          <div className='flex flex-col w-full gap-4 border-[1px] border-gray-200 rounded-lg bg-white overflow-hidden'>
                  <div className='flex flex-col text-lg border-b'>
                      {!isEditMode? 
                      <>
                      <div className='flex justify-between items-center bg-[#D8C9BA] px-6 py-4'>
                          <div className='flex gap-2'>
                            <p className='flex text-lg font-medium'>Model name:</p>
                            <p>{item.name}</p>
                          </div>
                          <div className='flex items-center gap-4'>
                            <div onClick={(e)=> { 
                                e.stopPropagation();
                                setIsEditMode(true)
                            }}>
                            <i className="fa-solid fa-pen text-black cursor-pointer"></i>
                            </div>
                            <div onClick={() => setIsClickDeleteBox(true)}>
                                <i className="fa-regular fa-trash-can text-2xl text-black py-2 cursor-pointer"></i>
                            </div>
                          </div>
                      </div > 
                      
                      </>
                      :    
                      <div className={`flex flex-col gap-6 text-lg ${display}`}>        
                        <ModelForm textConFirm={`Edit`} onIsAddMode={setIsEditMode} oldModel={item} nameType={nameType}/>
                    </div>}
                    <div className=''>
                        <AddProduct category='product' idModel={item.id} idModelName={item.name}/>
                        <ProductListWithModel modelId={item.id}/>
                    </div>
                  </div>
          </div>
          {isClickDeleteBox && (
        <>
          <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
          <div className="fixed inset-0 z-30" onMouseUp={()=> setIsClickDeleteBox(false)}>
            <div className="flex justify-center items-center min-h-full p-4">
              <div className='w-[350px]'>

              </div>
              <div
                style={{ maxWidth: `28rem` }}
                className="bg-white rounded-lg w-full shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]"
                onMouseUp={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b text-xl  bg-black">
                  <div className="invisible">&#10005;</div>
                  <div className="font-semibold text-white">Confirm deletion</div>
                  <div
                    className="text-white font-semibold hover:text-gray-200 text-base"
                    role="button"
                    onClick={()=> setIsClickDeleteBox(false)}
                  >
                    &#10005;
                  </div>
                </div>
                <div className="p-6 overflow-auto">
                  <div className="flex flex-col gap-8">
                  <div className="flex gap-3 items-center justify-center">
                      <div><WarningIcon /></div>
                      <div>Are you sure you want to remove this item?</div> 
                  </div>
                  <div className="flex gap-4 justify-end px-2">
                      <div className="bg-black text-base text-white px-2 py-[6px] rounded-md border-[1px] border-black min-w-[90px] text-center cursor-pointer" onClick={handleClickDeleteBox}>confirm</div>
                      <div className="px-2 py-[6px] rounded-md border-[1px] min-w-[90px] border-black text-base text-center cursor-pointer" onClick={()=> setIsClickDeleteBox(false)}>cancel</div>
                  </div>
                </div> 
                </div>
              </div>
            </div>
          </div>
        </>
      )}
        </div>
)}