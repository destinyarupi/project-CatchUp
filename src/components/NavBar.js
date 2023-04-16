import React from 'react'
import {Container, Navbar, Nav } from '../data/Exports'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" className='py-3 px-2 px-lg-5'>
      <Container fluid>
        {/* Nav brand logo */}
        <Link className="navbar-brand me-2 fw-bold fs-2" to="/">
          <span style={{color: "#1070FF"}}>Catch</span>
          <span style={{color: "#151517"}}>Up</span>
        </Link>
        {/* Hamburger menu button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Nav links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Center links */}
          <Nav className="mx-auto">
            <Link className="nav-link link px-4" to="/How_it_works">How it works</Link>
            <Link className="nav-link link px-4" to="/Features">Features</Link>
            <Link className="nav-link link ps-4" to="/About_us">About Us</Link>
          </Nav>
          {/* Left links */}
          <Nav className="d-flex align-items-center pt-3 pt-md-0 flex-row">
            <Link className="nav-link link px-4" to="/Log_In" >Log In</Link>
            <Link className="nav-link signUp px-4 fw-semibold" to="/Sign_Up" >Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



