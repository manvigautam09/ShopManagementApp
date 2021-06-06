import {actionTypes} from '../actionTypes';

export function createShopRequest() {
  return <const>{
    type: actionTypes.CREATE_SHOP_REQUEST,
  };
}

export function createShopSuccess() {
  return <const>{
    type: actionTypes.CREATE_SHOP_SUCCESS,
  };
}

export function createShopFailure() {
  return <const>{
    type: actionTypes.CREATE_SHOP_FAILURE,
  };
}
