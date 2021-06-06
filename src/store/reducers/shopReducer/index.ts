import {actionTypes} from '../../actionTypes';
import {ShopState, ShopActions} from './type';

const initialState: ShopState = {
  creatingShop: false,
  gettingShop: false,
  shops: [],
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

    default:
      return state;
  }
};
