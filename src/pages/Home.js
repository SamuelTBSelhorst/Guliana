import React from 'react';
import { FaBirthdayCake, FaCoffee } from 'react-icons/fa';

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="display-4 fw-bold text-pink">Guliana Bakery</h1>
        <p className="lead">Freshly baked cakes, pastries, and coffee every day.</p>
        <button className="btn btn-pink btn-lg mt-3">Order Now</button>
      </div>

      <div className="row text-center mt-5">
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
          <FaBirthdayCake size={40} color="#ff4da6" />
          <h4 className="mt-2">Fresh Cakes</h4>
          <p>Custom cakes made daily.</p>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
          <FaCoffee size={40} color="#ff4da6" />
          <h4 className="mt-2">Coffee & Drinks</h4>
          <p>Perfect pairing with pastries.</p>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
          <FaBirthdayCake size={40} color="#ff4da6" />
          <h4 className="mt-2">Special Orders</h4>
          <p>Birthdays, weddings, events.</p>
        </div>
      </div>

      <div className="mt-5" data-aos="fade-up">
        <h3 className="text-center text-pink mb-4">What Our Customers Say</h3>
        <div className="row">
          {[
            { name: "Emily R.", text: "Best chocolate cake I've ever had — ordered for my daughter's birthday and it was perfect." },
            { name: "James T.", text: "Friendly service and the coffee pairs amazingly with their croissants." },
            { name: "Aisha M.", text: "Custom wedding cake exceeded every expectation. Highly recommend!" },
          ].map((t, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card-soft p-3 h-100">
                <p className="fst-italic">"{t.text}"</p>
                <p className="fw-bold text-end mb-0">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;