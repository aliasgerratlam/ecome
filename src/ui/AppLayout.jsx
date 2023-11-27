import { Outlet } from 'react-router-dom';
import Header from './header';

const AppLayout = () => {
  return (
    <div className="page-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
