import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-pink mb-3">Your Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/products" className="btn btn-pink">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-pink mb-4">Your Cart</h2>
      {cart.map((item, i) => (
        <div
          key={i}
          className="d-flex justify-content-between align-items-center card-soft p-3 mb-2"
        >
          <span>{item.name} × {item.qty}</span>
          <span>${(item.price * item.qty).toFixed(2)}</span>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeFromCart(item.name)}
          >
            Remove
          </button>
        </div>
      ))}
      <h4 className="text-end mt-4">Total: ${total.toFixed(2)}</h4>

      <div className="text-end mt-4">
        <Link to="/checkout" className="btn btn-pink">Proceed to Checkout</Link>
      </div>
    </div>
  );
}
export default Cart;