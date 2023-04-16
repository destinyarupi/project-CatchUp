import React from 'react'
import { Link } from 'react-router-dom'

export const Primarybtn = (props) => {
  return (
    <Link
      to='/Log_In'
      style={{backgroundColor: '#1070FF', padding: '16px 32px'}}
      className='text-white text-decoration-none rounded-1'
    >
      {props.value}
      <i className="fa-solid fa-arrow-right ps-3" style={{color: '#ffffff'}}></i>
    </Link>
  )
}
