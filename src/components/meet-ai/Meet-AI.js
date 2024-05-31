import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image from '../../assets/vectorAi.webp'; // Replace with your image path
import video from '../../assets/video.mp4';
import './Meet-AI.css';

const MeetTruAI = () => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    color: hovered ? 'black' : 'white', 
    backgroundColor: hovered ? 'white' : '#21214a',
    border: `2px solid ${hovered ? '#21214a' : 'white'}`,
    transition: 'all 0.3s ease',
  };

  return (
    <Container fluid className="mt-4" style={{ backgroundColor: '#21214a', color: 'white', padding: '40px 20px', borderRadius: '10px', width: '100%' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={3} className="d-flex justify-content-center align-items-center">
          <img src={image} alt="Tru-AI" style={{ width: '100%', maxWidth: '200px' }} />
        </Col>
        <Col xs={12} md={6} className="text-center d-flex flex-column justify-content-center align-items-center">
          <h3>Meet Tru-AI</h3>
          <h5>Design. Create. Deploy.</h5>
          <p>... the Future of AI | Power to EDIT</p>
          <p>Based on Your Website & Traffic Trends, Tru-AI Optimizes Your Website.</p>
          <Button 
            className="custom-button mt-2" 
            style={buttonStyle} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
          >
            Learn More
          </Button>
        </Col>
        <Col xs={12} md={3} className="d-flex justify-content-center align-items-center">
          <video controls className="rounded-video" style={{ width: '100%' }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetTruAI;
