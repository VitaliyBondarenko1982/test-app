import React, { ChangeEvent, FC, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Form } from '../Form';
import { State, UserI } from '../../utils/interfaces';
import {
  setEditingUser as setEditingUserAction,
  setEditedUser as setEditedUserAction,
} from '../../redux/actions';
import './_EditUser.scss';

interface StateProps {
  editUser: UserI;
}

interface DispatchProps {
  setEditingUser: (value: string, name: string) => void;
  setEditedUser: (id: number) => void;
}

type Props = StateProps & DispatchProps;

const EditUserTemplate: FC<Props> = ({
  editUser,
  setEditingUser,
  setEditedUser,
}) => {
  const onClickHandler = (event: FormEvent) => {
    event.preventDefault();

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
    <div className="row edit-user">
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
};

export const EditUser = connect(mapStateToProps, mapDispatchToProps)(EditUserTemplate);
