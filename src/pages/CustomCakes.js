import React from 'react';

function CustomCakes() {

  return (
    <div className="container py-5">

      <h2>Custom Cake Orders</h2>

      <p>Design your perfect cake below:</p>

      <form className="mt-4">

        <input
          className="form-control mb-3"
          placeholder="Your Name"
        />

        <input
          className="form-control mb-3"
          placeholder="Cake Type (Chocolate, Vanilla...)"
        />

        <input
          type="date"
          className="form-control mb-3"
        />

        <textarea
          className="form-control mb-3"
          placeholder="Special Instructions"
        />

        <button className="btn btn-warning">
          Submit Order
        </button>

      </form>

    </div>
  );
}

export default CustomCakes;