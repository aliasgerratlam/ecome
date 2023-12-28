import User from '../assets/images/user.svg';
import Cart from '../assets/images/cart.svg';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="custom-navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          Ecome<span>.</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <a className="nav-link" href="about.html">
                About us
              </a>
            </li>
            <li>
              <a className="nav-link" href="services.html">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link" href="contact.html">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <img src={User} />
              </a>
            </li>
            <li>
              <a className="nav-link" href="cart.html">
                <img src={Cart} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
