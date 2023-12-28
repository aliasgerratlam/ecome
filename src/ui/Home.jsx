import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Couch from '../assets/images/couch.png';
import { getProduct } from '../services/serviceApi';
import ProductCard from '../feature/shop/ProductCard';

const Home = () => {
  const products = useLoaderData();

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
                  <Link to="/shop" className="btn btn-white-outline">
                    Explore
                  </Link>
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

          <Row className="mt-5">
            {products.slice(0, 4).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const product = await getProduct();
  return product;
};

export default Home;
