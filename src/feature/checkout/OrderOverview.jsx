import { CurrencyFormatter } from '../../utils/FormatCurrency';
import useCartPrice from '../cart/useCartPrice';

const OrderOverview = ({ cart }) => {
  const { totalCartPrice, totalPrice, totalTax } = useCartPrice();

  return (
    <>
      <h2 className="h3 mb-3 text-black">Your Order</h2>
      <div className="p-3 p-lg-5 border bg-white">
        <table className="table site-block-order-table mb-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="text-capitalize">
                  {item.name} <strong className="mx-2">x</strong>{' '}
                  {item.quantity}
                </td>
                <td>
                  <CurrencyFormatter amount={item.totalPrice} />
                </td>
              </tr>
            ))}

            <tr>
              <td className="text-black font-weight-bold">
                <strong>Cart Subtotal</strong>
              </td>
              <td className="text-black">
                <CurrencyFormatter amount={totalPrice} />
              </td>
            </tr>
            <tr>
              <td className="text-black font-weight-bold">
                <strong>Tax</strong>
              </td>
              <td className="text-black">
                <CurrencyFormatter amount={totalTax} />
              </td>
            </tr>
            <tr>
              <td className="text-black font-weight-bold">
                <strong>Order Total</strong>
              </td>
              <td className="text-black font-weight-bold">
                <strong>
                  <CurrencyFormatter amount={totalCartPrice} />
                </strong>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className="border p-3 mb-3">
          <h3 className="h6 mb-0">
            <a
              className="d-block"
              data-bs-toggle="collapse"
              href="#collapsebank"
              role="button"
              aria-expanded="false"
              aria-controls="collapsebank"
            >
              Direct Bank Transfer
            </a>
          </h3>

          <div className="collapse" id="collapsebank">
            <div className="py-2">
              <p className="mb-0">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>
        </div>

        <div className="border p-3 mb-3">
          <h3 className="h6 mb-0">
            <a
              className="d-block"
              data-bs-toggle="collapse"
              href="#collapsecheque"
              role="button"
              aria-expanded="false"
              aria-controls="collapsecheque"
            >
              Cheque Payment
            </a>
          </h3>

          <div className="collapse" id="collapsecheque">
            <div className="py-2">
              <p className="mb-0">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>
        </div>

        <div className="border p-3 mb-5">
          <h3 className="h6 mb-0">
            <a
              className="d-block"
              data-bs-toggle="collapse"
              href="#collapsepaypal"
              role="button"
              aria-expanded="false"
              aria-controls="collapsepaypal"
            >
              Paypal
            </a>
          </h3>

          <div className="collapse" id="collapsepaypal">
            <div className="py-2">
              <p className="mb-0">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default OrderOverview;
