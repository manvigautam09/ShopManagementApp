import {actionTypes} from '../../actionTypes';
import {ShopState, ShopActions} from './type';

const initialState: ShopState = {
  creatingShop: false,
};

export default (state = initialState, action: ShopActions) => {
  switch (action.type) {
    case actionTypes.CREATE_SHOP_SUCCESS: {
      return {...state, loadingData: true};
    }

    case actionTypes.CREATE_SHOP_SUCCESS: {
      return {...state, loadingData: false};
    }

    case actionTypes.CREATE_SHOP_FAILURE: {
      return {...state, loadingData: false};
    }

    default:
      return state;
  }
};
