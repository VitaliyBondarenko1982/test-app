import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">Merehead</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/">Users</NavLink></li>
          <li><NavLink to="/create-user">Create user</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};
