import { useSelector } from 'react-redux';
import { getTotalCartPrice } from './cartSlice';

const useCartPrice = () => {
  const totalPrice = useSelector(getTotalCartPrice);
  const totalTax = totalPrice * 0.18;
  const totalCartPrice = totalTax + totalPrice;

  return { totalPrice, totalTax, totalCartPrice };
};

export default useCartPrice;
