import React, {useMemo, useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, Button} from 'react-native';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginButtonDisabled = useMemo(
    () => userName.length === 0 || password.length === 0,
    [password.length, userName.length],
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={userName}
        style={styles.input}
        placeholder={'Username'}
        onChangeText={username => setUserName(username)}
      />
      <TextInput
        value={password}
        style={styles.input}
        secureTextEntry={true}
        placeholder={'Password'}
        onChangeText={passWord => setPassword(passWord)}
      />

      <Button
        color="blue"
        title={'Login'}
        disabled={loginButtonDisabled}
        onPress={() => console.log('###onPress', userName, password)}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
