import React from 'react';
import { NavLink } from 'react-router-dom';
import './_NavBar.scss';

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">Merehead</NavLink>
        <ul id="nav-mobile" className="right">
          <li><NavLink to="/">Users</NavLink></li>
          <li><NavLink to="/create-user">Create user</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};
