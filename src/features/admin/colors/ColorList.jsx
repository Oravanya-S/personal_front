import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorListAsync } from '../../auth/slice/admin-slice'
import ColorItem from './ColorItem';

export default function ColorList() {
  const dispatch = useDispatch()
  const color = useSelector(state=> state.admin.colorList)
  useEffect(() => {
    dispatch(colorListAsync())
  },[]) 

  return (
    <>
        {color.map(item => <div className='flex flex-col gap-2 py-1' key={item.id}><ColorItem item={item} nameType="Color"/></div>)}
    </>
  )
}
