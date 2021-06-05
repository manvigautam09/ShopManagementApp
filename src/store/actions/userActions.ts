import {actionTypes} from '../actionTypes';

export const getUserDataRequest = () => {
  return <const>{
    type: actionTypes.GET_USER_DATA_REQUEST,
  };
};

export const getUserDataSuccess = () => {
  return <const>{
    type: actionTypes.GET_USER_DATA_SUCCESS,
  };
};

export const getUserDataFailure = () => {
  return <const>{
    type: actionTypes.GET_USER_DATA_FAILURE,
  };
};
