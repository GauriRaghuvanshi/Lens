import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? 'white' : 'black',
    color: hovered ? 'black' : 'white',
    border: hovered ? '2px solid black' : 'none',
    transition: 'all 0.3s ease',
    padding: '12px 24px', // Adjust padding to increase button size
    fontSize: '1.2rem',
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-start text-left vh-100" style={{ background: 'linear-gradient(to right, #f8fafc, #e0f7fa)', paddingLeft: '100px' }}> {/* Increase paddingLeft for more margin */}
      <h1 className="display-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>We are at the<br />forefront of AI</h1> {/* Split into two lines */}
      <p className="lead">
        From Conserving Wildlife to Automatically<br /> Generating Caricatures - <b>We Do It All</b>
      </p> {/* Split into two lines and make "We Do It All" bold */}
      <Button 
        variant="primary" 
        className="mt-2" 
        style={buttonStyle} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.location.href = '/company'}
      >
        Learn More
      </Button>
    </Container>
  );
};

export default Hero;
