import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function MenuItem({ menu, to, active }) {
  return (
    <Link to={to}>
      <div className={active ? 'font-medium underline underline-offset-8' : ''}>{menu.name}</div>
    </Link>
  )
}


