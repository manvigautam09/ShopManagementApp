import {StoreState} from '../type';

export const userDetailsSelector = (state: StoreState) => ({
  name: state.auth.name,
  loadingData: state.auth.loadingData,
});
