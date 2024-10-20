// src/components/CartModal.js
import React from "react";

const CartModal = ({ cartItems, onClose, onRemove, onPlaceOrder }) => {
  return (
    <div className="modal">
      <div className="modal-content cart-modal">
        <h2>Your Cart</h2>
        
        {/* Display Cart Items */}
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
                <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}

        {/* Close and Place Order Buttons */}
        <div className="modal-buttons">
          <button className="place-order-button" onClick={onPlaceOrder} disabled={cartItems.length === 0}>
            Place Order
          </button>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
