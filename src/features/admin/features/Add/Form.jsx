import React, { useState } from 'react'
import SelectGroupColor from '../../components/SelectGroupColor';

export default function Form({textConFirm, onIsAddMode, oldColor, nameType}) {
  const [colorName, setColorName] = useState(oldColor?.name || '');
  const [colorCode, setColorCode] = useState(oldColor?.hexcode || '#000000');
  const [groupColorName, setGroupColorName] = useState(oldColor?.GroupColor?.name || '');

  const handleChangeColorName = (e) => {
    console.log(e.target.value)
    setColorName(e.target.value)
  }
  const handleChangeColorCode = (e) => {
    console.log(e.target.value)
    setColorCode(e.target.value)
  }

  const handleChangeGroupColorName = (e) => {
    console.log(e.target.value)
    setGroupColorName(e.target.value)
    console.log('eeeeee', groupColorName)
  }

  return (
    <form>
        <div className='flex items-center gap-8 text-xl border-b px-3 rounded-lg min-h-[65px]'>
                {(nameType=="Color")? (
                  <>
                    <SelectGroupColor valueName={groupColorName} onChangeGroup={handleChangeGroupColorName}/>
                    <div className='flex items-center gap-2'>
                    <label htmlFor='pick_color' className='w-20'>Shade:</label>
                    <div className='w-6 h-6 overflow-hidden rounded-full relative border ring-gray-400 ring-1'>
                        <input type='color' id='pick_color' 
                        className='absolute -top-2 -left-2 w-16 h-16 cursor-pointer border: none'
                        value={colorCode}
                        onChange={handleChangeColorCode}/>
                    </div>
                </div></>): ""}
                <div className='flex items-center gap-2 flex-1 py-1 placeholder:text-sm'>
                    <label htmlFor='color_name'>Name {nameType}:</label>
                    <div>
                        <input id='color_name' type="text" 
                        className='block w-full border-b border-b-gray-300 outline-none focus:border-black focus:ring-blue-200' 
                        placeholder={`Enter ${nameType}`}
                        value={colorName}
                        onChange={handleChangeColorName}/>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className={`bg-black text-base text-white px-2 py-1 rounded-md border-[1px] border-black min-w-[60px] text-center`} role="button" onClick={()=> console.log("edit")}>{textConFirm}</div>
                    <div className={`px-2 py-1 rounded-md border-[1px] border-black text-base`} role="button" onClick={()=> onIsAddMode(false)}>cancel</div>
            </div>   
        </div>
    </form>
  )
}
