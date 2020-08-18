import React from 'react';

export const CreateUser = () => {
  // useEffect(() => {
  //   window.M.updateTextFields();
  // }, []);

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Create new user</h2>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <div>
              <div className="input-field">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="yellow-input"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field">
                <input
                  id="surname"
                  type="text"
                  name="surname"
                  placeholder="Enter surname"
                  className="yellow-input"
                />
                <label htmlFor="surname">Surname</label>
              </div>
              <div className="input-field">
                <textarea
                  id="desc"
                  name="desc"
                  placeholder="Enter description"
                  className="yellow-input materialize-textarea"
                />
                <label htmlFor="desc">Surname</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              type="button"
              className="btn yellow darken-4"
            >
              Create user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
