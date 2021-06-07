import {AuthState} from './reducers/authReducer/type';
import {ShopState} from './reducers/shopReducer/type';

export interface StoreState {
  auth: AuthState;
  shop: ShopState;
}
