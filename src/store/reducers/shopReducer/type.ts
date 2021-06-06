import {
  createShopFailure,
  createShopRequest,
  createShopSuccess,
  getShopDetailsFailure,
  getShopDetailsRequest,
  getShopDetailsSuccess,
} from '../../actions/shopActions';

export interface ShopState {
  creatingShop: boolean;
  gettingShop: boolean;
  shops: [];
}

export type ShopActions = ReturnType<
  | typeof createShopRequest
  | typeof createShopSuccess
  | typeof createShopFailure
  | typeof getShopDetailsRequest
  | typeof getShopDetailsSuccess
  | typeof getShopDetailsFailure
>;

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string;
  availability: boolean;
}
export interface Shops {
  id: string;
  name: string;
  description: string;
  products: Products[];
}
