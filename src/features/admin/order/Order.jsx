import React from 'react'
import PreorderItem from '../carts/PreorderItem'
import { useState } from 'react'

export default function Order({order, user}) {
  const [accordian, setAccordian] = useState(false)
  const orderItem = order.OrderItems
  let totolAmount, sumPrice;
    if (orderItem.length > 0) {
        totolAmount = orderItem.reduce((acc,el)=>{
        acc+=el?.quantity
        return acc
        },0)
    
        sumPrice = orderItem.reduce((acc,el)=>{
        acc+=el?.quantity * el?.Product.price
        return acc
        },0)
    }

  return (
    <div className={`flex flex-col gap-4`}>
        <div className={`flex justify-between items-center`}>
              <p className='font-semibold text-xl min-w-[130px]'>Order #{order.id}</p>
              <p className='min-w-[104px]'>{order.OrderItems.length} {(order.OrderItems.length>1? "items" : "item")}</p>
              <div>{order.createdAt.slice(0, 10)}</div>
              <div className={`w-[104px] border rounded-full flex justify-center ${(order.status === 'PAID'? 'bg-green-200' : 'bg-red-200')}`}>{order.status}</div>
              <div className='flex items-center gap-3 cursor-pointer' onClick={()=> setAccordian(!accordian)}>
                <p>See more details</p>
                <div className='w-[30px] flex justify-center'>
                  <i class={`fa-solid fa-chevron-${(accordian? "down" : "right")} overflow-auto`}></i>
                </div>
              </div>
        </div>
            {accordian && 
            <div className='flex gap-10 text-lg'>
              <div className={`max-w-[500px] flex flex-col gap-2 my-4`}>
                {order.OrderItems.map(item => <div className='flex flex-col' key={item.id}><PreorderItem item={item}/></div>)}
              </div>
              <div className='flex flex-1 flex-col items-between py-4 gap-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <p className='font-medium text-xl'>Total</p>
                    <p className='text-gray-500 text-base'>VAT included</p>
                  </div>
                  <div className='flex flex-col items-end'>
                    <div className='text-2xl font-semibold'>฿ {sumPrice}</div>
                    <p className='text-gray-500 text-base'>{`(${totolAmount} ${totolAmount>1? "pieces" : "piece"})`}</p>
                  </div>
                </div>
                <div className='flex items-center justify-between '>
                  <p className='font-medium'>Payment</p>
                  <p className='text-base'>{order.payment}</p>
                </div>

                {user? <>
                <div className='flex items-center justify-between '>
                  <p className='font-medium w-[100px]'>Receiver</p>
                  <p className='text-base'>{user?.firstName} {user?.lastName}</p>
                </div>
                <div className='flex justify-between'>
                  <p className='font-medium w-[120px]'>SHIP TO</p>
                        <div className="flex flex-1 text-right flex-wrap justify-end text-base">
                          {order?.address}
                        </div>
                </div>

                </> : <></>}
              </div>
            </div>}
        <hr className="border-gray-400 my-2"/>
    </div>
  )
}
