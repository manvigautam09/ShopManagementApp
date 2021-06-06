import {actionTypes} from '../actionTypes';
import {AuthActions, AuthState} from './type';

const initialState: AuthState = {
  name: '',
  loadingData: false,
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

    default:
      return state;
  }
};
