import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const NAVIGATION_CONSTANTS = {
  AUTH: 'auth',
};

const ROUTE_CONSTANTS = {
  LOGIN: 'LoginScreen',
};

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

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION_CONSTANTS.AUTH}>
        <Stack.Screen
          component={AuthStack}
          name={NAVIGATION_CONSTANTS.AUTH}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
