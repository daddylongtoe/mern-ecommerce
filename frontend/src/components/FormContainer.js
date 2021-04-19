import { Col, Container, Row } from 'react-bootstrap';

export default function FormContainer({ children }) {
  return (
    <Container>
      <Row className="justfiy-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
