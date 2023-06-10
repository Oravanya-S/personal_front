import React from 'react'
import SideBar from '../components/SideBar'
import ColorList from '../features/admin/components/ColorList'
import AddCategory from '../features/admin/features/Add/AddCategory'
import BagList from '../features/admin/components/BagList'
import ProductForm from '../features/product/ProductForm'

export default function AdminPage() {
  return (
    <div className='flex w-[1440px] border-2 mx-auto'>
      <div className='w-[450px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full m-6 gap-6'>
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
        <ProductForm />
      </div>
      
      
    </div>
  )
}
