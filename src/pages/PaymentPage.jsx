import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { cartListAsync } from '../features/auth/slice/cart-slice';
import PreorderItem from '../features/admin/carts/PreorderItem';
import ShippingForm from '../features/admin/carts/ShippingForm';

export default function PaymentPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(cartListAsync(id))
    },[]) 
    const user = useSelector(state => state.auth.user)
    
    let totolAmount, sumPrice;
    
    const preorder = useSelector(state=> state.cart.cartList)
    console.log(preorder)

    if (preorder.length > 0) {
        totolAmount = preorder.reduce((acc,el)=>{
        acc+=el?.quantity
        return acc
        },0)
    
        sumPrice = preorder.reduce((acc,el)=>{
        acc+=el?.quantity * el?.Product.price
        return acc
        },0)
    }
  return (
    <div className='max-w-[1440px] mx-auto min-h-screen border fade-in'>
    <div className='flex'>
      <div className='w-[60%] flex flex-col p-10 border-r min-h-screen'>
        <div className='flex justify-end'>
            <p className='cursor-pointer hover:underline underline-offset-8'>Shipping Details</p>
        </div>
        <ShippingForm item={preorder} user={user} totalPrice={sumPrice}/>

      </div>
      <div className='flex flex-col w-[40%] p-10 gap-8'>
        <div className='flex justify-between'>
            <div className='text-xl font-medium'>Order Summary</div>
            <button type="button" className="hover:underline underline-offset-4" onClick={()=> navigate(-1)}>Edit cart</button> 
        </div>
        <div className='flex gap-3'>
          <div className='text-gray-500'>{preorder.length} items</div>
          <div className='text-gray-500'>({totolAmount} {(totolAmount > 1)? "pieces": "piece"})</div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <p className='font-medium text-xl'>Total</p>
            <p className='text-gray-500'>VAT included</p>
          </div>
          <div className='text-3xl font-semibold'>฿ {sumPrice}</div>
        </div>
            <div className='flex flex-col gap-3'>
            { preorder.map(item => <div className='flex flex-col' key={item.id}><PreorderItem item={item}/></div>)}
            </div>
        
      </div>
      
    </div> 
    </div>
  )
}
