import React from 'react'
import thai_amphures from '../../dataThailand/thai_amphures.json'

export default function SelectAmphure({ provinceId = "", valueId, onChange }) {
    let amphures;
    if(provinceId) amphures = thai_amphures.filter(item => item.province_id === +provinceId)
    else amphures = []

  return (
    <div className="flex items-center gap-2">
        <label htmlFor="amphoe" className="w-[160px]">
          District/Area:
        </label>
        <select
          className="w-full px-2 py-[2px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
          name="amphoe"
          id="amphoe"
          value={valueId}
          onChange={onChange}
          
        >
          <option disabled hidden value={""}>
          ------- Select -------
          </option>
          {amphures.map((el) =>
            el.id === valueId? (
              <option selected value={el.id} key={el.id}>
                {el.name_en}
              </option>
            ) : (
              <option value={el.id} key={el.id}>
                {el.name_en}
              </option>
            )
          )}
        </select>
    </div>

  )
}