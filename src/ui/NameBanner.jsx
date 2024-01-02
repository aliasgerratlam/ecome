import { Col, Container, Row } from 'react-bootstrap';

const NameBanner = ({ title }) => {
  return (
    <div className="hero">
      <Container>
        <Row className="justify-content-between">
          <Col lg={5}>
            <div className="intro-excerpt">
              <h1>{title}</h1>
            </div>
          </Col>
          <Col lg={7}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default NameBanner;
