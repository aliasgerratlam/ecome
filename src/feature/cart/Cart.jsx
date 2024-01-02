import { Col, Container, Row } from 'react-bootstrap';
import NameBanner from '../../ui/NameBanner';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import { Link } from 'react-router-dom';
import { CurrencyFormatter } from '../../utils/FormatCurrency';
import useCartPrice from './useCartPrice';

const Cart = () => {
  const carts = useSelector(getCart);
  const { totalCartPrice, totalPrice, totalTax } = useCartPrice();

  return (
    <div>
      <NameBanner title="Cart" />

      <div className="untree_co-section before-footer-section">
        <Container>
          <Row className="mb-5">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-color">Color</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Sub Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {carts?.map((cart, i) => (
                    <CartItem key={i} cart={cart} />
                  ))}
                </tbody>
              </table>
            </div>
          </Row>

          <Row>
            <Col lg={6}>
              <Link
                to="/shop"
                className="btn btn-outline-black btn-sm btn-block mb-5"
              >
                Continue Shopping
              </Link>

              <Row>
                <Col lg={12}>
                  <label className="text-black h4">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </Col>
                <Col lg={8} className="mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control py-3"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                </Col>
                <Col md={4}>
                  <button className="btn btn-black">Apply Coupon</button>
                </Col>
              </Row>
            </Col>

            <Col md={6} className="pl-5">
              <Row className="row justify-content-end">
                <div className="col-md-7">
                  <div className="text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>

                  <Row className="mb-3">
                    <Col md={6}>
                      <span className="text-black">Subtotal</span>
                    </Col>
                    <Col md={6} className="text-right">
                      <strong className="text-black">
                        {<CurrencyFormatter amount={totalPrice} />}
                      </strong>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <span className="text-black">Tax (18%)</span>
                    </Col>
                    <Col md={6}>
                      <strong className="text-black">
                        {<CurrencyFormatter amount={totalTax} />}
                      </strong>
                    </Col>
                  </Row>

                  <Row className="mb-5">
                    <Col md={6}>
                      <span className="text-black">Total</span>
                    </Col>
                    <Col md={6}>
                      <strong className="text-black">
                        {<CurrencyFormatter amount={totalCartPrice} />}
                      </strong>
                    </Col>
                  </Row>

                  <Link
                    to="/checkout"
                    className="btn btn-black btn-lg py-3 btn-block"
                  >
                    Proceed To Checkout
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cart;
