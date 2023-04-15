import React from 'react'
import { Button } from '../data/Exports'

export const GetStartedbtn = () => {
  return (
    <Button style={{ backgroundColor: '#1070FF', padding: '16px 32px'}}>
        Get Started
        <i className="fa-solid fa-arrow-right ps-3" style={{color: '#ffffff'}}></i>
    </Button>
  )
}
