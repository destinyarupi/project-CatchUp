import React from 'react'
import {Container, Row, Col } from '../data/Exports'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="text-white bg-footer">
        {/* Footer links */}
        <Container className="text-start mt-5 pt-4 pt-md-5">
          <Row className="mt-3 justify-content-between">
            <Col md={3} className="pb-4 pb-md-0">
              <Link className="navbar-brand me-2 fw-bold fs-2" to="/">
                <span style={{color: "#FFFFFF"}}>Catch</span>
                <span style={{color: "#151517"}}>Up</span>
              </Link>
            </Col>
            <Col md={2} sm={6} className="pb-3 pb-md-0">
                <Link to="/" className="text-white d-block text-decoration-none pb-4">Company</Link>
                <Link to="/Careers" className="text-white d-block text-decoration-none pb-4">Careers</Link>
                <Link to="/About_us" className="text-white d-block text-decoration-none pb-4">About Us</Link>
                <Link to="/Contact_Us" className="text-white d-block text-decoration-none pb-4">Contact Us</Link>
            </Col>
            <Col md={2} sm={6} className="pb-3 pb-md-0">
                <Link to="/" className="text-white d-block text-decoration-none pb-4">Learn</Link>
                <Link to="/How_it_works" className="text-white d-block text-decoration-none pb-4">How it works</Link>
            </Col>
            <Col md={2} sm={6} className="pb-3 pb-md-0">
                <Link to="/" className="text-white d-block text-decoration-none pb-4">Help</Link>
                <Link to="/FAQs" className="text-white d-block text-decoration-none pb-4">FAQs</Link>
                <Link to="/Help" className="text-white d-block text-decoration-none pb-4">Help Center</Link>
            </Col>
            <Col md={2} sm={6}>
                <Link to="/" className="text-white d-block text-decoration-none pb-4">Legal</Link>
                <Link to="/Privacy_Policy" className="text-white d-block text-decoration-none pb-4">Privacy Policy</Link>
                <Link to="/Terms_and_conditions" className="text-white d-block text-decoration-none pb-4 lh-base">Terms & Conditions</Link>
            </Col>
          </Row>
        </Container>
        <Container className="py-4 pb-5 text-center px-0">
          <small className="px-3">Coded by Destiny Arupi</small>
          <small className="px-3">© 2022 Team Pry Bar</small>
        </Container>
      </footer>
  )
}


