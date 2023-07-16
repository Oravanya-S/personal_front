import React from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
import AddColor from './AddColor'
import ColorList from './ColorList'
import SearchValue from './SearchValue'
import Loading from '../../../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '../../../components/Skeleton'
import { groupColorListAsync } from '../../auth/slice/admin-slice'
import { useEffect } from 'react'

export default function ColorContainer() { 

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(groupColorListAsync())
  },[]) 

  return (
    <div className='flex flex-col w-full gap-6 overflow-auto flex-1'>
        <HeaderAdmin topic="Add & update colors"/>
        <div className="flex flex-col gap-6 mx-8">
            <div>
              <SearchValue />
            </div>
            <div className='border rounded-lg flex flex-col h-[740px] w-full overflow-hidden p-6 bg-white'>
              <AddColor category="color" nameType="Color"/>
              <div className='overflow-auto mt-2'>
                  <ColorList />
              </div>
            </div>
        </div>
      </div>
  )
}
