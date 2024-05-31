import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../../assets/aboutLatest.webp';
import './AboutUs.css'; // Make sure to import the CSS file

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    color: hovered ? 'white' : 'black',
    backgroundColor: hovered ? 'black' : '#cbeffb',
    border: `2px solid ${hovered ? 'black' : '#cbeffb'}`,
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <h1 className="mt-4 mb-4 text-center" style={{ fontSize: '3rem' }}>About Us</h1>
      <div className="NewQuestions_underline__PkZOO"></div>

      <Container className="mt-4">
        <div className="p-4 light-blue-bg"> {/* Apply the custom CSS class */}
          <Row>
            <Col xs={12} md={6} className="text-center">
              <h2>Welcome To LENS</h2>
              <p className="mb-4">We put our hearts, souls and sweat into designing and developing custom AI-powered solutions for your business so you don’t have to.</p>
              <Button 
                className="btn-custom" 
                style={buttonStyle} 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                onClick={() => window.location.href = '/company'}
              >
                Learn More
              </Button>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 'auto',
                  maxWidth: 400,
                  aspectRatio: 1,
                  overflow: 'hidden',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
