import React from 'react';
import { useContext } from 'react';
import { Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthProvider';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaUser } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);

  const signOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand className='fw-bold nav-brand'>
        <Link to="/">Code Easy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-3 nav-links">
          <Nav><Link className='me-3' to="/">Courses</Link></Nav>
            <Nav><Link className='me-3' to="/blog">Blog</Link></Nav>
            <Nav><Link className='me-3' to="/faq">FAQ</Link></Nav>
          </Nav>
          <Nav>
            <Nav>
              <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant=""
          {...triggerHandler}
          className="d-inline-flex align-items-center justify-content-center w-100"
        >
          {
            user?.photoURL ? <Image
            className='w-25 '
            ref={ref}
            roundedCircle
            src={user.photoURL}
          /> : <FaUser></FaUser>
          }
        </Button>
      )}
    </OverlayTrigger>
            </Nav>
            {
              user?.uid ? <button onClick={signOut}><p>Log Out</p></button> : <p><Link to="/login">Login</Link></p>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;