import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { CurrencyFormatter } from '../../utils/FormatCurrency';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ThankYou = () => {
  const data = useSelector((state) => state.checkout.checkout);
  const id = useLoaderData();

  const checkout = data?.find((item) => item.id === id);

  console.log('checkout.totalPrice', checkout.totalPrice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data.length || id !== checkout?.id)
    return (
      <div className="p-5 text-center">
        <h2>Oops! There is no item in your checkout</h2>
      </div>
    );

  return (
    <div className="thankyou-page">
      <Container>
        <div className="header mb-5">
          <div>
            <h1 className="mb-3">Thank you for your order 😊</h1>
            <h6>Your order ID is: {id}</h6>
          </div>
        </div>

        <div className="order-overview">
          <table className="table">
            <thead>
              <tr>
                <th className="product-thumbnail">Image</th>
                <th className="product-name">Product</th>
                <th className="product-color">Color</th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-total">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {checkout?.cart.map((item) => (
                <tr key={item.key}>
                  <td className="product-thumbnail">
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </td>
                  <td className="product-name">
                    <h2 className="h5 text-black text-capitalize">
                      {item.name}
                    </h2>
                  </td>
                  <td className="text-center">
                    <span
                      className="color"
                      style={{ backgroundColor: item.color }}
                    ></span>
                  </td>
                  <td>{<CurrencyFormatter amount={Number(item.price)} />}</td>
                  <td>{item.quantity}</td>
                  <td>
                    {<CurrencyFormatter amount={item.price * item.quantity} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Row>
            <Col md={7}></Col>
            <Col md={5}>
              <div className="mb-3 row">
                <div className="col-md-6">
                  <span className="text-black">Subtotal</span>
                </div>
                <div className="text-right col-md-6">
                  <strong className="text-black">
                    {console.log('checkout.totalPrice', checkout.totalPrice)}
                    <CurrencyFormatter amount={checkout.subtotal} />
                  </strong>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-md-6">
                  <span className="text-black">Tax (18%)</span>
                </div>
                <div className="col-md-6">
                  <strong className="text-black">
                    <CurrencyFormatter amount={checkout.tax} />
                  </strong>
                </div>
              </div>
              <div className="mb-5 row">
                <div className="col-md-6">
                  <span className="text-black">Total</span>
                </div>
                <div className="col-md-6">
                  <strong className="text-black">
                    <CurrencyFormatter amount={checkout.finalPrice} />
                  </strong>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="final-pay text-center p-5">
          <h2 className="m-0">
            You have to pay: <CurrencyFormatter amount={checkout.finalPrice} />
          </h2>
        </div>
        <div className="wrapper">
          <div className="info p-3">
            <div className="item date">
              <p>January 3, 2024 10:00 AM</p>
            </div>
            <div className="item">
              <h3>Email:</h3>
              <p>{checkout?.email}</p>
            </div>
            <div className="item name">
              <p>{checkout?.name}</p>
            </div>
            <div className="item">
              <h3>Phone:</h3>
              <p>{checkout?.phone}</p>
            </div>
            <div className="item">
              <h3>Address:</h3>
              <p>{checkout?.address}</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-5 pb-5">
          <Link className="btn" to={'/'}>
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async (request) => {
  const checkoutId = await request;
  return checkoutId;
};

export default ThankYou;
