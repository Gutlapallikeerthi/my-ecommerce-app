// src/components/Header.js
import React from "react";

const Header = ({ cartCount, openCartModal, setSearchQuery }) => {
  return (
    <header>
      <div className="main-header">
        
        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for plants..."
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
          <button className="search-button">Search</button>
        </div>

        {/* Icons for Profile and Cart */}
        <div className="icons-container">
          <div className="profile-icon">
            <i className="fa fa-user" /> My Profile
          </div>
          <div className="cart-icon" onClick={openCartModal}>
            <i className="fa fa-shopping-cart" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
