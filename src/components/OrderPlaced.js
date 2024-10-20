// src/components/OrderPlaced.js
import React from "react";

const OrderPlaced = ({ onContinueShopping }) => {
  return (
    <div className="order-placed-container">
      <h2>Congratulations</h2>
      <p>Order Placed!</p>
      <img src="https://your-plant-image-url.com" alt="Order Placed" />
      <p>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
      <button className="continue-shopping-button" onClick={onContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderPlaced;
