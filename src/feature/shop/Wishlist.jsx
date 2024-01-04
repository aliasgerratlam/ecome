import { useSelector } from 'react-redux';
import NameBanner from '../../ui/NameBanner';
import { getWishlist } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Wishlist = () => {
  const carts = useSelector(getWishlist);

  if (!carts.length)
    return (
      <EmptyCart
        heading="Your Wishlist is Empty"
        title="Wishlist"
        description="Cart's a little light, isn't it? Explore our collection and
    add some goodies to your basket!"
      />
    );
  return (
    <div className="wishlist-page">
      <NameBanner title="Wishlist" />;
      <div className="untree_co-section product-section before-footer-section">
        <Container>
          <Row>
            {carts?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Wishlist;
