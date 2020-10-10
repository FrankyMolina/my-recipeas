import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__homeImg">
        <Link to="/">
          <img src="/assets/cooking.jpg" alt="cooking puppet" />
        </Link>
      </div>

      <div className="navbar__links">
        <Link to="/login">Login</Link>
        <Link to="/shopping-list">Shopping list</Link>
      </div>
    </div>
  );
}
