import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import UpdateCategories from '../features/admin/components/UpdateCategories'
import ModelForm from '../features/admin/models/ModelForm'
import ModelList from '../features/admin/models/ModelList'
import ModelItem from '../features/admin/models/ModelItem'
import AddModel from '../features/admin/models/AddModel'

export default function AdminHomePage() {
  return (
    <div className='flex w-[1440px] border-2 mx-auto'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full m-6 gap-6 overflow-auto flex-1'>
        {/* <UpdateCategories /> */}
        {/* <ModelForm /> */}
        <AddModel />
        <ModelList />
      </div>
    </div>
  )
}
