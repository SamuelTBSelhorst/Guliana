import React from 'react';
import { Link } from 'react-router-dom';
import { FaBirthdayCake, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

function AdminDashboard() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff5f9' }}>
      <div className="container py-5">

        <div className="d-flex align-items-center mb-4">
          <FaBirthdayCake size={28} color="#ff4da6" style={{ marginRight: '10px' }} />
          <h2 className="mb-0" style={{ color: '#ff4da6' }}>Guliana Bakery Admin</h2>
        </div>

        <p className="text-muted mb-5">
          Manage orders and customer messages for the bakery.
        </p>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card-soft p-4 h-100">
              <FaEnvelope size={30} color="#ff4da6" />
              <h4 className="mt-3">Orders and Messages</h4>
              <p className="text-muted">
                All incoming orders, custom cake requests, and contact messages are sent directly to your inbox and also logged in your Formspree dashboard.
              </p>
              <a href="https://formspree.io/forms" target="_blank" rel="noopener noreferrer" className="btn btn-pink mt-2">
                View Submissions
                <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
              </a>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card-soft p-4 h-100">
              <h4>Quick Links</h4>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <Link to="/products" className="footer-link">Manage Products</Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="footer-link">View Live Site</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="alert alert-light border mt-3" role="alert">
          <strong>Note:</strong> This is a lightweight admin view. Orders are currently managed via email and Formspree. A future upgrade can connect a database for real-time order tracking directly in this dashboard.
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;