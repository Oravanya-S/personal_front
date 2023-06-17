import React, { useState } from 'react'
import SelectGroupColor from '../components/SelectGroupColor'
import { useDispatch } from 'react-redux';
import { colorListAsync, createColor, groupColorListAsync, updateColor } from '../../auth/slice/admin-slice';
import validateColor from '../../auth/validators/validate-color';
import InputErrorMessage from '../../auth/components/InputErrorMessage';



export default function ColorForm({textConFirm, onIsAddMode, oldColor, nameType}) {
  
  const initialInput = {
    groupColorId: oldColor?.GroupColor?.id || '',
    hexcode: oldColor?.hexcode || '#000000',
    name: oldColor?.name ||'',
  };
  
  
  if (oldColor) {
    initialInput.groupColorId = oldColor.GroupColor.id
    initialInput.hexcode = oldColor.hexcode
    initialInput.name = oldColor.name
  }

    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});
    const dispatch = useDispatch()

    const handleChangeInput = e => {
      console.log(input)
      setInput({ ...input, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = validateColor(input);
    console.log("re", result)
    if (result) {
        return setError(result);
    }
    setError({});

    if (!oldColor) {
      console.log("hjkhgffh", input)
      await dispatch(createColor(input))
        onIsAddMode(false);
    } else if (oldColor) {
      await dispatch(updateColor(oldColor.id, input))
    }
      await dispatch(groupColorListAsync())
      await dispatch(colorListAsync())
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex items-center gap-8 text-lg border-b px-3 min-h-[70px]'>
                    <SelectGroupColor onChangeGroup={handleChangeInput} valueId={input.groupColorId} error={error}/>
                    <div className='flex items-center gap-2'>
                    <label htmlFor='colorCode' className='w-20 font-medium'>Shade:</label>
                    <div className='w-6 h-6 overflow-hidden rounded-full relative border ring-gray-400 ring-1'>
                        <input type='color' id='colorCode' 
                        name="hexcode"
                        className='absolute -top-2 -left-2 w-16 h-16 cursor-pointer border: none'
                        value={input.hexcode}
                        onChange={handleChangeInput}/>
                    </div>
                </div>
                <div className='flex items-center gap-2 flex-1 placeholder:text-sm'>
                    <label htmlFor='color_name' className='font-medium'>Name {nameType}:</label>
                    <div>
                        <input id='name' type="text" 
                        name="name"
                        className='block w-full border-b border-b-gray-300 outline-none focus:border-black focus:ring-blue-200' 
                        placeholder={`Enter ${nameType}`}
                        value={input.name}
                        onChange={handleChangeInput}/>
                        <div className='h-0 boder'> 
                          {error.name && (<InputErrorMessage message={error.name} />)}
                        </div>
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
