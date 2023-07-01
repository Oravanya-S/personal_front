import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import HeaderAdmin from '../features/admin/components/HeaderAdmin'
import AddColor from '../features/admin/colors/AddColor'
import ColorList from '../features/admin/colors/ColorList'
import SearchValue from '../features/admin/colors/SearchValue'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'
import ColorContainer from '../features/admin/colors/ColorContainer'

export default function AddColorPage() {
  
  return (
    <div className='flex w-[1440px] border-2 border-y-0 mx-auto min-h-screen bg-gray-50'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
        <ColorContainer />
    </div>
  )
}