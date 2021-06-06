import {StoreState} from '../type';

export const shopDetailsSelector = (state: StoreState) => ({
  creatingShop: state.shop.creatingShop,
});
