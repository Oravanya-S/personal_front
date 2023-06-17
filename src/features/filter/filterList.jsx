import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupColorListAsync } from '../auth/slice/admin-slice'

export default function filterList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(groupColorListAsync())
    },[]) 
    
    const groupColor = useSelector(state=> state.admin.groupColorList)
    
    console.log(groupColor)
  return (
    <div className='flex gap-4'></div>
  )
}
