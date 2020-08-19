import { AnyAction } from 'redux';
import {
  CREATE_NEW_USER, FINISH_EDITING,
  LOAD_USERS_SUCCESS,
  SET_EDITING_USER,
  SET_EDITING_USER_ID,
  SET_NEW_USER,
  START_EDITING,
  START_LOADING, UPDATE_EDITED_USER,
} from './actionTypes';
import { UserI } from '../utils/interfaces';

const initialState = {
  users: [],
  loading: false,
  editing: false,
  newUser: {
    name: '',
    surname: '',
    desc: '',
  },
  editUser: {
    id: 0,
    name: '',
    surname: '',
    desc: '',
  },
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case START_EDITING:
      return {
        ...state,
        editing: true,
      };
    case FINISH_EDITING:
      return {
        ...state,
        editing: false,
      };
    case SET_NEW_USER:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          [action.name]: action.value,
        },
      };
    case CREATE_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.user],
        loading: false,
      };
    case SET_EDITING_USER:
      return {
        ...state,
        editUser: {
          ...state.editUser,
          [action.name]: action.value,
        },
      };
    case SET_EDITING_USER_ID:
      return {
        ...state,
        editUser: {
          ...state.editUser,
          id: action.id,
        },
      };
    case UPDATE_EDITED_USER:
      return {
        ...state,
        users: state.users.map((user: UserI) => {
          return user.id === action.user.id ? {
            ...action.user,
          } : {
            ...user,
          };
        }),
      };
    default:
      return state;
  }
};
