import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log('navigation', navigation);

  return (
    <div className="page-layout">
      {isLoading && <Loader />}

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
