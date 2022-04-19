import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  Image,
  Alert,
  BackHandler,
  TextInput,
  Text,
} from 'react-native';


import ImageSlider from '../components/ImageSlider';

export default function Home() {
  const [massa, setMassa] = useState(0);
  const [result, setResult] = useState(null)

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
        <View style={{marginTop: 10}}>
          <TextInput
            style={{height: 40, color:"white", backgroundColor: "black"}}
            placeholder="Type here to convert kilogram to another unit"
            onChangeText={e => setMassa(e)}
            value={massa}
            keyboardType="numeric"
          />
          <Text style={{color:"black", marginBottom: 18}}>{massa} Kilogram = {massa * 35.274} Ons</Text>
          <Text style={{color:"black", marginBottom: 18}}>{massa} Kilogram = {massa * 2.205} Pons</Text>
          <Text style={{color:"black", marginBottom: 18}}>{massa} Kilogram = {massa * 6.35} Stone</Text>
          <Text style={{color:"black", marginBottom: 18}}>{massa} Kilogram = {massa * 907} Ton Pendek</Text>
          <Text style={{color:"black", marginBottom: 18}}>{massa} Kilogram = {massa * 1016} Ton Panjang</Text>
          <Text style={{color:"black", marginBottom: 18}}>{massa} Kilogram = {massa * 35274} Miligram</Text>
          <Text style={{color:"black", marginBottom: 18}}>{massa} Kilogram = {massa / 1000} Ton Metrik</Text>
        </View>
      </ScrollView>
    </View>
  );
}
