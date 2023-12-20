import { useParams } from 'react-router-dom';

const ShopDetail = () => {
  let { id } = useParams();

  return <h1>ShopDetail: {id}</h1>;
};

export default ShopDetail;
