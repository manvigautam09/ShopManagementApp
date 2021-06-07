import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.splashContainer}>
      <Text>This is Splash Screen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
