import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        {/* Logo and Company Name */}
        <img src="path/to/logo.png" alt="Lamu Logo" className="logo" />
        <span className="company-name">Lamu</span>
      </div>

      {/* Centered Navigation Links */}
      <div className="navbar-center">
        <ul className="navbar-links">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={500}>
              Features
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Sign In and Register Buttons */}
      <div className="navbar-right">
        <button className="nav-button sign-in">Sign In</button>
        <button className="nav-button register">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
