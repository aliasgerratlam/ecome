import { CurrencyFormatter } from '../../utils/FormatCurrency';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ColorSwatch from './ColorSwatch';
import QuantityButton from './QuantityButton';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { addItem, addItemToWishlist, deleteItem, deleteItemFromWishlist, getCart } from '../cart/cartSlice';
import HeartAnime from '../../assets/images/heart.gif';
import { Image } from 'react-bootstrap';
import WithOutHeart from '../../assets/images/heart.svg';
import { useFetcher } from 'react-router-dom';

const DetailBlock = ({ getSingleProduct }) => {
  const dispatch = useDispatch();
  const fetcher = useFetcher();
  const cartItem = useSelector(getCart);
  const [isItemInWishlist, setIsItemInWishlist] = useState();

  const wishlistData = useSelector((state) => state.cart.wishlist);

  const { id, name, images, stars, price, description, stock, category, company, colors } = getSingleProduct;
  const [color, setColor] = useState(() => colors[0]);
  const isCart = useMemo(() => cartItem.some((cart) => cart.name === name), [cartItem, name]);

  const loadShopData = useCallback(async () => {
    if (!fetcher.data && fetcher.state === 'idle') {
      fetcher.load('/shop');
    }
  }, [fetcher]);

  const checkItemInWishlist = useCallback(() => {
    const wishlitItem = fetcher?.data?.find((item) => item.id === id) || {};
    setIsItemInWishlist(wishlistData.some((item) => item.id === wishlitItem.id));
  }, [fetcher, wishlistData, id]);

  useEffect(() => {
    loadShopData();
    checkItemInWishlist();
  }, [loadShopData, checkItemInWishlist]);

  const handleWishlist = (e) => {
    e.preventDefault();
    const wishlitItem = fetcher?.data?.find((item) => item.id === id) || {};

    if (isItemInWishlist) {
      dispatch(deleteItemFromWishlist(id));
      setIsItemInWishlist(false);
    } else {
      dispatch(addItemToWishlist(wishlitItem));
      setIsItemInWishlist(true);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    const item = {
      id,
      name,
      images,
      price: Number(price),
      totalPrice: Number(price),
      stock,
      quantity: 1,
      category,
      color,
    };
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch(deleteItem(id));
  };

  return (
    <div className="product-info position-relative">
      <h1 className="text-capitalize">{name}</h1>

      <div className="rating-container d-flex gap-0 align-items-center">
        <span className="rating">
          {[...Array(5)].map((_, i) => {
            if (i + 1 <= Math.floor(stars)) {
              return <FaStar key={i} />;
            }
            return <FaRegStar key={i} />;
          })}

          <span className="p-1">{stars}</span>
        </span>
      </div>

      <div className="product-price d-flex align-items-start justify-content-between pt-3 pb-3">
        <strong className="text-primary display-6 ">
          <CurrencyFormatter amount={price} currency={'USD'} />
        </strong>
        {/* <del className="ms-2">$240.00</del> */}
        {stock > 0 && (
          <div className="stock-number text-dark pt-0">
            <em>{stock} in stock</em>
          </div>
        )}
      </div>

      <p>{description}</p>

      <div className="cart-wrap pt-3">
        {stock > 0 && (
          <div className="color-options d-flex align-items-center">
            <h6 className="item-title fw-bold mb-0 me-2">Color:</h6>
            {colors.map((name, i) => (
              <ColorSwatch colorName={name} key={i} type="radio" index={i} setColor={setColor} color={color} />
            ))}
          </div>
        )}

        <div className="stock-button-wrap my-4">
          <div className="d-flex flex-wrap pt-2">
            {stock > 0 && isCart && <QuantityButton id={id} />}
            {stock === 0 && <div className="outOfStock-tag">Out of Stock❗</div>}
            {stock > 0 && !isCart && (
              <button className="btn me-2" onClick={handleAddToCart}>
                Add to cart
              </button>
            )}
            {isCart && (
              <button className="btn bg-danger border-danger me-2" onClick={handleRemoveFromCart}>
                Remove from cart
              </button>
            )}

            <button className="btn-sm wishlist-btn" onClick={handleWishlist}>
              {!isItemInWishlist ? <Image width={30} height={30} src={WithOutHeart} alt="" /> : <Image width={70} height={70} src={HeartAnime} alt="" />}
            </button>
          </div>
        </div>
      </div>

      <div className="meta-product pt-4">
        <div className="meta-item d-flex align-items-baseline">
          <h6 className="item-title fw-bold no-margin pe-2">Manufactured by:</h6>
          <ul className="select-list list-unstyled d-flex">
            <li className="select-item text-capitalize">{company}</li>
          </ul>
        </div>

        <div className="meta-item d-flex align-items-baseline">
          <h6 className="item-title fw-bold no-margin pe-2">SKU:</h6>
          <ul className="select-list list-unstyled d-flex">
            <li className="select-item">{id}</li>
          </ul>
        </div>

        <div className="meta-item d-flex align-items-baseline">
          <h6 className="item-title fw-bold no-margin pe-2">Category:</h6>
          <ul className="select-list list-unstyled d-flex">
            <li className="select-item">{category}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailBlock;
