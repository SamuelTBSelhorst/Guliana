import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setSending(true);
    setError('');

    const orderDetails = cart
      .map((i) => `${i.name} x${i.qty} - $${(i.price * i.qty).toFixed(2)}`)
      .join('\n');

    try {
      const response = await fetch('https://formspree.io/f/xeewydoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          order: orderDetails,
          total: `$${total.toFixed(2)}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send order');
      }

      const orderSummary = { items: cart, total };
      clearCart();
      navigate('/order-success', { state: orderSummary });
    } catch (err) {
      console.error('Order send error:', err);
      setError('Something went wrong sending your order. Please try again or call us.');
    } finally {
      setSending(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-pink">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-pink mb-4">Checkout</h2>

      <div className="mb-4">
        {cart.map((item, i) => (
          <div key={i} className="d-flex justify-content-between border-bottom py-2">
            <span>{item.name} × {item.qty}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
        <h5 className="text-end mt-2">Total: ${total.toFixed(2)}</h5>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          name="phone"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-pink" type="submit" disabled={sending}>
          {sending ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}
export default Checkout;