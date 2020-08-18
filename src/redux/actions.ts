import { Dispatch } from 'redux';
import axios from 'axios';
import {
  LOAD_USERS_SUCCESS,
  START_LOADING,
} from './actionTypes';
import { UserI } from '../utils/interfaces';

export const startLoading = () => ({
  type: START_LOADING,
});

export const loadUsersSuccess = (users: UserI[]) => ({
  type: LOAD_USERS_SUCCESS,
  users,
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
