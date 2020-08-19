import React, { ChangeEvent, FC, FormEvent } from 'react';
import { Input } from '../UI/Input';
import { UserI, NewUser } from '../../utils/interfaces';
import './_Form.scss';

interface Props {
  newUser: UserI | NewUser;
  onClickHandler: (event: FormEvent) => void;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  title: string;
  buttonText: string;
}

export const Form: FC<Props> = ({
  newUser,
  onClickHandler,
  onChangeHandler,
  title,
  buttonText,
}) => {
  return (
    <form className="col s6 offset-s3">
      <h2>{title}</h2>
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
            onClick={onClickHandler}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};
