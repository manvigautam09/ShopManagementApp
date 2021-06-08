import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  useGetUserDetailsHook,
  useFetchUserDetailsHook,
  useSignOutUserHook,
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
  const {signOut} = useSignOutUserHook();
  const {getShop} = useGetShopsListHook();
  const {fetchDetails} = useFetchUserDetailsHook();
  const {name, loadingData, signingOut} = useGetUserDetailsHook();
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
      {loadingData ? (
        <Text>LOADING ...</Text>
      ) : (
        <Text style={styles.heading}>Welcome, {name}</Text>
      )}
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
        <ScrollView
          style={styles.shopListWidth}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {shops.map((shopDetail: Shops) => (
            <ShopDisplay
              key={Object.values(shopDetail)[0].id}
              shopDetail={shopDetail}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      ) : (
        <Text>There are no shops yet</Text>
      )}
      {!createShopModule && (
        <View style={styles.alignSignOutButton}>
          <Button title="SignOut" onPress={signOut} disabled={signingOut} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CreateShopScreen;

const styles = StyleSheet.create({
  createShopContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E0FFFF',
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
    flex: 1,
  },
  alignSignOutButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'flex-end',
  },
  heading: {
    fontWeight: '500',
    display: 'flex',
    alignSelf: 'flex-start',
    fontSize: 25,
  },
});
