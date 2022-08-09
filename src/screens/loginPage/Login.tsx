import React, {useRef, useState, useEffect} from 'react';
// import CheckBox from '@react-native-community/checkbox';
// import NetInfo from '@react-native-community/netinfo';
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Alert,
  Image,
  TouchableOpacity,
  Pressable,
  Platform,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import {Actions} from 'react-native-router-flux';
// import {connect} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {loginAction} from 'actions/loginAction';

const LoginPageFC = ({ChangeState}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English-US');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberCheckbox, setrememberCheckbox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  // useEffect(() => {
  //   NetInfo.addEventListener(state => {
  //     !state.isConnected ? Actions.noInternet() : null;
  //   });
  // }, []);

  // const storeData = async value => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     const facilityIds = JSON.stringify(value[0]?.facilities?.facilityIds);
  //     await AsyncStorage.setItem('@loginData', jsonValue);
  //     await AsyncStorage.setItem('@facilityIds', facilityIds);
  //   } catch (e) {
  //     // saving error
  //   }
  // };
  const [detail, setDetail] = useState({username:'anovi', password:'anovi'})

  const onSubmit = async () => {
    setLoading(true);
    const resObj = {
      username: userName,
      password: password,
    };
    if (userName === '' || password === '') {
      setLoading(false);
      Alert.alert('Please Enter Username and Password');
    } else {
      if(resObj.username === detail.username && resObj.password === detail.password){
        setLoading(true);
        setTimeout(() => {
          ChangeState();
          setLoading(false);
        }, 2000);
      }
      else{
        setLoading(false);
        Alert.alert('Wrong credentials');
      }
      
    }
    // else {
    //   // AsyncStorage.setItem('@userName', userName);
    //   // AsyncStorage.setItem('@passWord', password);
    //   try {
    //     let res = await loginAction(resObj);
    //     if (res.authData.status === 200) {
    //       const data = res.authData.data.loginDetails;
    //       setLoading(false);
    //       storeData(data);
    //       AsyncStorage.setItem('@authState', 'logIn');
    //       Actions.dashboard();
    //     }
    //     if (res.authData.status === 500) {
    //       setLoading(false);
    //       Actions.connectionError();
    //     }
    //   } catch (err) {
    //     setLoading(false);
    //     console.error(err);
    //     console.log(
    //       'There has been a problem with your fetch operation: ' + err.message,
    //     );
    //     Alert.alert(err.message || 'Something went wrong. Please try later');
    //   }
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )} */}
      <KeyboardAvoidingView>
        <View style={styles.firstRowContainer}>
          {Platform.OS === 'android' && (
            <View style={styles.pickerContainer}>
              {/* <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItems}
                  label="English-US"
                  value="English-US"
                />
              </Picker> */}
            </View>
          )}
        </View>
        <View style={styles.middleContainer}>
          {/* <View style={styles.LogoContainer}>
            <Image source={require('../../assets/images/aone-logo.png')} />
          </View> */}
          <View>
            <Text style={styles.welcomeText}>ANOVI</Text>
            {/* <Text style={styles.pleaseSignText}>
              Please sign in to continue
            </Text> */}
          </View>
          <KeyboardAvoidingView>
            <ScrollView>
              <View style={styles.textInputContaioner}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={text => setUserName(text)}
                  value={userName}
                  placeholder=" Username"
                />
              </View>

              <View style={styles.textInputContaionerOne}>
                <TextInput
                  style={styles.textInputOne}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  secureTextEntry={passwordVisible}
                  placeholder=" Password"

                  //keyboardType="numeric"
                />
                <View style={styles.textInputTwo}>
                  {passwordVisible ? (
                    <Pressable
                      onPress={() => setPasswordVisible(!passwordVisible)}>
                      <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/images/hidden.png')}
                      />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => setPasswordVisible(!passwordVisible)}>
                      <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/images/view.png')}
                      />
                    </Pressable>
                  )}
                </View>
              </View>

              {/* <View style={styles.rowTextContainer}>
                <View style={{flexDirection: 'row'}}> */}
              {/* <CheckBox
                  value={rememberCheckbox}
                  onValueChange={() => setrememberCheckbox(!rememberCheckbox)}
                //style={styles.checkbox}
                  boxType="square"
                /> */}
              {/* <TouchableOpacity>
                    <Text style={styles.forgetText}>Change password</Text>
                  </TouchableOpacity>
                </View> */}
              {/* <TouchableOpacity style={{}}>
                  <Text style={styles.forgetText}></Text>
                </TouchableOpacity> */}
              {/* </View> */}

              <TouchableOpacity
                onPress={onSubmit}
                style={styles.touchableOpacity}>
                <View style={styles.submitButtonContainer}>
                  {loading ?
                     <ActivityIndicator size="large" color="#0000ff" />
                     :
                    <Text style={styles.submitButton}>Sign in</Text>
                   
                  }
                </View>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.touchableOpacity}>
            <View>
              <Text style={styles.troubleText}>
                Trouble logging in? Contact us.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttomContainer}>
        <View style={styles.bottomTextContainer}>
        <Text style={styles.buttomText}>
          Powered by Aone
        </Text>
        <Text style={styles.bottomTmText}>TM</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPageFC;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFAF5',
    alignItems: "center",
  },
  modelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '40%',
    backgroundColor: 'blur',
  },
  tinyLogo: {
    height: 25,
    width: 25,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 9,
  },
  firstRowContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  pickerContainer: {
    width: '40%',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
  },
  pickerItems: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: 'black',
    backgroundColor: '#FFFFFF',
  },
  touchableOpacity: {
    opacity: 0.9,
  },
  middleContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '80%',
  },
  buttomContainer: {
    height: '10%',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTextContainer:{
    display: "flex",
    flexDirection: "row"
  },
  buttomText: {
    fontSize: 20,
    color: '#747474',
    opacity: 0.5,
    fontFamily: 'Inter-Regular',
  },
  bottomTmText:{
    color: "#747474",
    marginTop:8,
    fontSize:8
  },
  LogoContainer: {
    padding: 10,
    marginVertical: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContaioner: {
    marginVertical: 10,
    width: '100%',
    paddingLeft: 36,
    paddingRight: 36,
    color: 'black',
  },
  textInputContaionerOne: {
    marginVertical: 10,
    width: '100%',
    paddingLeft: 36,
    paddingRight: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: '100%',
    fontSize: 20,
    color: '#878787',
    borderRadius: 6,
    borderColor: "#FFE8CC",
  },
  textInputOne: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: '80%',
    fontSize: 20,
    color: '#878787',
    borderRadius: 6,
    borderColor: "#FFE8CC",
  },
  textInputTwo: {
    backgroundColor: '#ffffff',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: 'black',
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: 'Inter-SemiBold',
    color: '#EAAA5E',
    marginVertical: 10,
    textAlign: "center",
    fontWeight: '800',
  },
  troubleText: {
    display: 'none',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#4514e3',
  },
  rowTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 36,
    paddingRight: 36,
  },
  checkBoxContainer: {
    flexDirection: 'row',
  },
  forgetText: {
    fontSize: 18,
    marginTop: 3,
    color: '#DF7161',
    fontFamily: 'Inter-SemiBold',
  },
  remberText: {
    marginTop: 3,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  submitButtonContainer: {
    backgroundColor: '#E18519',
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 36,
    marginRight: 36,
    borderRadius: 6,
  },
  submitButton: {
    marginVertical: 10,
    color: 'white',
    //margin: 10,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    fontWeight: "700",
  },
});