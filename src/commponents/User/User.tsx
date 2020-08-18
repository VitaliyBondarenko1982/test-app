import React, { FC } from 'react';

interface Props {
  name: string;
  surname: string;
  desc: string;
}

export const User: FC<Props> = ({ name, surname, desc }) => {
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
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
