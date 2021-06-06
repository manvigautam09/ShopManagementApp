import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  useGetUserDetailsHook,
  useFetchUserDetailsHook,
} from '../../store/hooks/authHook';

import Button from '../../components/shared/Button';
import CustomTextInput from '../../components/shared/CustomTextInput';

const CreateShopScreen = () => {
  const {fetchDetails} = useFetchUserDetailsHook();
  const {name, loadingData} = useGetUserDetailsHook();
  const [createShopModule, setCreateShopModule] = useState(false);
  const [shop, setShop] = useState({
    shopName: '',
    shopDescription: '',
    products: [],
  });

  const toggleCreateShop = useCallback(() => {
    setCreateShopModule(!createShopModule);
  }, [createShopModule]);

  useEffect(() => {
    if (name.length === 0) {
      fetchDetails();
    }
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
      {createShopModule && (
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
          <View style={styles.alignAddShopButton}>
            <Button
              title="Add Shop"
              disabled={
                shop.shopName.length === 0 || shop.shopDescription.length === 0
              }
              onPress={() => console.log('###')}
            />
          </View>
        </React.Fragment>
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
});
