import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ProductForm from './ProductForm';
import { colorListAsync, deleteProduct, modelListAsync, productListAsync } from '../../auth/slice/admin-slice';

export default function ProductItem({item, nameType}) {
    const [isEditMode, setIsEditMode] = useState(false)
    const dispatch = useDispatch()
    const handleClickDeleteBox = () => {
        dispatch(deleteProduct(item.id))
        // dispatch(productListAsync())
    };

    const display = (isEditMode)? "block" : "hidden"
    return (
        <div key={item.id}>
          <div className='flex flex-col w-full gap-4'>
                  <div className='flex flex-col text-lg border-b'>
                      {!isEditMode? <div className='flex justify-between items-center px-4 py-2 text-lg'>
                          <div className='flex gap-8'>
                            <div className='flex gap-3'>
                            </div>
                            <div className='flex gap-3'>
                                <span className='w-6 h-6 rounded-full border' style={{backgroundColor: `${item.Color?.hexcode}`}}></span>                  
                                <span className='w-[150px]'>{item.Color?.name}</span>
                            </div>

                            <div className='flex gap-3'>
                                <p className='font-medium'>Stock:</p>
                                <span className='w-[80px]'>{item.stock}</span>
                            </div>
                            
                            <div className='flex gap-3'>
                                <p className='font-medium'>{item.price} THB</p>
                            </div>

                          </div>
                          
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
                      <div className={`flex flex-col gap-6 text-lg ${display} px-4 pt-1 pb-2`}>        
                        <ProductForm textConFirm={`Edit`} onIsAddMode={setIsEditMode} oldProduct={item} nameType={nameType}/>
                    </div>}
                  </div>
          </div>
        </div>
)}
