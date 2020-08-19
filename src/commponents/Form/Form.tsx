import React, {
  ChangeEvent, FC, FormEvent, useState,
} from 'react';
import cx from 'classnames';
import { Input } from '../UI/Input';
import { UserI, NewUser } from '../../utils/interfaces';
import './_Form.scss';
import { Button } from '../UI/Button';

interface Props {
  newUser: UserI | NewUser;
  onClickHandler: () => void;
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
  const [nameIsValid, setNameIsValid] = useState(true);
  const [surnameIsValid, setSurnameIsValid] = useState(true);
  const [descIsValid, setDescIsValid] = useState(true);

  const onClickWithValidation = (event: FormEvent) => {
    event.preventDefault();

    if (!newUser.name.length) {
      setNameIsValid(false);

      setInterval(() => {
        setNameIsValid(true);
      }, 2000);

      return;
    }

    if (!newUser.surname.length) {
      setSurnameIsValid(false);

      setInterval(() => {
        setSurnameIsValid(true);
      }, 2000);

      return;
    }

    if (!newUser.desc.length) {
      setDescIsValid(false);

      setInterval(() => {
        setDescIsValid(true);
      }, 2000);

      return;
    }

    onClickHandler();
  };

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
              isValid={nameIsValid}
            />
            <Input
              label="Surname"
              id="surname"
              name="surname"
              placeholder="Enter surname"
              value={newUser.surname}
              onChange={onChangeHandler}
              isValid={surnameIsValid}
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
              <span className={cx('helper-text', { hidden: descIsValid })}>Field description is required</span>
            </div>
          </div>
        </div>
        <div className="card-action">
          <Button
            onClick={onClickWithValidation}
            className="btn yellow darken-4"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
};
