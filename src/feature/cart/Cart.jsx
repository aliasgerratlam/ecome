import { Col, Container, Row } from 'react-bootstrap';
import NameBanner from '../../ui/NameBanner';

const Cart = () => {
  return (
    <div>
      <NameBanner />

      <div className="untree_co-section before-footer-section">
        <Container>
          <Row className="mb-5">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <img
                        src="images/product-1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">Product 1</h2>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <div
                        className="input-group mb-3 d-flex align-items-center quantity-container"
                        style="max-width: 120px;"
                      >
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-black decrease"
                            type="button"
                          >
                            &minus;
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control text-center quantity-amount"
                          value="1"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-black increase"
                            type="button"
                          >
                            &plus;
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <a href="#" className="btn btn-black btn-sm">
                        X
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-thumbnail">
                      <img
                        src="images/product-2.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">Product 2</h2>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <div
                        className="input-group mb-3 d-flex align-items-center quantity-container"
                        style="max-width: 120px;"
                      >
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-black decrease"
                            type="button"
                          >
                            &minus;
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control text-center quantity-amount"
                          value="1"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-black increase"
                            type="button"
                          >
                            &plus;
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <a href="#" className="btn btn-black btn-sm">
                        X
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Row>

          <Row>
            <Col lg={6}>
              <Row className="mb-5">
                <Col lg={6} className="mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">
                    Update Cart
                  </button>
                </Col>
                <Col lg={6}>
                  <button className="btn btn-outline-black btn-sm btn-block">
                    Continue Shopping
                  </button>
                </Col>
              </Row>

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
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$230.00</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$230.00</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-black btn-lg py-3 btn-block">
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cart;
