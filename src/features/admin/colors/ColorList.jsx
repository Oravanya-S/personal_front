import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorListAsync } from '../../auth/slice/admin-slice'
import ColorItem from './ColorItem';
import Loading from "../../../components/Loading";

export default function ColorList() {
  const dispatch = useDispatch()
  const color = useSelector(state=> state.admin.colorListFilter)
  const isLoading = useSelector((state) => state?.admin?.isLoading);
  console.log(color)
  
  useEffect(() => {
    dispatch(colorListAsync())
  },[]) 

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
        {color.length > 0 ? <>{color.map(item => <div key={item.id}><ColorItem item={item} nameType="Color"/></div>)}</> :
        <div className='flex justify-center text-gray-500 text-lg pt-8'>No colors match your search</div>}
    </>
  )
}
