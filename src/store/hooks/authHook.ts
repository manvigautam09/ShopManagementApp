import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch, useSelector} from 'react-redux';
import {ROUTE_CONSTANTS} from '../../utils/routeConstants';
import {
  getUserDataFailure,
  getUserDataRequest,
  getUserDataSuccess,
} from '../actions/userActions';
import {userDetailsSelector} from '../selectors/userDetails';

export const useAuthHook = () => {
  const [loggingIn, setLoggingIn] = useState(false);
  const loginUser = async (
    userName: string,
    password: string,
    navigation: any,
  ) => {
    setLoggingIn(true);
    const authToken = `${userName}${password}`.split('').reverse().join('');
    try {
      await AsyncStorage.setItem('@authToken', authToken);
      await AsyncStorage.setItem('@userName', userName);
      setLoggingIn(false);
      navigation.navigate(ROUTE_CONSTANTS.CREATE_SHOP);
    } catch (e) {
      setLoggingIn(false);
    }
  };

  return {loggingIn, loginUser};
};

export const useGetUserDetailsHook = () => {
  return useSelector(userDetailsSelector);
};

export const useFetchUserDetailsHook = () => {
  const dispatch = useDispatch();

  const fetchDetails = async () => {
    dispatch(getUserDataRequest());
    try {
      const userName = await AsyncStorage.getItem('@userName');

      if (userName && userName.length > 0) {
        dispatch(getUserDataSuccess({name: userName}));
      } else {
        dispatch(getUserDataFailure());
      }
    } catch (e) {
      dispatch(getUserDataFailure());
    }
  };

  return {fetchDetails};
};
