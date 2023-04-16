import React from 'react'
import { NavBar, Footer, Container, Row, Col, Primarybtn, CTA, SecondaryBtn } from '../data/Exports'
import { stayConnected, testimonials } from '../data/Data'
import { Link } from 'react-router-dom'

export const Home = () => {
  // stay connected section data
  const stayConnectedData = stayConnected.map((data, index) => (
    <Row className='align-items-center justify-content-around mx-auto p-0' key={data.title}>
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
            className='pb-1 fw-semibold'
          >
            {data.desp}
          </p>
          <SecondaryBtn value='Learn More' />
        </Col>
        {/* desktop view */}
        <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-none d-md-block'>
          <img src={data.src} alt="" className='img-fluid'/>
        </Col>
        <Col md={5} className='d-none d-md-block pb-md-5 pb-lg-0'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-1 fw-semibold'
          >
            {data.desp}
          </p>
          <SecondaryBtn value='Learn More' />
        </Col>
      </>
      :
      <>
        <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-block d-md-none'>
          <img src={data.src} alt="" className='img-fluid' />
        </Col>
        <Col md={5} className='pb-3 pb-md-5 pb-lg-0'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-1 fw-semibold'
          >
              {data.desp}
          </p>
          <SecondaryBtn value='Learn More' />
        </Col>
        <Col md={5} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0 d-none d-md-block'>
          <img src={data.src} alt="" className='img-fluid' />
        </Col>
      </>
      }
    </Row>
  ))

  //  testimonials section card data
  const testimonialsData = testimonials.map(data => (
    <Col md={5} key={data.name} className='rounded py-3 px-4 mb-5' style={{border: '1px solid #BCD7FF'}}>
      <div className='d-flex align-items-center pb-3' >
        <div className='pe-3'>
          <img src={data.src} alt="" className='img-fluid' />
        </div>
        <div>
          <p className='m-0 pb-1 fw-bold'>{data.name}</p>
          <p className='m-0' style={{color: '#717172'}}>{data.job}</p>
        </div>
      </div>
      <p style={{color: '#717172', textAlign: 'justify'}} className='m-0'>
        <span style={{fontSize: '32px'}} className='fw-bolder'>“</span>
        {data.testimony}
      </p>
    </Col>
  ))

  return (
    <>
        <NavBar />
        <Container fluid>
          {/* Hero Section */}
          <Row id='hero' className='justify-content-center align-items-center ms-xxl-5 mt-1 mt-md-4 pt-2 px-2 px-md-4'>
            <Col md={12} lg={6} className='d-block d-lg-none pb-5'>
              <h1 className='fw-bold mb-0 pb-md-2 head-1 lh-base' style={{maxWidth: '560px'}}>
                Make time for those that really matter.
              </h1>
              <p className='fw-semibold lh-lg pb-3' style={{color: '#717172'}}>
                What better way to have a scheduled hangout with your
                friends where you can unwind after a busy week, this is
                why we built  catch and all in one platform that solves this problem.
              </p>
              <Primarybtn value='Get Started' />
            </Col>
            <Col md={12} lg={6} className='ps-lg-5'>
              <Row className='justify-content-evenly'>
                <Col style={{maxWidth: '270px'}}>
                  <img
                    src={require('../assets/images/hero-UserIcons.png')}
                    alt=""
                    className='d-block img-fluid pb-4 mt-3'
                  />
                  <img
                    src={require('../assets/images/hero-Img1.png')}
                    alt=""
                    className='d-block img-fluid pb-4'
                  />
                  <div className='rounded-2 py-1 px-2 d-flex align-items-center justify-content-between w-100' style={{border: '1px solid #BCD7FF'}}>
                    <div className='pe-1 d-none d-md-block'>
                      <img
                        src={require('../assets/images/hero-UserIcons2.png')}
                        alt=""
                        className='img-fluid'
                      />
                    </div>
                    <div>
                      <small style={{fontSize: '11px', color: '#717172'}} className='fw-bold'>New event</small>
                      <p style={{fontSize: '12.5px'}} className='fw-bold text-nowrap m-0'>Add more friends</p>
                    </div>
                    <i className="fa-solid fa-arrow-right ps-2" style={{color: '#BCD7FF'}}></i>
                  </div>
                </Col>
                <Col style={{maxWidth: '274px'}}>
                  <img
                    src={require('../assets/images/hero-Img2.png')}
                    alt=""
                    className='d-block img-fluid pb-4'
                  />
                  <div className='rounded-2 py-1 px-2 d-flex align-items-center justify-content-between w-100' style={{border: '1px solid #BCD7FF'}}>
                    <div className='d-flex'>
                      <img
                        src={require('../assets/images/hero-UserIcons3.png')}
                        alt=""
                        className='d-none d-md-block img-fluid pe-2'
                      />
                      <div>
                        <p style={{fontSize: '12.5px'}} className='fw-bold m-0'>Mariah Kuss</p>
                        <small style={{fontSize: '11px', color: '#717172'}} className='fw-bold'>
                          <i className="fa-solid fa-calendar pe-1" style={{color: '#717172'}}></i>
                          10/11/22
                        </small>
                      </div>
                    </div>
                    <div>
                      <p style={{fontSize: '11px', color: '#717172'}} className='fw-bold m-0'>Status</p>
                      <small
                        style={{fontSize: '11px', backgroundColor: '#ACFFAC', color: '#004D00', padding: '2px 7px'}}
                        className='m-0 fw-bold rounded-1'
                      >
                          Available
                        </small>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={6} className='ps-auto ps-lg-5 pt-md-4 pt-lg-0 d-none d-lg-block'>
              <h1 className='fw-bold pb-3 head-1' style={{maxWidth: '560px'}}>
                Make time for those that really matter.
              </h1>
              <p className='fw-semibold lh-lg pb-3' style={{color: '#717172', maxWidth: '420px'}}>
                What better way to have a scheduled hangout with your
                friends where you can unwind after a busy week, this is
                why we built  catch and all in one platform that solves this problem.
              </p>
              <Primarybtn value='Get Started' />
            </Col>
          </Row>
          {/* Stay Connected */}
          <Row id='stay-connected' className='mt-2 mt-md-5 px-2'>
            <h2
              className='head-2 text-center fw-bold lh-base mx-auto pt-5 pb-3 px-1 px-md-0'
              style={{maxWidth: '692px'}}
            >
                Stay connected with your social circle
            </h2>
            {stayConnectedData}
          </Row>
          {/* Testimonials */}
          <Row id='testimonials' className='mt-3 mt-md-5 px-2'>
            <h2
              className='head-2 text-center fw-bold lh-base mx-auto pt-5 pb-5 px-2 px-md-0'
              style={{maxWidth: '864px'}}
            >
              You too deserve beautiful memories, start building with <span style={{color: '#1070FF'}}>Catch</span> up
            </h2>
            <Row className='justify-content-evenly px-md-0 mx-auto'>
              {testimonialsData}
            </Row>
          </Row>
          {/* Call to Action */}
          <CTA />
        </Container>
        <Footer />
    </>
  )
}
