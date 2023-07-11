import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import FilterItem from './filterItem'
import { searchProduct, sortPrice } from '../auth/slice/model-slice'
import { groupColorListAsync } from '../auth/slice/admin-slice'

export default function FilterList({numProduct}) {

    const groupColor = useSelector(state=> state.admin.groupColorList)
    const dispatch = useDispatch()
    const groupColorFilter = useSelector(state=> state.model.groupColorFilter)
    const sortPriceFilter = useSelector(state=> state.model.priceFilter)

    useEffect(() => {
      if (groupColor.length === 0) {
        dispatch(groupColorListAsync());
      }
    }, [groupColor]);

    const groupColorFilterId = Object.values(groupColorFilter)
    const [isFilter, setIsFilter] = useState(false)
    const handleFilter = () => {
      setIsFilter(!isFilter)
    }
    
    const priceFilter = [
      {id: 21, name: "PRICE: HIGH TO LOW"},
      {id: 22, name: "PRICE: LOW TO HIGH"},
    ]

    const clearFilter = () => {
      dispatch(searchProduct({}))
      dispatch(sortPrice(""))
    }

    const handleChangeChooseColor = (e) => {
      if (!groupColorFilter[e.target.name]) {
        dispatch(searchProduct({ ...groupColorFilter, [e.target.name]: e.target.value }));
      } else {
        const arr = { ...groupColorFilter };
        delete arr[e.target.name];
        dispatch(searchProduct({ ...arr }));
      }
    };

    const onClickFilterPrice = (e) => {
      if(sortPriceFilter === e.target.value) dispatch(sortPrice(""))
      else dispatch(sortPrice(e.target.value))
    }
  return (
    <div className='fixed top-[94px] z-10 w-[1438px] bg-white'>
      <div className="border-y relative border-black">
        <div className="flex items-center justify-start px-10 cursor-pointer gap-2 relative h-16 w-full" onClick={handleFilter}>
                <p>Filters</p>
                <p className="w-[18px] h-[18px] bg-black text-white rounded-full text-[10px] flex justify-center items-center">{numProduct}</p>
        </div>
      </div>
        {
          isFilter && 
          <div className='border-b border-black grid grid-cols-2'>
            <div className='border-r border-black px-10 py-6'>
              <p className='pb-2 text-sm'>COLOR</p>
              <div className="grid grid-cols-4 gap-[6px] gap-x-8">
                {groupColor.map( item => <FilterItem key={item.id} item={item} status={groupColorFilterId.includes(String(item.id))} onClick={handleChangeChooseColor}/>)}
              </div>
            </div>
            <div className='pt-6 text-sm flex flex-col justify-between'>
              <div className='px-10'>
                <p className='pb-2'>SORT BY</p>
                <div className="grid grid-cols-3 gap-[6px]">
                {priceFilter.map( item => <FilterItem key={item.id} item={item} status={sortPriceFilter==item.id} onClick={onClickFilterPrice} width='180px'/>)}
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-black">
                <div className='py-2 text-center cursor-pointer'  onClick={clearFilter}>RESET</div>
                <div className='bg-black text-white py-2 text-center cursor-pointer' onClick={() => setIsFilter(false)}>APPLY FILTERS</div>
              </div>
            </div>
          </div>
        }
    </div>
  )
}
