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

export function getShopDetailsRequest() {
  return <const>{
    type: actionTypes.GET_SHOP_DETAILS_REQUEST,
  };
}

export function getShopDetailsSuccess(payload: {shops: []}) {
  return <const>{
    type: actionTypes.GET_SHOP_DETAILS_SUCCESS,
    payload,
  };
}

export function getShopDetailsFailure() {
  return <const>{
    type: actionTypes.GET_SHOP_DETAILS_FAILURE,
  };
}
