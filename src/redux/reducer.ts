import { AnyAction } from 'redux';
import {
  CREATE_NEW_USER,
  LOAD_USERS_SUCCESS,
  SET_NEW_USER_DESC, SET_NEW_USER_ID,
  SET_NEW_USER_NAME,
  SET_NEW_USER_SURNAME,
  START_LOADING,
} from './actionTypes';

const initialState = {
  users: [],
  loading: false,
  newUser: {
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
    case SET_NEW_USER_NAME:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          name: action.name,
        },
      };
    case SET_NEW_USER_SURNAME:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          surname: action.surname,
        },
      };
    case SET_NEW_USER_DESC:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          desc: action.desc,
        },
      };
    case SET_NEW_USER_ID:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          id: action.id,
        },
      };
    case CREATE_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.user],
        newUser: {
          name: '',
          surname: '',
          desc: '',
        },
      };
    default:
      return state;
  }
};
