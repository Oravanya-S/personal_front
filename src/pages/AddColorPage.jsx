import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import ColorContainer from '../features/admin/colors/ColorContainer'

export default function AddColorPage() {
  
  return (
    <div className='flex w-[1440px] border-2 border-y-0 mx-auto min-h-screen bg-gray-50 fade-in'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
        <ColorContainer />
    </div>
  )
}