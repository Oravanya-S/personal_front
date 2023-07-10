import React from 'react'
import thai_amphures from '../../dataThailand/thai_amphures.json'

export default function SelectAmphure({ provinceId = "", valueId, onChange }) {
    let amphures;
    if(provinceId) amphures = thai_amphures.filter(item => item.province_id === +provinceId)
    else amphures = []
    console.log("thaiampures", thai_amphures)

  return (
    <div className="flex items-center gap-2">
        <label htmlFor="province" className="dark:text-white font-medium">
          District:
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
          {amphures.map((el) =>
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

  )
}