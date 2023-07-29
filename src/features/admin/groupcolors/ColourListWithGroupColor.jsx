import React from 'react'
import ColorItem from '../colors/ColorItem'

export default function ColourListWithGroupColor({itemList}) {
    console.log(itemList)
  return (
    <div>
        {itemList.map(item => <div className='flex flex-col gap-2 mx-2 py-1 px-8 border-t' key={item.id}>{item.name}</div>)}
    </div>
  )
}
