import { Dispatch } from 'redux';
import axios from 'axios';
import {
  FINISH_EDITING,
  LOAD_USERS_SUCCESS,
  SET_NEW_USER_DESC,
  SET_NEW_USER_NAME,
  SET_NEW_USER_SURNAME,
  START_EDITING,
  START_LOADING,
  SET_EDITING_USER_ID,
  SET_EDITING_USER,
  UPDATE_EDITED_USER,
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

export const createNewUser = (user: UserI) => ({
  type: SET_NEW_USER_DESC,
  user,
});

export const startEditing = () => ({
  type: START_EDITING,
});

export const finishEditing = () => ({
  type: FINISH_EDITING,
});

export const setEditingUser = (value: string, name: string) => ({
  type: SET_EDITING_USER,
  value,
  name,
});

export const setEditingUserId = (id: number) => ({
  type: SET_EDITING_USER_ID,
  id,
});

export const updateEditedUser = (user: UserI) => ({
  type: UPDATE_EDITED_USER,
  user,
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
      const response = await axios.post('http://77.120.241.80:8911/api/users', newUser);

      dispatch(createNewUser(response.data));
      dispatch(setNewUserName(''));
      dispatch(setNewUserSurname(''));
      dispatch(setNewUserDesc(''));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.delete(`http://77.120.241.80:8911/api/user/${id}`);

      dispatch(loadUsersSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const setEditedUser = (id: number) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { editUser } = getState();

    dispatch(startLoading());

    try {
      const response = await axios.put(`http://77.120.241.80:8911/api/user/${id}`, {
        name: editUser.name,
        surname: editUser.surname,
        desc: editUser.desc,
      });

      dispatch(updateEditedUser(response.data));
      dispatch(finishEditing());
      dispatch(setEditingUser('', 'name'));
      dispatch(setEditingUser('', 'surname'));
      dispatch(setEditingUser('', 'desc'));
      dispatch(setEditingUserId(0));
    } catch (e) {
      console.log(e);
    }
  };
};
