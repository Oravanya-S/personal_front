import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { modelListWithBagTypeAsync } from '../features/auth/slice/model-slice';
import ProductWithModel from '../features/admin/products/ProductWithModel';

export default function Models() {
  const { modelId } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(modelListWithBagTypeAsync(modelId));
  },[modelId]) 

  const product = useSelector(state => state.model.modelListWithBagType)
  
  return (
    <div className='mb-4'>
      <div className='max-w-[1440px] min-h-screen mx-auto overflow-hidden border'>
        <div className='h-16 border'>
          <div className='flex h-full items-center justify-start px-12 cursor-pointer'>Filter</div>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  border-slate-600 overflow-auto'>
          {(product.length > 0)? product.map(el => <ProductWithModel item={el}/>) : <></>}
        </div> 
      </div>
    </div>
  )
}
