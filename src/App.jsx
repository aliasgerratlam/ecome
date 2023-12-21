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
