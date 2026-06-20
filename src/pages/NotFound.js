import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 style={{ fontSize: "5rem", color: "#ff4da6" }}>404</h1>
      <h3>Page Not Found</h3>
      <p>Looks like this page got eaten before you arrived.</p>
      <Link to="/" className="btn btn-pink mt-3">Back to Home</Link>
    </div>
  );
}
export default NotFound;