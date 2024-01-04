import User from '../assets/images/user.svg';
import Cart from '../assets/images/cart.svg';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartQuantity } from '../feature/cart/cartSlice';
import Search from './Search';

const Header = () => {
  const count = useSelector(getCartQuantity);

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="custom-navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          Ecome<span>.</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              <a className="nav-link">About us</a>
            </li>
            <li>
              <a className="nav-link">Services</a>
            </li>
            <li>
              <a className="nav-link">Blog</a>
            </li>
            <li>
              <a className="nav-link">Contact us</a>
            </li>
            <li>
              <NavLink className="nav-link" to="/wishlist">
                Wishlist
              </NavLink>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="mx-1">
              <Search />
            </li>
            <li>
              <a className="nav-link" href="#">
                <img src={User} />
              </a>
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                {count > 0 && <span className="count">{count}</span>}
                <img src={Cart} />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
