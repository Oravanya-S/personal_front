import React, { useEffect, useState } from 'react'
import { DeleteCart, updateCart } from '../../auth/slice/cart-slice'
import { useDispatch } from 'react-redux'

export default function CartItem({item}) {

  const dispatch = useDispatch()
    const handleClickDeleteBox = () => {
        dispatch(DeleteCart(item.id))
    };
  console.log("first", item.userId, item.productId)
  const [count, setCount] = useState(item.quantity)
  const [stock, setStock] = useState(item.Product.stock)

  const decrease = () => {
    if(count > 1) setCount((prev)=>prev-1)
  }

  const increase = () => {
    if(count < stock) setCount(count+1)
  }

  useEffect(() => {
    const id = setTimeout(() => {
        dispatch(updateCart({ "userId": item.userId, "productId": item.productId, "quantity": +count }));
    }, 2000);

    return () => {
        console.log('Cleanup');
        clearTimeout(id);
    };
  }, [count]);

  return ( 
    <div className='flex border-[1px] gap-8 max-h-[400px]'>
      <div className='w-[35%] overflow-hidden'>
        <img className='block' src="https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw70c09258/23E213BA001-3100-852_1_main.jpg?sw=475&sh=633&q=100" />
      </div>
      <div className='flex flex-col w-[35%] justify-center gap-10'>
        <div className='text-2xl font-medium'>{item.Product.Model.name}</div>
        <div className="flex gap-2">
          <div
            className="w-7 h-7 rounded-full border"
            style={{ backgroundColor: `${item.Product.Color.hexcode}` }}
          ></div>
          <div className='text-xl'>{item.Product.Color.name}</div>
        </div>
        <div>
            <div className='flex flex-col gap-5 items-start'>
                  <div className="flex items-center border border-gray-600 rounded-full">
                    <button type="button" className="w-10 h-8 text-lg font-semibold text-gray-600 transition hover:opacity-75"
                    disabled={(count<=1)? true : false}
                     onClick={decrease}>&minus;</button>
                        <input type="number" id="Quantity" value={count} style={{fontSize: '18px'}} className="h-8 w-10 text-xl border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"/>
                    <button type="button" className="w-10 h-8 text-lg font-semibold text-gray-600 transition hover:opacity-75" onClick={increase}>+</button>
                  </div>
            <p className='text-base text-gray-500'>{item.Product.stock} pieces available</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-1 justify-between items-end py-12 pr-8'>
        <div className='underline cursor-pointer' onClick={handleClickDeleteBox}>Remove</div>
        <div className='flex flex-col items-end'>
          <div className='text-2xl font-semibold'>฿ {item.Product.price*count}</div>
          <div className='text-base text-gray-500'>฿ {item.Product.price} / piece</div>
        </div>
      </div>
    </div>


  )
}