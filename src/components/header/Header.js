import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/nav_logo.webp';
import { ThemeContext } from '../../theme/ThemeContext';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" style={{ marginLeft: '80px' }}>
        <img src={logo} alt="LensCorp Logo" style={{ height: '60px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <LinkContainer to="/makemyweb">
            <Nav.Link style={{ marginRight: '10px' }}>MakeMyWeb</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link style={{ marginRight: '10px' }}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/company">
            <Nav.Link style={{ marginRight: '10px' }}>Company</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blogs">
            <Nav.Link>Blogs</Nav.Link>
          </LinkContainer>
        </Nav>
        <Button variant="outline-secondary" onClick={toggleTheme} style={{ marginRight: '50px' }}>
          <i className={darkMode ? "bi bi-moon" : "bi bi-brightness-high"}></i>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
