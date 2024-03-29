import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productListAsync } from '../../auth/slice/admin-slice'
import ProductItem from './ProductItem'

export default function ProductList() {
  const dispatch = useDispatch()
  const product = useSelector(state=> state.admin.productList)
  useEffect(() => {
    dispatch(productListAsync())
  },[]) 

  return (
    <>
        {/* <ModelItem item={item}/> */}
        {product.map(item => <div className='flex flex-col gap-2 py-1' key={item.id}><ProductItem item={item}/></div>)}
    </>
  )
}