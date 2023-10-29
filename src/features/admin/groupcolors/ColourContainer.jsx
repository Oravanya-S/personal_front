import React from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
// import ColourList from './ColourList'
import SearchValue from './SearchValue'
import { useDispatch, useSelector } from 'react-redux'
import { groupColourListAsync } from '../../auth/slice/admin-slice'
import { useEffect } from 'react'
import GroupColourList from './GroupColourList'

export default function ColourContainer() { 

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(groupColourListAsync())
  },[]) 

  return (
    <div className='flex flex-col w-full gap-6 overflow-auto flex-1'>
        <HeaderAdmin topic="Add & update colors"/>
        <div className="flex flex-col gap-6 mx-8">
            <div>
              <SearchValue />
            </div>
            <div className='border rounded-lg flex flex-col h-[660px] w-full overflow-hidden p-6 bg-white'>
              <div className='overflow-auto mt-2'>
                  <GroupColourList />
              </div>
            </div>
        </div>
    </div>
  )
}