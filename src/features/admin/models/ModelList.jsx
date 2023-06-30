import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modelListAsync } from '../../auth/slice/admin-slice'
import ModelItem from './ModelItem'

export default function ModelList() {
  const dispatch = useDispatch()
  const model = useSelector(state=> state.admin.modelListFilter)
  useEffect(() => {
    dispatch(modelListAsync())
  },[]) 

  return (
    <>
    {model.length > 0 ?
      <div className='flex flex-col gap-6'>
      {model.map(item => <div className='flex flex-col' key={item.id}><ModelItem item={item}/></div>)}
      </div> :
      <div className='flex justify-center text-gray-500 text-lg py-8'>No models match your search</div>
    }
    </>
    
  )
}