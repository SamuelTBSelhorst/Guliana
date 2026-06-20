import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function OrderSuccess() {
  const location = useLocation();
  const order = location.state;

  return (
    <div className="container py-5 text-center">
      <h2 className="text-pink">Thank you! 🎂</h2>
      <p>Your order has been placed. We'll be in touch shortly to confirm.</p>

      {order && (
        <div className="card-soft p-4 mt-4 mx-auto" style={{ maxWidth: "400px", textAlign: "left" }}>
          <h5 className="mb-3">Order Summary</h5>
          {order.items.map((item, i) => (
            <div key={i} className="d-flex justify-content-between mb-1">
              <span>{item.name} × {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      )}

      <Link to="/" className="btn btn-pink mt-4">Back to Home</Link>
    </div>
  );
}
export default OrderSuccess;