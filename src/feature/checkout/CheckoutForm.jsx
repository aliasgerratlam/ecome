import { useSelector } from 'react-redux';
import { Form, useActionData } from 'react-router-dom';
import { getCart } from '../cart/cartSlice';
import { store } from '../../store';
import { updateCheckoutData } from './checkoutSlice';
import { v4 as uuidv4 } from 'uuid';
import clearCart from '../cart/cartSlice';

// eslint-disable-next-line no-unused-vars
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
const CheckoutForm = () => {
  const cart = useSelector(getCart);
  const formError = useActionData();

  return (
    <div className="p-3 p-lg-5 border bg-white">
      <Form className={formError && 'form-error'} method="POST">
        <div className="form-group mb-3">
          <label className="text-black">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="John Doe"
          />
          {formError?.name && <p className="error">{formError.name}</p>}
        </div>

        <div className="form-group mb-3">
          <label className="text-black">
            Email Address <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
          />
          {formError?.email && <p className="error">{formError.email}</p>}
        </div>

        <div className="form-group mb-3">
          <label className="text-black">
            Phone <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
          {formError?.phone && <p className="error">{formError.phone}</p>}
        </div>

        <div className="form-group mb-3">
          <label className="text-black">
            Address <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Apartment, suite, unit etc."
            id="address"
            name="address"
          />
          {formError?.address && <p className="error">{formError.address}</p>}
        </div>

        <div className="form-group mb-3">
          <label className="text-black">
            Postal / Zip <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="postalcode"
            name="postalcode"
          />
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div className="form-group">
          <button className="btn btn-black btn-lg py-3 btn-block">
            Place Order
          </button>
        </div>
      </Form>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const randomId = uuidv4();

  const order = {
    ...data,
    id: randomId,
    cart: JSON.parse(data.cart),
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = 'Please give us your correct phone number.';
  if (!order.name.length) errors.name = 'Please give us your name.';
  if (!order.address.length) errors.address = 'Please give us your address.';
  if (!order.email.length) errors.email = 'Please give us your correct email.';

  if (Object.keys(errors).length > 0) return errors;

  store.dispatch(updateCheckoutData(order));
  console.log('order', order);
  store.dispatch(clearCart());

  return null;
};

export default CheckoutForm;
