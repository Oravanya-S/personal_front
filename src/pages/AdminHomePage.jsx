import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import UpdateCategories from '../features/admin/components/UpdateCategories'
import UpdateModel from '../features/admin/components/UpdateModel'
import PictureForm from '../features/admin/products/PictureForm'

export default function AdminHomePage() {
  return (
    <div className='flex w-[1440px] border-2 mx-auto min-h-screen'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full m-6 gap-6 overflow-auto flex-1'>
        <UpdateCategories />
      </div>
    </div>
  )
}
