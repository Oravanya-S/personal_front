import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import HeaderAdmin from '../features/admin/components/HeaderAdmin'
import AddColor from '../features/admin/colors/AddColor'
import ColorList from '../features/admin/colors/ColorList'
import SearchValue from '../features/admin/components/SearchValue'

export default function AddColorPage() {
  return (
    <div className='flex w-[1440px] border-2 mx-auto min-h-screen bg-gray-50'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full gap-6 overflow-auto flex-1'>
        <HeaderAdmin topic="Add & update colors"/>
        <div className="flex flex-col gap-6 mx-8">
            <div>
              <SearchValue />
            </div>
            <div className='border rounded-lg flex flex-col h-[690px] w-full overflow-hidden p-6 bg-white'>
              <AddColor category="color" nameType="Color"/>
              <div className='overflow-auto mt-2'>
                  <ColorList />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}