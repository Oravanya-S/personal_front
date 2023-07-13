import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagTypeListAsync, colorListAsync, modelListAsync, productListAsync } from '../../auth/slice/admin-slice'
import ModelItem from './ModelItem'
import LoadingAdmin from '../../../components/LoadingAdmin'

export default function ModelList() {
  const dispatch = useDispatch()
  const model = useSelector(state=> state.admin.modelListFilter)
  const isLoading = useSelector(state=> state.admin.isLoading)
  useEffect(() => {
    dispatch(modelListAsync());
    dispatch(productListAsync());
    dispatch(bagTypeListAsync());
    dispatch(colorListAsync());
  },[]) 

  if (isLoading) {
    return <LoadingAdmin /> }

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
