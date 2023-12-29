import { Container, Row } from 'react-bootstrap';

const NameBanner = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Cart</h1>
            </div>
          </div>
          <div className="col-lg-7"></div>
        </Row>
      </Container>
    </div>
  );
};

export default NameBanner;
