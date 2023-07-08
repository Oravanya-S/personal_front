import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupColorListAsync } from '../auth/slice/admin-slice'
import { useState } from 'react'
import FilterItem from './filterItem'

export default function FilterList({numProduct}) {

    const groupColor = useSelector(state=> state.admin.groupColorList)
    const [isFilter, setIsFilter] = useState(false)
    const handleFilter = () => {
      setIsFilter(!isFilter)
    }
    
    const priceFilter = [
      {id: 21, name: "PRICE: HIGH TO LOW"},
      {id: 22, name: "PRICE: LOW TO HIGH"},
    ]

    const initialInput = {};
    const [inputcheck, setInputcheck] = useState(initialInput);

    const handleChangeInput = (e) => {
      if (e.target.checked) {
        setInputcheck({ ...inputcheck, [e.target.name]: e.target.checked });
      } else {
        const arr = { ...inputcheck };
        delete arr[e.target.name];
        setInputcheck({ ...arr });
      }
  
      // เรียกใช้งานฟังก์ชันที่ถูกส่งเข้ามาจากหน้าที่เรียกใช้
      onInputChange(inputcheck);
    };
    
    const onClickFilterColor = (e) => {
      console.log(e.target.value)
    }

    const onClickFilterPrice = (e) => {
      console.log(e.target.value)
    }
  return (
    <div className='fixed top-[94px] z-20 w-[1438px] bg-white'>
      <div className="border-y relative border-black">
        <div className="flex items-center justify-start px-10 cursor-pointer gap-2 relative h-16 w-full" onClick={handleFilter}>
                <p>Filters</p>
                <p className="w-[18px] h-4 bg-black text-white rounded-full text-[10px] flex justify-center items-center">{numProduct}</p>
        </div>
      </div>
        {
          isFilter && 
          <div className='border-b border-black grid grid-cols-2'>
            <div className='border-r border-black px-10 py-6'>
              <p className='pb-2 text-sm'>COLOR</p>
              <div className="grid grid-cols-4 gap-[6px]">
                {groupColor.map( item => <FilterItem key={item.id} item={item} onClick={onClickFilterColor}/>)}
              </div>
            </div>
            <div className='pt-6 text-sm flex flex-col justify-between'>
              <div className='px-10'>
                <p className='pb-2'>SORT BY</p>
                <div className="grid grid-cols-3 gap-[6px]">
                {priceFilter.map( item => <FilterItem key={item.id} item={item} onClick={onClickFilterColor}/>)}
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-black">
                <div className='py-2 text-center cursor-pointer'>RESET</div>
                <div className='bg-black text-white py-2 text-center cursor-pointer'>APPLY FILTERS</div>
              </div>
            </div>
          </div>
        }
    </div>
  )
}
