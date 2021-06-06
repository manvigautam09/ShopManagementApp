import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  useGetUserDetailsHook,
  useFetchUserDetailsHook,
} from '../../store/hooks/authHook';

const CreateShopScreen = () => {
  const {fetchDetails} = useFetchUserDetailsHook();
  const {name, loadingData} = useGetUserDetailsHook();

  useEffect(() => {
    if (name.length === 0) {
      fetchDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      {loadingData ? (
        <Text>LOADING ...</Text>
      ) : (
        <Text>This is Create Shop Screen for {name}</Text>
      )}
    </SafeAreaView>
  );
};

export default CreateShopScreen;
