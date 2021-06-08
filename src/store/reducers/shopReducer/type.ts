import {
  addProductFailure,
  addProductRequest,
  addProductSuccess,
  createShopFailure,
  createShopRequest,
  createShopSuccess,
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  editProductFailure,
  editProductRequest,
  editProductSuccess,
  getShopDetailsFailure,
  getShopDetailsRequest,
  getShopDetailsSuccess,
} from '../../actions/shopActions';
import {signOutSuccess} from '../../actions/userActions';

export interface ShopState {
  shops: [];
  gettingShop: boolean;
  creatingShop: boolean;
  addingProduct: boolean;
  editingProduct: boolean;
  deletingProduct: boolean;
}

export type ShopActions = ReturnType<
  | typeof createShopRequest
  | typeof createShopSuccess
  | typeof createShopFailure
  | typeof getShopDetailsRequest
  | typeof getShopDetailsSuccess
  | typeof getShopDetailsFailure
  | typeof addProductRequest
  | typeof addProductSuccess
  | typeof addProductFailure
  | typeof editProductRequest
  | typeof editProductSuccess
  | typeof editProductFailure
  | typeof deleteProductRequest
  | typeof deleteProductSuccess
  | typeof deleteProductFailure
  | typeof signOutSuccess
>;

export interface Products {
  prId: string;
  prName: string;
  prDescription: string;
  prPrice: string;
  prTags: string;
  prAvailability: boolean;
}
export interface Shops {
  id: string;
  name: string;
  description: string;
  products: Products[];
}
