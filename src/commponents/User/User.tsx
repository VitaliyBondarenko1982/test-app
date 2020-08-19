import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  deleteUser as deleteUserAction,
  setEditingUser as setEditingUserAction,
  setEditingUserId as setEditingUserIdAction,
  startEditing as startEditingAction,
} from '../../redux/actions';
import { State } from '../../utils/interfaces';
import { Button } from '../UI/Button';

interface Props {
  id: number;
  name: string;
  surname: string;
  desc: string;
}

interface StateProps {
  editing: boolean;
}

interface DispatchProps {
  deleteUser: (id: number) => void;
  startEditing: () => void;
  setEditingUser: (value: string, name: string) => void;
  setEditingUserId: (id: number) => void;
}

const UserTemplate: FC<Props & DispatchProps & StateProps> = ({
  name,
  surname,
  desc,
  id,
  deleteUser,
  startEditing,
  setEditingUser,
  setEditingUserId,
}) => {
  const onRemoveClickHandler = () => {
    deleteUser(id);
  };

  const onEditClickHandler = () => {
    startEditing();
    setEditingUserId(id);
    setEditingUser(name, 'name');
    setEditingUser(surname, 'surname');
    setEditingUser(desc, 'desc');
  };

  return (
    <div className="col s12 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <span className="card-title">{surname}</span>
          <p>
            {desc}
          </p>
        </div>
        <div className="card-action">
          <Button
            onClick={onEditClickHandler}
            className="btn grey lighten-1 black-text"
          >
            Edit
          </Button>
          <Button
            onClick={onRemoveClickHandler}
            className="btn yellow darken-4"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  editing: state.editing,
});

const mapDispatchToProps = {
  deleteUser: deleteUserAction,
  startEditing: startEditingAction,
  setEditingUser: setEditingUserAction,
  setEditingUserId: setEditingUserIdAction,
};

export const User = connect(mapStateToProps, mapDispatchToProps)(UserTemplate);
