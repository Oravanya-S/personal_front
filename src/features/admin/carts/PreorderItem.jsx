import React from 'react'

export default function PreorderItem({item}) {
  return (
    <>
    <div className='flex border-[1px] gap-6 max-h-[400px]'>
    <div className='w-[35%] overflow-hidden'>
      <img className='block' src="https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw70c09258/23E213BA001-3100-852_1_main.jpg?sw=475&sh=633&q=100" />
    </div>
    <div className='flex flex-col w-[30%] justify-center gap-5'>
      <div className='text-xl font-medium'>{item.Product.Model.name}</div>
      <div className="flex gap-2 items-center">
        <div
          className="w-4 h-4 rounded-full border"
          style={{ backgroundColor: `${item.Product.Color.hexcode}` }}
        ></div>
        <div className='text-base'>{item.Product.Color.name}</div>
      </div>
      <div></div>
      <div></div>
      <div>
        <div>Qty: {item.quantity}</div>
      </div>
      
      </div>
    <div className='flex flex-col flex-1 justify-between items-end py-8 pr-8'>
      <div className='h-full flex flex-col justify-end items-end'>
        <div className='text-lg font-semibold'>฿ {item.Product.price*item.quantity}</div>
      </div>
    </div>
    </div>
    </>
  )
}
