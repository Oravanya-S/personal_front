import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagTypeListAsync } from '../../auth/slice/admin-slice'

export default function SelectBagType({valueId, onChangeBagtype}) {
    const dispatch = useDispatch()
    const bagType = useSelector(state=> state.admin.bagTypeList)
    useEffect(() => {
      dispatch(bagTypeListAsync())
    },[]) 
    
    return (
        <div className='flex items-center gap-2'>
            <label htmlFor="bags" className="dark:text-white font-medium">Bagtype:</label>
            <select className='min-w-[100px] py-[1px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700' name="bags" id="bags" onChange={onChangeBagtype}>
                {bagType.map(el => ((el.id==valueId)? <option selected value={el.id}>{el.name}</option> : <option value={el.id}>{el.name}</option>))}
            </select>
        </div>
    )
}
