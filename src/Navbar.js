import React from "react";
import { View } from "react-native";
import NavigationBar from 'react-native-navbar';


export default function Navbar() {
    return (
      <View style={styles.container}>
      <NavigationBar 
        title={titleConfig}
        
      />
    </View>
    )

    
}

const styles = {
  container: {
    flex: 1,
  },
};



const titleConfig = {
  title: 'Rental Mobil Kece',

  
};

