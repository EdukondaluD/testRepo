import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const FirstPage = () => {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(false);
  const [img6, setImg6] = useState(false);

  function state6(){
    setTimeout(() => {
      setImg6(false)
    }, 300);
  }

  function state5(){
    setTimeout(() => {
      state6();
      setImg5(false)
      setImg6(true)
    }, 300);
  }

  function state4(){
    setTimeout(() => {
      state5();
      setImg4(false)
      setImg5(true)
      
    }, 300);
  }
  
  function state3(){
    setTimeout(() => {
      state4();
      setImg3(false)
      setImg4(true)
      
    }, 300);
  }

  function state2(){
    setTimeout(() => {
      state3();
      setImg2(false)
      setImg3(true)
      
    }, 300);
  }
  
  useState(()=> {
    setImg1(true)
    setTimeout(() => {
      state2();
      setImg1(false)
      setImg2(true)
      
    }, 1000);
  }, [])
  

  let img_1 = '../../assets/images/image-icon-1.png';
  let img_2 = '../../assets/images/image-icon-2.png';
  let img_3 = '../../assets/images/image-icon-3.png';
  let img_4 = '../../assets/images/image-icon-4.png';
  let img_5 = '../../assets/images/image-icon-5.png';
  let img_6 = '../../assets/images/image-icon-6.png';

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {img1 && <Image style={styles.stretch} source={require(img_1)} />}
        {img2 && <Image style={styles.stretch} source={require(img_2)} />}
        {img3 && <Image style={styles.stretch} source={require(img_3)} />}
        {img4 && <Image style={styles.stretch} source={require(img_4)} />}
        {img5 && <Image style={styles.stretch} source={require(img_5)} />}
        {img6 && <Image style={styles.stretch} source={require(img_5)} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFAF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    //marginTop: 180,
    height: '28%',
    width: '33%',
  },
  stretch: {
    height: '100%',
    width: '100%',
  },
});
export default FirstPage;
