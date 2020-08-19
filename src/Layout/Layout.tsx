import React, { FC } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../commponents/NavBar';
import { State } from '../utils/interfaces';
import './_Layout.scss';
import { EditUser } from '../commponents/EditUser';

interface StateProps {
  editing: boolean;
}

const LayoutTemplate: FC<StateProps> = ({ children, editing }) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="main">
        {children}
        {editing ? <EditUser /> : null}
        {editing ? <div className="overlay" /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  editing: state.editing,
});

export const Layout = connect(mapStateToProps, null)(LayoutTemplate);
