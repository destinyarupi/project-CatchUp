import React from 'react'
import { NavBar, Footer, Container, Row, Col} from '../data/Exports'

export const Careers = () => {
  return (
    <>
        <NavBar />
        <Container fluid className='p-0'>
          <div className='text-center mb-4'>
              <h1 className='fw-bold mb-0 pb-2 head-1 lh-base'>
                Careers
              </h1>
              <p className='fw-semibold lh-base pb-3 mx-auto' style={{color: '#717172', maxWidth: '73em'}}>
                At CatchUp, Our mission is to help people establish and maintain better
                relationships with those who matter most, and we are looking for the best
                and right people that can help us accomplish this.We value unique contributions,
                embrace diversity in people and ideas and welcome everyone.
              </p>
          </div>
          <Row className='align-items-center justify-content-evenly mx-auto mb-5 py-4' style={{backgroundColor: '#E7F0FFCC'}}>
            <Col md={5}>
              <h3 className='lh-base' style={{color: '#0056D6', maxWidth: '550px'}}>
                Explore vacant positions at Catch Up and see if you have
                what it takes to join our dynamic team.
              </h3>
            </Col>
            <Col md={5} className='pb-5 pt-2 pb-md-0 d-none d-md-block'>
              <p className='lh-base'>
                Catch Up is a people-centric organisation; we extend equal opportunities
                to great talents in a gender-balanced work enviroment. <br /> In recognition
                of the critical role our people play in the delivery of our services;
                we remain committed to their well-being and continuous self-development.
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
    </>
  )
}
