import React from 'react';

const Footer = () => {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation" className="footer-nav">
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </nav>
      <p>&copy; 2024 Fashion Blog</p>
    </footer>
  );
};

export default Footer;
