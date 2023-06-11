import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupColorListAsync } from '../../auth/slice/admin-slice'

export default function SelectGroupColor({valueId, onChangeGroup}) {
    const dispatch = useDispatch()
    const groupColor = useSelector(state=> state.admin.groupColorList)
    useEffect(() => {
      dispatch(groupColorListAsync())
    },[]) 
  
  return (
    <div className='flex items-center gap-2'>
        <label htmlFor="colors" className="dark:text-white">Group color:</label>
        <select className='min-w-[100px] py-[1px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700' name="colors" id="colors" onChange={onChangeGroup}>
            {groupColor.map(el => ((el.id==valueId)? <option selected value={el.id}>{el.name}</option> : <option value={el.id}>{el.name}</option>))}
        </select>
    </div>
  )
}
