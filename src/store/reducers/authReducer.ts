import {actionTypes} from '../actionTypes';
import {AuthActions, AuthState} from './type';

const initialState: AuthState = {
  name: '',
  token: '',
  loadingData: false,
  loadingToken: false,
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case actionTypes.GET_USER_DATA_REQUEST: {
      return {...state, loadingData: true};
    }

    case actionTypes.GET_USER_DATA_SUCCESS: {
      return {...state, loadingData: false, name: action.payload.name};
    }

    case actionTypes.GET_USER_DATA_FAILURE: {
      return {...state, loadingData: false};
    }

    case actionTypes.GET_TOKEN_FROM_ASYNC_STORAGE_REQUEST: {
      return {...state, loadingToken: true};
    }

    case actionTypes.GET_TOKEN_FROM_ASYNC_STORAGE_SUCCESS: {
      return {...state, loadingToken: false, token: action.payload.token};
    }

    case actionTypes.GET_TOKEN_FROM_ASYNC_STORAGE_FAILURE: {
      return {...state, loadingToken: false};
    }

    default:
      return state;
  }
};
