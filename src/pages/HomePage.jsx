import React from 'react'
import SideBar from '../components/SideBar'
import ColorList from '../components/Admin/ColorList'
import AddCategory from '../components/Add/AddCategory'
import BagList from '../components/Admin/BagList'

export default function HomePage() {
  return (
    <div className='flex w-[1440px] border-2 mx-auto'>
      <div className='w-[450px]'>
        <SideBar />
      </div>
      <div className='grid grid-cols-1 grid-rows-2 w-full m-6'>
        <div className='border rounded-lg flex flex-col max-h-[400px] w-full overflow-hidden p-4 shadow-lg'>
          <AddCategory category="color" nameType="Color"/>
          <div className='overflow-auto mt-3 border-t'>
            <ColorList />
          </div>
        </div>

        <div className='border rounded-lg flex flex-col max-h-[400px] w-full overflow-hidden p-4 shadow-lg'>
            <AddCategory title="Bag Type" category="Type" nameType="Type" list=""/>
          <div className='overflow-auto mt-3 border-t'>
            <BagList />
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
