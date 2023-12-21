import axios from 'axios';

const API_URL = 'https://course-api.com/react-store-products';
const API_SINGLE_URL = 'https://course-api.com/react-store-single-product';

export const getProduct = async () => {
  try {
    const res = await axios.get(`${API_URL}`);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.error('error', error.message);
  }
};

export const getSingleProduct = async (id) => {
  console.log('id', id);
  try {
    const res = await axios.get(`${API_SINGLE_URL}?id=${id}`);
    return res.data;
  } catch (error) {
    console.error('error', error.message);
  }
};
