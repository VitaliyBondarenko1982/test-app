import React, { FC, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input } from '../UI/Input';
import { State, NewUser } from '../../utils/interfaces';
import {
  setNewUserDesc as setNewUserDescAction,
  setNewUserSurname as setNewUserSurnameAction,
  setNewUserName as setNewUserNameAction,
  postNewUser as postNewUserAction,
} from '../../redux/actions';
import './_CreateUser.scss';

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

  const onclickHandler = () => {
    postNewUser();
    setTimeout(() => {
      history.push('/');
    }, 500);
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Create new user</h2>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <div>
              <Input
                label="Name"
                id="name"
                name="name"
                placeholder="Enter name"
                value={newUser.name}
                onChange={onChangeHandler}
              />
              <Input
                label="Surname"
                id="surname"
                name="surname"
                placeholder="Enter surname"
                value={newUser.surname}
                onChange={onChangeHandler}
              />
              <div className="input-field">
                <textarea
                  id="desc"
                  name="desc"
                  placeholder="Enter description"
                  className="yellow-input materialize-textarea"
                  value={newUser.desc}
                  onChange={onChangeHandler}
                />
                <label htmlFor="desc">Description</label>
                <span className="helper-text hidden">Helper text</span>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              type="button"
              className="btn yellow darken-4"
              onClick={onclickHandler}
            >
              Create user
            </button>
          </div>
        </div>
      </div>
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
