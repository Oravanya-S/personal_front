import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupColorListAsync } from '../auth/slice/admin-slice'

export default function filterList() {
    const dispatch = useDispatch()
    const groupColor = useSelector(state=> state.admin.groupColorList)
    useEffect(() => {
      dispatch(groupColorListAsync())
    },[]) 
    
    console.log(groupColor)
  return (
    <div className='flex gap-4'></div>
  )
}
