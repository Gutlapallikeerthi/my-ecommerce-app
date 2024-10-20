// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ThankYouPage from "./components/ThankYouPage";
import AddToCartModal from "./components/AddToCartModal";
import CartModal from "./components/CartModal";
import OrderPlaced from "./components/OrderPlaced";
import ConfirmationModal from "./components/ConfirmationModal";
import { getAllProducts } from "./productUtils"; 
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 

  // Fetch products dynamically
  const products = getAllProducts();

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openAddToCartModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const confirmAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setModalOpen(false);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const handlePlaceOrder = () => {
    setConfirmModalOpen(true);
  };

  const confirmOrder = () => {
    setConfirmModalOpen(false);
    setCartModalOpen(false);
    setOrderPlaced(true);
  };

  return (
    <Router>
      <Header 
        cartCount={cartItems.length} 
        openCartModal={() => setCartModalOpen(true)} 
        setSearchQuery={setSearchQuery} 
      />
      <Routes>
        <Route
          path="/"
          element={<ProductCard products={filteredProducts} addToCart={openAddToCartModal} />} 
        />
        <Route path="/thank-you" element={<ThankYouPage />} /> 
      </Routes>
      {modalOpen && (
        <AddToCartModal
          product={selectedProduct}
          onClose={() => setModalOpen(false)}
          onConfirm={confirmAddToCart} 
        />
      )}
      {cartModalOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setCartModalOpen(false)}
          onRemove={handleRemoveFromCart} // Pass the remove handler
          onPlaceOrder={handlePlaceOrder}
        />
      )}
      {confirmModalOpen && (
        <ConfirmationModal
          onConfirm={confirmOrder}
          onCancel={() => setConfirmModalOpen(false)}
        />
      )}
      {orderPlaced && <OrderPlaced onContinueShopping={() => setOrderPlaced(false)} />}
    </Router>
  );
};

export default App;
