import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand className='fw-bold nav-brand'>
        <Link to="/">Code Easy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-3 nav-links">
          <Nav><Link className='me-3' to="/courses">Courses</Link></Nav>
            <Nav><Link className='me-3' to="/blog">Blog</Link></Nav>
            <Nav><Link className='me-3' to="/faq">FAQ</Link></Nav>
          </Nav>
          <Nav>
            <Nav>
              Dank memes
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;