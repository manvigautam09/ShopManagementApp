import React, {useMemo, useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, Text} from 'react-native';

import {useAuthHook} from '../../store/hooks/authHook';
import Button from '../../components/shared/Button';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {loginUser, loggingIn} = useAuthHook();

  const loginButtonDisabled = useMemo(
    () => userName.length === 0 || password.length === 0,
    [password.length, userName.length],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Shop Management</Text>
      <Text style={styles.formLabels}>Name</Text>
      <TextInput
        value={userName}
        style={styles.input}
        placeholder={'Username'}
        onChangeText={username => setUserName(username)}
      />
      <Text style={styles.formLabels}>Password</Text>
      <TextInput
        value={password}
        style={styles.input}
        secureTextEntry={true}
        placeholder={'Password'}
        onChangeText={passWord => setPassword(passWord)}
      />

      {loggingIn ? (
        <Text>'Logging You In ...'</Text>
      ) : (
        <Button
          title={'Login'}
          disabled={loginButtonDisabled || loggingIn}
          onPress={() => loginUser(userName, password)}
        />
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FFFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  heading: {
    fontSize: 35,
    marginBottom: 40,
    fontWeight: '500',
    fontFamily: 'Times New Roman',
  },
  formLabels: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginLeft: 95,
  },
});
