import React, { FC } from 'react';
import { NavBar } from '../commponents/NavBar/NavBar';
import './_Layout.scss';

export const Layout: FC = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="main">
        {children}
      </div>
    </div>
  );
};
