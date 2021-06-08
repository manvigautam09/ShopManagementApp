import {
  getTokenFromAsyncStorageFailure,
  getTokenFromAsyncStorageRequest,
  getTokenFromAsyncStorageSuccess,
  getUserDataFailure,
  getUserDataRequest,
  getUserDataSuccess,
  loginSuccess,
} from '../../actions/userActions';

export interface AuthState {
  name: string;
  loadingData: boolean;
  loadingToken: boolean;
  token: string;
}

export type AuthActions = ReturnType<
  | typeof loginSuccess
  | typeof getUserDataRequest
  | typeof getUserDataSuccess
  | typeof getUserDataFailure
  | typeof getTokenFromAsyncStorageRequest
  | typeof getTokenFromAsyncStorageSuccess
  | typeof getTokenFromAsyncStorageFailure
>;
