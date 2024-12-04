import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to Fashion Blog</h1>
      <h2>Where accessibility meets design</h2>
      <nav aria-label="Main Navigation" role="navigation" className="main-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
