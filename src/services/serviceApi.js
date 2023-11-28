import axios from 'axios';

const API_URL = 'https://course-api.com/react-store-products';

export const getProduct = async () => {
  try {
    const res = await axios.get(`${API_URL}`);
    // if (res.status !== 200) throw Error('Failed getting products');
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.error('error', error.message);
  }

  //   const res = await fetch(`${API_URL}/products`);
  //   if (!res.ok) throw Error('Failed getting products');
  //   const { data } = await res.json();
  //   return data;
};
