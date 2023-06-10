import React, { useEffect, useState } from 'react'
import Item from '../features/Add/Item'
import { getColor } from '../../../api/admin-api'

export default function ColorList() {
    const [color, setColor] = useState([])

    const Color = async () => {
      try {
          const result = await getColor()
          setColor(result.data)
          
      } catch (err) {
          console.log(err)
      }
    }

    useEffect(()=>{
        Color();
      }, [])

  return (
    <div className='flex flex-col gap-2 py-2'>
        {color.map(item=> <Item item={item} key={item.id} nameType={"Color"}/>)}
    </div>
  )
}
