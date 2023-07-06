import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BagItem from './BagItem'
import { bagTypeListAsync } from '../../auth/slice/admin-slice'

export default function BagList() {

    const dispatch = useDispatch()
    const bagType = useSelector(state=> state.admin.bagTypeListFilter)
    useEffect(() => {
      dispatch(bagTypeListAsync())
    },[]) 
    
  return (
    <>
    {bagType.length > 0 ? 
    <div className='flex flex-col gap-2'>
        {bagType.map(item=> <BagItem item={item} key={item.id} nameType="Type"/>)}
    </div> :
    <div className='flex justify-center text-gray-500 text-lg py-8'>No bag types match your search</div>
    }
    </>
  )
}
