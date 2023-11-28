import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cross from '../../assets/images/cross.svg';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <Col lg={3}>
      <Link className="product-item">
        <img src={image} className="img-fluid product-thumbnail" />
        <h3 className="product-title text-capitalize">{name}</h3>
        <strong className="product-price">${price}</strong>

        <span className="icon-cross">
          <img src={Cross} className="img-fluid" />
        </span>
      </Link>
    </Col>
  );
};

export default ProductCard;
