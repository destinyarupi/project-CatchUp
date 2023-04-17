import React from 'react'
import { NavBar, Footer, Container, Row, Col } from '../data/Exports'
import { PPLinks, privacyPolicy } from '../data/Data'

export const PrivacyPolicy = () => {
  const links = PPLinks.map(data => (
    <a href={data.link} key={data.link} className='mb-3 text-decoration-none text-black d-block'>
      <small>{data.title}</small>
    </a>
  ))
  const privacyPolicyData = privacyPolicy.map(data => (
    <div key={data.title} className='pb-4' style={{textAlign: 'justify'}}>
      <p id={data.id} className='fw-bold'>{data.title}</p>
      <small>{data.content}</small>
    </div>
  ))
  return (
    <>
        <NavBar />
        <Container fluid className='px-md-5 px-3 pt-3'>
          <Row>
            <Col md={3} className='d-none d-md-block'>
              <h3 className='mb-3'>Content</h3>
              {links}
            </Col>
            <Col md={9}>
              <div className='mb-4'>
                <h2>Privacy Policy</h2>
                <small>
                  This document was last updated
                  15th of December, 2022. To start using
                  our product, read this Privacy Policy thoroughly.
                </small>
              </div>
              {privacyPolicyData}
              <div>
                <p className='fw-bold'>Contact Us</p>
                <small>If you have any questions about these Terms of Use, You can contact us:</small>
                <ul className='mt-3' style={{fontSize: '14px'}}>
                  <li>By visiting this page on our website at
                    <a
                      href='https://project-catchup.vercel.app/Contact_Us/'
                      className='text-decoration-none ps-1'
                    >
                      www.project-catchup.vercel.app/Contact_Us/
                    </a>
                  </li>
                  <li>By sending us an email at catchup@gmail.com</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
    </>
  )
}
