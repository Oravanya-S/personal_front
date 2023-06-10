import React from 'react'
import Item from './Item'

export default function List() {
  const colorDB = 
    [
        {id: 1, code: "#000000", name: "Black"},
        {id: 2, code: "#ffffff", name: "White"},
        {id: 3, code: "#ff0000", name: "Red"},
        {id: 4, code: "#0000ff", name: "Blue"},
    ]
  return (
    <div className='flex flex-col gap-2 py-2'>
        {colorDB.map(item=> <Item item={item} key={item.id} nameType="Name Color"/>)}
    </div>
  )
}
