import React, { useEffect, useState } from 'react'
import { getBagType } from '../../../api/admin-api'

export default function SelectBagType() {
    const [bagType, setBagType] = useState([])

    const BagType = async () => {
        try {
            const result = await getBagType()
            setBagType(result.data)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        BagType();
      }, [])
    
    return (
        <div>
            <select className='min-w-[100px]' name="bags" id="bags" >
                {bagType.map(el => <option value={el.id}>{el.name}</option>)}
            </select>
        </div>
    )
}
