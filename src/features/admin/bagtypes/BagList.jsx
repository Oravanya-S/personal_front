import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BagItem from './BagItem'
import { bagTypeListAsync } from '../../auth/slice/admin-slice'

export default function BagList() {

    const dispatch = useDispatch()
    const bagType = useSelector(state=> state.admin.bagTypeList)
    useEffect(() => {
      dispatch(bagTypeListAsync())
    },[]) 
    
  return (
    <div className='flex flex-col gap-2'>
        {bagType.map(item=> <BagItem item={item} key={item.id} nameType="Type"/>)}
    </div>
  )
}