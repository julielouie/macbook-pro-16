import React from 'react';

function Header(props) {
  return (
    <nav className="header navbar navbar-expand-md sticky-top">
      <div className="container">
        <div className="d-flex flex-column">
          <small className="text-muted">16-inch model</small>
          <h5>MacBook Pro</h5>
        </div>
        <ul className="navbar-nav">
          <li className="links nav-item text-muted">
            <small className="nav-link">Overview</small>
          </li>
          <li className="links nav-item">
            <small className="nav-link">Tech Specs</small>
          </li>
          <li className="links nav-item d-flex">
            <small className="extra-button text-white nav-link align-self-center">Buy</small>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
