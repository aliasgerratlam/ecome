import { useLoaderData } from 'react-router-dom';
import { getSingleProduct } from '../../services/serviceApi';
import { Col, Container, Row } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import CurrencyFormatter from '../../utils/FormatCurrency';
import { IoMdHeart } from 'react-icons/io';
import QuantityButton from './QuantityButton';
import ColorSwatch from './ColorSwatch';
import { useEffect } from 'react';
import ImageCollection from './ImageCollection';

const ShopDetail = () => {
  const getSingleProduct = useLoaderData();
  const {
    id,
    name,
    stars,
    price,
    description,
    stock,
    category,
    company,
    colors,
    images,
  } = getSingleProduct;
  console.log('getSingleProduct', getSingleProduct);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="single-product">
      <Container>
        <Row>
          <Col>
            <ImageCollection stock={stock} data={images} />
          </Col>

          <Col>
            <div className="product-info position-relative">
              <div className="element-header">
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
                        <ColorSwatch colorName={name} key={i} index={i} />
                      ))}
                    </div>
                  )}

                  <div className="stock-button-wrap my-4">
                    <div className="d-flex flex-wrap pt-2">
                      {stock > 0 && <QuantityButton stock={stock} />}
                      {stock === 0 && (
                        <div className="outOfStock-tag">❗Out of Stock</div>
                      )}
                      {stock > 0 && (
                        <button className="btn me-2">Add to cart</button>
                      )}
                      <button className="btn-sm wishlist-btn rounded-circle border border-black">
                        <IoMdHeart />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="meta-product pt-4">
                  <div className="meta-item d-flex align-items-baseline">
                    <h6 className="item-title fw-bold no-margin pe-2">
                      Manufactured by:
                    </h6>
                    <ul className="select-list list-unstyled d-flex">
                      <li
                        data-value="S"
                        className="select-item text-capitalize"
                      >
                        {company}
                      </li>
                    </ul>
                  </div>

                  <div className="meta-item d-flex align-items-baseline">
                    <h6 className="item-title fw-bold no-margin pe-2">SKU:</h6>
                    <ul className="select-list list-unstyled d-flex">
                      <li data-value="S" className="select-item">
                        {id}
                      </li>
                    </ul>
                  </div>

                  <div className="meta-item d-flex align-items-baseline">
                    <h6 className="item-title fw-bold no-margin pe-2">
                      Category:
                    </h6>
                    <ul className="select-list list-unstyled d-flex">
                      <li data-value="S" className="select-item">
                        {category}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async (request) => {
  const singleProduct = await getSingleProduct(request);
  return singleProduct;
};

export default ShopDetail;
