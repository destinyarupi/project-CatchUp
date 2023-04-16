import React from 'react'
import { NavBar, Footer, Container, Row, Col, Primarybtn, CTA, SecondaryBtn } from '../data/Exports'
import { aboutUs } from '../data/Data'

export const AboutUs = () => {
  // about us data
  const aboutUsData = aboutUs.map(data => (
    <div className='mb-5'>
      <p>{data.date}</p>
      <h4 className='lh-base fw-semibold pb-2' style={{maxWidth: '600px'}}>{data.title}</h4>
      <div>
        <SecondaryBtn value='Read article'/>
      </div>
    </div>
  ))

  return (
    <>
        <NavBar />
        <Container fluid>
          <Row id='about-us' className='align-items-center justify-content-md-evenly pt-lg-4 pt-2 px-2'>
            <Col md={6} className='featuresHero-text1'>
              <h1 className='lh-base fw-bold pb-2 pb-md-0'>
                Helping you establish and maintain better relationships with
                <span style={{color: '#0056D6'}}> those who matter most</span>
              </h1>
            </Col>
            <Col md={6} className='fw-semibold featuresHero-text2'>
              <h4 className='pb-3' style={{color: '#0056D6'}}>Relationships are everything.</h4>
              <p>Life can quickly get in the way of maintaining these goals,
                from busy schedules to having kids and travelling for work.
                Getting together for dinner with your friends is becoming difficult
                these days.
              </p>
              <p>
                Because of this, we built Catchup. By reimagining our communication
                platform, we make each friend's schedule accessible. CatchUp has
                given nearly 10,000 people the opportunity to manage their relationships.
              </p>
            </Col>
          </Row>
          <Row className='align-items-center justify-content-md-evenly pt-4 px-md-5 px-2'>
            <Col md={12}>
              <h1
                className='head-2 text-center fw-bold lh-base mx-auto pb-2 pb-md-3 px-2 px-md-0'
                style={{maxWidth: '864px'}}
              >
                Catch Up in the Press
              </h1>
            </Col>
            <Col md={12}>
              <Row className='align-items-center justify-content-md-evenly pt-lg-4 pt-2'>
                <Col md={5} className='position-relative d-block d-md-none py-1 mb-5'>
                  <img src={require('../assets/images/aboutUs-Img1.png')} alt="" className='img-fluid' />
                </Col>
                <Col md={7}>
                  {aboutUsData}
                  <div className='py-4 mb-5 mb-md-0'>
                    <Primarybtn value='Read all'/>
                  </div>
                </Col>
                <Col md={5} className='position-relative mx-auto d-none d-md-block ps-4'>
                  <img src={require('../assets/images/aboutUs-Img2.png')} alt="" className='img-fluid' />
                </Col>
              </Row>
            </Col>
          </Row>
          <CTA />
        </Container>
        <Footer />
    </>
  )
}
