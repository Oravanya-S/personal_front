import React from 'react'
import PreorderItem from '../carts/PreorderItem'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import thai_provinces from '../../../dataThailand/thai_provinces.json'
import thai_amphures from '../../../dataThailand/thai_amphures.json'
import thai_tambons from '../../../dataThailand/thai_tambons.json'

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
  let province, amphure, tambon, zip;
  if(user) {
    if (user.province) {
      const selectedProvince = thai_provinces.find(el => el.id == user.province)
      province = selectedProvince.name_en
    }
    if (user.amphoe) {
      const selectedAmphoe = thai_amphures.find(el => el.id == user.amphoe)
      amphure = selectedAmphoe.name_en
    }
    if (user.tambon) {
      const selectedTambon = thai_tambons.find(el => el.id == user.tambon)
      tambon = selectedTambon.name_en
      zip = selectedTambon.zip_code
    }
  }
  console.log(order)
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
                <div className='flex items-start justify-between '>
                  <p className='font-medium w-[120px]'>SHIP TO</p>
                  <div className="flex flex-col gap-[6px] items-end">
                        <div className="flex gap-2 flex-wrap justify-end text-base">
                          <div>{user?.addressLine}</div>
                          <div>{tambon}</div>
                          <div>{amphure}</div>
                          <div>{province}</div>
                          <div>{zip}</div>
                        </div>
                  </div>
                </div>

                </> : <></>}
              </div>
            </div>}
        <hr className="border-gray-400 my-2"/>
    </div>
  )
}
