import React from 'react'
import { NavBar, Footer, Container, Row, Col, GetStartedbtn } from '../data/Exports'
import { stayConnected, testimonials } from '../data/Data'
import { Link } from 'react-router-dom'

export const Home = () => {
  const stayConnectedData = stayConnected.map((data, index) => (
    <Row className='align-items-center justify-content-around' key={data.title}>
      {
      index === 1 ?
      <>
        <Col md={4} className='d-block d-md-none pb-3 pb-md-0'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-1 fw-semibold'
          >
            {data.desp}
          </p>
          <Link to='/' className='text-decoration-none fw-bold pb-2'>
            Learn More
            <i className="fa-solid fa-arrow-right ps-2" style={{color: '#1070FF', fontSize: '11px'}}></i>
          </Link>
        </Col>
        <Col md={6} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0'>
          <img src={data.src} alt="" className='img-fluid'/>
        </Col>
        <Col md={4} className='d-none d-md-block pb-md-5 pb-lg-0'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-1 fw-semibold'
          >
            {data.desp}
          </p>
          <Link to='/' className='text-decoration-none fw-bold'>
            Learn More
            <i className="fa-solid fa-arrow-right ps-2" style={{color: '#1070FF', fontSize: '11px'}}></i>
          </Link>
        </Col>
      </>
      :
      <>
        <Col md={4} className='pb-3 pb-md-5 pb-lg-0'>
          <h4 className='fw-bold pb-2'>{data.title}</h4>
          <p
            style={{color: '#717172', textAlign: 'justify', lineHeight:'27px'}}
            className='pb-1 fw-semibold'
          >
              {data.desp}
          </p>
          <Link to='/' className='text-decoration-none fw-bold'>
            Learn More
            <i className="fa-solid fa-arrow-right ps-2" style={{color: '#1070FF', fontSize: '11px'}}></i>
          </Link>
        </Col>
        <Col md={6} style={{maxWidth: '456.5px'}} className='pb-5 pb-md-0'>
          <img src={data.src} alt="" className='img-fluid' />
        </Col>
      </>
      }
    </Row>
  ))

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
    <div>
        <NavBar />
        {/* Hero Section */}
        <section id='hero' className='mt-1 mt-md-4 pt-2'>
          <Container>
            <Row className='justify-content-center align-items-center ms-xxl-5'>
              <Col md={12} lg={6} className='ps-auto ps-md-5 d-block d-lg-none pb-5'>
                <h1 className='fw-bold pb-2 head-1' style={{maxWidth: '560px'}}>
                  Make time for those that really matter.
                </h1>
                <p className='fw-semibold lh-lg pb-2' style={{color: '#717172', maxWidth: '420px'}}>
                  What better way to have a scheduled hangout with your
                  friends where you can unwind after a busy week, this is
                  why we built  catch and all in one platform that solves this problem.
                </p>
                <GetStartedbtn value='Get Started' />
              </Col>
              <Col md={12} lg={6} className='ps-auto ps-md-5'>
                <Row>
                  <Col>
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
                    <div className='rounded-2 py-1 px-2 d-flex align-items-center justify-content-between' style={{border: '1px solid #BCD7FF'}}>
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
                  <Col>
                    <img
                      src={require('../assets/images/hero-Img2.png')}
                      alt=""
                      className='d-block img-fluid pb-4'
                    />
                    <div className='rounded-2 py-1 px-2 d-flex align-items-center justify-content-between' style={{border: '1px solid #BCD7FF'}}>
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
                <GetStartedbtn value='Get Started' />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Stay Connected */}
        <section id='stay-connected' className='mt-2 mt-md-5'>
          <h2
            className='head-2 text-center fw-bold lh-base mx-auto pt-5 pb-3 px-1 px-md-0'
            style={{maxWidth: '692px'}}
          >
              Stay connected with your social circle
          </h2>
          <Container>
            {stayConnectedData}
          </Container>
        </section>
        {/* Testimonials */}
        <section id='testimonials' className='mt-3 mt-md-5'>
          <h2
            className='head-2 text-center fw-bold lh-base mx-auto pt-5 pb-5 px-1 px-md-0'
            style={{maxWidth: '864px'}}
          >
            You too deserve beautiful memories, start building with <span style={{color: '#1070FF'}}>Catch</span> up
          </h2>
          <Container>
            <Row className='justify-content-evenly px-3 px-md-0'>
              {testimonialsData}
            </Row>
          </Container>
        </section>
        {/* Call to Action */}
        <section id='call-to-action' className='text-center py-3 pb-4 mt-3 mt-md-5'>
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
            <GetStartedbtn value='Get Started'/>
          </div>
        </section>
        <Footer />
    </div>
  )
}
