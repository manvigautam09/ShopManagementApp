import React from 'react';
import {SafeAreaView, Text} from 'react-native';

interface ProductsScreenProps {
  route: any;
}

const ProductsScreen = (props: ProductsScreenProps) => {
  const {route} = props;
  console.log('object###', route.params.shopDetailId);
  return (
    <SafeAreaView>
      <Text>ProductsScreen</Text>
    </SafeAreaView>
  );
};
export default ProductsScreen;
