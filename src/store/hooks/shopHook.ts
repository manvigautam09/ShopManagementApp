import {useCallback, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createShopFailure,
  createShopRequest,
  createShopSuccess,
  getShopDetailsFailure,
  getShopDetailsRequest,
  getShopDetailsSuccess,
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
      let shopObjString = {
        [name]: {name, description, products, id: uuidv4()},
      };
      const oldShops = await AsyncStorage.getItem('@shops');

      if (oldShops) {
        await AsyncStorage.setItem(
          '@shops',
          JSON.stringify([...JSON.parse(oldShops), shopObjString]),
        );
      } else {
        await AsyncStorage.setItem('@shops', JSON.stringify([shopObjString]));
      }

      dispatch(createShopSuccess());
      toggleCreateShop();
      setShop({shopName: '', shopDescription: '', products: ''});
    } catch (error) {
      dispatch(createShopFailure());
    }
  };
  return {shop, createShopModule, setShop, createShop, toggleCreateShop};
};

export const useGetShopsListHook = () => {
  const dispatch = useDispatch();

  const getShop = async () => {
    dispatch(getShopDetailsRequest());
    try {
      const shops = await AsyncStorage.getItem('@shops');
      if (shops) {
        const shopsJson = JSON.parse(shops);
        dispatch(getShopDetailsSuccess({shops: shopsJson}));
      } else {
        dispatch(getShopDetailsFailure());
      }
    } catch (error) {
      dispatch(getShopDetailsFailure());
    }
  };
  return {getShop};
};
