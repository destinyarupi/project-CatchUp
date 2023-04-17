import React from 'react'
import { NavBar, Footer, Container, Row, Col, Form } from '../data/Exports'
import { Link } from 'react-router-dom'

export const ForgotPassword = () => {
  return (
    <>
        <NavBar />
        <Container fluid id='forgotPassword' className='px-2 px-md-5 mt-2'>
          <Row className='align-items-center justify-content-around mx-auto p-0 mb-5 pb-3'>
            <Col md={5}>
              <Form>
                <header>
                  <h1 className='pb-2 fw-bold'>Forgot Password?</h1>
                  <p>Don’t worry we have got you covered, Please enter the email associated with you account</p>
                </header>
                {/* Email input */}
                <Form.Group className="form-outline mb-4 mt-4">
                  <Form.Label className="form-label" htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder='Enter your email address'
                  />
                </Form.Group>
                <footer>
                  <button type="submit" className="w-100 btn btn-primary btn-block mb-4">Submit</button>
                  <Link to='/Log_In' className='text-decoration-none mt-2 text-black text-start'>
                    <i className="fa-solid fa-arrow-left pe-2" style={{color: '#000000'}}></i>
                    Back to Log in
                  </Link>
                </footer>
              </Form>
            </Col>
            <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-none d-md-block'>
              <img src={require('../assets/images/forgotPassword-Img.png')} alt="" className='img-fluid' />
            </Col>
          </Row>
        </Container>
        <Footer />
    </>
  )
}
