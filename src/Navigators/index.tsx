import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import CreateShopScreen from './CreateShops';
import {ROUTE_CONSTANTS} from '../utils/routeConstants';
import {
  useCheckIfUserLoggedInHook,
  useGetUserDetailsHook,
} from '../store/hooks/authHook';
import SplashScreen from './SplashScreen';
import ProductsScreen from './ProductsScreen';

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
      <Stack.Screen
        name={ROUTE_CONSTANTS.PRODUCTS_IN_SHOP}
        component={ProductsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const {fetchToken} = useCheckIfUserLoggedInHook();
  const {token, loadingToken} = useGetUserDetailsHook();

  useEffect(() => {
    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_CONSTANTS.LOGIN}>
        {loadingToken ? (
          <Stack.Screen
            component={SplashScreen}
            name={ROUTE_CONSTANTS.SPLASH}
          />
        ) : token && token.length > 0 ? (
          <Stack.Screen
            component={ShopStack}
            name={ROUTE_CONSTANTS.CREATE_SHOP}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            component={AuthStack}
            name={ROUTE_CONSTANTS.LOGIN}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
