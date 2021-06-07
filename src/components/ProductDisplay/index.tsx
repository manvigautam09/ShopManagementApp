import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Products} from '../../store/reducers/shopReducer/type';
import {ROUTE_CONSTANTS} from '../../utils/routeConstants';

interface ProductDisplayProps {
  productDetail: Products;
  navigation: any;
  shopId: string;
  toggleCreateProduct: () => any;
  setMode: React.Dispatch<React.SetStateAction<'CREATE' | 'EDIT'>>;
  setProduct: React.Dispatch<React.SetStateAction<Products>>;
  deleteProduct: (shopId: string, productId: string) => Promise<void>;
}
const ProductDisplay = (props: ProductDisplayProps) => {
  const {
    shopId,
    productDetail,
    navigation,
    setMode,
    setProduct,
    deleteProduct,
    toggleCreateProduct,
  } = props;

  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() =>
        navigation.navigate(ROUTE_CONSTANTS.PRODUCTS_IN_SHOP, {
          productId: productDetail.prId,
          shopId: shopId,
        })
      }>
      <View style={styles.detailSection}>
        <Text>{productDetail.prName}</Text>
        <Text>{productDetail.prDescription}</Text>
        <Text>${productDetail.prPrice}</Text>
      </View>
      <View style={styles.detailSection}>
        {!productDetail.prAvailability ? (
          <Text>Not in Stock</Text>
        ) : (
          <Text>Currently in stock</Text>
        )}
        <View style={styles.editDeleteSection}>
          <Text
            onPress={() => {
              setMode('EDIT');
              setProduct(productDetail);
              toggleCreateProduct();
            }}>
            E
          </Text>
          <Text onPress={() => deleteProduct(shopId, productDetail.prId)}>
            D
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductDisplay;

const styles = StyleSheet.create({
  productContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: 10,
    marginVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    backgroundColor: 'skyblue',
  },
  detailSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  editDeleteSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
