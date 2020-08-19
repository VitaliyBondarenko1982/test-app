import React, {
  ChangeEvent, FC, useEffect,
} from 'react';
import { connect } from 'react-redux';
import { Form } from '../Form';
import { State, UserI } from '../../utils/interfaces';
import {
  setEditingUser as setEditingUserAction,
  setEditedUser as setEditedUserAction,
  setEditingUserId as setEditingUserIdAction,
} from '../../redux/actions';
import './_EditUser.scss';

interface StateProps {
  editUser: UserI;
}

interface DispatchProps {
  setEditingUser: (value: string, name: string) => void;
  setEditedUser: (id: number) => void;
  setEditingUserId: (id: number) => void;
}

type TotalProps = StateProps & DispatchProps;

const EditUserTemplate: FC<TotalProps> = ({
  editUser,
  setEditingUser,
  setEditedUser,
  setEditingUserId,
}) => {
  useEffect(() => {
    return () => {
      setEditingUser('', 'name');
      setEditingUser('', 'surname');
      setEditingUser('', 'desc');
      setEditingUserId(0);
    };
  }, []);
  const onClickHandler = () => {
    setEditedUser(editUser.id);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name: nameControl } = event.target;

    switch (nameControl) {
      case 'name':
        setEditingUser(value, nameControl);
        break;
      case 'surname':
        setEditingUser(value, nameControl);
        break;
      case 'desc':
        setEditingUser(value, nameControl);
        break;
      default:
    }
  };

  return (
    <div
      className="row edit-user"
    >
      <Form
        newUser={editUser}
        onClickHandler={onClickHandler}
        onChangeHandler={onChangeHandler}
        title="Edit user"
        buttonText="Save user"
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  editUser: state.editUser,
});

const mapDispatchToProps = {
  setEditingUser: setEditingUserAction,
  setEditedUser: setEditedUserAction,
  setEditingUserId: setEditingUserIdAction,
};

export const EditUser = connect(mapStateToProps, mapDispatchToProps)(EditUserTemplate);
