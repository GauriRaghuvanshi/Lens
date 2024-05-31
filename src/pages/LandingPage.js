import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  {
    title: "Exclusive Rights",
    description: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belong to you."
  },
  {
    title: "Research Driven",
    description: "We regularly benchmark our solutions via comparing industry-wide evaluations so our partners only get the best that AI can offer."
  },
  {
    title: "Plug-and-Play",
    description: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice."
  },
  {
    title: "Lifetime Support",
    description: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options."
  }
];

const LandingPage = () => {
  return (
    <Container className="my-4">
      <Row>
        {features.map((feature, index) => (
          <Col xs={12} md={3} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;
