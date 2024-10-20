// src/components/AddToCartModal.js
import React from 'react';

const AddToCartModal = ({ product, onClose, onConfirm }) => {
  if (!product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Product Details</h2>
        
        {/* Product Details */}
        <img src={product.image} alt={product.name} className="product-modal-image" />
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>

        {/* Confirm and Close Buttons */}
        <div className="modal-buttons">
          <button className="confirm-button" onClick={() => onConfirm(product)}>Confirm</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
