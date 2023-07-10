import React from 'react'
import thai_tambon from '../../dataThailand/thai_tambons.json'

export default function SelectTambon({ amphureId, valueId, onChange }) {
    console.log("ddddddddd", thai_tambon)
    let tambons;
    if(amphureId) tambons = thai_tambon.filter(item => item.amphure_id === +amphureId)
    else tambons = []
    console.log("thaitambons", tambons)

  return (
    <>
    <div className="flex items-center gap-2">
        <label htmlFor="province" className="dark:text-white font-medium">
          SubDistrict:
        </label>
        <select
          className="min-w-[100px] py-[1px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
          name="district"
          id="district"
          value={valueId}
          onChange={onChange}
        >
          <option disabled hidden value={""}>
            Select district
          </option>
          {tambons.map((el) =>
            el.id === valueId? (
              <option selected value={el.id} key={el.id}>
                {el.name_en}
              </option>
            ) : (
              <option value={el.idn} key={el.id}>
                {el.name_en}
              </option>
            )
          )}
        </select>
    </div>
    <div className='flex items-center gap-2'>
        <label htmlFor="zipcode" className="dark:text-white font-medium">
          Zipcode:
        </label>

    </div>
    </>

  )
}