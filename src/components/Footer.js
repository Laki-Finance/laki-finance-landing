import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Investment Platform | All Rights Reserved</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  );
};

export default Footer;
