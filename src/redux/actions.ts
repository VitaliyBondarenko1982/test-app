import { Dispatch } from 'redux';
import axios from 'axios';
import {
  LOAD_USERS_SUCCESS,
  SET_NEW_USER_DESC,
  SET_NEW_USER_NAME,
  SET_NEW_USER_SURNAME,
  START_LOADING,
} from './actionTypes';
import { State, UserI } from '../utils/interfaces';

export const startLoading = () => ({
  type: START_LOADING,
});

export const loadUsersSuccess = (users: UserI[]) => ({
  type: LOAD_USERS_SUCCESS,
  users,
});

export const setNewUserName = (name: string) => ({
  type: SET_NEW_USER_NAME,
  name,
});

export const setNewUserSurname = (surname: string) => ({
  type: SET_NEW_USER_SURNAME,
  surname,
});

export const setNewUserDesc = (desc: string) => ({
  type: SET_NEW_USER_DESC,
  desc,
});

export const loadUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get('http://77.120.241.80:8911/api/users');
      const { data } = response;

      dispatch(loadUsersSuccess(data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const postNewUser = () => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { newUser } = getState();

    dispatch(startLoading());

    try {
      await axios.post('http://77.120.241.80:8911/api/users', newUser);
      dispatch(setNewUserName(''));
      dispatch(setNewUserSurname(''));
      dispatch(setNewUserDesc(''));
    } catch (e) {
      console.log(e);
    }
  };
};
