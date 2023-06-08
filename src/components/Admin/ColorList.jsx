import React, { useEffect, useState } from 'react'
import Item from '../Add/Item'
import { getColor } from '../../api/admin-api'

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

    console.log(color)
    color.map(el => {
      console.log(el.GroupColor.name, el.name, el.hexcode)
    })

    // const colorDB = 
    // [
    //     {id: 1, code: "#CBD6E2", name: "Gray"},
    //     {id: 2, code: "#EBB8ED", name: "Pink"},
    //     {id: 3, code: "#F5C26B", name: "Yellow"},
    //     {id: 4, code: "#F07857", name: "Orange"},
    //     {id: 5, code: "#BF2C34", name: "Red"},
    //     {id: 6, code: "#5C62D6", name: "Purple"},
    //     {id: 7, code: "#43A5BE", name: "Blue"},
    //     {id: 8, code: "#4FB06D", name: "Green"},
    //     {id: 9, code: "#000000", name: "Black"},
    //     {id: 10, code: "#ffffff", name: "White"},
    // ]
  return (
    <div className='flex flex-col gap-2 py-2'>
        {color.map(item=> <Item item={item} key={item.id} nameType={"Color"}/>)}
    </div>
  )
}
