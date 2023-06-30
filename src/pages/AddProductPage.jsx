import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import UpdateModel from '../features/admin/components/UpdateModel'
import HeaderAdmin from '../features/admin/components/HeaderAdmin'
import SearchModelValue from '../features/admin/models/SearchModelValue'

export default function AddProductPage() {
  return (
    <div className='flex w-[1440px] border-2 border-y-0 mx-auto min-h-screen bg-gray-50'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full gap-6 overflow-auto flex-1'>
        <HeaderAdmin topic="Add & update products"/>
        <div className='mx-8'>
              <SearchModelValue />
        </div>
        <UpdateModel />
      </div>
    </div>
  )
}