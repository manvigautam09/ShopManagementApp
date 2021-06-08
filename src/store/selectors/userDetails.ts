import {StoreState} from '../type';

export const userDetailsSelector = (state: StoreState) => ({
  name: state.auth.name,
  token: state.auth.token,
  loadingData: state.auth.loadingData,
  loadingToken: state.auth.loadingToken,
  signingOut: state.auth.signingOut,
});
