import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import CreateShopScreen from './CreateShops';
import {ROUTE_CONSTANTS} from '../utils/routeConstants';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_CONSTANTS.LOGIN}>
      <Stack.Screen
        name={ROUTE_CONSTANTS.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_CONSTANTS.CREATE_SHOP}>
      <Stack.Screen
        name={ROUTE_CONSTANTS.CREATE_SHOP}
        component={CreateShopScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_CONSTANTS.LOGIN}>
        <Stack.Screen
          component={AuthStack}
          name={ROUTE_CONSTANTS.LOGIN}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ShopStack}
          name={ROUTE_CONSTANTS.CREATE_SHOP}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
