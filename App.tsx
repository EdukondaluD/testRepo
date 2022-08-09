/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  BackHandler,
  Text,
  useColorScheme,
  View,
  Modal,
  Alert
} from 'react-native';
import AssetPage from './src/screens/AssetPage/AssetPage';
import FirstPage from './src/screens/FirstPage/FirstPage';
import Login from './src/screens/loginPage/Login';

const App = () => {

  const [loginState, setLoginState] = useState(true);
  const [firstPage, setFirstPage] = useState(true);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit !", "Are you sure you want to go exit ?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const ChangeState = () => {
    setLoginState(!loginState);
  }

  useState(() => {
    setTimeout(() => {
      setFirstPage(!firstPage);
    }, 2400);
  })
  
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={firstPage}
        onRequestClose={() => {
          setFirstPage(!firstPage);
        }}
      >
      <FirstPage />
      </Modal>
      {loginState &&  <Login  ChangeState={ChangeState} /> }
      {!loginState && <AssetPage ChangeState={ChangeState} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
