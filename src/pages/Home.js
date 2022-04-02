import React, {useEffect} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  Image,
  Alert,
  BackHandler,
  Text,
} from 'react-native';

import ImageSlider from '../components/ImageSlider';

export default function Home() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit', 'Are you sure you want to exit?', [
        {
          text: 'NO',
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

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>
            Selamat Datang di Universitas Esa Unggul
          </Text>
          <Text style={{color: 'black'}}>
            Program Studi Teknik Informatika - Fakultas Ilmu Komputer
          </Text>
        </View>
        <ImageSlider />
        <View>
          <Text style={{color: 'black'}}>Nama Saya Rifky Ardiansyah</Text>
          <Text style={{color: 'black'}}>Nama Saya 20180801357</Text>
          <Text style={{color: 'black'}}>Hobby Saya bermain badminton</Text>
          <Text style={{color: 'black'}}>Pekerjaan saya sebagai Backend Developer</Text>
          <Text style={{color: 'black'}}>Status saya belum menikah</Text>
        </View>
      </ScrollView>
    </View>
  );
}
