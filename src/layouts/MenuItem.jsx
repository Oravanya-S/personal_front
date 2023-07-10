import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function MenuItem({ menu, to, active, onclick }) {
  return (
    <Link to={to} onClick={onclick}>
      <div className={active ? 'font-medium underline underline-offset-8' : ''}>{menu.name}</div>
    </Link>
  )
}


