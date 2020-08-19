import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../User';
import { loadUsers as loadUsersAction } from '../../redux/actions';
import { State, UserI } from '../../utils/interfaces';
import './_Users.scss';
import { Loader } from '../UI/Loader';

interface StateProps {
  users: UserI[];
  loading: boolean;
}

interface DispatchProps {
  loadUsers: () => void;
}

type Props = StateProps & DispatchProps;

const UsersTemplate: FC<Props> = ({
  loadUsers,
  users,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const amountOnPage = 5;

  const amountOfPages = useMemo(() => {
    return Math.ceil(users.length / 5);
  }, [users]);

  let pages: number[] = [];

  pages = useMemo(() => {
    const pagesArray = [];

    for (let i = 1; i <= amountOfPages; i += 1) {
      pagesArray.push(i);
    }

    return pagesArray;
  }, [pages]);

  const visibleUsers = useMemo(() => {
    const cutUsers = users.slice((currentPage - 1) * amountOnPage, currentPage * amountOnPage);

    if (!cutUsers.length && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }

    return cutUsers;
  }, [users, currentPage, amountOnPage]);

  const onNextPageClick = () => {
    if (currentPage === amountOfPages) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  const onPrevPageClick = () => {
    if (currentPage === 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const onPageClick = (page: number) => {
    setCurrentPage(page);
  };

  if (!visibleUsers.length) {
    return <h1>No users. Create new user!</h1>;
  }

  return (
    <>
      { loading ? <Loader /> : null}
      <div className="row users">
        {visibleUsers.map((user) => {
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
      {users.length > 5 ? (
        <ul className="pagination">
          <li
            className={cx(currentPage === 1 ? 'disabled' : 'waves-effect')}
            onClick={onPrevPageClick}
          >
            <NavLink to={`/users/${currentPage + 1}`}><i className="material-icons">chevron_left</i></NavLink>
          </li>
          {pages.map(page => {
            return (
              <li
                className={cx(currentPage === page ? 'active' : 'waves-effect')}
                key={uuidv4()}
                onClick={() => onPageClick(page)}
              >
                <NavLink
                  to={`/users/${page}`}
                >
                  {page}
                </NavLink>
              </li>
            );
          })}
          <li
            className={cx(currentPage === amountOfPages ? 'disabled' : 'waves-effect')}
            onClick={onNextPageClick}
          >
            <NavLink to={`/users/${currentPage + 1}`}><i className="material-icons">chevron_right</i></NavLink>
          </li>
        </ul>
      ) : null}

    </>
  );
};

const mapStateToProps = (state: State) => ({
  users: state.users,
  loading: state.loading,
});

const mapDispatchToProps = {
  loadUsers: loadUsersAction,
};

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersTemplate);
