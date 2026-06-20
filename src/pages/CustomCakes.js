import React, { useState } from 'react';

function CustomCakes() {
  const [form, setForm] = useState({
    name: '',
    cakeType: '',
    date: '',
    instructions: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xeewydoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Custom Cake Order',
          name: form.name,
          cakeType: form.cakeType,
          date: form.date,
          instructions: form.instructions,
        }),
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', cakeType: '', date: '', instructions: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="container py-5">
      <h2>Custom Cake Orders</h2>
      <p>Design your perfect cake below:</p>
      <form className="mt-4" onSubmit={handleSubmit}>
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
          name="cakeType"
          placeholder="Cake Type (Chocolate, Vanilla...)"
          value={form.cakeType}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className="form-control mb-3"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control mb-3"
          name="instructions"
          placeholder="Special Instructions"
          value={form.instructions}
          onChange={handleChange}
        />
        {status === 'success' && (
          <p className="text-success">Order request sent! We'll confirm with you shortly.</p>
        )}
        {status === 'error' && (
          <p className="text-danger">Something went wrong. Please try again or call us.</p>
        )}
        <button className="btn btn-warning" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Submitting...' : 'Submit Order'}
        </button>
      </form>
    </div>
  );
}
export default CustomCakes;