import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Navbar />

      {/* THIS grows and pushes footer down */}
      <main className="flex-grow-1 container py-4">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;