import React from 'react'
import { Container, Row, Col, Form } from '../data/Exports'
import { Link } from 'react-router-dom'

export const LogIn = () => {
  return (
    <Container fluid>
      <Row className='justify-content-center align-items-center' style={{height: '100vh'}}>
        <Col id='login'>
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
          <Form style={{maxWidth: '425px'}} className='mx-auto mt-5 pt-2 mt-md-0'>
            <header>
              <h2 className='pb-1'>Welcome Back!</h2>
              <p>Please enter your details to log in</p>
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
            <Form.Group className="mb-4 d-flex justify-content-between">
                <div className="form-check">
                  <input className="form-check-input mt-1" type="checkbox" value="" id="checkbox" />
                  <Form.Label className="form-check-label" htmlFor="checkbox"> Remember for 30 Days </Form.Label>
                </div>
                <Link to="/Forgot_Password" className='text-decoration-none'>Forgot password?</Link>
            </Form.Group>
            <footer className='text-center'>
              <button type="submit" className="btn btn-block w-100 text-white py-2" style={{backgroundColor: '#0056D6'}}>
                Sign in
              </button>
              <p style={{color: '#0056D6'}} className='py-2 m-0'>Or</p>
              <button type="submit" className="btn rounded-1 btn-block w-100 mb-4" style={{border: '2px solid #D0D5DD'}}>
                <img src={require('../assets/icons/icons8-google-32.png')} alt="" className='pe-2' />
                Sign In with Google
              </button>
              <Link to='/Sign_Up' className='text-decoration-none mt-2'>
                Don’t have an account yet? Sign Up for free
              </Link>
            </footer>
          </Form>
        </Col>
        <Col className='p-0 d-none d-md-block col-bg'></Col>
      </Row>
    </Container>
  )
}
