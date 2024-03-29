import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorListAsync } from '../../auth/slice/admin-slice'
import ColorItem from './ColorItem';
import SkeletonColor from './SkeletonColor';
import LoadingAdmin from '../../../components/LoadingAdmin';

export default function ColorList() {
  const dispatch = useDispatch()
  const color = useSelector(state=> state.admin.colorListFilter)
  const isLoading = useSelector((state) => state?.admin?.isLoading);
  
  useEffect(() => {
    dispatch(colorListAsync())
  },[]) 

  
  if (isLoading) {
    return <LoadingAdmin /> }

  return (
    <>
        {color.length > 0 ? <>{color.map(item => <div key={item.id}><ColorItem item={item} nameType="Color"/></div>)}</> :
        <div className='flex justify-center text-gray-500 text-lg pt-8'>No colors match your search</div>}
    </>
  )
}
