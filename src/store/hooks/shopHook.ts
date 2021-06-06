import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createShopFailure,
  createShopRequest,
  createShopSuccess,
} from '../actions/shopActions';
import {shopDetailsSelector} from '../selectors/shopDetails';

export const useGetShopDetailsHook = () => {
  return useSelector(shopDetailsSelector);
};

export const useCreateShopHook = () => {
  const dispatch = useDispatch();
  const [createShopModule, setCreateShopModule] = useState(false);

  const [shop, setShop] = useState({
    shopName: '',
    shopDescription: '',
    products: [] as any,
  });

  const toggleCreateShop = useCallback(() => {
    setCreateShopModule(!createShopModule);
  }, [createShopModule]);

  const createShop = async (
    name: string,
    description: string,
    products: [],
  ) => {
    dispatch(createShopRequest());
    try {
      let shopObjString = JSON.stringify({
        [name]: {name, description, products},
      });
      await AsyncStorage.setItem('@shops', shopObjString);
      dispatch(createShopSuccess());
      toggleCreateShop();
      setShop({shopName: '', shopDescription: '', products: ''});
    } catch (error) {
      dispatch(createShopFailure());
    }
  };
  return {shop, createShopModule, setShop, createShop, toggleCreateShop};
};
