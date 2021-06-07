import {useCallback, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux';

import {
  addProductFailure,
  addProductRequest,
  addProductSuccess,
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
} from '../actions/shopActions';
import {Products, Shops} from '../reducers/shopReducer/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetShopsListHook} from './shopHook';

export const initialProductState = {
  prId: '',
  prName: '',
  prDescription: '',
  prPrice: '0',
  prAvailability: false,
  prTags: '',
} as Products;

export const useCreateProductHook = () => {
  const [product, setProduct] = useState(initialProductState);
  const [mode, setMode] = useState('CREATE' as 'CREATE' | 'EDIT');

  const [createProductModule, setCreateProductModule] = useState(false);

  const toggleCreateProduct = useCallback(() => {
    setCreateProductModule(!createProductModule);
  }, [createProductModule]);

  const dispatch = useDispatch();
  const {getShop} = useGetShopsListHook();

  const createEditProduct = async (shopId: string) => {
    dispatch(addProductRequest());
    try {
      let productDetails = {
        prId: uuidv4(),
        prName: product.prName,
        prDescription: product.prDescription,
        prPrice: product.prPrice,
        prAvailability: product.prAvailability,
        prTags: product.prTags,
      };
      const oldShops = await AsyncStorage.getItem('@shops');
      if (oldShops) {
        const oldShopsJson = JSON.parse(oldShops);
        if (mode === 'CREATE') {
          let updatedShops = oldShopsJson.map((shopDetail: Shops) => {
            let details: any = Object.values(shopDetail)[0];
            if (details.id === shopId) {
              details.products = [...details.products, productDetails];
            }
            return {[details.name]: details};
          });
          await AsyncStorage.setItem('@shops', JSON.stringify(updatedShops));
        } else {
          let updatedShops = oldShopsJson.map((shopDetail: Shops) => {
            let details: any = Object.values(shopDetail)[0];
            if (details.id === shopId) {
              details.products = details.products.map(
                (productDetail: Products) => {
                  let pDetails = productDetail;
                  if (productDetail.prId === product.prId) {
                    pDetails = product;
                  }
                  return pDetails;
                },
              );
            }
            return {[details.name]: details};
          });
          await AsyncStorage.setItem('@shops', JSON.stringify(updatedShops));
        }
      }

      dispatch(addProductSuccess());
      toggleCreateProduct();
      setProduct({
        prId: '',
        prName: '',
        prDescription: '',
        prPrice: '0',
        prAvailability: false,
        prTags: '',
      });
      getShop();
    } catch (error) {
      dispatch(addProductFailure());
    }
  };

  return {
    mode,
    product,
    createProductModule,
    setMode,
    setProduct,
    createEditProduct,
    toggleCreateProduct,
  };
};

export const useDeleteProductHook = () => {
  const dispatch = useDispatch();
  const {getShop} = useGetShopsListHook();

  const deleteProduct = async (shopId: string, productId: string) => {
    dispatch(deleteProductRequest());
    try {
      const oldShops = await AsyncStorage.getItem('@shops');
      if (oldShops) {
        const oldShopsJson = JSON.parse(oldShops);
        const updatedShops = oldShopsJson.map((shopDetailObj: Shops) => {
          let shopDetail = Object.values(shopDetailObj)[0];
          if (shopDetail.id === shopId) {
            shopDetail.products = shopDetail.products.filter(
              (prDetail: Products) => prDetail.prId !== productId,
            );
          }
          return {[shopDetail.name]: shopDetail};
        });
        console.log('###', updatedShops);
        await AsyncStorage.setItem('@shops', JSON.stringify(updatedShops));
        dispatch(deleteProductSuccess());
        getShop();
      }
    } catch (error) {
      dispatch(deleteProductFailure());
    }
  };
  return {deleteProduct};
};
