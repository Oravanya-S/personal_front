import React from 'react'
import ColorItem from '../colors/ColorItem'
import ColourItem from './ColourItem'

export default function ColourListWithGroupColor({itemList, groupColorId}) {
  return (
    <div>
        {itemList.map(item => <div className='flex flex-col gap-2 py-1 pl-8 border-t' key={item.id}><ColourItem item={item} groupColorId={groupColorId} nameType="color"/></div>)}
    </div>
  )
}
