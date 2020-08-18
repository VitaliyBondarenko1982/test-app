import React, { FC } from 'react';
import { NavBar } from '../commponents/NavBar/NavBar';

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
