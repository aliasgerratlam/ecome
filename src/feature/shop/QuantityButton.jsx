import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../cart/cartSlice';

const QuantityButton = ({ id }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.cart);
  const quantity = item.find((el) => el.id === id).quantity;
  const stock = item.find((el) => el.id === id).stock;

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="quantity-btn d-flex align-items-center me-3">
      <button className="btn" onClick={handleDecrement}>
        -
      </button>
      <span>{quantity}</span>
      <button
        className="btn"
        disabled={quantity >= stock}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
