import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import {NativeBaseProvider, Button, Icon} from 'native-base';
import {SliderBox} from 'react-native-image-slider-box';

export default function ImageSlider() {
  const images = [
  "https://cdn.discordapp.com/attachments/959754697160417323/959755073955713024/IMG_20220201_155511_763.jpg",
  ];

  return (
    <NativeBaseProvider>
      <View>
        <SliderBox images={images} autoplay={true} circleLoop={true} />
      </View>
    </NativeBaseProvider>
  );
}