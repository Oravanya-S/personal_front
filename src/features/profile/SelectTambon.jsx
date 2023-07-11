import React from 'react'
import thai_tambon from '../../dataThailand/thai_tambons.json'

export default function SelectTambon({ amphureId, valueId, zipcode, onChange}) {

    let tambons;
    if(amphureId) { 
        tambons = thai_tambon.filter(item => item?.amphure_id === +amphureId)
    }

    else tambons = []

    const handleChange = e => {
        const selectedTambon = tambons.find(el => el.id == e.target.value)
        onChange(e.target.value, selectedTambon.zip_code)
    }

  return (
    <>
        <div className="flex items-center gap-2">
            <label htmlFor="tambon" className="w-[170px]">
                Sub-district:
            </label>
            <select
            className="w-full px-2 py-[2px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
            name="tambon"
            id="tambon"
            value={valueId}
            zipcode={zipcode}
            onChange={handleChange}
            >
            <option disabled hidden value={""}>
                ------- Select -------
            </option>
            {tambons.map((el) =>
                el.id === valueId? (
                <option selected value={el.id} zipcode={el.zip_code} key={el.id}>
                    {el.name_en}
                </option>
                ) : (
                <option value={el.id} zipcode={el.zip_code} key={el.id}>
                    {el.name_en}
                </option>
                )
            )}
            </select>
        </div>
        <div className='flex items-center gap-2'>
            <label htmlFor="zipcode" className="w-[180px]">
                Postal Code:
            </label>
            <div className='border-b w-full h-7 px-3'>
                {zipcode}
            </div>
        </div>
    </>
  )
}
