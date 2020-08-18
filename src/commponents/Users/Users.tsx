import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { User } from '../User';
import { loadUsers as loadUsersAction } from '../../redux/actions';
import { State, UserI } from '../../utils/interfaces';
import './_Users.scss';

interface StateProps {
  users: UserI[];
}

interface DispatchProps {
  loadUsers: () => void;
}

type Props = StateProps & DispatchProps;

const UsersTemplate: FC<Props> = ({
  loadUsers,
  users,
}) => {
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div className="row users">
      {users.map((user) => {
        return (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            desc={user.desc}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  users: state.users,
});

const mapDispatchToProps = {
  loadUsers: loadUsersAction,
};

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersTemplate);
