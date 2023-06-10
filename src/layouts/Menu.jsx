import React from 'react'
import { getBagType } from '../api/admin-api'

export default function Menu() {
    const [bagType, setBagType] = useState([])

    const BagType = async () => {
      try {
          const result = await getBagType()
          setBagType(result.data)
      } catch (err) {
          console.log(err)
      }
    }

    useEffect(()=>{
        BagType();
      }, [])

  return (
    <div>
        {bagType.map(el => <a key={el.id} className='text-[20px] hover:underline hover:underline-offset-8 cursor-pointer active:font-semibold'>{el.name}</a>)}
    </div>
  )
}
