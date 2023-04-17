import React from 'react'
import { Container, Row, Col, Form } from '../data/Exports'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <Container fluid >
      <Row className='justify-content-center align-items-center' style={{height: '100vh'}}>
        <Col id='signup'>
          <div className='d-flex justify-content-between align-items-center position-md-absolute pe-md-3'>
            <Link className="navbar-brand me-2 fw-bold fs-1" to="/">
              <span style={{color: "#1070FF"}}>Catch</span>
              <span style={{color: "#151517"}}>Up</span>
            </Link>
            <div className='d-flex align-items-center rounded-2 px-3 py-2' style={{backgroundColor: '#BCD7FF33', height: 'fit-content'}}>
              <img src={require('../assets/icons/NG.png')} alt="" className='img-fluid pe-2' />
              <small className='fw-semibold'>English</small>
            </div>
          </div>
          <Form style={{maxWidth: '425px'}} className='mx-auto pt-2 mt-5 mt-md-0'>
            <header>
              <h2 className='pb-1'>Welcome!</h2>
              <p>Sign up here! Please enter your details</p>
            </header>
            <Form.Group className="form-outline mb-4 mt-4">
              <Form.Label className="form-label" htmlFor="email">Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                className="form-control"
                placeholder='Enter your email address'
              />
            </Form.Group>
            <Form.Group className="form-outline mb-4">
              <Form.Label className="form-label" htmlFor="password" >Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                className="form-control"
                placeholder='*********'
              />
            </Form.Group>
            <footer className='text-center'>
              <button type="submit" className="btn btn-block w-100 text-white py-2" style={{backgroundColor: '#0056D6'}}>
                Create a free account
              </button>
              <p style={{color: '#0056D6'}} className='py-3 m-0'>Or</p>
              <button type="submit" className="btn rounded-1 btn-block w-100 mb-4" style={{border: '2px solid #D0D5DD'}}>
                <img src={require('../assets/icons/icons8-google-32.png')} alt="" className='pe-2' />
                Sign In with Google
              </button>
              <Link to='/Log_In' className='text-decoration-none mt-2'>
                Have an account already? Log In
              </Link>
            </footer>
          </Form>
        </Col>
        <Col className='p-0 d-none d-md-block col-bg'></Col>
      </Row>
    </Container>
  )
}
