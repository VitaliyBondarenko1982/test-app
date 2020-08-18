import { AnyAction } from 'redux';
import { LOAD_USERS_SUCCESS, START_LOADING } from './actionTypes';

const initialState = {
  users: [],
  loading: false,
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
    default:
      return state;
  }
};
