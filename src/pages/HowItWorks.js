import React from 'react'
import { useState } from 'react'
import { NavBar, Footer, Container, Row, Col, GetStartedbtn, Form } from '../data/Exports'
import { howItWorksCards1, howItWorksCards2 } from '../data/Data'

export const HowItWorks = () => {
  const howItWorksData1 = howItWorksCards1.map(data => (
    <Col md={3} className='bg-white rounded-2' style={{width: '256px'}} key={data.title}>
      <div className='pe-3 mx-auto pt-4 mb-3'>
        <img src={data.src} alt="" className='img-fluid' />
      </div>
      <div className='pb-4'>
        <h5 className='m-0 pb-4 fw-bold' style={{color: '#0056D6'}}>{data.title}</h5>
        <p className='m-0 pb-3' style={{color: '#717172', fontSize: '14px'}}>{data.topdesp}</p>
        <p className='m-0' style={{color: '#717172', fontSize: '14px'}}>{data.bottomdesp}</p>
      </div>
    </Col>
  ))

  const howItWorksData2 = howItWorksCards2.map((data) => (
      <Col sm={5} key={data.title} className='rounded d-flex py-3 px-4 mb-5' style={{border: '1px solid #BCD7FF'}}>
        <div className='pe-3'>
          <img src={data.src} alt="" className='img-fluid' />
        </div>
        <div>
          <p className='m-0 pb-1 fw-bold'>{data.title}</p>
          <p className='m-0' style={{color: '#717172'}}>{data.desp}</p>
        </div>
      </Col>
  ))

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = event => {
    setFormData (prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = event => {
    event.prevent.Default()
  }

  return (
    <div>
        <NavBar />
          <Container fluid>
            <Row className='align-items-center px-3 px-md-0 mt-4'>
              <Col sm={12}>
                <h1
                  className='head-2 text-center fw-bold lh-base mx-auto pt-3 px-1 px-md-0 pb-2'
                  style={{maxWidth: '864px'}}
                >
                <span style={{color: '#1070FF'}}>Catch</span> up makes it easier to connect with your friends and family
                </h1>
              </Col>
              <Col sm={12} className='text-center'>
                <img src={require('../assets/images/HowItWorks-Img1.png')} alt="" className='img-fluid' />
              </Col>
            </Row>
            <Row className='justify-content-evenly px-3 px-md-0'>
              <h1
                className='head-2 text-center fw-bold lh-base mx-auto pt-5 px-1 px-md-0 pb-3'
                style={{maxWidth: '864px'}}
              >
                Plan and organise every get-together, from dinner to a reunion.
              </h1>
              <Row className='rounded justify-content-around text-center mb-5' style={{backgroundColor: '#E7F0FFCC', padding: '5em'}}>
                {howItWorksData1}
              </Row>
            </Row>
            <Row className='justify-content-evenly align-items-center px-3 px-md-0 mt-3'>
              <Col md={6} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0'>
                <img src={require('../assets/images/HowItWorks-Img2.png')} alt="" className='img-fluid'/>
              </Col>
              <Col md={4} className='pb-3 pb-md-0'>
                <h2 className='fw-bold pb-3 lh-base' style={{color: '#0056D6'}}>Instantly invite anyone on your contact list</h2>
                <p
                  style={{color: '#717172', textAlign: 'justify', lineHeight:'27px', maxWidth: '415px'}}
                  className='pb-4 fw-semibold'
                >
                  When you create a get-together you can add as many people as you would like,
                  as long as they are in your contact list. Whether you’re getting together with
                  two friends or holding a large family reunion, you will no longer need large
                  and multiple group chats that change every time someone new gets added. Inviting
                  someone later is just as easy as when you create the gathering, and the process
                  makes sure they didn’t miss anything no matter when they were added.
                </p>
                <GetStartedbtn value='Get Started Now' />
              </Col>
            </Row>
            <Row className='align-items-center px-3 px-md-0 mt-4'>
              <Col sm={12}>
                <h1 className='head-2 text-center fw-bold lh-base mx-auto pt-5 px-1 px-md-0 pb-4'>
                  Watch how easy it is to create your next get-together.
                </h1>
              </Col>
              <Col sm={12} className='text-center'>
                <img src={require('../assets/images/HowItWorks-Img3.png')} alt="" className='img-fluid' />
              </Col>
            </Row>
            <Row className='justify-content-evenly px-3 px-md-0 mt-5 pt-5'>
              {howItWorksData2}
            </Row>
            <Row className='justify-content-evenly align-items-center px-3 px-md-0 mt-5'>
              <Col md={4} className='pb-3 pb-md-0'>
                <h1 className='fw-bold pb-3' style={{color: '#0056D6', width: '385px'}}>Still have questions?</h1>
                <p
                  style={{color: '#000000', textAlign: 'justify', lineHeight:'24px', maxWidth: '415px'}}
                  className='pb-4 fw-semibold'
                >
                  Send us any questions you may have about Catch Up and we’ll get back to you quickly.
                </p>
              </Col>
              <Col md={6} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0'>
                <form onSubmit={handleSubmit}>
                  {/* Name input */}
                  <Row className="mb-4">
                    <Col>
                      <Form.Group className="form-outline">
                        <Form.Control
                          type="text"
                          placeholder='Firstname'
                          name='firstName'
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="form-outline">
                        <Form.Control
                          type="text"
                          placeholder='Lastname'
                          name='lastName'
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* Email input */}
                  <Form.Group className="form-outline mb-4">
                    <Form.Control
                      type="email"
                      placeholder='olivia@untitledui.com'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Message input */}
                  <div className="form-outline mb-4">
                    <textarea
                      className='form-control'
                      rows="4"
                      placeholder='Enter a description...'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Submit button */}
                  <button type="submit" className="w-100 btn btn-primary btn-block mb-4">Send</button>
                </form>
              </Col>
            </Row>
          </Container>
        <Footer />
    </div>
  )
}
