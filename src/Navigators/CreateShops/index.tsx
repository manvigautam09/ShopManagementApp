import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  useGetUserDetailsHook,
  useFetchUserDetailsHook,
} from '../../store/hooks/authHook';

import {
  useCreateShopHook,
  useGetShopDetailsHook,
  useGetShopsListHook,
} from '../../store/hooks/shopHook';
import Button from '../../components/shared/Button';
import CustomTextInput from '../../components/shared/CustomTextInput';
import {Shops} from '../../store/reducers/shopReducer/type';
import ShopDisplay from '../../components/ShopDisplay';

interface CreateShopScreenProps {
  navigation: any;
}

const CreateShopScreen = (props: CreateShopScreenProps) => {
  const {navigation} = props;
  const {getShop} = useGetShopsListHook();
  const {fetchDetails} = useFetchUserDetailsHook();
  const {name, loadingData} = useGetUserDetailsHook();
  const {shops, gettingShop, creatingShop} = useGetShopDetailsHook();
  const {shop, createShopModule, setShop, createShop, toggleCreateShop} =
    useCreateShopHook();

  useEffect(() => {
    if (name.length === 0) {
      fetchDetails();
    }
    getShop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.createShopContainer}>
      {loadingData ? <Text>LOADING ...</Text> : <Text>Welcome {name}</Text>}
      <View style={styles.alignButton}>
        <Button
          title={createShopModule ? 'Cancel' : 'Create Shop'}
          onPress={toggleCreateShop}
        />
      </View>
      {createShopModule ? (
        <React.Fragment>
          <View style={styles.inputView}>
            <Text>Shop Name</Text>
            <CustomTextInput
              placeholder={'name'}
              value={shop.shopName}
              onChangeText={sName => setShop({...shop, shopName: sName})}
            />
          </View>
          <View style={styles.inputView}>
            <Text>Shop Bio</Text>
            <CustomTextInput
              placeholder={'description'}
              value={shop.shopDescription}
              onChangeText={sDescription =>
                setShop({...shop, shopDescription: sDescription})
              }
            />
          </View>
          {creatingShop ? (
            <Text>LOADING ...</Text>
          ) : (
            <View style={styles.alignAddShopButton}>
              <Button
                title="Add Shop"
                disabled={
                  shop.shopName.length === 0 ||
                  shop.shopDescription.length === 0
                }
                onPress={() =>
                  createShop(shop.shopName, shop.shopDescription, shop.products)
                }
              />
            </View>
          )}
        </React.Fragment>
      ) : gettingShop ? (
        <Text>Loading Shops...</Text>
      ) : shops.length > 0 ? (
        <View style={styles.shopListWidth}>
          {shops.map((shopDetail: Shops) => (
            <ShopDisplay
              key={Object.values(shopDetail)[0].id}
              shopDetail={shopDetail}
              navigation={navigation}
            />
          ))}
        </View>
      ) : (
        <Text>There are no shops yet</Text>
      )}
    </SafeAreaView>
  );
};

export default CreateShopScreen;

const styles = StyleSheet.create({
  createShopContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  createShopButton: {
    backgroundColor: 'yellow',
    padding: 10,
  },
  alignButton: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
  },
  alignAddShopButton: {
    display: 'flex',
    marginTop: 30,
  },
  inputView: {
    display: 'flex',
    width: '100%',
    height: 50,
    paddingTop: 10,
    marginTop: 20,
  },
  shopListWidth: {
    width: '100%',
  },
});
