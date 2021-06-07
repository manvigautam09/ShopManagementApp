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

export function addProductRequest() {
  return <const>{
    type: actionTypes.ADD_PRODUCT_REQUEST,
  };
}

export function addProductSuccess() {
  return <const>{
    type: actionTypes.ADD_PRODUCT_SUCCESS,
  };
}

export function addProductFailure() {
  return <const>{
    type: actionTypes.ADD_PRODUCT_FAILURE,
  };
}

export function editProductRequest() {
  return <const>{
    type: actionTypes.EDIT_PRODUCT_REQUEST,
  };
}

export function editProductSuccess() {
  return <const>{
    type: actionTypes.EDIT_PRODUCT_SUCCESS,
  };
}

export function editProductFailure() {
  return <const>{
    type: actionTypes.EDIT_PRODUCT_FAILURE,
  };
}

export function deleteProductRequest() {
  return <const>{
    type: actionTypes.DELETE_PRODUCT_REQUEST,
  };
}

export function deleteProductSuccess() {
  return <const>{
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
  };
}

export function deleteProductFailure() {
  return <const>{
    type: actionTypes.DELETE_PRODUCT_FAILURE,
  };
}
