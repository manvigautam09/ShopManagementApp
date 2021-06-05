import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthHook = () => {
  const [loggingIn, setLoggingIn] = useState(false);
  const loginUser = async (userName: string, password: string) => {
    setLoggingIn(true);
    const authToken = `${userName}${password}`.split('').reverse().join('');
    try {
      await AsyncStorage.setItem('authToken', authToken);
      await AsyncStorage.setItem('@userName', userName);
      setLoggingIn(false);
    } catch (e) {
      setLoggingIn(false);
    }
  };
  return {loggingIn, loginUser};
};
