import { Button } from 'react-bootstrap';
import { CurrencyFormatter } from '../../utils/FormatCurrency';
import QuantityButton from '../shop/QuantityButton';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

const CartItem = ({ cart }) => {
  const { id, name, price, totalPrice, images, color } = cart;
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="product-thumbnail">
        <img src={images[0].url} alt={name} className="img-fluid" />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black text-capitalize">{name}</h2>
      </td>
      <td className="text-center">
        <span className="color" style={{ backgroundColor: color }}></span>
      </td>
      <td>{<CurrencyFormatter amount={Number(price)} />}</td>
      <td>
        <div className="input-group m-0 d-flex align-items-center quantity-container justify-content-center">
          <QuantityButton id={id} />
        </div>
      </td>
      <td>{<CurrencyFormatter amount={totalPrice} />}</td>
      <td>
        <Button
          className="btn btn-black btn-sm"
          onClick={() => dispatch(deleteItem(id))}
        >
          X
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
