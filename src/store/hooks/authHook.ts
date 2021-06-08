import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch, useSelector} from 'react-redux';

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
} from '../actions/userActions';
import {userDetailsSelector} from '../selectors/userDetails';

export const useAuthHook = () => {
  const dispatch = useDispatch();
  const [loggingIn, setLoggingIn] = useState(false);
  const loginUser = async (userName: string, password: string) => {
    setLoggingIn(true);
    const authToken = `${userName}${password}`.split('').reverse().join('');
    try {
      await AsyncStorage.setItem('@authToken', authToken);
      await AsyncStorage.setItem('@userName', userName);
      setLoggingIn(false);
      dispatch(loginSuccess({name: userName, token: authToken}));
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

export const useCheckIfUserLoggedInHook = () => {
  const dispatch = useDispatch();

  const fetchToken = async () => {
    dispatch(getTokenFromAsyncStorageRequest());
    try {
      const authToken = await AsyncStorage.getItem('@authToken');
      if (authToken && authToken.length > 0) {
        dispatch(getTokenFromAsyncStorageSuccess({token: authToken}));
      } else {
        dispatch(getTokenFromAsyncStorageFailure());
      }
    } catch (e) {
      dispatch(getTokenFromAsyncStorageFailure());
    }
  };

  return {fetchToken};
};

export const useSignOutUserHook = () => {
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch(signOutRequest());
    try {
      await AsyncStorage.removeItem('@authToken');
      await AsyncStorage.removeItem('@shops');
      dispatch(signOutSuccess());
    } catch (error) {
      dispatch(signOutFailure());
    }
  };
  return {signOut};
};
