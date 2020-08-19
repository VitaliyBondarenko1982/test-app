import React, {
  FC, ChangeEvent, FormEvent, useEffect,
} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { State, NewUser } from '../../utils/interfaces';
import {
  setNewUser as setNewUserAction,
  postNewUser as postNewUserAction,
} from '../../redux/actions';
import { Form } from '../Form';

interface StateProps {
  newUser: NewUser;
}

interface DispatchProps {
  setNewUser: (value: string, name: string) => void;
  postNewUser: () => void;
}

type Props = StateProps & DispatchProps;

export const CreateUserTemplate: FC<Props> = ({
  setNewUser,
  newUser,
  postNewUser,
}) => {
  const history = useHistory();

  useEffect(() => {
    return () => {
      setNewUser('', 'name');
      setNewUser('', 'surname');
      setNewUser('', 'desc');
    };
  }, [setNewUser]);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name: nameControl } = event.target;

    switch (nameControl) {
      case 'name':
        setNewUser(value, nameControl);
        break;
      case 'surname':
        setNewUser(value, nameControl);
        break;
      case 'desc':
        setNewUser(value, nameControl);
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
  setNewUser: setNewUserAction,
  postNewUser: postNewUserAction,
};

export const CreateUser = connect(mapStateToProps, mapDispatchToProps)(CreateUserTemplate);
