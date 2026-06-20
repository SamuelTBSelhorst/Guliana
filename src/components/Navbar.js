import React from 'react';
import { Link } from 'react-router-dom';
import { FaBirthdayCake, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#ffe0f0" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <FaBirthdayCake style={{ color: "#ff4da6", marginRight: "8px" }} />
          Guliana Bakery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cakes">Custom Cakes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart color="#ff4da6" size={20} />
                {cartCount > 0 && (
                  <span
                    className="position-absolute badge rounded-pill"
                    style={{
                      backgroundColor: "#ff4da6",
                      top: "-5px",
                      right: "-10px",
                      fontSize: "0.65rem"
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;