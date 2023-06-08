import React, { useEffect, useState } from 'react'
import { getGroupColor } from '../api/admin-api'

export default function SelectGroupColor({valueName, onChangeGroup}) {
    const [groupColor, setGroupColor] = useState([])

    const GroupColor = async () => {
        try {
            const result = await getGroupColor()
            setGroupColor(result.data)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        GroupColor();
      }, [])

    console.log("ddddd", valueName)
    console.log(groupColor)
    
  
  return (
    <div className='flex items-center gap-2'>
        <label for="colors" className="dark:text-white">Group color:</label>
        <select className='min-w-[100px] p-0 m-0' name="colors" id="colors" onChange={onChangeGroup}>
            {groupColor.map(el => ((el.name==valueName)? <option selected value={el.id}>{el.name}</option> : <option value={el.id}>{el.name}</option>))}
        </select>
    </div>
  )
}
