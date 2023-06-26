import React from 'react'
import AddModel from '../models/AddModel'
import ModelList from '../models/ModelList'

export default function UpdateModel() {
  return (
    <div className="flex flex-col gap-6 mx-8 bg-white max-h-[680px]">
        <div className='border rounded-lg flex flex-col w-full overflow-hidden p-6'>
          <AddModel category = "Model"/>
          <div className='overflow-auto mt-3'>
            <ModelList /> 
          </div>
        </div>
    </div>
  )
}
