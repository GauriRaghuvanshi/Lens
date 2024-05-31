import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    id: 1,
    title: "Biometrics",
    description: "Academia-backed & in-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection."
  },
  {
    id: 2,
    title: "Image Analysis",
    description: "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business."
  },
  {
    id: 3,
    title: "Cross-Media Translation",
    description: "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience."
  },
  {
    id: 4,
    title: "3D Modelling and Design",
    description: "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single image/video."
  }
];

const Services = () => {
  return (
    <Container className="my-4">
      <h4 className="text-center">Services</h4>
      <div className="NewQuestions_underline__PkZOO"></div>

      <Row className="text-center my-4">
        <Col>
          <h3>We provide Artificial Intelligence Services</h3>
        </Col>
      </Row>
      <Row>
        {services.map((service) => (
          <Col xs={12} md={6} key={service.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.id}. {service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
