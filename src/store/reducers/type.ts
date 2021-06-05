import {
  getUserDataFailure,
  getUserDataRequest,
  getUserDataSuccess,
} from '../actions/userActions';

export interface AuthState {
  name: string;
  loadingData: boolean;
}
export type AuthActions = ReturnType<
  | typeof getUserDataRequest
  | typeof getUserDataSuccess
  | typeof getUserDataFailure
>;
