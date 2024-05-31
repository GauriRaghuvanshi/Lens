import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../numbers/Numbers.css'; // Assuming you create this CSS file for custom styles

const ByTheNumbers = () => {
  return (
    <div className="by-the-numbers my-5 py-5 text-center">
      <Container>
        <h2 className="mb-4">By the numbers</h2>
        <Row>
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h3>15+</h3>
            <p>Solutions for Global crises</p>
          </Col>
          <Col xs={12} md={4} className="mb-4 mb-md-0 border-left-right">
            <h3>10+</h3>
            <p>University Collaborations</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>25+</h3>
            <p>Employees Worldwide</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ByTheNumbers;