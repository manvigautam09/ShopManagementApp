import {
  getTokenFromAsyncStorageFailure,
  getTokenFromAsyncStorageRequest,
  getTokenFromAsyncStorageSuccess,
  getUserDataFailure,
  getUserDataRequest,
  getUserDataSuccess,
  loginSuccess,
  signOutFailure,
  signOutRequest,
  signOutSuccess,
} from '../../actions/userActions';

export interface AuthState {
  name: string;
  loadingData: boolean;
  loadingToken: boolean;
  token: string;
  signingOut: boolean;
}

export type AuthActions = ReturnType<
  | typeof loginSuccess
  | typeof signOutRequest
  | typeof signOutSuccess
  | typeof signOutFailure
  | typeof getUserDataRequest
  | typeof getUserDataSuccess
  | typeof getUserDataFailure
  | typeof getTokenFromAsyncStorageRequest
  | typeof getTokenFromAsyncStorageSuccess
  | typeof getTokenFromAsyncStorageFailure
>;
