import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupColorListAsync } from '../auth/slice/admin-slice'
import { useState } from 'react'

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
  return (
    <>
    <div className="h-16 border-y border-black">
    <div className="flex h-full items-center justify-start px-12 cursor-pointer gap-2 relative" onClick={handleFilter}>
            <p>Filter</p>
            <p className="w-[18px] h-4 bg-black text-white rounded-full text-[10px] flex justify-center items-center">{numProduct}</p>
    </div>
    </div>
    {
      isFilter && 
      <div className="h-16 border-y border-black">Hello</div>
    }
    </>
  )
}
