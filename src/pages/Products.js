import React from 'react';
import { useCart } from '../context/CartContext';

function Products() {
  const { addToCart } = useCart();

  const items = [
    { name: "Chocolate Cake", price: 25 },
    { name: "Strawberry Cupcake", price: 5 },
    { name: "Croissant", price: 4 },
    { name: "Pink Donut", price: 3 }
  ];

  return (
    <div>
      <h2 className="text-pink mb-4">Our Products</h2>
      <div className="row">
        {items.map((item, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card-soft p-3 text-center">
              <h5>{item.name}</h5>
              <p className="text-muted">${item.price}</p>
              <button
                className="btn btn-pink btn-sm"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;