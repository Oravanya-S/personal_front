import React, { useEffect, useState } from 'react'

import Item from '../features/Add/Item'
import { getBagType } from '../../../api/admin-api'

export default function BagList() {
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
    <div className='flex flex-col gap-2 py-2'>
        {bagType.map(item=> <Item item={item} key={item.id} nameType="Type"/>)}
    </div>
  )
}