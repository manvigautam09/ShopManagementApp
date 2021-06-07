import {useCallback, useState} from 'react';
import {Products} from '../reducers/shopReducer/type';

export const useCreateProductHook = () => {
  const [createProductModule, setCreateProductModule] = useState(false);
  const [product, setProduct] = useState({
    prId: '',
    prName: '',
    prDescription: '',
    prPrice: '0',
    prAvailability: false,
    prTags: '',
  } as Products);

  const toggleCreateProduct = useCallback(() => {
    setCreateProductModule(!createProductModule);
  }, [createProductModule]);

  //   const createShop = async (
  //     name: string,
  //     description: string,
  //     products: [],
  //   ) => {
  //     dispatch(createShopRequest());
  //     try {
  //       let shopObjString = {
  //         [name]: {name, description, products, id: uuidv4()},
  //       };
  //       const oldShops = await AsyncStorage.getItem('@shops');

  //       if (oldShops) {
  //         await AsyncStorage.setItem(
  //           '@shops',
  //           JSON.stringify([...JSON.parse(oldShops), shopObjString]),
  //         );
  //       } else {
  //         await AsyncStorage.setItem('@shops', JSON.stringify([shopObjString]));
  //       }

  //       dispatch(createShopSuccess());
  //       toggleCreateShop();
  //       getShop();
  //       setShop({shopName: '', shopDescription: '', products: ''});
  //     } catch (error) {
  //       dispatch(createShopFailure());
  //     }
  //   };

  return {product, createProductModule, setProduct, toggleCreateProduct};
};
