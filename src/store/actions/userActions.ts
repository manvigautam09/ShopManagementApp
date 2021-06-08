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

export function getTokenFromAsyncStorageRequest() {
  return <const>{
    type: actionTypes.GET_TOKEN_FROM_ASYNC_STORAGE_REQUEST,
  };
}

export function getTokenFromAsyncStorageSuccess(payload: {token: string}) {
  return <const>{
    type: actionTypes.GET_TOKEN_FROM_ASYNC_STORAGE_SUCCESS,
    payload,
  };
}

export function getTokenFromAsyncStorageFailure() {
  return <const>{
    type: actionTypes.GET_TOKEN_FROM_ASYNC_STORAGE_FAILURE,
  };
}

export function loginSuccess(payload: {name: string; token: string}) {
  return <const>{
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload,
  };
}

export function signOutRequest() {
  return <const>{
    type: actionTypes.SIGN_OUT_REQUEST,
  };
}

export function signOutSuccess() {
  return <const>{
    type: actionTypes.SIGN_OUT_SUCCESS,
  };
}
export function signOutFailure() {
  return <const>{
    type: actionTypes.SIGN_OUT_FAILURE,
  };
}
