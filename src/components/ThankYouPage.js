// src/components/ThankYouPage.js
import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <h1>Thank You for Exploring Our Plant Collection!</h1>
      <p>Your interest in our plants means a lot to us. We hope you find the perfect one!</p>
      <p>Feel free to continue browsing through our wide range of plants and products.</p>
      <Link to="/" className="continue-shopping-button">Continue Shopping</Link>
    </div>
  );
};

export default ThankYouPage;
