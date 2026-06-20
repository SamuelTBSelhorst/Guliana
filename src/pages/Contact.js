import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

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
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="container py-5">
      <h2 style={{ color: "#ff4da6" }}>Contact Guliana Bakery</h2>
      <div className="mt-4">
        <p><FaPhoneAlt color="#ff4da6" /> +61 400 000 000</p>
        <p><FaEnvelope color="#ff4da6" /> contact@gulianabakery.com</p>
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control mb-3"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        {status === 'success' && (
          <p className="text-success">Message sent! We'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-danger">Something went wrong. Please try again.</p>
        )}
        <button className="btn btn-pink" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
export default Contact;