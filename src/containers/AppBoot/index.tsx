import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import {store} from '../../store';
import RootNavigator from '../../Navigators';

const AppBoot = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default AppBoot;
