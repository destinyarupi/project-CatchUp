import React from 'react'
import { NavBar, Footer, Container, Row, Col, Primarybtn } from '../data/Exports'
import { features } from '../data/Data'

export const Features = () => {
  // features data
  const featuresData = features.map((data, index) => (
    <Row className='align-items-center justify-content-around mx-auto p-0 mb-5 pb-3' key={data.title}>
      {
      index === 1 ?
      <>
        {/* mobile view  */}
        <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-block d-md-none'>
          <img src={data.src} alt="" className='img-fluid'/>
        </Col>
        <Col md={5} className='d-block d-md-none pb-3 pb-md-0'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-4 fw-semibold'
          >
            {data.desp}
          </p>
          <Primarybtn value='Get Started' />
        </Col>
        {/* desktop view */}
        <Col md={5} className='d-none d-md-block pb-md-5 pb-lg-0'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-4 fw-semibold'
          >
            {data.desp}
          </p>
          <Primarybtn value='Get Started' />
        </Col>
        <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-none d-md-block'>
          <img src={data.src} alt="" className='img-fluid'/>
        </Col>
      </>
      :
      <>
        {/* mobile view */}
        <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-block d-md-none'>
          <img src={data.src} alt="" className='img-fluid' />
        </Col>
        <Col md={5} className='pb-3 pb-md-5 pb-lg-0 d-block d-md-none'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-4 fw-semibold'
          >
            {data.desp}
          </p>
          <Primarybtn value='Get Started' />
        </Col>
        {/* desktop view */}
        <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-none d-md-block'>
          <img src={data.src} alt="" className='img-fluid' />
        </Col>
        <Col md={5} className='pb-3 pb-md-5 pb-lg-0 d-none d-md-block'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-4 fw-semibold'
          >
            {data.desp}
          </p>
          <Primarybtn value='Get Started' />
        </Col>
      </>
      }
    </Row>
  ))

  return (
    <>
        <NavBar />
        <Container fluid className='px-4 px-md-5'>
          <Row id='stay-connected' className='mt-2 mt-md-5'>
            {featuresData}
          </Row>
        </Container>
        <Footer />
    </>
  )
}
