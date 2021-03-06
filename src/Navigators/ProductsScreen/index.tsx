import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import Button from '../../components/shared/Button';
import ProductForm from '../../components/ProductForm';
import ProductDisplay from '../../components/ProductDisplay';
import {useGetShopDetailsHook} from '../../store/hooks/shopHook';
import {
  initialProductState,
  useCreateProductHook,
  useDeleteProductHook,
} from '../../store/hooks/productHook';
import {Products, Shops} from '../../store/reducers/shopReducer/type';

interface ProductsScreenProps {
  navigation: any;
  route: any;
}

const ProductsScreen = (props: ProductsScreenProps) => {
  const {navigation, route} = props;

  const {shops} = useGetShopDetailsHook();
  const {
    mode,
    product,
    createProductModule,
    setMode,
    createEditProduct,
    setProduct,
    toggleCreateProduct,
  } = useCreateProductHook();
  const {deleteProduct} = useDeleteProductHook();

  const currentShop: Shops = useMemo(
    () =>
      shops.filter(
        (shopDetail: Shops) =>
          Object.values(shopDetail)[0].id === route.params.shopDetailId,
      )[0],
    [route.params.shopDetailId, shops],
  );

  const {name, description, products} = Object.values(currentShop)[0];

  return (
    <SafeAreaView style={styles.createProductContainer}>
      <Text style={styles.heading}>{name}</Text>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptiveText}>{description}</Text>
      </View>
      <View style={styles.alignAddProductButton}>
        <Button
          title={createProductModule ? 'Cancel' : 'Create Product'}
          onPress={() => {
            setMode('CREATE');
            setProduct(initialProductState);
            toggleCreateProduct();
          }}
        />
      </View>
      {createProductModule ? (
        <View style={styles.createProductsView}>
          <ProductForm
            mode={mode}
            product={product}
            setProduct={setProduct}
            onSubmit={createEditProduct}
            shopId={route.params.shopDetailId}
          />
        </View>
      ) : products.length > 0 ? (
        <ScrollView
          style={styles.productListWidth}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {products.map((productDetail: Products) => (
            <ProductDisplay
              productDetail={productDetail}
              navigation={navigation}
              key={productDetail.prId}
              shopId={route.params.shopDetailId}
              setMode={setMode}
              setProduct={setProduct}
              deleteProduct={deleteProduct}
              toggleCreateProduct={toggleCreateProduct}
            />
          ))}
        </ScrollView>
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
    backgroundColor: '#E0FFFF',
    padding: 10,
  },
  descriptionView: {
    marginVertical: 10,
    display: 'flex',
    alignSelf: 'flex-start',
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
  productListWidth: {
    width: '100%',
    paddingHorizontal: 10,
    flex: 1,
  },
  heading: {
    fontWeight: '500',
    display: 'flex',
    alignSelf: 'flex-start',
    fontSize: 25,
    fontFamily: 'Times New Roman',
    marginLeft: 10,
  },
  descriptiveText: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    marginLeft: 10,
  },
});
