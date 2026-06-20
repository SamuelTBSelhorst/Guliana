# Guliana Bakery 🎂

A full-featured e-commerce website for a fictional bakery, built to demonstrate a complete customer ordering flow — from browsing products to checkout to order confirmation — along with a lightweight admin view.

**[Live Demo](https://guliana.netlify.app/)**

## Features

- **Product catalog** with images, pricing, and add-to-cart functionality
- **Shopping cart** with quantity adjustment (increase/decrease/remove) using React Context API for global state
- **Checkout flow** that captures customer details and sends order notifications via Formspree
- **Order confirmation page** with a dynamic order summary
- **Custom cake request form** for bespoke orders
- **Contact form** with live submission handling and success/error states
- **Admin page** for viewing where orders/messages are managed
- **Responsive design** built with Bootstrap, including scroll-triggered animations (AOS)
- **404 page** for unmatched routes
- **SEO basics**: custom favicon, page titles, Open Graph/Twitter meta tags for social sharing previews

## Tech Stack

- **React** (functional components, hooks)
- **React Router** for client-side routing and nested layouts
- **Context API** for cart state management
- **Bootstrap 5** for responsive layout and components
- **AOS (Animate On Scroll)** for scroll-based animations
- **Formspree** for serverless form/email handling (checkout, contact, custom cake requests)
- **React Icons** for iconography
- Deployed on **Netlify**, connected to GitHub for continuous deployment

## Project Structure
src/

├── components/       # Shared layout components (Navbar, Footer, Layout)

├── context/          # Cart state (CartContext)

├── pages/            # Route-level pages (Home, Products, Cart, Checkout, etc.)

├── images/           # Product and hero imagery

└── App.js            # Route definitions

## Getting Started

```bash
npm install
npm start
```

Runs the app locally at `http://localhost:3000`.

## What I'd Improve Next

- Replace the Formspree-based order handling with a proper backend (Node/Express + database) so the admin dashboard can show a live, queryable list of orders instead of linking out to email
- Add automated tests for cart logic and checkout flow
- Swap placeholder product photography for real, professionally shot images
- Add order status tracking (pending → confirmed → completed) visible to both customer and admin
- Implement a proper quantity/inventory system tied to actual stock levels

## Notes

This project was built as a learning/portfolio piece to practice end-to-end e-commerce flow in React — from UI to cart logic to third-party service integration — without relying on a pre-built e-commerce framework.