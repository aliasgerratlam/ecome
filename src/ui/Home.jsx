import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Couch from '../assets/images/couch.png';

const Home = () => {
  return (
    <>
      <div className="hero">
        <Container>
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span className="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristiqueA.
                </p>
                <p>
                  <Link className="btn btn-secondary me-2">Shop Now</Link>
                  <Link className="btn btn-white-outline">Explore</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={Couch} className="img-fluid" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="product-section">
        <Container>
          <Row>
            <Col md={8}>
              <h2 className="section-title">New Arrival</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{' '}
              </p>
            </Col>

            <Col md={4} className="text-end align-self-center">
              <Link className="btn">Explore</Link>
            </Col>
          </Row>

          {/* <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="images/product-1.png" class="img-fluid product-thumbnail">
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid">
							</span>
						</a>
					</div>  */}
        </Container>
      </div>
    </>
  );
};

export default Home;
