import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
function Header() {
     const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="header">
      <Link onClick={scrollToTop} to="/" className="logo">
        <img src={require("../images/taco-logo.png")} alt="" />
        QFood
      </Link>

      <nav>
        <Link onClick={scrollToTop} to="/">
          home
        </Link>
        <Link onClick={scrollToTop} to="/about">
          about
        </Link>
        <Link onClick={scrollToTop} to="/promotions">
          promotions
        </Link>
        <Link onClick={scrollToTop} to="/menu">
          menu
        </Link>
        
      </nav>

      <div className="icons">
       
      </div>
    </div>
  );
}

export default Header;
