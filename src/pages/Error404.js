import React from 'react'
import { NavBar, Footer, Container, Row, Col, Form } from '../data/Exports'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <>
        <NavBar />
        <Container fluid id='forgotPassword' className='px-2 px-md-5 mt-2'>
          <Row className='align-items-center justify-content-around mx-auto p-0 mb-5 pb-3'>
            <Col md={5} style={{maxWidth: '456.5px'}} className='pb-3 pt-3 d-block d-md-none'>
              <img src={require('../assets/images/404Img.png')} alt="" className='img-fluid' />
            </Col>
            <Col md={5}>
                <h1 className='pb-2 fw-bold'>Oops! Error 404</h1>
                <p className='pb-4'>We can’t seem to find the page you’re looking for, Let’s help you get somewhere even better.</p>
                <Link
                    to='/'
                    style={{backgroundColor: '#1070FF', padding: '16px 32px'}}
                    className='text-white text-decoration-none rounded-1'
                >
                    <i className="fa-solid fa-arrow-left ps-3" style={{color: '#ffffff'}}></i>
                    Return Home
                </Link>
            </Col>
            <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-none d-md-block'>
              <img src={require('../assets/images/404Img.png')} alt="" className='img-fluid' />
            </Col>
          </Row>
        </Container>
        <Footer />
    </>
  )
}
