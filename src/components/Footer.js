import React from 'react';
import { FaBirthdayCake, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffe0f0", marginTop: "50px" }}>

      <div className="container py-5">

        <div className="row">

          {/* BRAND SECTION */}
          <div className="col-md-4 mb-4">
            <h4 style={{ color: "#ff4da6" }}>
              <FaBirthdayCake style={{ marginRight: "8px" }} />
              Guliana Bakery
            </h4>

            <p>
              Freshly baked cakes, pastries, and coffee made with love every day.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#d63384" }}>Quick Links</h5>

            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/cakes" className="footer-link">Custom Cakes</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#d63384" }}>Contact</h5>

            <p><FaPhoneAlt style={{ color: "#ff4da6" }} /> +61 400 000 000</p>
            <p><FaEnvelope style={{ color: "#ff4da6" }} /> contact@gulianabakery.com</p>
            <p><FaMapMarkerAlt style={{ color: "#ff4da6" }} /> Brisbane, Australia</p>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="text-center pt-3 border-top">
          <p className="mb-0">
            © {new Date().getFullYear()} Guliana Bakery. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;