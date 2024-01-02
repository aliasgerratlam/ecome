import { Col, Container, Row } from 'react-bootstrap';
import NameBanner from '../../ui/NameBanner';
import CheckoutForm from './CheckoutForm';
import CouponCode from './CouponCode';
import OrderOverview from './OrderOverview';
import { getCart } from '../cart/cartSlice';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector(getCart);

  return (
    <div className="checkout-page">
      <NameBanner title="Checkout" />

      <div className="untree_co-section">
        <Container>
          <div className="mb-5">
            <div className="border p-4 rounded" role="alert">
              Returning customer? <a href="#">Click here</a> to login
            </div>
          </div>

          <Row>
            <Col md={6} className="mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <CheckoutForm />
            </Col>
            <Col md={6}>
              <CouponCode />
              <div className="my-5"></div>
              <OrderOverview cart={cart} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Checkout;
