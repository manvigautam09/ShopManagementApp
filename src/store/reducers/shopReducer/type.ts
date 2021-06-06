import {
  createShopFailure,
  createShopRequest,
  createShopSuccess,
} from '../../actions/shopActions';

export interface ShopState {
  creatingShop: boolean;
}

export type ShopActions = ReturnType<
  typeof createShopRequest | typeof createShopSuccess | typeof createShopFailure
>;
