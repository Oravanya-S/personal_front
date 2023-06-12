import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modelListAsync } from '../../auth/slice/admin-slice'
import ModelItem from './ModelItem'

export default function ModelList() {
  const dispatch = useDispatch()
  const model = useSelector(state=> state.admin.modelList)
  useEffect(() => {
    dispatch(modelListAsync())
  },[]) 

  return (
    <>
        {model.map(item => <div className='flex flex-col gap-2 py-1' key={item.id}><ModelItem item={item}/></div>)}
    </>
  )
}