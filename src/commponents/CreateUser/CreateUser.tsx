import React, { FC, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { State, NewUser } from '../../utils/interfaces';
import {
  setNewUserDesc as setNewUserDescAction,
  setNewUserSurname as setNewUserSurnameAction,
  setNewUserName as setNewUserNameAction,
  postNewUser as postNewUserAction,
} from '../../redux/actions';
import { Form } from '../Form';

interface StateProps {
  newUser: NewUser;
}

interface DispatchProps {
  setNewUserName: (value: string) => void;
  setNewUserSurname: (value: string) => void;
  setNewUserDesc: (value: string) => void;
  postNewUser: () => void;
}

type Props = StateProps & DispatchProps;

export const CreateUserTemplate: FC<Props> = ({
  setNewUserName,
  setNewUserSurname,
  setNewUserDesc,
  newUser,
  postNewUser,
}) => {
  const history = useHistory();

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name: nameControl } = event.target;

    switch (nameControl) {
      case 'name':
        setNewUserName(value);
        break;
      case 'surname':
        setNewUserSurname(value);
        break;
      case 'desc':
        setNewUserDesc(value);
        break;
      default:
    }
  };

  const onClickHandler = (event: FormEvent) => {
    event.preventDefault();
    postNewUser();
    setTimeout(() => {
      history.push('/');
    }, 500);
  };

  return (
    <div className="row">
      <Form
        newUser={newUser}
        onClickHandler={onClickHandler}
        onChangeHandler={onChangeHandler}
        title="Create new user"
        buttonText="Create user"
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  newUser: state.newUser,
});

const mapDispatchToProps = {
  setNewUserName: setNewUserNameAction,
  setNewUserSurname: setNewUserSurnameAction,
  setNewUserDesc: setNewUserDescAction,
  postNewUser: postNewUserAction,
};

export const CreateUser = connect(mapStateToProps, mapDispatchToProps)(CreateUserTemplate);
