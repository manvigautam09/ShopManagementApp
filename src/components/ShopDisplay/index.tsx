import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shops} from '../../store/reducers/shopReducer/type';

interface ShopDisplayProps {
  shopDetail: Shops;
}
const ShopDisplay = (props: ShopDisplayProps) => {
  const {shopDetail} = props;
  return (
    <View key={Object.values(shopDetail)[0].id} style={styles.shopContainer}>
      <View style={styles.bioSection}>
        <Text>{Object.values(shopDetail)[0].name}</Text>
        <Text>{Object.values(shopDetail)[0].description}</Text>
      </View>
      <Text>Product Count: {Object.values(shopDetail)[0].products.length}</Text>
    </View>
  );
};

export default ShopDisplay;

const styles = StyleSheet.create({
  shopContainer: {
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
  },
  bioSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
