import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupColorListAsync } from '../auth/slice/admin-slice'
import { useState } from 'react'
import FilterItem from './filterItem'

export default function FilterList({numProduct}) {
    const dispatch = useDispatch()
    const groupColor = useSelector(state=> state.admin.groupColorList)
    useEffect(() => {
      dispatch(groupColorListAsync())
    },[]) 
    const [isFilter, setIsFilter] = useState(false)
    const handleFilter = () => {
      setIsFilter(!isFilter)
    }

    const onClickFilterColor = () => {
      console.log(e.target.value)
    }
  return (
    <div className='fixed top-[94px] z-20 w-[1438px] bg-white'>
      <div className="border-y relative border-black">
        <div className="flex items-center justify-start px-12 cursor-pointer gap-2 relative h-16 w-full" onClick={handleFilter}>
                <p>Filter</p>
                <p className="w-[18px] h-4 bg-black text-white rounded-full text-[10px] flex justify-center items-center">{numProduct}</p>
        </div>
      </div>
        {
          isFilter && 
          <div className='border-b border-black px-12 py-4'>
            <div className='w-1/2'>
              <p className='pb-2'>Color</p>
              <div className="grid grid-cols-4 gap-1">
                {groupColor.map( item => <FilterItem key={item.id} item={item} onClick={onClickFilterColor}/>)}
              </div>
            </div>
          </div>
        }
    </div>
  )
}
