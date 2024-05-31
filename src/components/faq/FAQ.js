import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import './FAQ.css';  // Import custom CSS file

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const cardStyle = {
    border: '2px solid black',
    backgroundColor: 'white',
    color: 'black',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    color: 'black',
    backgroundColor: 'white',
    border: 'none',
    textAlign: 'left',
    width: '100%',
    padding: '1rem',
    position: 'relative', // Required for positioning the custom arrow
  };

  return (
    <Container className="my-5">
      <h4 className="text-center mb-4">GET TO KNOW US</h4>
      
      <h2 className="text-center mb-5">Frequently Asked Questions</h2>
      <Row>
        <Col xs={12} md={6}>
          <Accordion>
            <Card style={cardStyle}>
              <Card.Header>
                <Button
                  onClick={() => toggleAccordion(0)}
                  aria-expanded={openAccordion === 0}
                  aria-controls="faq-1"
                  className="accordion-button custom-arrow"
                  style={buttonStyle}
                >
                  Do I need to sign a contract?
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="0" in={openAccordion === 0}>
                <Card.Body id="faq-1">
                  We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={cardStyle}>
              <Card.Header>
                <Button
                  onClick={() => toggleAccordion(1)}
                  aria-expanded={openAccordion === 1}
                  aria-controls="faq-2"
                  className="accordion-button custom-arrow"
                  style={buttonStyle}
                >
                  How do we ensure quality of deliverables?
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="1" in={openAccordion === 1}>
                <Card.Body id="faq-2">
                  We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col xs={12} md={6}>
          <Accordion>
            <Card style={cardStyle}>
              <Card.Header>
                <Button
                  onClick={() => toggleAccordion(2)}
                  aria-expanded={openAccordion === 2}
                  aria-controls="faq-3"
                  className="accordion-button custom-arrow"
                  style={buttonStyle}
                >
                  What services do we offer?
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="2" in={openAccordion === 2}>
                <Card.Body id="faq-3">
                  We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={cardStyle}>
              <Card.Header>
                <Button
                  onClick={() => toggleAccordion(3)}
                  aria-expanded={openAccordion === 3}
                  aria-controls="faq-4"
                  className="accordion-button custom-arrow"
                  style={buttonStyle}
                >
                  How do I begin collaboration?
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="3" in={openAccordion === 3}>
                <Card.Body id="faq-4">
                  Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Accordion>
            <Card style={cardStyle}>
              <Card.Header>
                <Button
                  onClick={() => toggleAccordion(4)}
                  aria-expanded={openAccordion === 4}
                  aria-controls="faq-5"
                  className="accordion-button custom-arrow"
                  style={buttonStyle}
                >
                  How do you ensure user privacy?
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="4" in={openAccordion === 4}>
                <Card.Body id="faq-5">
                  We do not share, sell, or rent your competitive information (including any and all data) to any third party. Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col xs={12} md={6}>
          <Accordion>
            <Card style={cardStyle}>
              <Card.Header>
                <Button
                  onClick={() => toggleAccordion(5)}
                  aria-expanded={openAccordion === 5}
                  aria-controls="faq-6"
                  className="accordion-button custom-arrow"
                  style={buttonStyle}
                >
                  How can I pay for the services?
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="5" in={openAccordion === 5}>
                <Card.Body id="faq-6">
                  We split the entire project into multiple milestones. We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
