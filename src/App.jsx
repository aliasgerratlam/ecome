import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import AppLayout from './ui/AppLayout';
import Home, { loader as homeProductLoader } from './ui/Home';
import Shop, { loader as shopProductLoader } from './feature/shop/Shop';
import ShopDetail, {
  loader as singleShopLoader,
} from './feature/shop/ShopDetail';
import { action as shopAction } from './feature/shop/Filter';
import Signup from './feature/auth/Signup';
import Cart from './feature/cart/Cart';
import Checkout from './feature/checkout/Checkout';
import { action as checkoutAction } from './feature/checkout/CheckoutForm';
import ThankYou, {
  loader as thankYouLoader,
} from './feature/checkout/ThankYou';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: homeProductLoader,
        },
        {
          path: '/shop',
          element: <Shop />,
          loader: shopProductLoader,
          action: shopAction,
        },
        {
          path: '/shop/:id',
          element: <ShopDetail />,
          loader: ({ params }) => {
            return singleShopLoader(params.id);
          },
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
          action: checkoutAction,
        },
        {
          path: '/checkout/:id',
          element: <ThankYou />,
          loader: ({ params }) => {
            return thankYouLoader(params.id);
          },
        },
      ],
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
