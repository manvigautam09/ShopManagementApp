import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Button from '../../components/shared/Button';
import ProductForm from '../../components/ProductForm';
import {Shops} from '../../store/reducers/shopReducer/type';
import {useGetShopDetailsHook} from '../../store/hooks/shopHook';
import {useCreateProductHook} from '../../store/hooks/productHook';

interface ProductsScreenProps {
  route: any;
}

const ProductsScreen = (props: ProductsScreenProps) => {
  const {route} = props;
  const {shops} = useGetShopDetailsHook();
  const {product, createProductModule, setProduct, toggleCreateProduct} =
    useCreateProductHook();

  const currentShop: Shops = useMemo(
    () =>
      shops.filter(
        (shopDetail: Shops) =>
          Object.values(shopDetail)[0].id === route.params.shopDetailId,
      )[0],
    [route.params.shopDetailId, shops],
  );

  console.log('object###', route.params.shopDetailId, currentShop);
  const {name, description, products} = Object.values(currentShop)[0];

  return (
    <SafeAreaView style={styles.createProductContainer}>
      <Text>{name}</Text>
      <View style={styles.descriptionView}>
        <Text>{description}</Text>
      </View>
      <View style={styles.alignAddProductButton}>
        <Button
          title={createProductModule ? 'Cancel' : 'Create Product'}
          onPress={toggleCreateProduct}
        />
      </View>
      {createProductModule ? (
        <View style={styles.createProductsView}>
          <ProductForm product={product} setProduct={setProduct} />
        </View>
      ) : products.length > 0 ? (
        <Text>({products[0].name})</Text>
      ) : (
        <View style={styles.noProductsView}>
          <Text>There are no Products yet</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  createProductContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  descriptionView: {
    marginVertical: 10,
  },
  alignAddProductButton: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    marginRight: 10,
  },
  inputView: {
    display: 'flex',
    width: '100%',
    height: 50,
    paddingTop: 10,
    marginTop: 20,
  },
  noProductsView: {
    marginVertical: 10,
  },
  createProductsView: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
