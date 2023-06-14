import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productListAsync } from '../../auth/slice/admin-slice'
import ProductItem from './ProductItem'

export default function ProductListWithModel({modelId}) {
  const dispatch = useDispatch()
  const product = useSelector(state=> state.admin.productList)
  const productWithModelId = product.filter((product) => product.Model?.id == modelId);
  useEffect(() => {
    dispatch(productListAsync())
  },[]) 

  return (
    <>
        {productWithModelId.map(item => <div className='flex flex-col gap-2 py-1' key={item.id}><ProductItem item={item}/></div>)}
    </>
  )
}