import React from "react";
import "./Navbar.css"; // Create this file for styling

const Navbar = () => {
  return (
    <nav>
      <a href="#">Logo</a>
      <div className="ctrnav">
        <a href="#">PRODUCTS</a>
        <a href="#">ABOUT</a>
        <a href="#">REACH OUT</a>
      </div>
      <i className="ri-menu-line"></i>
    </nav>
  );
};

export default Navbar;
