import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createBagtype, updateBagtype } from '../../auth/slice/admin-slice';

export default function BagForm({textConFirm, onIsAddMode, oldBagType, nameType}) {
  const [name, setName] = useState(oldBagType?.name || '');
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

  const handleChangeName = (e) => {
    setError(false);
    setName(e.target.value)
  }
  

  const handleSubmit = (e) => {
        e.preventDefault();
        let validName = validate(name);
        if (validName && !oldBagType) {
            dispatch(createBagtype(name))
            onIsAddMode(false);
        } else if (validName && oldBagType) {
            dispatch(updateBagtype(oldBagType.id, name))
            onIsAddMode(false);
        }

 }

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex items-center gap-8 text-lg border-b px-3 min-h-[65px]'>
                <div className='flex items-center gap-2 flex-1 py-1 placeholder:text-sm'>
                    <label htmlFor='color_name'>Name {nameType}:</label>
                    <div>
                        <input id='color_name' type="text" 
                        className='block w-full border-b border-b-gray-300 outline-none focus:border-black focus:ring-blue-200' 
                        placeholder={`Enter ${nameType}`}
                        value={name}
                        onChange={handleChangeName}/>
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

