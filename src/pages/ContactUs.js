import React from 'react'
import { NavBar, Footer, Container, Row, Col, Form } from '../data/Exports'
import { contactUs } from '../data/Data'

export const ContactUs = () => {
  const contactUsData = contactUs.map(data => (
    <div key={data.heading} className='d-flex align-items-start mb-5'>
      <div className='pe-3'>
        <img src={data.icon} alt="" className='img-fluid' />
      </div>
      <div style={{fontSize: '14px'}}>
        <h6>{data.heading}</h6>
        <small className='d-block mb-1' style={{color: '#898989'}}>{data.info1}</small>
        <small className='text-black'>{data.info2}</small>
      </div>
    </div>
  ))

  return (
    <>
        <NavBar />
        <Container fluid id='contactUs' className='px-2 px-md-5 mt-2'>
          <Row className='align-items-center justify-content-around mx-auto p-0 mb-5 pb-3'>
            <Col md={5} className='mb-3 mb-md-0'>
              <Form>
                {/* firstName input */}
                <Form.Group className="form-outline mb-4 mt-4">
                  <Form.Label className="form-label fw-semibold" htmlFor="firstName">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder='First Name'
                  />
                </Form.Group>
                {/* lastName input */}
                <Form.Group className="form-outline mb-4 mt-4">
                  <Form.Label className="form-label fw-semibold" htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control
                    type="etext"
                    id="lastName"
                    className="form-control"
                    placeholder='Last Name'
                  />
                </Form.Group>
                {/* Email input */}
                <Form.Group className="form-outline mb-4 mt-4">
                  <Form.Label className="form-label fw-semibold" htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder='Enter your email address'
                  />
                </Form.Group>
                {/* Message input */}
                <div className="form-outline mb-4">
                  <Form.Label className="form-label fw-semibold" htmlFor="message">Type your message</Form.Label>
                  <textarea
                    className='form-control'
                    id='message'
                    rows="4"
                    placeholder='Enter a message...'
                  />
                </div>
                <button type="submit" className="w-100 btn btn-primary btn-block mb-4">Send</button>
              </Form>
            </Col>
            <Col md={5}>
              {contactUsData}
            </Col>
          </Row>
        </Container>
        <Footer />
    </>
  )
}
