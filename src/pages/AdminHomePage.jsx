import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import UpdateCategories from '../features/admin/components/UpdateCategories'
import HeaderAdmin from '../features/admin/components/HeaderAdmin'

export default function AdminHomePage() {
  return (
    <div className='flex w-[1440px] border-2 mx-auto min-h-screen bg-gray-50'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full gap-6 overflow-auto flex-1'>
        <HeaderAdmin topic="Add & update colors"/>
        <UpdateCategories />
      </div>
    </div>
  )
}
