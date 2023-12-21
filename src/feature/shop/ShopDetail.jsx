import { useLoaderData } from 'react-router-dom';
import { getSingleProduct } from '../../services/serviceApi';
import { Container } from 'react-bootstrap';

const ShopDetail = () => {
  const getSingleProduct = useLoaderData();
  console.log('getSingleProduct', getSingleProduct);
  return (
    <div className="single-product">
      <Container></Container>
    </div>
  );
};

export const loader = async (request) => {
  console.log('request', request);
  const singleProduct = await getSingleProduct(request);
  return singleProduct;
};

export default ShopDetail;
