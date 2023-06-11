import React, { useState } from 'react'
import ProductInput from './ProductInput'
import SelectGroupColor from '../components/SelectGroupColor'

export default function ProductForm({placeholder, value, onChange, name, isInvalid, onClose}) {
    const [addModelMode, setAddModelMode] = useState(true)
    const [addColorMode, setAddColorMode] = useState(false)

    const handleClickAddColorMode = () => {
        setAddColorMode(true)
    }

    const display = (addColorMode)? "hidden" : "block"
    return (
      <form className='flex justify-center'>
          <div className='flex flex-col w-full gap-4'>
                  <div className='flex flex-col text-lg rounded-3xl border font-medium'>
                      <div className='flex justify-between items-center px-4 pt-4'>
                          <p className='flex text-xl'>Add model</p>
                          <i className='fa fa-heart' role='button'></i>
                      </div>    
                      <div className={`flex flex-col gap-6 text-lg p-4 ${display}`}>
                        <div className='flex justify-between gap-10'>
                            <ProductInput placeholder="Model"/>
                            <ProductInput placeholder="Brand"/>
                        </div>

                        <div>
                            <ProductInput placeholder="Meterial"/>
                        </div>

                        <div>
                            <label htmlFor="description" class="block mb-2 text-gray-800 dark:text-white">Description</label>
                            <textarea id="description" rows="3" class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your product description..."></textarea>
                        </div> 

                        <button type='button' className='p-3 text-white text-lg bg-black' onClick={handleClickAddColorMode}>Add color</button>
                      </div>

                      <div className='flex flex-col gap-1 text-lg rounded-3xl border font-medium'>
                        
                        <div className='flex justify-between items-center p-4'>
                            <p className='flex'>Add Color</p>
                            <i className='fa fa-heart' role='button'></i>
                        </div> 
                        <div className={`flex flex-col gap-8 text-base p-4`}>
                        <div className='grid grid-cols-2 gap-10'>
                            <div className='border w-full cursor-pointer'>
                                <input type='file' accept="image/*" />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <SelectGroupColor />
                                <ProductInput placeholder="Price"/>
                                <ProductInput placeholder="Stock"/>
                            </div>  
                        </div>
                            <button type='button' className='p-3 text-white text-lg bg-black' onClick={() => setAddColorMode(false)}>Add product</button>
                        </div>

                        <div className='p-4'>
                            
                        </div>

                    </div>
                  </div>
                  
          </div>
      </form>
    )
}