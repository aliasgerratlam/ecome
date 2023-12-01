import { Col, Container, Row } from 'react-bootstrap';
import { getProduct } from '../../services/serviceApi';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import Filter from './Filter';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const products = useLoaderData();
  // const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState(products);
  const [filter, setFilter] = useState({});

  console.log('product', dataProduct, setDataProduct, filter);

  useEffect(() => {
    if (filter.sortby === 'Price, Low to High') {
      setDataProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (filter.sortby === 'Price, High to Low') {
      setDataProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else if (filter.sortby === 'Alphabetically, A to Z') {
      setDataProduct((prev) =>
        [...prev].sort((a, b) => a.name.localeCompare(b.name)),
      );
    } else if (filter.sortby === 'Alphabetically, Z to A') {
      setDataProduct((prev) =>
        [...prev].sort((a, b) => b.name.localeCompare(a.name)),
      );
    } else if (filter.price) {
      setDataProduct((prev) =>
        prev.filter((product) => product.price < filter.price),
      );
    } else {
      setDataProduct((prev) => [...prev]);
    }
  }, [filter.sortby, filter.price]);

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
        <Container fluid>
          <div className="px-5">
            <Row>
              <Col lg={2}>
                <Filter products={products} setFilter={setFilter} />
              </Col>

              <Col lg={10}>
                <Row>
                  {dataProduct.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
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
