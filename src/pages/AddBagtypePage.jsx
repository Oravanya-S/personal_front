import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import HeaderAdmin from '../features/admin/components/HeaderAdmin'
import AddBagType from '../features/admin/bagtypes/AddBagType'
import BagList from '../features/admin/bagtypes/BagList'
import SearchBagTypeValue from '../features/admin/bagtypes/SearchBagTypeValue'

export default function AddBagtypePage() {
  return (
    <div className='flex w-[1440px] border-2 border-y-0 mx-auto min-h-screen bg-gray-50 fade-in'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full gap-6 overflow-auto flex-1'>
        <HeaderAdmin topic="Add & update bag types"/>
        <div className="flex flex-col gap-6 mx-8">
            <div>
              <SearchBagTypeValue />
            </div>
            <div className='border rounded-lg flex flex-col max-h-[740px] w-full overflow-hidden p-6 bg-white'>
                <AddBagType title="Bag Type" category="Type" nameType="Type" list=""/>
                <div className='overflow-auto mt-2'>
                    <BagList /> 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}