import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Vision.css'; // Assuming you create this CSS file for custom styles
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.png';
const Vision = () => {
  return (
    <Container className="my-4">
      <h4 className="text-center my-4" style={{ marginTop: '100px' }}>Our Vision</h4>
      <div className="NewQuestions_underline__PkZOO"></div>
      <Row className="text-center my-4">
        <Col>
          <h1>AI for Social Good</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.</p>
        </Col>
      </Row>
      {/* Section 1 */}
      <Row className="align-items-center my-4">
        <Col xs={12} md={6} className="text-center">
          <img src={image1} alt="Description 1" className="vision-image" />
        </Col>
        <Col xs={12} md={6}>
          <p>Diversity & Fairness: This data relates to how AI is being used to solve environmental issues.</p>
        </Col>
      </Row>
      {/* Section 2 */}
      <Row className="align-items-center my-4">
        <Col xs={12} md={6} className="text-center">
          <img src={image2} alt="Description 2" className="vision-image" />
        </Col>
        <Col xs={12} md={6}>
          <p>Regulatory Compliance: Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.</p>
        </Col>
      </Row>
      {/* Section 3 */}
      <Row className="align-items-center my-4">
        <Col xs={12} md={6} className="text-center">
          <img src={image3} alt="Description 3" className="vision-image" />
        </Col>
        <Col xs={12} md={6}>
          <p>Code of Ethics: LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Vision;