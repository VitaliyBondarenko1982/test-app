import React, { FC } from 'react';
import { connect } from 'react-redux';
import { deleteUser as deleteUserAction } from '../../redux/actions';

interface Props {
  id: number;
  name: string;
  surname: string;
  desc: string;
}

interface DispatchProps {
  deleteUser: (id: number) => void;
}

const UserTemplate: FC<Props & DispatchProps> = ({
  name,
  surname,
  desc,
  id,
  deleteUser,
}) => {
  const onClickHandler = () => {
    deleteUser(id);
  };

  return (
    <div className="col s5 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <span className="card-title">{surname}</span>
          <p>
            {desc}
          </p>
        </div>
        <div className="card-action">
          <button
            type="button"
            className="btn grey lighten-1 black-text"
          >
            Edit
          </button>
          <button
            type="button"
            className="btn yellow darken-4"
            onClick={onClickHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteUser: deleteUserAction,
};

export const User = connect(null, mapDispatchToProps)(UserTemplate);
