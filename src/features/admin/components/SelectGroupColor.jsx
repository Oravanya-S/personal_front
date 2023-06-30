import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupColorListAsync } from '../../auth/slice/admin-slice'
import InputErrorMessage from '../../auth/components/InputErrorMessage'

export default function SelectGroupColor({valueId, onChangeGroup, error}) {
    const dispatch = useDispatch()
    const groupColor = useSelector(state=> state.admin.groupColorList)
    useEffect(() => {
      dispatch(groupColorListAsync())
    },[]) 
  
  return (
    <div className='flex flex-col'>
    <div className='flex items-end gap-2'>
        <label htmlFor="groupColorId" className="dark:text-white font-medium">Group color:</label>
        <select value={valueId} className='min-w-[100px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700' name="groupColorId" id="groupColorId" onChange={onChangeGroup}>
          <option disabled hidden value={""}>Select</option>
            {groupColor.map(el => ((el.id==valueId)? <option selected value={el.id} key={el.id}>{el.name}</option> : <option value={el.id} key={el.id}>{el.name}</option>))}
        </select>
    </div>
    <div className='h-0'> 
        {error.groupColorId && (<InputErrorMessage message={error.groupColorId} />)}
    </div>
    </div>
  )
}
