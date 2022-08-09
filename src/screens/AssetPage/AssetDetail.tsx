/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
// import Chart from '../../Component/Chart/Chart';
import {ECharts} from 'react-native-echarts-wrapper';

function AssetDetail() {
  const [loader, setLoader] = useState(false);
  const option = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Current', 'Juice in Liters'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      // feature: {
      //   saveAsImage: {}
      // }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['10:00AM', '10:30AM', '11:00AM', '11:30AM', '12:00PM'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Current',
        type: 'line',
        stack: 'Total',
        data: [12, 8, 9, 3, 9, 13],
      },
      {
        name: 'Juice in Liters',
        type: 'line',
        stack: 'Total',
        data: [5, 13, 2, 15, 9, 13],
      },
    ],
  };

  useState(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.assetContainer}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginVertical: 15,
          paddingHorizontal: 2,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              style={styles.tinyLogoOne}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.assetText}>Asset Detail</Text>
        </View>

        <TouchableOpacity
          style={{borderRadius: 5, paddingHorizontal: 10, padding: 5}}>
          {/* <Text style={{fontSize:15,color:'#000', fontWeight:'500'}}></Text> */}
          {/* <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/logout.png')}
          /> */}
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          width: '100%',
          overflow: 'hidden',
          paddingHorizontal: 20,
          marginBottom: 25,
        }}>
        <View style={styles.imgStatusContainer}>
          <>
            {loader ? (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                }}>
                <ActivityIndicator size="large" />
              </View>
            ) : (
              <ECharts option={option} />
            )}
          </>
        </View>
        <View style={styles.cardDetails}>
          {loader ? (
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <>
              <View style={styles.row}>
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                  }}>
                  <Text style={styles.textHeader}>Asset ID</Text>
                  <Text style={styles.textHeader}> : </Text>
                </View>
                <View style={{width: '50%'}}>
                  <Text style={styles.textValues}>IM298_NOI_SAR</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View
                  style={{
                    width: '50%',
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textHeader}>Asset Name</Text>
                  <Text style={styles.textHeader}> : </Text>
                </View>
                <View style={{width: '50%'}}>
                  <Text style={styles.textValues}>Juicer</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View
                  style={{
                    width: '50%',
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textHeader}>Asset Status</Text>
                  <Text style={styles.textHeader}> : </Text>
                </View>
                <View style={{width: '50%'}}>
                  <Text style={styles.textValues}>Online</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View
                  style={{
                    width: '50%',
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textHeader}>Capacity</Text>
                  <Text style={styles.textHeader}> : </Text>
                </View>
                <View style={{width: '50%'}}>
                  <Text style={styles.textValues}>18 liters</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View
                  style={{
                    width: '50%',
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textHeader}>Utilized</Text>
                  <Text style={styles.textHeader}> : </Text>
                </View>
                <View style={{width: '50%'}}>
                  <Text style={styles.textValues}>15 liters</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View
                  style={{
                    width: '50%',
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textHeader}>Remaining</Text>
                  <Text style={styles.textHeader}> : </Text>
                </View>
                <View style={{width: '50%'}}>
                  <Text style={styles.textValues}>03 liters</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View
                  style={{
                    width: '50%',
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textHeader}>Location</Text>
                  <Text style={styles.textHeader}> : </Text>
                </View>
                <View style={{width: '50%'}}>
                  <Text style={styles.textValuesLocation}>
                    <Image
                      style={styles.tinyLogoLocation}
                      source={require('../../assets/images/maps-and-flags.png')}
                    />
                    <Text style={styles.location}> Adyar</Text>
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AssetDetail;

const styles = StyleSheet.create({
  location: {
    fontSize: 18,
    color: '#000',
  },
  assetContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    //paddingHorizontal: 15,
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
    color: '#000',
    fontSize: 20,
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
    justifyContent: 'center',
    shadowColor: 'red',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    textShadowRadius: 3,
    elevation: 10,
  },
  cardDetails: {
    height: 300,
    padding: 16,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: 'red',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    textShadowRadius: 3,
    elevation: 10,
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
    marginRight: 5,
  },
  tinyLogoOne: {
    height: 28,
    width: 28,
    marginTop: 1,
  },
  tinyLogoLocation: {
    height: 20,
    width: 20,
  },
});
