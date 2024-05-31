import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import the checkmark icon

const WhyChooseLens = () => {
  return (
    <Container className="my-4">
      <h4 className="text-center my-4" marginTop="100px">Why Choose Lens</h4>
      <div className="NewQuestions_underline__PkZOO"></div>

      <Row className="text-center my-4">
        <Col>
          <h1>AI-driven solutions backed by science</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <ul style={{ listStyle: 'none', padding: 0 }}> {/* Remove default styling */}
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' , color: 'green' }} />
              State-of-the-art solutions
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' , color: 'green' }} />
              Fast & Efficient
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green' }} />
              No extra computation fee
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' ,   color: 'green' }} />
              No licensing fee
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <ul style={{ listStyle: 'none', padding: 0 }}> {/* Remove default styling */}
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green' }} />
              Lifetime support & upgrades
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px',    color: 'green' }} />
              Plug-and-Play
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' ,  color: 'green' }} />
              24x7 Progress Monitoring
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green' }} />
              Incremental Updates
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseLens;
