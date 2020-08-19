import React, { FC } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../commponents/NavBar';
import { State } from '../utils/interfaces';
import { EditUser } from '../commponents/EditUser';
import { finishEditing as finishEditingAction } from '../redux/actions';
import './_Layout.scss';

interface StateProps {
  editing: boolean;
}

interface DispatchProps {
  finishEditing: () => void;
}

type Props = StateProps & DispatchProps;

const LayoutTemplate: FC<Props> = ({
  children,
  editing,
  finishEditing,
}) => {
  const onClickHandler = () => {
    finishEditing();
  };

  return (
    <div className="layout">
      <NavBar />
      <div className="main">
        {children}
        {editing ? <EditUser /> : null}
        {editing
          ? (
            <div
              className="overlay"
              role="menu"
              tabIndex={0}
              onClick={onClickHandler}
            />
          ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  editing: state.editing,
});

const mapDispatchToProps = {
  finishEditing: finishEditingAction,
};

export const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutTemplate);
