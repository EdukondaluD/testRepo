/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  BackHandler,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
// import Chart from '../../Component/Chart/Chart';
import {ECharts} from 'react-native-echarts-wrapper';
import AssetDetail from './AssetDetail';

function AssetPage({ChangeState}) {
  const [assetDetailStatus, setStatus] = useState(false);
  const [loader, setLoader] = useState(false);

  // const changeAssetDetail = () => {
  //   setStatus(!assetDetailStatus);
  // }

  const exitCall = () => {
    Alert.alert('Logout', 'Are you sure you want to logout ?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => ChangeState()},
    ]);
  }

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit !', 'Are you sure you want to close ?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.assetContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={assetDetailStatus}
        onRequestClose={() => {
          setStatus(!assetDetailStatus);
        }}>
        <AssetDetail />
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginVertical: 20,
          paddingHorizontal: 2,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.assetText}>All Assets</Text>
        <Pressable onPress={() => exitCall()}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/logout.png')}
          />
        </Pressable>
      </View>
      {loader ? (
        <View style={{height:'100%', width:'100%', justifyContent:'center'}}>
          <ActivityIndicator size="large" />
        </View>
        
      ) : (
        <ScrollView style={{width: '100%', marginBottom: 20}}>
          <TouchableOpacity
            onPress={() => setStatus(!assetDetailStatus)}
            style={{
              width: '100%',
              paddingHorizontal: 16,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 15,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: '#F0C28C',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                IM298_NOI_SAR
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    marginHorizontal: 10,
                    marginVertical: 2,
                  }}
                  source={require('../../assets/images/Active-icon.png')}
                />
                <Text
                  style={{color: '#01A560', fontSize: 16, fontWeight: '600'}}>
                  Active
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAAA5E',
                backgroundColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{padding: 10}}>
                <Image
                  style={{height: 100, width: 70}}
                  source={require('../../assets/images/image-icon-3.png')}
                />
              </View>
              <View style={{padding: 10, marginVertical: 20}}>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Utilized :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    15 L
                  </Text>
                </Text>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Remaining :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    3L/18L
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: '#fff',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 26,
                    width: 26,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  source={require('../../assets/images/maps-and-flags.png')}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text style={{fontSize: 15, color: '#000'}}>
                    Anna Nagar,Chennai
                  </Text>
                  <Text style={{fontSize: 12, color: '#000'}}>
                    Updated 2 min ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setStatus(!assetDetailStatus)}
            style={{
              width: '100%',
              paddingHorizontal: 16,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 15,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: '#F0C28C',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                IMTGDG_JSP_AMR
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    marginHorizontal: 10,
                    marginVertical: 2,
                  }}
                  source={require('../../assets/images/In-active-icon.png')}
                />
                <Text
                  style={{color: '#808080', fontSize: 16, fontWeight: '600'}}>
                  In-Active
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAAA5E',
                backgroundColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{padding: 10}}>
                <Image
                  style={{height: 100, width: 70}}
                  source={require('../../assets/images/image-icon-2.png')}
                />
              </View>
              <View style={{padding: 10, marginVertical: 20}}>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Utilized :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    15 L
                  </Text>
                </Text>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Remaining :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    3L/18L
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: '#fff',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 26,
                    width: 26,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  source={require('../../assets/images/maps-and-flags.png')}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text style={{fontSize: 15, color: '#000'}}>
                    Anna Nagar,Chennai
                  </Text>
                  <Text style={{fontSize: 12, color: '#000'}}>
                    Updated 2 min ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setStatus(!assetDetailStatus)}
            style={{
              width: '100%',
              paddingHorizontal: 16,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 15,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: '#F0C28C',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                IMTGDG_JSP_AMR
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    marginHorizontal: 10,
                    marginVertical: 2,
                  }}
                  source={require('../../assets/images/In-active-icon.png')}
                />
                <Text
                  style={{color: '#808080', fontSize: 16, fontWeight: '600'}}>
                  In-Active
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAAA5E',
                backgroundColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{padding: 10}}>
                <Image
                  style={{height: 100, width: 70}}
                  source={require('../../assets/images/image-icon-1.png')}
                />
              </View>
              <View style={{padding: 10, marginVertical: 20}}>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Utilized :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    15 L
                  </Text>
                </Text>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Remaining :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    3L/18L
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: '#fff',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 26,
                    width: 26,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  source={require('../../assets/images/maps-and-flags.png')}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text style={{fontSize: 15, color: '#000'}}>
                    Anna Nagar,Chennai
                  </Text>
                  <Text style={{fontSize: 12, color: '#000'}}>
                    Updated 2 min ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setStatus(!assetDetailStatus)}
            style={{
              width: '100%',
              paddingHorizontal: 16,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 15,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: '#F0C28C',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                IM298_NOI_SAR
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    marginHorizontal: 10,
                    marginVertical: 2,
                  }}
                  source={require('../../assets/images/Active-icon.png')}
                />
                <Text
                  style={{color: '#01A560', fontSize: 16, fontWeight: '600'}}>
                  Active
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAAA5E',
                backgroundColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{padding: 10}}>
                <Image
                  style={{height: 100, width: 70}}
                  source={require('../../assets/images/image-icon-4.png')}
                />
              </View>
              <View style={{padding: 10, marginVertical: 20}}>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Utilized :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    15 L
                  </Text>
                </Text>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Remaining :{' '}
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                    3L/18L
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: '#fff',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{
                    height: 26,
                    width: 26,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  source={require('../../assets/images/maps-and-flags.png')}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text style={{fontSize: 15, color: '#000'}}>
                    Anna Nagar,Chennai
                  </Text>
                  <Text style={{fontSize: 12, color: '#000'}}>
                    Updated 2 min ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default AssetPage;

const styles = StyleSheet.create({
  location: {
    fontSize: 18,
    color: '#000',
  },
  assetContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#FFEDDB',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 2,
    justifyContent: 'space-between',
  },
  assetText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '700',
    //textAlign: 'center',
    //marginVertical: 20,
  },
  imgStatusContainer: {
    height: 300,
    marginVertical: 15,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#000',
    shadowColor: 'red',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    textShadowRadius: 3,
    elevation: 10,
  },
  cardDetails: {
    //height: 300,
    padding: 16,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#fff',
  },
  textHeader: {
    fontSize: 19,
    color: '#000',
  },
  textValues: {
    fontSize: 19,
    color: '#3e4042',
  },
  textValuesLocation: {},
  tinyLogo: {
    height: 23,
    width: 23,
    marginTop: 8,
    marginRight: 10,
  },
  tinyLogoLocation: {
    height: 20,
    width: 20,
  },
});
