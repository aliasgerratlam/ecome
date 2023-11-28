import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import AppLayout from './ui/AppLayout';
import Home, { loader as homeProductLoader } from './ui/Home';
import Shop, { loader as shopProductLoader } from './feature/shop/Shop';

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
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
