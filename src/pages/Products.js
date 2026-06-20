import React from 'react';
import { useCart } from '../context/CartContext';
import chocolateCake from '../images/chocolate-cake.jpg';
import croissant from '../images/croissant.jpg';
import pinkDonut from '../images/pink-donut.jpg';
import strawberryCupcake from '../images/strawberry-cupcakes.jpg';

function Products() {
  const { addToCart } = useCart();

  const items = [
    { name: "Chocolate Cake", price: 25, img: chocolateCake },
    { name: "Strawberry Cupcake", price: 5, img: strawberryCupcake },
    { name: "Croissant", price: 4, img: croissant },
    { name: "Pink Donut", price: 3, img: pinkDonut }
  ];

  return (
    <div>
      <h2 className="text-pink mb-4">Our Products</h2>
      <div className="row">
        {items.map((item, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card-soft p-3 text-center">
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid rounded mb-2"
                style={{ height: '160px', width: '100%', objectFit: 'cover' }}
              />
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