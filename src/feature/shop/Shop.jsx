import { Col, Container, Row } from 'react-bootstrap';
import { getProduct } from '../../services/serviceApi';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import Filter from './Filter';
import { useMemo, useState } from 'react';

const Shop = () => {
  const products = useLoaderData();
  const [filterProd, setFilter] = useState({});

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(
      (product) =>
        (!filterProd.category ||
          filterProd.category.length === 0 ||
          filterProd.category.some((cate) =>
            cate.includes(product.category),
          )) &&
        (!filterProd.brand ||
          filterProd.brand.length === 0 ||
          filterProd.brand.some((brand) => brand.includes(product.company))) &&
        (!filterProd.color ||
          filterProd.color.length === 0 ||
          filterProd.color.some((color) => color.includes(product.colors))),
    );

    const sortOptions = {
      'Price, Low to High': (a, b) => a.price - b.price,
      'Price, High to Low': (a, b) => b.price - a.price,
      'Alphabetically, A to Z': (a, b) => a.name.localeCompare(b.name),
      'Alphabetically, Z to A': (a, b) => b.name.localeCompare(a.name),
    };

    const sorted = sortOptions[filterProd.sortby]
      ? [...filtered].sort(sortOptions[filterProd.sortby])
      : filtered;

    return sorted;
  }, [
    filterProd.sortby,
    filterProd.category,
    filterProd.brand,
    filterProd.color,
    products,
  ]);

  return (
    <>
      <div className="hero">
        <Container>
          <div className="intro-excerpt">
            <h1>Shop</h1>
          </div>
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
                  {filteredProducts.map((product) => (
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
