import React from 'react'
import { Row, Primarybtn } from '../data/Exports'

export const CTA = () => {
  return (
    <Row id='call-to-action' className='text-center py-3 pb-4 mt-3 mt-md-5 px-3'>
        <h2
            className='head-2 fw-bold lh-base mx-auto pt-5 pb-4 px-1 px-md-0'
            style={{maxWidth: '957px'}}
        >
            Organize your next social gathering with <span style={{color: '#1070FF'}}>Catch</span> up
        </h2>
        <h4 style={{color: '#717172'}} className='text-center pb-4 mb-4 head-4'>
            Look no further, Get started today.
        </h4>
        <div className='pb-5'>
            <Primarybtn value='Get Started'/>
        </div>
    </Row>
  )
}
