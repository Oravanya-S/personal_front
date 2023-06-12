import React from 'react'
import AddModel from '../models/AddModel'
import ModelList from '../models/ModelList'

export default function UpdateModel() {
  return (
    <div className="flex flex-col gap-6">
        <div className='border rounded-lg flex flex-col max-h-[800px] w-full overflow-hidden p-4 shadow-lg'>
          <AddModel category = "Model"/>
          <div className='overflow-auto mt-3 border-t'>
            <ModelList /> 
          </div>
        </div>
    </div>
  )
}
