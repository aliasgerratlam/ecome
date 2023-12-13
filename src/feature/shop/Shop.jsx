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
  const [filterProd, setFilter] = useState({});

  // console.log('filterProd', filterProd);

  useEffect(() => {
    if (filterProd.sortby === 'Price, Low to High') {
      console.log('LTH');

      const sortArr = [...dataProduct]
        .sort((a, b) => a.price - b.price)
        .slice();
      setDataProduct((prev) => [...prev, ...sortArr]);
    }

    // if (filterProd.sortby === 'Price, Low to High') {
    //   setDataProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    // } else if (filterProd.sortby === 'Price, High to Low') {
    //   setDataProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    // } else if (filterProd.sortby === 'Alphabetically, A to Z') {
    //   setDataProduct((prev) =>
    //     [...prev].sort((a, b) => a.name.localeCompare(b.name)),
    //   );
    // } else if (filterProd.sortby === 'Alphabetically, Z to A') {
    //   setDataProduct((prev) =>
    //     [...prev].sort((a, b) => b.name.localeCompare(a.name)),
    //   );
    // } else {
    //   setDataProduct(products);
    // }
  }, [filterProd.sortby]);
  useEffect(() => {
    // console.log('CATEGORY>>>>>>>>>>>>>>>>>>>>>>', filterProd);
    if (filterProd.category && filterProd.category.length !== 0) {
      setDataProduct((prev) =>
        prev.filter((product) =>
          filterProd.category.some((cate) => cate.includes(product.category)),
        ),
      );
    } else {
      setDataProduct(products);
    }
  }, [filterProd.category]);

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
