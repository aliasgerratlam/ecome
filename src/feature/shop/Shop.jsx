import { Col, Container, Row } from 'react-bootstrap';
import { getProduct } from '../../services/serviceApi';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import Filter from './Filter';
// import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const products = useLoaderData();
  // const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <Container>
          <Row>
            <Col>
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <Container>
          <Filter />

          <Row>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export const loader = async () => {
  const product = await getProduct();
  return product;
};

export default Shop;
