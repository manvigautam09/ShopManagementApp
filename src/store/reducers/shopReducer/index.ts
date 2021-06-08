import {actionTypes} from '../../actionTypes';
import {ShopState, ShopActions} from './type';

const initialState: ShopState = {
  creatingShop: false,
  gettingShop: false,
  shops: [],
  addingProduct: false,
  editingProduct: false,
  deletingProduct: false,
};

export default (state = initialState, action: ShopActions) => {
  switch (action.type) {
    case actionTypes.CREATE_SHOP_REQUEST: {
      return {...state, creatingShop: true};
    }

    case actionTypes.CREATE_SHOP_SUCCESS: {
      return {...state, creatingShop: false};
    }

    case actionTypes.CREATE_SHOP_FAILURE: {
      return {...state, creatingShop: false};
    }

    case actionTypes.GET_SHOP_DETAILS_REQUEST: {
      return {...state, gettingShop: true};
    }

    case actionTypes.GET_SHOP_DETAILS_SUCCESS: {
      return {...state, gettingShop: false, shops: action.payload.shops};
    }

    case actionTypes.GET_SHOP_DETAILS_FAILURE: {
      return {...state, gettingShop: false};
    }

    case actionTypes.ADD_PRODUCT_REQUEST: {
      return {...state, addingProduct: true};
    }

    case actionTypes.ADD_PRODUCT_SUCCESS: {
      return {...state, addingProduct: false};
    }

    case actionTypes.ADD_PRODUCT_SUCCESS: {
      return {...state, addingProduct: false};
    }

    case actionTypes.EDIT_PRODUCT_REQUEST: {
      return {...state, editingProduct: true};
    }

    case actionTypes.EDIT_PRODUCT_SUCCESS: {
      return {...state, editingProduct: false};
    }

    case actionTypes.EDIT_PRODUCT_SUCCESS: {
      return {...state, editingProduct: false};
    }

    case actionTypes.DELETE_PRODUCT_REQUEST: {
      return {...state, deletingProduct: true};
    }

    case actionTypes.DELETE_PRODUCT_SUCCESS: {
      return {...state, deletingProduct: false};
    }

    case actionTypes.DELETE_PRODUCT_SUCCESS: {
      return {...state, deletingProduct: false};
    }

    case actionTypes.SIGN_OUT_SUCCESS: {
      return {...state, shops: []};
    }

    default:
      return state;
  }
};
