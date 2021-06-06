import {actionTypes} from '../actionTypes';

export function getUserDataRequest() {
  return <const>{
    type: actionTypes.GET_USER_DATA_REQUEST,
  };
}

export function getUserDataSuccess(payload: {name: string}) {
  return <const>{
    type: actionTypes.GET_USER_DATA_SUCCESS,
    payload,
  };
}

export function getUserDataFailure() {
  return <const>{
    type: actionTypes.GET_USER_DATA_FAILURE,
  };
}
