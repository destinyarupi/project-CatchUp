import React from 'react'
import { Link } from 'react-router-dom'

export const SecondaryBtn = (props) => {
  return (
    <Link to='/' className='text-decoration-none fw-bold pb-2'>
        {props.value}
        <i className="fa-solid fa-arrow-right ps-2" style={{color: '#1070FF', fontSize: '11px'}}></i>
    </Link>
  )
}
