import React, { useState } from 'react'
import SelectGroupColor from '../components/SelectGroupColor'
import { useDispatch } from 'react-redux';
import { createColor, updateColor } from '../../auth/slice/admin-slice';

export default function ColorForm({textConFirm, onIsAddMode, oldColor, nameType}) {
  const [colorName, setColorName] = useState(oldColor?.name || '');
  const [colorCode, setColorCode] = useState(oldColor?.hexcode || '#000000');
  const [groupColorId, setGroupColorId] = useState(oldColor?.GroupColor?.id || 1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch()

  const validate = (text) => {
    if (text.trim() === '') {
        setError(true);
        return false;
    } else {
        setError(false);
        return true;
    }
  };

  const handleChangeColorName = (e) => {
    setColorName(e.target.value)
  }
  const handleChangeColorCode = (e) => {
    setColorCode(e.target.value)
  }

  const handleChangeGroupColorId = (e) => {
    setGroupColorId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validName = validate(colorName);
    // let validCode = validate(colorCode);
    // let validGroupColor = validate(groupColorId);
    // validName && validCode && validGroupColor && 

    if (validName && !oldColor) {
        dispatch(createColor({"name": colorName, "hexcode": colorCode, "groupColorId": groupColorId}))
        onIsAddMode(false);
    } else if (validName && oldColor) {
        dispatch(updateColor(oldColor.id, {"name": colorName, "hexcode": colorCode, "groupColorId": groupColorId}))
        onIsAddMode(false);
    }
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex items-center gap-8 text-lg border-b px-3 min-h-[65px]'>
                    <SelectGroupColor onChangeGroup={handleChangeGroupColorId} valueId={groupColorId}/>
                    <div className='flex items-center gap-2'>
                    <label htmlFor='pick_color' className='w-20'>Shade:</label>
                    <div className='w-6 h-6 overflow-hidden rounded-full relative border ring-gray-400 ring-1'>
                        <input type='color' id='pick_color' 
                        className='absolute -top-2 -left-2 w-16 h-16 cursor-pointer border: none'
                        value={colorCode}
                        onChange={handleChangeColorCode}/>
                    </div>
                </div>
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
                    <button type='submit' className={`bg-black text-base text-white px-2 py-1 rounded-md border-[1px] border-black min-w-[60px] text-center`}>{textConFirm}</button>
                    <div className={`px-2 py-1 rounded-md border-[1px] border-black text-base`} role="button" onClick={()=> onIsAddMode(false)}>cancel</div>
            </div>   
        </div>
    </form>
  )
}
