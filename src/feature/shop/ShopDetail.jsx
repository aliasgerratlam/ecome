import { useLoaderData } from 'react-router-dom';
import { getSingleProduct } from '../../services/serviceApi';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import ImageCollection from './ImageCollection';
import DetailBlock from './DetailBlock';

const ShopDetail = () => {
  const getSingleProduct = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="single-product">
      <Container>
        <Row>
          <Col>
            <ImageCollection getSingleProduct={getSingleProduct} />
          </Col>

          <Col>
            <DetailBlock getSingleProduct={getSingleProduct} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async (request) => {
  const singleProduct = await getSingleProduct(request);
  return singleProduct;
};

export default ShopDetail;
